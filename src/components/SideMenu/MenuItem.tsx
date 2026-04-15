import { memo, useRef } from 'react';
import { Tag } from '../Tag';
import { Badge } from '../Badge';

import { useKeyPath, useSideMenuContext } from './contexts';

import type { SideMenuItemNode, SideMenuItemRenderProps } from './types';
import { Item as StyledItem, LeftCluster, RightCluster, WrapperIcon } from './styles';
import { Label } from './Label';

function findUniqueIds(currentOpenIds: Set<string>, nextOpenIds: string[]) {
  const firstArraySet = currentOpenIds;
  const elementsNotInFirst = nextOpenIds.filter((item) => {
    return !firstArraySet.has(item);
  });
  return elementsNotInFirst;
}

export const Item = memo(
  ({
    id,
    label,
    selected,
    onClick,
    level,
    labelType,
    icon,
    badge,
    tag,
  }: Omit<SideMenuItemRenderProps, 'dimension' | 'type' | 'expanded'>) => {
    const containerRef = useRef(null);

    const ctx = useSideMenuContext();
    const ancestorGroupIds = useKeyPath();

    const visibleRightCluster = Boolean(tag || badge);

    const handleClick = () => {
      if (ctx.filterActive) {
        // если в ходе фильтрации выбрана опция, то следует раскрыть все группы, в которые она входит
        const needToOpenIds = findUniqueIds(ctx.openGroupIds, ancestorGroupIds);
        if (needToOpenIds) {
          ctx.onOpenGroups(needToOpenIds);
        }
      }
      ctx.onSelectItem(id);

      if (onClick) onClick();
    };

    return (
      <StyledItem
        ref={containerRef}
        role="menuitem"
        data-item={id}
        $selected={selected}
        $dimension={ctx.dimension}
        $indentLevel={level}
        $hasIcons={ctx.hasIcons}
        onClick={handleClick}
      >
        <LeftCluster $dimension={ctx.dimension}>
          {ctx.hasIcons && level < 1 && <WrapperIcon $dimension={ctx.dimension}>{icon}</WrapperIcon>}
          <Label
            dimension={ctx.dimension}
            label={label}
            labelType={labelType}
            level={level}
            multiline={ctx.multiline}
            visibleTooltip={ctx.visibleTooltip}
            tooltipCssMixin={ctx.tooltipCssMixin}
            filterActive={ctx.filterActive}
            searchQuery={ctx.searchQuery}
            searchFormat={ctx.searchFormat}
            container={containerRef.current}
          />
        </LeftCluster>
        {visibleRightCluster && (
          <RightCluster $dimension={ctx.dimension}>
            {badge}
            {tag}
          </RightCluster>
        )}
      </StyledItem>
    );
  },
);

export const SideMenuItem = memo(
  ({ id, render, label, badge: badgeProps, icon, tag: tagProps, labelType, type = 'item' }: SideMenuItemNode) => {
    const ctx = useSideMenuContext();
    const ancestorGroupIds = useKeyPath();

    const level = ancestorGroupIds.length;
    const selected = ctx.selectedItemId === id;

    const badge = badgeProps ? <Badge {...badgeProps} dimension={ctx.dimension === 'l' ? 'm' : 's'} /> : undefined;
    const tag = tagProps ? <Tag {...tagProps} as="span" dimension={ctx.dimension === 'l' ? 'm' : 's'} /> : undefined;

    const handleClick = () => {
      if (ctx.filterActive) {
        // если в ходе фильтрации выбрана опция, то следует раскрыть все группы, в которые она входит
        const needToOpenIds = findUniqueIds(ctx.openGroupIds, ancestorGroupIds);
        if (needToOpenIds) {
          ctx.onOpenGroups(needToOpenIds);
        }
      }
      ctx.onSelectItem(id);
    };

    return render ? (
      render({
        id,
        label,
        selected,
        level,
        icon,
        badge,
        tag,
        dimension: ctx.dimension,
        labelType,
        type,
        onClick: handleClick,
      })
    ) : (
      <Item
        label={label}
        id={id}
        level={level}
        selected={selected}
        badge={badge}
        tag={tag}
        icon={icon}
        labelType={labelType}
      />
    );
  },
);
