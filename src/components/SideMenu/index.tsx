import { useState, useMemo, useCallback, Fragment, forwardRef, useEffect } from 'react';

import { TextInput, defaultFilterItem } from '#src/components/input';
import { InputIconButton } from '#src/components/InputIconButton';
import { Scrollbars } from '#src/components/Scrollbar';
import { ReactComponent as SearchOutlineSVG } from '@admiral-ds/icons/build/system/SearchOutline.svg';

import type { SideMenuProps, SideMenuNode, SearchFormat } from './types';
import { BottomPanelContent, TopPanelContent, SideMenuWrapper, ScrollableContent, ScrollWrapper } from './styles';
import { filterMenuTree } from './utils/filterTree';
import { SideMenuItem } from './MenuItem';
import { SideMenuGroup } from './MenuGroup';
import { SideMenuDivider } from './MenuDivider';

import { PathContext, SideMenuContext, type SideMenuContextValue } from './contexts';

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

export * from './Sider';
export * from './MenuItem';
export * from './MenuGroup';
export * from './types';
export const SideMenu = forwardRef<HTMLDivElement, SideMenuProps>(
  (
    {
      items,
      selectedItem,
      defaultSelectedItem = null,
      openMenus,
      defaultOpenMenus = [],
      onSelectItem,
      onOpenMenusChange,
      search = false,
      searchFormat = 'wholly' as SearchFormat,
      onFilterItem = defaultFilterItem,
      dimension = 'm',
      renderBottomPanel,
      renderTopPanel,
      gap = 4,
      tooltipCssMixin,
      multiline = false,
      visibleTooltip = true,
      ...props
    },
    ref,
  ) => {
    const isRenderTopPanel = !!renderTopPanel;
    const isRenderBottomPanel = !!renderBottomPanel;

    const selectedState = useControlledState<string | null>({
      value: selectedItem,
      defaultValue: defaultSelectedItem,
    });
    const openState = useControlledState<string[]>({
      value: openMenus,
      defaultValue: defaultOpenMenus,
    });

    const hasIcons = items.some((elem) => elem.type !== 'divider' && elem.icon);

    const openGroupIds = useMemo(() => new Set(openState.state ?? []), [openState.state]);

    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setSearching] = useState(false);
    const [scrollableNode, setScrollableNode] = useState<HTMLDivElement | null>(null);

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

    /** Автодоскролл до выбранной опции */
    useEffect(() => {
      if (!selectedState.state) {
        return;
      }

      if (scrollableNode) {
        const element = scrollableNode.querySelector(`[data-item="${selectedState.state}"]`);
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
      }
    }, [selectedState.state, scrollableNode]);

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
      [openGroupIds, openState, onOpenMenusChange],
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
        filterActive,
        searchQuery,
        searchFormat,
        onSelectItem: handleSelectItem,
        onToggleGroup: handleToggleGroup,
        dimension,
        hasIcons,
        onOpenGroups: handleOpenGroups,
        tooltipCssMixin,
        multiline,
        visibleTooltip,
      }),
      [
        selectedState.state,
        openGroupIds,
        filterActive,
        searchQuery,
        searchFormat,
        handleSelectItem,
        handleToggleGroup,
        handleOpenGroups,
        tooltipCssMixin,
        dimension,
        hasIcons,
        multiline,
        visibleTooltip,
      ],
    );

    const getItem = (node: SideMenuNode) => {
      if (node.type === 'divider') {
        return <SideMenuDivider {...node} />;
      }

      if (node.type === 'group') {
        return <SideMenuGroup {...node} />;
      }

      return <SideMenuItem {...node} type="item" />;
    };

    return (
      <SideMenuWrapper ref={ref} $dimension={dimension} $gap={gap} {...props}>
        {search && (
          <TopPanelContent $dimension={dimension}>
            <TextInput
              value={searchQuery}
              onChange={handleInputChange}
              onFocus={handleInputFocus}
              dimension={dimension === 'l' ? 'm' : 's'}
              placeholder="Search..."
              iconsAfter={<InputIconButton aria-hidden icon={SearchOutlineSVG} />}
              displayClearIcon
            />
          </TopPanelContent>
        )}

        <SideMenuContext.Provider value={ctxValue}>
          <PathContext.Provider value={[]}>
            {isRenderTopPanel && <TopPanelContent $dimension={dimension}>{renderTopPanel()}</TopPanelContent>}
            <ScrollWrapper>
              <ScrollableContent ref={(node) => setScrollableNode(node)} $gap={gap} $dimension={dimension}>
                {(filterActive ? filteredItems : items).map((node, index) => (
                  <Fragment key={node.type === 'divider' ? `divider_${index}` : node.id}>{getItem(node)}</Fragment>
                ))}
              </ScrollableContent>
              <Scrollbars contentNode={scrollableNode} />
            </ScrollWrapper>

            {isRenderBottomPanel && (
              <BottomPanelContent $dimension={dimension}>{renderBottomPanel()}</BottomPanelContent>
            )}
          </PathContext.Provider>
        </SideMenuContext.Provider>
      </SideMenuWrapper>
    );
  },
);
SideMenu.displayName = 'SideMenu';
