import { useState, useMemo, useEffect, useCallback, Fragment, forwardRef } from 'react';
import { defaultFilterItem, type TextInput } from '#src/components/input';
import { InputIconButton } from '#src/components/InputIconButton';
import { Scrollbars } from '#src/components/Scrollbar';
import { ReactComponent as SearchOutlineSVG } from '@admiral-ds/icons/build/system/SearchOutline.svg';

import type { SideMenuProps, SideMenuNode } from './types';
import { FixedPanel, SideMenuWrapper, ScrollableContent, ScrollWrapper, SearchInput } from './style';
import { useControlledState, filterMenuTree, areSetsEqual } from './utils';
import { MenuItem } from './MenuItem';
import { MenuGroup } from './MenuGroup';
import { MenuDivider } from './MenuDivider';
import { PathContext, SideMenuContext, type SideMenuContextValue } from './contexts';

const nothing = () => ({});

export * from './types';
export const SideMenu = forwardRef<HTMLElement, SideMenuProps>(
  (
    {
      items,
      selectedItem,
      defaultSelectedItem = null,
      openGroups,
      defaultOpenGroups = [],
      onSelectItem,
      onOpenGroupsChange,
      search = false,
      searchFormat = 'wholly',
      onFilterItem = defaultFilterItem,
      dimension = 'm',
      renderBottomPanel,
      renderTopPanel,
      gap = 4,
      tooltipCssMixin,
      multilineView = false,
      visibleTooltip = true,
      inputPropsConfig = nothing,
      ...props
    },
    ref,
  ) => {
    const selectedState = useControlledState<string | null>({
      value: selectedItem,
      defaultValue: defaultSelectedItem,
    });
    const openState = useControlledState<string[]>({
      value: openGroups,
      defaultValue: defaultOpenGroups,
    });
    /** Путь ids групп от корня до выбранного пункта  */
    const [selectedItemPath, setSelectedItemPath] = useState<Array<string>>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [isSearching, setSearching] = useState(false);
    const [scrollableNode, setScrollableNode] = useState<HTMLUListElement | null>(null);

    const isRenderTopPanel = !!renderTopPanel;
    const isRenderBottomPanel = !!renderBottomPanel;

    const hasIcons = items.some((elem) => elem.type !== 'divider' && elem.icon);
    const openGroupIds = useMemo(() => new Set(openState.state ?? []), [openState.state]);

    const searchActive = search && searchQuery.trim().length > 0 && isSearching;
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
        if (element) element.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
      }
    }, [selectedState.state, scrollableNode]);

    const handleSelectItem = useCallback(
      (id: string, path: Array<string>) => {
        selectedState.setState(id);
        setSelectedItemPath(path);
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
        onOpenGroupsChange?.(next);
      },
      [openGroupIds, openState.setState, onOpenGroupsChange],
    );

    const handleOpenGroups = useCallback(
      (openIds: string[]) => {
        const next = new Set([...openGroupIds, ...openIds]);
        if (!areSetsEqual(next, openGroupIds)) {
          openState.setState([...next]);
          onOpenGroupsChange?.([...next]);
        }
      },
      [openGroupIds, openState.setState, onOpenGroupsChange],
    );

    const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchQuery(e.target.value);
    }, []);

    const handleInputFocus = useCallback(() => {
      setSearching(true);
    }, []);

    const getItem = (node: SideMenuNode) => {
      if (node.type === 'divider') {
        return <MenuDivider {...node} />;
      }

      if (node.type === 'group') {
        return <MenuGroup {...node} />;
      }

      return <MenuItem {...node} type="item" />;
    };

    const ctxValue: SideMenuContextValue = useMemo(
      () => ({
        selectedItemId: selectedState.state,
        selectedItemPath,
        openGroupIds,
        searchActive,
        searchQuery,
        searchFormat,
        dimension,
        hasIcons,
        tooltipCssMixin,
        multilineView,
        visibleTooltip,
        gap,
        onSelectItem: handleSelectItem,
        onToggleGroup: handleToggleGroup,
        onOpenGroups: handleOpenGroups,
      }),
      [
        selectedState.state,
        selectedItemPath,
        openGroupIds,
        searchActive,
        searchQuery,
        searchFormat,
        dimension,
        hasIcons,
        tooltipCssMixin,
        multilineView,
        visibleTooltip,
        gap,
        handleSelectItem,
        handleToggleGroup,
        handleOpenGroups,
      ],
    );

    const searchInputProps = {
      value: searchQuery,
      onChange: handleInputChange,
      onFocus: handleInputFocus,
      dimension: dimension === 'l' ? 'm' : 's',
      iconsAfter: <InputIconButton aria-hidden icon={SearchOutlineSVG} />,
      displayClearIcon: true,
    } satisfies React.ComponentProps<typeof TextInput>;

    return (
      <SideMenuWrapper role="navigation" ref={ref} $dimension={dimension} $gap={gap} {...props}>
        {isRenderTopPanel && <FixedPanel $dimension={dimension}>{renderTopPanel({ dimension })}</FixedPanel>}
        {search && (
          <FixedPanel $dimension={dimension}>
            <SearchInput {...searchInputProps} {...inputPropsConfig(searchInputProps)} />
          </FixedPanel>
        )}
        <SideMenuContext.Provider value={ctxValue}>
          <PathContext.Provider value={[]}>
            <ScrollWrapper>
              <ScrollableContent role="menu" ref={(node) => setScrollableNode(node)} $gap={gap} $dimension={dimension}>
                {(searchActive ? filteredItems : items).map((node, index) => (
                  <Fragment key={node.type === 'divider' ? `divider_${index}` : node.id}>{getItem(node)}</Fragment>
                ))}
              </ScrollableContent>
              <Scrollbars contentNode={scrollableNode} />
            </ScrollWrapper>
          </PathContext.Provider>
        </SideMenuContext.Provider>
        {isRenderBottomPanel && <FixedPanel $dimension={dimension}>{renderBottomPanel({ dimension })}</FixedPanel>}
      </SideMenuWrapper>
    );
  },
);
SideMenu.displayName = 'SideMenu';
