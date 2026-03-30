import { memo } from 'react';

import type { SideMenuItemNode } from './types';
import { useKeyPath, useSideMenuContext } from './contexts';
import { ItemButton, LeftCluster, RightCluster, LabelText } from './styles';
import { HighlightedLabel } from './HighlightedLabel';

function findUniqueIds(currentOpenIds: Set<string>, nextOpenIds: string[]) {
  const firstArraySet = currentOpenIds;
  const elementsNotInFirst = nextOpenIds.filter((item) => {
    return !firstArraySet.has(item);
  });
  return elementsNotInFirst;
}

export const SideMenuItem = memo(({ id, render, label, badge, icon, tag }: SideMenuItemNode) => {
  const ctx = useSideMenuContext();
  const ancestorGroupIds = useKeyPath();
  const level = ancestorGroupIds.length + 1;

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

  const content = render ? (
    render({
      id,
      label: label,
      icon: icon,
      badge: badge,
      tag: tag,
      selected,
      level,
    })
  ) : (
    <>
      <LeftCluster>
        {icon}
        <LabelText>
          {ctx.filterActive ? (
            <HighlightedLabel text={label} searchText={ctx.searchQuery} highlightFormat={ctx.searchFormat} />
          ) : (
            label
          )}
        </LabelText>
      </LeftCluster>
      <RightCluster>
        {tag}
        {badge}
      </RightCluster>
    </>
  );

  return (
    <ItemButton type="button" $selected={selected} style={{ paddingLeft: level * ctx.indentPx }} onClick={handleClick}>
      {content}
    </ItemButton>
  );
});
