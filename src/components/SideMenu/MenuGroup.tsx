import { memo, useMemo, useRef } from 'react';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';
import { Tag } from '#src/components/Tag';
import { Badge } from '#src/components/Badge';

import { Chevron, Item, LeftCluster, RightCluster, WrapperIcon, Group as StyledGroup } from './styles';
import { SideMenuItem } from './MenuItem';
import { SideMenuDivider } from './MenuDivider';
import { Label } from './Label';
import { HighlightedLabel } from './HighlightedLabel';
import type { SideMenuGroupNode, SideMenuNodeRenderProps } from './types';
import { PathContext, useKeyPath, useSideMenuContext } from './contexts';

export const Group = memo(
  ({
    label,
    id,
    onClick,
    level,
    selected,
    badge: badgeProps,
    tag: tagProps,
    icon,
    expanded,
    labelType,
  }: Omit<SideMenuNodeRenderProps, 'dimension' | 'type'>) => {
    const containerRef = useRef(null);

    const ctx = useSideMenuContext();

    const handleToggle = () => {
      ctx.onToggleGroup(id);

      if (onClick) onClick();
    };

    const badge = badgeProps ? <Badge {...badgeProps} dimension={ctx.dimension === 'l' ? 'm' : 's'} /> : undefined;
    const tag = tagProps ? <Tag {...tagProps} as="span" dimension={ctx.dimension === 'l' ? 'm' : 's'} /> : undefined;

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
            isHeader={labelType === 'header' && level < 1}
            multilineView={ctx.multilineView}
            visibleTooltip={ctx.visibleTooltip}
            tooltipCssMixin={ctx.tooltipCssMixin}
            container={containerRef.current}
          >
            {ctx.searchActive ? (
              <HighlightedLabel
                text={label}
                searchText={ctx.searchQuery}
                highlightFormat={ctx.searchFormat}
                multilineView={ctx.multilineView}
              />
            ) : (
              label
            )}
          </Label>
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
  ({ id, render, label, children, tag, badge, icon, labelType, type = 'group' }: SideMenuGroupNode) => {
    const ctx = useSideMenuContext();
    const ancestorGroupIds = useKeyPath();

    const level = ancestorGroupIds.length;
    const expanded = ctx.searchActive ? true : ctx.openGroupIds.has(id);

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
