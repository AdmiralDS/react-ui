import styled from 'styled-components';

import { UNDERLINE_HEIGHT } from '#src/components/TabMenuComponent/constants';

export const TabMenuIconContainer = styled.div<{ $underline?: boolean }>`
  box-sizing: border-box;
  height: fit-content;
  display: flex;
  box-shadow: inset 0 -${UNDERLINE_HEIGHT}px 0 0 ${(p) => (p.$underline ? `var(--admiral-color-Neutral_Neutral20, ${p.theme.color['Neutral/Neutral 20']})` : 'transparent')};
`;
