import { memo, useRef } from 'react';

import { useKeyPath, useSideMenuContext } from './contexts';
import { HighlightedLabel } from './HighlightedLabel';
import { ItemButton, LeftCluster, RightCluster, LabelText, WrapperIcon, WrapperLabelTooltip } from './styles';
import { Tag } from '../Tag';
import { Badge } from '../Badge';

import type { SideMenuItemNode } from './types';
import { Tooltip } from '../Tooltip';
import { checkTooltipVisible } from './utils/checkTooltipVisible';

function findUniqueIds(currentOpenIds: Set<string>, nextOpenIds: string[]) {
  const firstArraySet = currentOpenIds;
  const elementsNotInFirst = nextOpenIds.filter((item) => {
    return !firstArraySet.has(item);
  });
  return elementsNotInFirst;
}

export const SideMenuItem = memo(({ id, renderItem, label, badge, icon, tag, labelType }: SideMenuItemNode) => {
  const ctx = useSideMenuContext();
  const ancestorGroupIds = useKeyPath();

  const textRef = useRef(null);
  const containerRef = useRef(null);

  const level = ancestorGroupIds.length;
  const selected = ctx.selectedItemId === id;

  const visibleRightCluster = Boolean(tag || badge);
  const tooltipVisible =
    ctx.showTooltip && !ctx.multiline ? checkTooltipVisible(containerRef.current, textRef.current) : false;

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

  const content = renderItem ? (
    renderItem({
      id,
      label,
      selected,
      level,
      icon,
      badge,
      tag,
      dimension: ctx.dimension,
      labelType,
    })
  ) : (
    <>
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
          {badge && <Badge {...badge} dimension={ctx.dimension === 'l' ? 'm' : 's'} />}
          {tag && <Tag {...tag} as="span" dimension={ctx.dimension === 'l' ? 'm' : 's'} />}
        </RightCluster>
      )}
    </>
  );

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
        {content}
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
});
