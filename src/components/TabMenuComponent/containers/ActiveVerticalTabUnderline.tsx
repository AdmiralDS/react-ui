import styled from 'styled-components';

import { UNDERLINE_HEIGHT } from '#src/components/TabMenuComponent/constants';
import type { VerticalUnderlinePosition } from '#src/components/TabMenuComponent/types';

export const ActiveVerticalTabUnderline = styled.div<{
  $top: number | string;
  $height: number | string;
  $transition?: boolean;
  $underlinePosition?: VerticalUnderlinePosition;
}>`
  box-sizing: border-box;
  position: absolute;
  ${(p) => (p.$underlinePosition === 'left' ? 'left: 0;' : 'right: 0;')};
  top: ${(p) => p.$top};
  height: ${(p) => p.$height};
  background-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  width: ${UNDERLINE_HEIGHT}px;
  transition: ${(p) => (p.$transition ? 'all 0.2s ease-out' : 'unset')};
`;
