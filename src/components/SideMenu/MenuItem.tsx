import { memo, useCallback } from 'react';

import { useIdPath, useSideMenuContext } from './contexts';
import type { SideMenuItemNode } from './types';
import { SideMenuItem, type SideMenuItemProps } from './SideMenuItem';
import { ItemWrapper } from './styles';

export const MenuItem = memo(({ id, type = 'item', render, ...props }: SideMenuItemNode) => {
  const ctx = useSideMenuContext();
  const ancestorGroupIds = useIdPath();

  const level = ancestorGroupIds.length;
  const selected = ctx.selectedItemId === id;

  const handleClick = useCallback(() => {
    if (ctx.searchActive) {
      // если в ходе фильтрации выбрана опция, то следует раскрыть все группы, в которые она входит
      ctx.onOpenGroups(ancestorGroupIds);
    }
    ctx.onSelectItem(id, ancestorGroupIds);
  }, [ctx.searchActive, ctx.onOpenGroups, ctx.onSelectItem, id, ancestorGroupIds]);

  const itemProps: SideMenuItemProps = {
    type,
    level,
    selected,
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
    <ItemWrapper role="menuitem" data-item={id} onClick={handleClick}>
      {render ? render({ id, ...itemProps }) : <SideMenuItem {...itemProps} />}
    </ItemWrapper>
  );
});
