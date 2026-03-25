import { useState, useMemo, useCallback, Fragment } from 'react';
import { TextInput } from '#src/components/input';
import { Divider } from '#src/components/Divider';

import { PathContext, SideMenuContext, type SideMenuContextValue } from './contexts';
import { MenuList, Wrapper } from './styles';
import type { SideMenuProps, SideMenuNode } from './types';
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
  const filterActive = search && searchQuery.trim().length > 0;
  const filteredTree = useMemo(() => filterMenuTree(items, searchQuery).nodes, [items, searchQuery]);

  const handleSelectItem = useCallback(
    (id: string) => {
      selectedState.setState(id);
      onSelectItem?.(id);
    },
    [onSelectItem, selectedState],
  );

  const handleToggleGroup = useCallback(
    (groupId: string) => {
      const isOpen = openGroupIds.has(groupId);
      const next = isOpen ? [...openGroupIds].filter((id) => id !== groupId) : [...openGroupIds, groupId];

      openState.setState(next);
      onOpenMenusChange?.(next);
    },
    [openGroupIds, openState, onOpenMenusChange],
  );

  const ctxValue: SideMenuContextValue = useMemo(
    () => ({
      selectedItemId: selectedState.state,
      openGroupIds,
      indentPx,
      onSelectItem: handleSelectItem,
      onToggleGroup: handleToggleGroup,
      filterActive,
    }),
    [selectedState.state, openGroupIds, indentPx, handleSelectItem, handleToggleGroup, filterActive],
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
        <TextInput value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." />
      )}

      <SideMenuContext.Provider value={ctxValue}>
        <PathContext.Provider value={[]}>
          <MenuList>
            {filteredTree.map((node, index) => (
              <Fragment key={node.type === 'divider' ? `divider_${index}` : node.id}>{getItem(node)}</Fragment>
            ))}
          </MenuList>
        </PathContext.Provider>
      </SideMenuContext.Provider>
    </Wrapper>
  );
};
SideMenu.displayName = 'SideMenu';
