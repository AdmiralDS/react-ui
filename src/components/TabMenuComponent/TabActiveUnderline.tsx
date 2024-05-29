import styled from 'styled-components';

import { UNDERLINE_HEIGHT } from '#src/components/TabMenuComponent/constants';

export const TabActiveUnderline = styled.div<{ $left: number | string; $width: number | string }>`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: ${(p) => p.$left};
  width: ${(p) => p.$width};
  display: flex;
  background-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  height: ${UNDERLINE_HEIGHT}px;
  transition: all 0.2s ease-out;
`;
