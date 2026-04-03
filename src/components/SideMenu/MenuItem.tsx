import { memo } from 'react';

import { ItemButton, LeftCluster, RightCluster, LabelText, WrapperIcon } from './styles';
import { Tag } from '../Tag';
import { Badge } from '../Badge';

import { useKeyPath, useSideMenuContext } from './contexts';

import type { SideMenuItemNode } from './types';

export const SideMenuItem = memo(({ id, renderItem, label, badge, icon, tag }: SideMenuItemNode) => {
  const ctx = useSideMenuContext();
  const ancestorGroupIds = useKeyPath();
  const level = ancestorGroupIds.length;

  const selected = ctx.selectedItemId === id;

  const handleClick = () => {
    ctx.onSelectItem(id);
  };

  const content = renderItem ? (
    renderItem({
      id,
      label,
      icon,
      badge,
      tag,
      selected,
      level,
    })
  ) : (
    <>
      <LeftCluster $dimension={ctx.dimension}>
        {ctx.hasIcons && <WrapperIcon $dimension={ctx.dimension}>{icon}</WrapperIcon>}
        <LabelText>{label}</LabelText>
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
      $indent={level * ctx.indentPx}
    >
      {content}
    </ItemButton>
  );
});
