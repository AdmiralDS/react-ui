import { memo, useMemo, useRef } from 'react';

import {
  Chevron,
  GroupButton,
  LabelText,
  LeftCluster,
  RightCluster,
  WrapperIcon,
  WrapperLabelTooltip,
} from '#src/components/SideMenu/styles';
import { SideMenuItem } from '#src/components/SideMenu/MenuItem';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';
import { SideMenuDivider } from './MenuDivider';
import { Tag } from '../Tag';
import { Badge } from '../Badge';
import { HighlightedLabel } from './HighlightedLabel';

import type { SideMenuGroupNode } from '#src/components/SideMenu/types';

import { PathContext, useKeyPath, useSideMenuContext } from './contexts';
import { checkTooltipVisible } from './utils/checkTooltipVisible';
import { Tooltip } from '../Tooltip';

export const SideMenuGroup = memo(({ id, label, children, tag, badge, icon, typeLabel }: SideMenuGroupNode) => {
  const ctx = useSideMenuContext();
  const ancestorGroupIds = useKeyPath();

  const textRef = useRef(null);
  const containerRef = useRef(null);

  const level = ancestorGroupIds.length;
  const isExpanded = ctx.filterActive ? true : ctx.openGroupIds.has(id);

  const tooltipVisible =
    ctx.showTooltip && !ctx.multiline ? checkTooltipVisible(containerRef.current, textRef.current) : false;

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
      <GroupButton
        ref={containerRef}
        type="button"
        id={id}
        onClick={handleToggle}
        $indentLevel={level}
        $dimension={ctx.dimension}
        $selected={selected}
        $hasIcons={ctx.hasIcons}
      >
        <LeftCluster $dimension={ctx.dimension}>
          {ctx.hasIcons && level < 1 && <WrapperIcon $dimension={ctx.dimension}>{icon}</WrapperIcon>}
          <LabelText
            ref={textRef}
            $dimension={ctx.dimension}
            $header={typeLabel === 'header' && level < 1}
            $multiline={ctx.multiline}
          >
            {ctx.filterActive ? (
              <HighlightedLabel text={label} searchText={ctx.searchQuery} highlightFormat={ctx.searchFormat} />
            ) : (
              label
            )}
          </LabelText>
        </LeftCluster>
        <RightCluster $dimension={ctx.dimension}>
          {badge && <Badge {...badge} dimension={ctx.dimension === 'l' ? 'm' : 's'}></Badge>}
          {tag && <Tag {...tag} as="span" dimension={ctx.dimension === 'l' ? 'm' : 's'}></Tag>}
          <Chevron $dimension={ctx.dimension} $open={isExpanded}>
            <ChevronRightOutline />
          </Chevron>
        </RightCluster>
      </GroupButton>
      {tooltipVisible && (
        <Tooltip
          targetElement={containerRef.current}
          renderContent={() => (
            <WrapperLabelTooltip $tooltipCssMixin={ctx.tooltipCssMixin}>{label}</WrapperLabelTooltip>
          )}
        />
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
});
