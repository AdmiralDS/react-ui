import styled from 'styled-components';

import { typography } from '#src/components/Typography';

import type { TabDimension } from '#src/components/TabMenuComponent/types';
import {
  BASE_TAB_HEIGHT_L,
  BASE_TAB_HEIGHT_M,
  HORIZONTAL_TAB_PADDING_L,
  HORIZONTAL_TAB_PADDING_M,
} from '#src/components/TabMenuComponent/constants';

export const BaseTab = styled.button<{ $selected?: boolean; $dimension: TabDimension; $width?: string | number }>`
  box-sizing: border-box;
  appearance: none;
  border: none;
  position: relative;
  display: inline-flex;
  gap: 8px;
  align-items: center;
  width: ${(p) => p.$width};
  height: ${({ $dimension }) => ($dimension === 'm' ? BASE_TAB_HEIGHT_M : BASE_TAB_HEIGHT_L)}px;
  padding: ${({ $dimension }) => ($dimension === 'm' ? HORIZONTAL_TAB_PADDING_M : HORIZONTAL_TAB_PADDING_L)};
  background: transparent;
  color: ${(p) =>
    p.$selected
      ? `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`
      : `var(--admiral-color-Neutral_Neutral50, ${p.theme.color['Neutral/Neutral 50']})`};
  ${({ $dimension }) => ($dimension === 'm' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  user-select: none;
  cursor: pointer;
  -webkit-tap-highlight-color: transparent;

  &:hover:not(:disabled) {
    background: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  }
  &:active:not(:disabled) {
    background: var(--admiral-color-Opacity_Press, ${(p) => p.theme.color['Opacity/Press']});
  }
  &:disabled {
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    cursor: not-allowed;
  }

  &:focus-visible {
    border-radius: 0;
    outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
    outline-offset: -2px;
  }
`;
BaseTab.displayName = 'BaseTab';
