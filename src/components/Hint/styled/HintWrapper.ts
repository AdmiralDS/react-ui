import styled, { css } from 'styled-components';

import { typography } from '../../Typography';

export type Dimension = 's' | 'm' | 'l';

const HINT_PADDING = '16px';
const HINT_BORDER_RADIUS = '4px';
const HINT_WIDTH_S = '280px';
const HINT_WIDTH_M = '384px';
const HINT_WIDTH_L = '488px';

const sizes = css<{ dimension: Dimension; isMobile: boolean }>`
  width: ${({ dimension }) => {
    if (dimension === 's') return HINT_WIDTH_S;
    if (dimension === 'm') return HINT_WIDTH_M;
    return HINT_WIDTH_L;
  }};
`;

export const HintWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  z-index: ${({ theme }) => theme.zIndex.hint};
  padding: 8px;
  box-sizing: border-box;
`;

export const HintDialog = styled.div<{
  dimension: Dimension;
  isMobile: boolean;
}>`
  display: flex;
  justify-content: space-between;
  padding: ${HINT_PADDING};

  ${({ isMobile }) => !isMobile && sizes}
  background-color: ${({ theme }) => theme.color.background.primary};
  ${typography['Additional/S']}
  ${({ theme }) => theme.shadow.ClickableDefault}
  border-radius: ${HINT_BORDER_RADIUS};
  box-sizing: border-box;
`;
