import styled from 'styled-components';

import { SELECTOR_HEIGHT } from '#src/components/TabMenuComponent/constants';
import type { VerticalUnderlinePosition } from '#src/components/TabMenuComponent/types';

export const VerticalTabMenuContainer = styled.div<{
  $showUnderline?: boolean;
  $underlinePosition?: VerticalUnderlinePosition;
}>`
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: center;
  box-sizing: border-box;
  width: fit-content;
  height: 100%;
  box-shadow: inset ${(p) => (p.$underlinePosition === 'left' ? SELECTOR_HEIGHT : -SELECTOR_HEIGHT)}px 0 0 0
    ${(p) =>
      p.$showUnderline
        ? `var(--admiral-color-Neutral_Neutral20, ${p.theme.color['Neutral/Neutral 20']})`
        : 'transparent'};
`;
VerticalTabMenuContainer.displayName = 'VerticalTabMenuContainer';
