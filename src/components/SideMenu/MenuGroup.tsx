import { memo, useMemo, useRef } from 'react';

import { Chevron, GroupButton, LeftCluster, RightCluster, WrapperIcon } from '#src/components/SideMenu/styles';
import { SideMenuItem } from '#src/components/SideMenu/MenuItem';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';
import { SideMenuDivider } from './MenuDivider';
import { Label } from './Label';
import { Tag } from '../Tag';
import { Badge } from '../Badge';

import type { SideMenuGroupNode } from '#src/components/SideMenu/types';

import { PathContext, useKeyPath, useSideMenuContext } from './contexts';

export const SideMenuGroup = memo(
  ({ id, render, label, children, tag, badge, icon, labelType, type }: SideMenuGroupNode) => {
    const ctx = useSideMenuContext();
    const ancestorGroupIds = useKeyPath();

    const containerRef = useRef(null);

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

    const handleToggle = () => {
      ctx.onToggleGroup(id);
    };

    const nextPath = useMemo(() => [...ancestorGroupIds, id], [ancestorGroupIds, id]);

    return (
      <>
        {render ? (
          render({
            id,
            label,
            selected,
            level,
            icon,
            badge,
            tag,
            dimension: ctx.dimension,
            labelType,
            type,
            onClick: handleToggle,
          })
        ) : (
          <>
            <GroupButton
              ref={containerRef}
              type="button"
              data-item={id}
              onClick={handleToggle}
              $indentLevel={level}
              $dimension={ctx.dimension}
              $selected={selected}
              $hasIcons={ctx.hasIcons}
            >
              <LeftCluster $dimension={ctx.dimension}>
                {ctx.hasIcons && level < 1 && <WrapperIcon $dimension={ctx.dimension}>{icon}</WrapperIcon>}
                <Label
                  dimension={ctx.dimension}
                  label={label}
                  labelType={labelType}
                  level={level}
                  multiline={ctx.multiline}
                  visibleTooltip={ctx.visibleTooltip}
                  tooltipCssMixin={ctx.tooltipCssMixin}
                  filterActive={ctx.filterActive}
                  searchQuery={ctx.searchQuery}
                  searchFormat={ctx.searchFormat}
                  container={containerRef.current}
                />
              </LeftCluster>
              <RightCluster $dimension={ctx.dimension}>
                {badge && <Badge {...badge} dimension={ctx.dimension === 'l' ? 'm' : 's'}></Badge>}
                {tag && <Tag {...tag} as="span" dimension={ctx.dimension === 'l' ? 'm' : 's'}></Tag>}
                <Chevron $dimension={ctx.dimension} $open={isExpanded}>
                  <ChevronRightOutline />
                </Chevron>
              </RightCluster>
            </GroupButton>
          </>
        )}

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
  },
);
