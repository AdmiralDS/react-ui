import styled from 'styled-components';

const SELECTOR_WIDTH = 2;

export const ActiveVerticalSelector = styled.div<{
  $top: number;
  $height: number;
  $transition?: boolean;
}>`
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: ${(p) => p.$top}px;
  width: ${SELECTOR_WIDTH}px;
  height: ${(p) => p.$height}px;
  background-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
  transition: ${(p) => (p.$transition ? 'all 0.2s ease-out' : 'unset')};
`;
ActiveVerticalSelector.displayName = 'ActiveVerticalTabSelector';
