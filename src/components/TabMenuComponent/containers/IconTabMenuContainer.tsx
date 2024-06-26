import styled from 'styled-components';

import { UNDERLINE_HEIGHT } from '#src/components/TabMenuComponent/constants';

export const IconTabMenuScrollingContainer = styled.div<{
  $underline?: boolean;
  $floatValue: string;
  $leftValue: number | string;
  $translateXValue: number | string;
}>`
  position: relative;
  left: ${(p) => p.$leftValue};
  box-sizing: border-box;
  height: fit-content;
  display: flex;
  box-shadow: inset 0 -${UNDERLINE_HEIGHT}px 0 0 ${(p) => (p.$underline ? `var(--admiral-color-Neutral_Neutral20, ${p.theme.color['Neutral/Neutral 20']})` : 'transparent')};
  transition: transform 300ms ease-in-out;
  float: ${(p) => p.$floatValue};
  ${(p) => (p.$translateXValue ? `transform: translateX(${p.$translateXValue});` : '')};
`;
IconTabMenuScrollingContainer.displayName = 'IconTabMenuScrollingContainer';

export const IconTabMenuScrollingContainerWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  height: fit-content;
  overflow: hidden;
`;
IconTabMenuScrollingContainerWrapper.displayName = 'IconTabMenuScrollingContainerWrapper';

export const IconTabMenuWrapper = styled.div<{ $underline?: boolean }>`
  position: relative;
  box-sizing: border-box;
  padding: 0 16px;
`;
IconTabMenuWrapper.displayName = 'IconTabMenuWrapper';
