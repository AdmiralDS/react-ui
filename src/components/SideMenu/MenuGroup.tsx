import { memo, useMemo } from 'react';

import {
  Chevron,
  GroupButton,
  LabelText,
  LeftCluster,
  RightCluster,
  WrapperIcon,
} from '#src/components/SideMenu/styles';
import { SideMenuItem } from '#src/components/SideMenu/MenuItem';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';
import { SideMenuDivider } from './MenuDivider';
import { Tag } from '../Tag';
import { Badge } from '../Badge';

import type { SideMenuGroupNode } from '#src/components/SideMenu/types';

import { PathContext, useKeyPath, useSideMenuContext } from './contexts';

export const SideMenuGroup = memo(({ id, label, children, tag, badge, icon }: SideMenuGroupNode) => {
  const ctx = useSideMenuContext();
  const ancestorGroupIds = useKeyPath();

  const level = ancestorGroupIds.length;
  const isExpanded = ctx.filterActive ? true : ctx.openGroupIds.has(id);

  const findSelectedItem = (groupNode: SideMenuGroupNode['children']) => {
    return groupNode.some((item): boolean => {
      if (item.type === 'item') return ctx.selectedItemId === item.id;
      else if (item.type === 'group') return findSelectedItem(item.children);
      else return false;
    });
  };

  const selected = findSelectedItem(children) && !isExpanded;

  const handleClick = () => {
    ctx.onToggleGroup(id);
  };

  const nextPath = useMemo(() => [...ancestorGroupIds, id], [ancestorGroupIds, id]);

  return (
    <>
      <GroupButton
        type="button"
        onClick={handleClick}
        $indent={level * ctx.indentPx}
        $dimension={ctx.dimension}
        $selected={selected}
      >
        <LeftCluster $dimension={ctx.dimension}>
          {ctx.hasIcons && <WrapperIcon $dimension={ctx.dimension}>{icon}</WrapperIcon>}
          <LabelText>{label}</LabelText>
        </LeftCluster>
        <RightCluster>
          {badge && <Badge {...badge} dimension={ctx.dimension === 'l' ? 'm' : 's'}></Badge>}
          {tag && <Tag {...tag} as="span" dimension={ctx.dimension === 'l' ? 'm' : 's'}></Tag>}
          <Chevron $dimension={ctx.dimension} $open={isExpanded}>
            <ChevronRightOutline />
          </Chevron>
        </RightCluster>
      </GroupButton>

      {isExpanded && (
        <PathContext.Provider value={nextPath}>
          <div>
            {children.map((child, idx) => {
              if (child.type === 'divider') {
                return <SideMenuDivider key={`divider_${idx}`} {...child} />;
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
