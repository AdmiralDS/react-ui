import styled from 'styled-components';

import type { Dimension } from '#src/components/TabMenu/constants';
import { UNDERLINE_HEIGHT } from '#src/components/TabMenuComponent/constants';

export const HorizontalTabMenuContainer = styled.div<{ $underline?: boolean; $dimension?: Dimension }>`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 -${UNDERLINE_HEIGHT}px 0 0 ${(p) => (p.$underline ? `var(--admiral-color-Neutral_Neutral20, ${p.theme.color['Neutral/Neutral 20']})` : 'transparent')};
  overflow: hidden;
`;
