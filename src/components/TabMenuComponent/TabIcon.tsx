import styled from 'styled-components';

import { typography } from '#src/components/Typography';

import type { TabProps } from '#src/components/TabMenuComponent/types';
import { TAB_ICON_ICON_SIZE, TAB_MENU_ICON_HEIGHT } from '#src/components/TabMenuComponent/constants';
import { forwardRef } from 'react';

const Tab = styled.button<{ $selected?: boolean }>`
  box-sizing: border-box;
  padding: 0 6px 8px 6px;
  display: flex;
  flex-direction: column;
  height: ${TAB_MENU_ICON_HEIGHT}px;
  justify-content: center;
  align-items: center;
  background: transparent;
  appearance: none;
  border: none;
  user-select: none;
  cursor: pointer;
  ${typography['Body/Body 2 Long']}
  color: ${(p) =>
    p.$selected
      ? `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`
      : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};

  & svg {
    display: inline-block;
    flex: 1 0 auto;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
    }
    width: ${TAB_ICON_ICON_SIZE}px;
    height: ${TAB_ICON_ICON_SIZE}px;
    margin: 0;
  }

  &:hover:not(:disabled) {
    background: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  }
  &:active:not(:disabled) {
    background: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
  }
  &:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    cursor: not-allowed;
    & *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;
export const TabIcon = forwardRef<HTMLButtonElement, TabProps>(
  ({ children, disabled, selected, ...props }: TabProps, ref) => {
    return (
      <Tab ref={ref} disabled={disabled} $selected={selected} {...props}>
        {children}
      </Tab>
    );
  },
);
