import { css } from 'styled-components';

export type Dimension = 'm' | 's';
export type LabelPosition = 'left' | 'right';

const TOGGLE_WIDTH_M = '36px';
const TOGGLE_WIDTH_S = '28px';
const TOGGLE_HEIGHT_M = '20px';
const TOGGLE_HEIGHT_S = '16px';

export const SLIDER_SIZE_M = '16px';
export const SLIDER_SIZE_S = '12px';

export const HOVER_SIZE_M = '36px';
export const HOVER_SIZE_S = '32px';

export const sizes = css<{ $dimension: Dimension }>`
  width: ${({ $dimension }) => ($dimension === 's' ? TOGGLE_WIDTH_S : TOGGLE_WIDTH_M)};
  height: ${({ $dimension }) => ($dimension === 's' ? TOGGLE_HEIGHT_S : TOGGLE_HEIGHT_M)};
`;

export const sliderSizes = css<{ $dimension: Dimension }>`
  width: ${({ $dimension }) => ($dimension === 's' ? SLIDER_SIZE_S : SLIDER_SIZE_M)};
  height: ${({ $dimension }) => ($dimension === 's' ? SLIDER_SIZE_S : SLIDER_SIZE_M)};
  border-radius: ${({ $dimension }) => ($dimension === 's' ? SLIDER_SIZE_S : SLIDER_SIZE_M)};
`;

export const hoverSizes = css<{ $dimension: Dimension }>`
  width: ${({ $dimension }) => ($dimension === 's' ? HOVER_SIZE_S : HOVER_SIZE_M)};
  height: ${({ $dimension }) => ($dimension === 's' ? HOVER_SIZE_S : HOVER_SIZE_M)};
  border-radius: ${({ $dimension }) => ($dimension === 's' ? HOVER_SIZE_S : HOVER_SIZE_M)};
`;
