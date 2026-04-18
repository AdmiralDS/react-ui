import { memo, useMemo, useCallback } from 'react';

import { Group, ItemWrapper } from './styles';
import { MenuItem } from './MenuItem';
import { MenuDivider } from './MenuDivider';
import { SideMenuItem, type SideMenuItemProps } from './SideMenuItem';
import type { SideMenuGroupNode } from './types';
import { PathContext, useIdPath, useSideMenuContext } from './contexts';

export const MenuGroup = memo(({ id, children, type = 'group', render, ...props }: SideMenuGroupNode) => {
  const ctx = useSideMenuContext();
  const ancestorGroupIds = useIdPath();

  const level = ancestorGroupIds.length;
  const expanded = ctx.searchActive ? true : ctx.openGroupIds.has(id);
  const selected = ctx.selectedItemPath.includes(id) && !expanded;

  const handleToggle = useCallback(() => {
    ctx.onToggleGroup(id);
  }, [ctx.onToggleGroup, id]);

  const nextPath = useMemo(() => [...ancestorGroupIds, id], [ancestorGroupIds, id]);

  const itemProps: SideMenuItemProps = {
    type,
    level,
    selected,
    expanded,
    dimension: ctx.dimension,
    hasIcons: ctx.hasIcons,
    multilineView: ctx.multilineView,
    visibleTooltip: ctx.visibleTooltip,
    tooltipCssMixin: ctx.tooltipCssMixin,
    searchActive: ctx.searchActive,
    searchQuery: ctx.searchQuery,
    searchFormat: ctx.searchFormat,
    ...props,
  };

  return (
    <>
      <ItemWrapper role="none" aria-expanded={expanded} data-item={id} onClick={handleToggle}>
        {render ? render({ id, ...itemProps }) : <SideMenuItem {...itemProps} />}
      </ItemWrapper>

      {expanded && (
        <PathContext.Provider value={nextPath}>
          <Group role="menu" $gap={ctx.gap}>
            {children.map((child, idx) => {
              if (child.type === 'divider') {
                return <MenuDivider key={`divider_${idx}`} {...child} />;
              }

              if (child.type === 'group') {
                return <MenuGroup key={child.id} {...child} />;
              }

              return <MenuItem key={child.id} {...child} />;
            })}
          </Group>
        </PathContext.Provider>
      )}
    </>
  );
});
