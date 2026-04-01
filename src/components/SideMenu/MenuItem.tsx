import { memo } from 'react';

import { useKeyPath, useSideMenuContext } from './contexts';
import { HighlightedLabel } from './HighlightedLabel';
import { ItemButton, LeftCluster, RightCluster, LabelText, WrapperIcon } from './styles';
import type { SideMenuItemNode } from './types';

function findUniqueIds(currentOpenIds: Set<string>, nextOpenIds: string[]) {
  const firstArraySet = currentOpenIds;
  const elementsNotInFirst = nextOpenIds.filter((item) => {
    return !firstArraySet.has(item);
  });
  return elementsNotInFirst;
}

export const SideMenuItem = memo(
  ({ id, renderItem, label, badge, icon, tag, dimension = 'm', header }: SideMenuItemNode) => {
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
        dimension,
        header,
      })
    ) : (
      <>
        <LeftCluster $dimension={dimension}>
          {level < 1 && <WrapperIcon $dimension={dimension}>{icon}</WrapperIcon>}
          <LabelText $dimension={dimension} $header={header && level < 1}>
            {ctx.filterActive ? (
              <HighlightedLabel text={label} searchText={ctx.searchQuery} highlightFormat={ctx.searchFormat} />
            ) : (
              label
            )}
          </LabelText>
        </LeftCluster>
        <RightCluster>
          {badge}
          {tag}
        </RightCluster>
      </>
    );

    return (
      <ItemButton
        type="button"
        $selected={selected}
        onClick={handleClick}
        $dimension={dimension}
        $indentLevel={level}
        $header={header && level < 1}
      >
        {content}
      </ItemButton>
    );
  },
);
