import { memo } from 'react';

import { useKeyPath, useSideMenuContext } from './contexts';
import { HighlightedLabel } from './HighlightedLabel';
import { ItemButton, LeftCluster, RightCluster, LabelText, WrapperIcon } from './styles';
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

export const SideMenuItem = memo(({ id, renderItem, label, badge, icon, tag, typeLabel }: SideMenuItemNode) => {
  const ctx = useSideMenuContext();
  const ancestorGroupIds = useKeyPath();
  const level = ancestorGroupIds.length;

  const selected = ctx.selectedItemId === id;

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
      typeLabel,
    })
  ) : (
    <>
      <LeftCluster $dimension={ctx.dimension}>
        {ctx.hasIcons && level < 1 && <WrapperIcon $dimension={ctx.dimension}>{icon}</WrapperIcon>}
        <LabelText $dimension={ctx.dimension} $header={typeLabel === 'header' && level < 1}>
          {ctx.filterActive ? (
            <HighlightedLabel text={label} searchText={ctx.searchQuery} highlightFormat={ctx.searchFormat} />
          ) : (
            label
          )}
        </LabelText>
      </LeftCluster>
      <RightCluster>
        {badge && <Badge {...badge} dimension={ctx.dimension === 'l' ? 'm' : 's'}></Badge>}
        {tag && <Tag {...tag} as="span" dimension={ctx.dimension === 'l' ? 'm' : 's'}></Tag>}
      </RightCluster>
    </>
  );

  return (
    <ItemButton
      type="button"
      $selected={selected}
      onClick={handleClick}
      $dimension={ctx.dimension}
      $indentLevel={level}
      $header={typeLabel === 'header' && level < 1}
    >
      {content}
    </ItemButton>
  );
});
