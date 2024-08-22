import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import type {
  ActionBarDimension,
  ActionBarDividerProps,
  ActionBarDropMenuItemProps,
} from '#src/components/ActionBar/types';
import {
  ACTION_BAR_DROP_MENU_ITEM_ICON_SIZE_M,
  ACTION_BAR_DROP_MENU_ITEM_ICON_SIZE_S,
  DIVIDER_SIZE_M,
  DIVIDER_SIZE_S,
} from '#src/components/ActionBar/constants';
import type { IconButtonProps } from '#src/components/IconButton';
import { IconButton } from '#src/components/IconButton';
import { TooltipHoc } from '#src/components/TooltipHOC';
import { MenuItem } from '#src/components/Menu/MenuItem';

const Divider = styled.div<{ $dimension?: ActionBarDimension }>`
  box-sizing: border-box;
  width: 1px;
  height: ${({ $dimension }) => ($dimension === 's' ? DIVIDER_SIZE_S : DIVIDER_SIZE_M)}px;
  background-color: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;
const Wrapper = styled.div<{ $dimension?: ActionBarDimension }>`
  box-sizing: border-box;
  width: ${({ $dimension }) => ($dimension === 's' ? DIVIDER_SIZE_S : DIVIDER_SIZE_M)}px;
  height: ${({ $dimension }) => ($dimension === 's' ? DIVIDER_SIZE_S : DIVIDER_SIZE_M)}px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ActionBarDivider = ({ dimension, ...props }: ActionBarDividerProps) => {
  return (
    <Wrapper {...props} $dimension={dimension}>
      <Divider $dimension={dimension} />
    </Wrapper>
  );
};

export const ActionBarItem = forwardRef<HTMLButtonElement, IconButtonProps>((props: IconButtonProps, ref) => {
  return <IconButton {...props} ref={ref} />;
});
export const ActionBarItemWithTooltip = TooltipHoc(ActionBarItem);

const actionBarDropMenuItemIconSize = css<{ $dimension: ActionBarDimension }>`
  width: ${(p) =>
    p.$dimension === 's' ? ACTION_BAR_DROP_MENU_ITEM_ICON_SIZE_S : ACTION_BAR_DROP_MENU_ITEM_ICON_SIZE_M}px;
  height: ${(p) =>
    p.$dimension === 's' ? ACTION_BAR_DROP_MENU_ITEM_ICON_SIZE_S : ACTION_BAR_DROP_MENU_ITEM_ICON_SIZE_M}px;
`;
export const ActionBarDropMenuItemWrapper = styled.div<{ $dimension: ActionBarDimension }>`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis;
  align-items: center;
  gap: 8px;

  & > svg {
    ${actionBarDropMenuItemIconSize}
  }
`;

export const ActionBarDropMenuItem = forwardRef<HTMLDivElement, ActionBarDropMenuItemProps>(
  ({ dimension = 'l', children, ...props }: ActionBarDropMenuItemProps, ref) => {
    return (
      <MenuItem {...props} ref={ref} dimension={dimension === 'xl' ? 'l' : dimension}>
        <ActionBarDropMenuItemWrapper $dimension={dimension}>{children}</ActionBarDropMenuItemWrapper>
      </MenuItem>
    );
  },
);
