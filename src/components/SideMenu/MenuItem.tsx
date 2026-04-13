import { memo, useRef } from 'react';

import { useKeyPath, useSideMenuContext } from './contexts';
import { Label } from './Label';
import { ItemButton, LeftCluster, RightCluster, WrapperIcon } from './styles';
import { Tag } from '../Tag';
import { Badge } from '../Badge';

import type { SideMenuItemNode } from './types';

function findUniqueIds(currentOpenIds: Set<string>, nextOpenIds: string[]) {
  const firstArraySet = currentOpenIds;
  const elementsNotInFirst = nextOpenIds.filter((item) => {
    return !firstArraySet.has(item);
  });
  return elementsNotInFirst;
}

export const SideMenuItem = memo(
  ({ id, render, label, badge, icon, tag, labelType, type = 'item' }: SideMenuItemNode) => {
    const ctx = useSideMenuContext();
    const ancestorGroupIds = useKeyPath();

    const containerRef = useRef(null);

    const level = ancestorGroupIds.length;
    const selected = ctx.selectedItemId === id;

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
    };

    const content = (
      <>
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
            {badge && <Badge {...badge} dimension={ctx.dimension === 'l' ? 'm' : 's'} />}
            {tag && <Tag {...tag} as="span" dimension={ctx.dimension === 'l' ? 'm' : 's'} />}
          </RightCluster>
        )}
      </>
    );

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
          {content}
        </ItemButton>
      </>
    );
  },
);
