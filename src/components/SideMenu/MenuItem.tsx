import { memo } from 'react';

import type { SideMenuItemNode } from './types';
import { useKeyPath, useSideMenuContext } from './contexts';
import { ItemButton, LeftCluster, RightCluster, LabelText } from './styles';

export const SideMenuItem = memo(
  ({ id, renderItem, disabled: propDisabled, label, badge, icon, tag }: SideMenuItemNode) => {
    const ctx = useSideMenuContext();
    const ancestorGroupIds = useKeyPath();
    const level = ancestorGroupIds.length + 1;

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
        <LeftCluster>
          {icon}
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
        $disabled={disabled}
        style={{ paddingLeft: level * ctx.indentPx }}
        onClick={handleClick}
        disabled={disabled}
      >
        {content}
      </ItemButton>
    );
  },
);
