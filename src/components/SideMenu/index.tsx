import { useState, useMemo, useCallback, Fragment } from 'react';
import { TextInput, defaultFilterItem } from '#src/components/input';
import { Divider } from '#src/components/Divider';
import { InputIconButton } from '#src/components/InputIconButton';
import { ReactComponent as SearchOutlineSVG } from '@admiral-ds/icons/build/system/SearchOutline.svg';

import { PathContext, SideMenuContext, type SideMenuContextValue } from './contexts';
import { MenuList, Wrapper } from './styles';
import type { SideMenuProps, SideMenuNode, SearchFormat } from './types';
import { filterMenuTree } from './utils/filterTree';
import { SideMenuItem } from './MenuItem';
import { SideMenuGroup } from './MenuGroup';

function useControlledState<T>(opts: { value?: T; defaultValue: T }) {
  const { value, defaultValue } = opts;
  const isControlled = value !== undefined;
  const [inner, setInner] = useState<T>(defaultValue);

  return {
    state: (isControlled ? value : inner) as T,
    setState: (next: T) => {
      if (!isControlled) setInner(next);
    },
  };
}

export type { SideMenuProps } from './types';
export const SideMenu = (props: SideMenuProps) => {
  const {
    items,
    selectedItem,
    defaultSelectedItem = null,
    openMenus,
    defaultOpenMenus = [],
    onSelectItem,
    onOpenMenusChange,
    search = false,
    indentPx = 24,
    searchFormat = 'wholly' as SearchFormat,
    onFilterItem = defaultFilterItem,
  } = props;
  const selectedState = useControlledState<string | null>({
    value: selectedItem,
    defaultValue: defaultSelectedItem,
  });
  const openState = useControlledState<string[]>({
    value: openMenus,
    defaultValue: defaultOpenMenus,
  });

  const openGroupIds = useMemo(() => new Set(openState.state ?? []), [openState.state]);

  const [searchQuery, setSearchQuery] = useState('');
  const [isSearching, setSearching] = useState(false);

  const filterActive = search && searchQuery.trim().length > 0 && isSearching;
  const filteredItems = useMemo(() => {
    const result = filterMenuTree(items, searchQuery, onFilterItem, searchFormat).nodes;

    // добавляем Divider между результатами поиска
    return result.reduce((nodes: SideMenuNode[], node: SideMenuNode, index: number) => {
      if (index > 0) {
        nodes.push({ type: 'divider' });
      }
      nodes.push(node);
      return nodes;
    }, []);
  }, [items, searchQuery, onFilterItem, searchFormat]);

  const handleSelectItem = useCallback(
    (id: string) => {
      selectedState.setState(id);
      onSelectItem?.(id);

      setSearching(false);
    },
    [onSelectItem, selectedState.setState],
  );

  const handleToggleGroup = useCallback(
    (groupId: string) => {
      const isOpen = openGroupIds.has(groupId);
      const next = isOpen ? [...openGroupIds].filter((id) => id !== groupId) : [...openGroupIds, groupId];

      openState.setState(next);
      onOpenMenusChange?.(next);
    },
    [openGroupIds, openState.setState, onOpenMenusChange],
  );

  const handleOpenGroups = useCallback(
    (openIds: string[]) => {
      const next = [...new Set([...openGroupIds, ...openIds])];
      openState.setState(next);
      onOpenMenusChange?.(next);
    },
    [openGroupIds, openState.setState, onOpenMenusChange],
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  const handleInputFocus = () => {
    setSearching(true);
  };

  const ctxValue: SideMenuContextValue = useMemo(
    () => ({
      selectedItemId: selectedState.state,
      openGroupIds,
      indentPx,
      filterActive,
      searchQuery,
      searchFormat,
      onSelectItem: handleSelectItem,
      onToggleGroup: handleToggleGroup,
      onOpenGroups: handleOpenGroups,
    }),
    [
      selectedState.state,
      openGroupIds,
      indentPx,
      filterActive,
      searchQuery,
      searchFormat,
      handleSelectItem,
      handleToggleGroup,
      handleOpenGroups,
    ],
  );

  const getItem = (node: SideMenuNode) => {
    if (node.type === 'divider') {
      return <Divider dimension="s" orientation="horizontal" />;
    }

    if (node.type === 'group') {
      return <SideMenuGroup {...node} />;
    }

    return <SideMenuItem {...node} />;
  };

  return (
    <Wrapper>
      {search && (
        <TextInput
          value={searchQuery}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          dimension={'m'}
          placeholder="Search..."
          iconsAfter={<InputIconButton aria-hidden icon={SearchOutlineSVG} />}
        />
      )}

      <SideMenuContext.Provider value={ctxValue}>
        <PathContext.Provider value={[]}>
          <MenuList>
            {(filterActive ? filteredItems : items).map((node, index) => (
              <Fragment key={node.type === 'divider' ? `divider_${index}` : node.id}>{getItem(node)}</Fragment>
            ))}
          </MenuList>
        </PathContext.Provider>
      </SideMenuContext.Provider>
    </Wrapper>
  );
};
SideMenu.displayName = 'SideMenu';
