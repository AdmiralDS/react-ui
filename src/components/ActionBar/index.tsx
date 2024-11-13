import { Fragment, useLayoutEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';

import type { ActionBarDimension, ActionBarItemProps, ActionBarProps } from '#src/components/ActionBar/types';
import {
  ACTION_BAR_ITEM_HEIGHT_L,
  ACTION_BAR_ITEM_HEIGHT_M,
  ACTION_BAR_ITEM_HEIGHT_S,
  ACTION_BAR_ITEM_HEIGHT_XL,
  DIVIDER_SIZE_M,
  DIVIDER_SIZE_S,
  FOCUS_ACTION_BAR_OVERFLOW_MENU_BORDER_OFFSET_L,
  FOCUS_ACTION_BAR_OVERFLOW_MENU_BORDER_OFFSET_M,
  FOCUS_ACTION_BAR_OVERFLOW_MENU_BORDER_OFFSET_S,
  FOCUS_ACTION_BAR_OVERFLOW_MENU_BORDER_OFFSET_XL,
} from '#src/components/ActionBar/constants';
import { OverflowMenu } from '#src/components/OverflowMenu';
import { ActionBarDivider } from '#src/components/ActionBar/ActionBarItems';
import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';
import { mediumGroupBorderRadius } from '#src/components/themes';

export * from './types';
export * from './ActionBarItems';

const getActionBarHeight = (dimension: ActionBarDimension) => {
  switch (dimension) {
    case 's':
      return ACTION_BAR_ITEM_HEIGHT_S;
    case 'm':
      return ACTION_BAR_ITEM_HEIGHT_M;
    case 'l':
      return ACTION_BAR_ITEM_HEIGHT_L;
    case 'xl':
    default:
      return ACTION_BAR_ITEM_HEIGHT_XL;
  }
};

const Wrapper = styled.div<{ $dimension: ActionBarDimension }>`
  box-sizing: border-box;
  height: ${({ $dimension }) => getActionBarHeight($dimension)}px;

  display: flex;
  align-items: center;
`;
const ActionBarOverflowMenuItem = styled.div<{ $dimension: ActionBarDimension }>`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $dimension }) => getActionBarHeight($dimension)}px;
  height: ${({ $dimension }) => getActionBarHeight($dimension)}px;
`;
const getFocusBorderOffset = ($dimension: ActionBarDimension) => {
  switch ($dimension) {
    case 's':
      return FOCUS_ACTION_BAR_OVERFLOW_MENU_BORDER_OFFSET_S;
    case 'm':
      return FOCUS_ACTION_BAR_OVERFLOW_MENU_BORDER_OFFSET_M;
    case 'l':
      return FOCUS_ACTION_BAR_OVERFLOW_MENU_BORDER_OFFSET_L;
    case 'xl':
    default:
      return FOCUS_ACTION_BAR_OVERFLOW_MENU_BORDER_OFFSET_XL;
  }
};

function getFocusBorderRadius(componentBorderRadius: string) {
  switch (componentBorderRadius) {
    case '0':
      return '0';
    case '2px':
      return '6px';
    case '6px':
      return '10px';
    case '8px':
      return '12px';
    case '10px':
      return '14px';
    case '4px':
    default:
      return '8px';
  }
}

const StyledOverflowMenu = styled(OverflowMenu)<{ $dimension: ActionBarDimension }>`
  &:focus-visible:not(:disabled) {
    outline: none;

    &:before {
      border: 2px solid var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
      border-radius: ${(p) => getFocusBorderRadius(mediumGroupBorderRadius(p.theme.shape))};
      content: '';
      display: block;
      position: absolute;
      width: ${({ $dimension }) => getActionBarHeight($dimension) + 2 * 2}px;
      height: ${({ $dimension }) => getActionBarHeight($dimension) + 2 * 2}px;
      top: -${(p) => getFocusBorderOffset(p.$dimension)}px;
      left: -${(p) => getFocusBorderOffset(p.$dimension)}px;
      right: -${(p) => getFocusBorderOffset(p.$dimension)}px;
      bottom: -${(p) => getFocusBorderOffset(p.$dimension)}px;
      pointer-events: none;
    }
  }
`;

export const ActionBar = ({
  dimension = 'xl',
  renderActionBarItem,
  renderDropMenuItem,
  items,
  itemIsDisabled,
  ...props
}: ActionBarProps) => {
  const renderItem = ({ itemId, withDivider }: ActionBarItemProps) => {
    return (
      <Fragment key={itemId}>
        {renderActionBarItem(itemId)}
        {withDivider && <ActionBarDivider key={`divider${itemId}`} dimension={dimension} />}
      </Fragment>
    );
  };

  const [containerWidth, setContainerWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => setContainerWidth(entry.contentRect.width || 0));
      });
      resizeObserver.observe(containerRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);
  const [visibleItems, setVisibleItems] = useState<ActionBarItemProps[]>([]);
  const [hiddenItems, setHiddenItems] = useState<ActionBarItemProps[]>([]);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const buttonWidth = getActionBarHeight(dimension);
      const dividerWidth = dimension === 's' ? DIVIDER_SIZE_S : DIVIDER_SIZE_M;

      const totalItemsWidth = items.reduce((acc, item) => {
        return acc + buttonWidth + (item.withDivider ? dividerWidth : 0);
      }, 0);
      const overflow = totalItemsWidth > containerWidth;

      let availableWidth = containerWidth - (overflow ? buttonWidth : 0);

      const newVisibleItems: ActionBarItemProps[] = [];
      const newHiddenItems: ActionBarItemProps[] = [];
      const addToVisible = (item: ActionBarItemProps) => newVisibleItems.push(item);
      const addToHidden = (item: ActionBarItemProps) => newHiddenItems.push(item);

      items.forEach((item) => {
        const itemWidth = buttonWidth + (item.withDivider ? dividerWidth : 0);
        if (availableWidth >= itemWidth) {
          addToVisible(item);
          availableWidth -= itemWidth;
        } else {
          addToHidden(item);
          availableWidth = 0;
        }
      });

      setVisibleItems(newVisibleItems);
      setHiddenItems(newHiddenItems);
    }
  }, [items, containerWidth, dimension]);
  const overflowMenuItems: MenuModelItemProps[] = useMemo(() => {
    if (hiddenItems.length === 0) return [];
    return hiddenItems.map(({ itemId }) => {
      return {
        id: itemId,
        render: renderDropMenuItem(itemId),
        disabled: itemIsDisabled(itemId),
      };
    });
  }, [hiddenItems, dimension]);

  return (
    <Wrapper {...props} ref={containerRef} $dimension={dimension}>
      {visibleItems.map((item) => renderItem(item))}
      {hiddenItems.length > 0 && (
        <ActionBarOverflowMenuItem $dimension={dimension}>
          <StyledOverflowMenu
            $dimension={dimension}
            items={overflowMenuItems}
            dimension={dimension === 'xl' ? 'l' : dimension}
          />
        </ActionBarOverflowMenuItem>
      )}
    </Wrapper>
  );
};
