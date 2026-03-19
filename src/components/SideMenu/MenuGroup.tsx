import { memo, useMemo } from 'react';
import type { SideMenuGroupNode } from '#src/components/SideMenu/types';
import { Chevron, GroupButton, LabelText } from '#src/components/SideMenu/styles';
import { PathContext, useKeyPath, useSideMenuContext } from './contexts';
import { Divider } from '#src/components/Divider';
import { SideMenuItem } from '#src/components/SideMenu/MenuItem';

export const SideMenuGroup = memo(({ id, disabled: propDisabled, title, children }: SideMenuGroupNode) => {
  const ctx = useSideMenuContext();
  const ancestorGroupIds = useKeyPath();
  const level = ancestorGroupIds.length + 1;

  const isExpanded = ctx.filterActive ? true : ctx.openGroupIds.has(id);
  const disabled = !!propDisabled;

  const handleToggle = () => {
    if (disabled) return;
    ctx.onToggleGroup(id);
  };

  const nextPath = useMemo(() => [...ancestorGroupIds, id], [ancestorGroupIds, id]);

  return (
    <>
      <GroupButton
        type="button"
        disabled={disabled}
        style={{ paddingLeft: level * ctx.indentPx }}
        onClick={handleToggle}
      >
        <Chevron $open={isExpanded}>›</Chevron>
        <LabelText>{title}</LabelText>
      </GroupButton>

      {isExpanded && (
        <PathContext.Provider value={nextPath}>
          <div>
            {children.map((child, idx) => {
              if (child.type === 'divider') {
                return <Divider key={`divider_${idx}`} dimension="s" orientation="horizontal" />;
              }

              if (child.type === 'group') {
                return <SideMenuGroup key={child.id} {...child} />;
              }

              return <SideMenuItem key={child.id} {...child} />;
            })}
          </div>
        </PathContext.Provider>
      )}
    </>
  );
});
