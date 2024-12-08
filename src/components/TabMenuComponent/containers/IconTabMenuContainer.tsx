import styled from 'styled-components';

import { SELECTOR_HEIGHT } from '#src/components/TabMenuComponent/constants';

export const IconTabMenuScrollingContainer = styled.div<{
  $showUnderline?: boolean;
  $floatValue: string;
  $leftValue: number | string;
  $translateXValue: number | string;
}>`
  position: relative;
  left: ${(p) => p.$leftValue};
  box-sizing: border-box;
  height: fit-content;
  display: flex;
  box-shadow: inset 0 -${SELECTOR_HEIGHT}px 0 0
    ${(p) =>
      p.$showUnderline
        ? `var(--admiral-color-Neutral_Neutral20, ${p.theme.color['Neutral/Neutral 20']})`
        : 'transparent'};
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

export const IconTabMenuWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 0 16px;
`;
IconTabMenuWrapper.displayName = 'IconTabMenuWrapper';
