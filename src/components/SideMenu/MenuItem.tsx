import { memo, useRef } from 'react';

import { useKeyPath, useSideMenuContext } from './contexts';
import { HighlightedLabel } from './HighlightedLabel';
import { ItemButton, LeftCluster, RightCluster, LabelText, WrapperIcon, WrapperLabelTooltip } from './styles';
import { Tag } from '../Tag';
import { Badge } from '../Badge';

import type { SideMenuItemNode, SideMenuItemRenderProps } from './types';
import { Tooltip } from '../Tooltip';
import { checkTooltipVisible } from './utils/checkTooltipVisible';

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
    const textRef = useRef(null);
    const containerRef = useRef(null);

    const ctx = useSideMenuContext();
    const ancestorGroupIds = useKeyPath();

    const visibleRightCluster = Boolean(badge || tag);
    const tooltipVisible =
      ctx.visibleTooltip && !ctx.multiline ? checkTooltipVisible(containerRef.current, textRef.current) : false;

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
      <>
        <ItemButton
          ref={containerRef}
          type="button"
          data-item={id}
          $selected={selected}
          onClick={handleClick}
          $dimension={ctx.dimension}
          $indentLevel={level}
          $header={labelType === 'header' && level < 1}
          $hasIcons={ctx.hasIcons}
        >
          <LeftCluster $dimension={ctx.dimension}>
            {ctx.hasIcons && level < 1 && <WrapperIcon $dimension={ctx.dimension}>{icon}</WrapperIcon>}
            <LabelText
              ref={textRef}
              $dimension={ctx.dimension}
              $header={labelType === 'header' && level < 1}
              $multiline={ctx.multiline}
            >
              {ctx.filterActive ? (
                <HighlightedLabel text={label} searchText={ctx.searchQuery} highlightFormat={ctx.searchFormat} />
              ) : (
                label
              )}
            </LabelText>
          </LeftCluster>
          {visibleRightCluster && (
            <RightCluster $dimension={ctx.dimension}>
              {badge}
              {tag}
            </RightCluster>
          )}
        </ItemButton>
        {tooltipVisible && (
          <Tooltip
            targetElement={containerRef.current}
            renderContent={() => (
              <WrapperLabelTooltip $tooltipCssMixin={ctx.tooltipCssMixin}>{label}</WrapperLabelTooltip>
            )}
          />
        )}
      </>
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
