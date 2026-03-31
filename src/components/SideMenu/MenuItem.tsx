import { memo } from 'react';

import type { SideMenuItemNode } from './types';
import { useKeyPath, useSideMenuContext } from './contexts';
import { ItemButton, LeftCluster, RightCluster, LabelText, WrapperIcon } from './styles';

export const SideMenuItem = memo(
  ({ id, renderItem, label, badge, icon, tag, dimension = 'm', header }: SideMenuItemNode) => {
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
        <LeftCluster $dimension={dimension}>
          {level < 1 && <WrapperIcon $dimension={dimension}>{icon}</WrapperIcon>}
          <LabelText $dimension={dimension} $header={header && level < 1}>
            {label}
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
