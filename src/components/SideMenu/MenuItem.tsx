import { memo } from 'react';

import type { SideMenuItemNode } from './types';
import { useKeyPath, useSideMenuContext } from './contexts';
import { ItemButton, LeftCluster, RightCluster, LabelText, WrapperIcon } from './styles';

export const SideMenuItem = memo(
  ({ id, renderItem, disabled: propDisabled, label, badge, icon, tag, dimension = 'm' }: SideMenuItemNode) => {
    const ctx = useSideMenuContext();
    const ancestorGroupIds = useKeyPath();
    const level = ancestorGroupIds.length;

    const selected = ctx.selectedItemId === id;
    const disabled = !!propDisabled;

    const handleClick = () => {
      if (disabled) return;
      ctx.onSelectItem(id);
    };

    const content = renderItem ? (
      renderItem({
        id,
        label: label,
        icon: icon,
        badge: badge,
        tag: tag,
        disabled,
        selected,
        level,
      })
    ) : (
      <>
        <LeftCluster $dimension={dimension}>
          <WrapperIcon $dimension={dimension}>{icon}</WrapperIcon>
          <LabelText>{label}</LabelText>
        </LeftCluster>
        <RightCluster>
          {tag}
          {badge}
        </RightCluster>
      </>
    );

    return (
      <ItemButton
        type="button"
        $selected={selected}
        onClick={handleClick}
        disabled={disabled}
        $dimension={dimension}
        $indent={level * ctx.indentPx}
      >
        {content}
      </ItemButton>
    );
  },
);
