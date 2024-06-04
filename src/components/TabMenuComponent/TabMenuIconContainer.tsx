import styled from 'styled-components';

import { UNDERLINE_HEIGHT } from '#src/components/TabMenuComponent/constants';

export const TabMenuIconScrollingContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  height: fit-content;
  display: flex;
`;

export const TabMenuIconScrollingContainerWrapper = styled.div<{ $underline?: boolean }>`
  position: relative;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  height: fit-content;
  overflow: hidden;
  box-shadow: inset 0 -${UNDERLINE_HEIGHT}px 0 0 ${(p) => (p.$underline ? `var(--admiral-color-Neutral_Neutral20, ${p.theme.color['Neutral/Neutral 20']})` : 'transparent')};
`;

export const TabMenuIconWrapper = styled.div<{ $underline?: boolean }>`
  position: relative;
  box-sizing: border-box;
  padding: 0 16px;
`;
