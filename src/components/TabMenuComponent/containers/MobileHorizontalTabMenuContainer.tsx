import styled from 'styled-components';

import type { Dimension } from '#src/components/TabMenu/constants';
import {
  HORIZONTAL_TAB_HEIGHT_L,
  HORIZONTAL_TAB_HEIGHT_M,
  UNDERLINE_HEIGHT,
} from '#src/components/TabMenuComponent/constants';

export const MobileHorizontalTabMenuContainer = styled.div<{ $underline?: boolean; $dimension?: Dimension }>`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 -${UNDERLINE_HEIGHT}px 0 0 ${(p) => (p.$underline ? `var(--admiral-color-Neutral_Neutral20, ${p.theme.color['Neutral/Neutral 20']})` : 'transparent')};
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0 !important;
    height: 0 !important;
  }

  overflow: -moz-scrollbars-none;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;
