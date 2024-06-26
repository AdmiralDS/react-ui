import styled from 'styled-components';

import { SELECTOR_HEIGHT } from '#src/components/TabMenuComponent/constants';

export const ActiveHorizontalTabSelector = styled.div<{
  $left: number | string;
  $width: number | string;
  $transition?: boolean;
}>`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: ${(p) => p.$left};
  width: ${(p) => p.$width};
  background-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  height: ${SELECTOR_HEIGHT}px;
  transition: ${(p) => (p.$transition ? 'all 0.2s ease-out' : 'unset')};
`;
ActiveHorizontalTabSelector.displayName = 'ActiveHorizontalTabSelector';
