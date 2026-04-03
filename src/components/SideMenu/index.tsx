import { useState, useMemo, useCallback, Fragment, forwardRef, useEffect } from 'react';
import { useMediaQuery } from '../common/hooks/useMediaQuery';

import { TextInput } from '#src/components/input';
import { BottomPanelContent, StyledDrawer, StyledScrollContainer, TopPanelContent } from './styles';
import { filterMenuTree } from './utils/filterTree';
import { SideMenuItem } from './MenuItem';
import { SideMenuGroup } from './MenuGroup';
import { SideMenuDivider } from './MenuDivider';

import type { SideMenuProps, SideMenuNode } from './types';

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

export type { SideMenuProps } from './types';
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
      indentPx = 20,

      //container
      visibleBorder = false,
      onClose,
      isOpen,
      appearance = 'primary',
      backdrop = false,
      dimension = 'm',
      closeMediaQuery,
      renderBottomPanel,
      renderTopPanel,
      gap = 4,
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
        dimension,
        hasIcons,
      }),
      [selectedState.state, openGroupIds, indentPx, handleSelectItem, handleToggleGroup, filterActive],
    );

    const getItem = (node: SideMenuNode) => {
      if (node.type === 'divider') {
        return <SideMenuDivider {...node} />;
      }

      if (node.type === 'group') {
        return <SideMenuGroup {...node} />;
      }

      return <SideMenuItem {...node} />;
    };

    const maxWidth = closeMediaQuery ? useMediaQuery(`(max-width: ${closeMediaQuery})`) : null;

    useEffect(() => {
      if (maxWidth && isOpen && closeMediaQuery && onClose) {
        onClose();
      }
    }, [maxWidth]);

    return (
      <StyledDrawer
        ref={ref}
        $visibleBorder={visibleBorder}
        position="left"
        isOpen={isOpen}
        backdrop={backdrop}
        displayCloseIcon={false}
        $appearance={appearance}
        $dimension={dimension}
        {...props}
      >
        {search && (
          <TextInput value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search..." />
        )}

        <SideMenuContext.Provider value={ctxValue}>
          <PathContext.Provider value={[]}>
            {isRenderTopPanel && <TopPanelContent $dimension={dimension}>{renderTopPanel()}</TopPanelContent>}
            <StyledScrollContainer $dimension={dimension} $gap={gap}>
              {filteredTree.map((node, index) => (
                <Fragment key={node.type === 'divider' ? `divider_${index}` : node.id}>{getItem(node)}</Fragment>
              ))}
            </StyledScrollContainer>
            {isRenderBottomPanel && (
              <BottomPanelContent $dimension={dimension}>{renderBottomPanel()}</BottomPanelContent>
            )}
          </PathContext.Provider>
        </SideMenuContext.Provider>
      </StyledDrawer>
    );
  },
);
SideMenu.displayName = 'SideMenu';
