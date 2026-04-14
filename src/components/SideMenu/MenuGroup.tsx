import { memo, useMemo, useRef } from 'react';

import {
  Chevron,
  Item,
  LeftCluster,
  RightCluster,
  WrapperIcon,
  Group as StyledGroup,
} from '#src/components/SideMenu/styles';
import { SideMenuItem } from '#src/components/SideMenu/MenuItem';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';
import { SideMenuDivider } from './MenuDivider';
import { Label } from './Label';
import { Tag } from '../Tag';
import { Badge } from '../Badge';

import type { SideMenuGroupNode, SideMenuItemRenderProps } from '#src/components/SideMenu/types';

import { PathContext, useKeyPath, useSideMenuContext } from './contexts';

export const Group = memo(
  ({
    label,
    id,
    onClick,
    level,
    selected,
    badge,
    tag,
    icon,
    expanded,
    labelType,
  }: Omit<SideMenuItemRenderProps, 'dimension' | 'type'>) => {
    const containerRef = useRef(null);

    const ctx = useSideMenuContext();

    const handleToggle = () => {
      ctx.onToggleGroup(id);

      if (onClick) onClick();
    };

    return (
      <Item
        ref={containerRef}
        role="none"
        aria-expanded={expanded}
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
          {badge}
          {tag}
          <Chevron $dimension={ctx.dimension} $open={expanded}>
            <ChevronRightOutline />
          </Chevron>
        </RightCluster>
      </Item>
    );
  },
);

export const SideMenuGroup = memo(
  ({
    id,
    render,
    label,
    children,
    tag: tagProps,
    badge: badgeProps,
    icon,
    labelType,
    type = 'group',
  }: SideMenuGroupNode) => {
    const ctx = useSideMenuContext();
    const ancestorGroupIds = useKeyPath();

    const level = ancestorGroupIds.length;
    const expanded = ctx.filterActive ? true : ctx.openGroupIds.has(id);

    const badge = badgeProps ? <Badge {...badgeProps} dimension={ctx.dimension === 'l' ? 'm' : 's'} /> : undefined;
    const tag = tagProps ? <Tag {...tagProps} as="span" dimension={ctx.dimension === 'l' ? 'm' : 's'} /> : undefined;

    const findSelectedItem = (groupNode: SideMenuGroupNode['children']) => {
      return groupNode.some((item): boolean => {
        if (item.type === 'item') return ctx.selectedItemId === item.id;
        else if (item.type === 'group') return findSelectedItem(item.children);
        else return false;
      });
    };

    const selected = findSelectedItem(children) && !expanded;

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
            expanded,
          })
        ) : (
          <Group
            label={label}
            id={id}
            level={level}
            selected={selected}
            badge={badge}
            tag={tag}
            icon={icon}
            expanded={expanded}
            labelType={labelType}
          />
        )}

        {expanded && (
          <PathContext.Provider value={nextPath}>
            <StyledGroup role="menu" $gap={ctx.gap}>
              {children.map((child, idx) => {
                if (child.type === 'divider') {
                  return <SideMenuDivider key={`divider_${idx}`} {...child} />;
                }

                if (child.type === 'group') {
                  return <SideMenuGroup key={child.id} {...child} />;
                }

                return <SideMenuItem key={child.id} {...child} />;
              })}
            </StyledGroup>
          </PathContext.Provider>
        )}
      </>
    );
  },
);
