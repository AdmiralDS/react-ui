import styled from 'styled-components';

export const HorizontalCardTabMenuContainer = styled.div<{ $showUnderline?: boolean }>`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-wrap: nowrap;
  align-items: center;
  width: 100%;
  box-sizing: border-box;
  box-shadow: inset 0 -1px 0 0
    ${(p) =>
      p.$showUnderline
        ? `var(--admiral-color-Neutral_Neutral20, ${p.theme.color['Neutral/Neutral 20']})`
        : 'transparent'};
  overflow: hidden;
`;
HorizontalCardTabMenuContainer.displayName = 'HorizontalCardTabMenuContainer';

export const CardTabMenuHorizontalLeadingGapWrapper = styled.div<{ $horizontalPaddingSize: number }>`
  padding: 0 ${(p) => p.$horizontalPaddingSize}px;
  box-shadow: inset 0 -1px 0 0
    ${(p) => `var(--admiral-color-Neutral_Neutral20, ${p.theme.color['Neutral/Neutral 20']})`};
`;
CardTabMenuHorizontalLeadingGapWrapper.displayName = 'CardTabMenuHorizontalLeadingGapWrapper';
