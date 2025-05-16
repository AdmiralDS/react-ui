import styled, { css } from 'styled-components';

import { SELECTOR_HEIGHT } from '#src/components/TabMenuComponent/constants';
import type { TabAppearance } from '../types';

const cssAppearanceMixin = css<{ $appearance?: TabAppearance }>`
  background-color: ${(p) =>
    p.$appearance === 'secondary'
      ? `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`
      : `var(--admiral-color-Primary_Primary60Main, ${p.theme.color['Primary/Primary 60 Main']})`};
`;

export const ActiveHorizontalTabSelector = styled.div<{
  $left: number | string;
  $width: number | string;
  $transition?: boolean;
  $appearance?: TabAppearance;
}>`
  box-sizing: border-box;
  position: absolute;
  bottom: 0;
  left: ${(p) => p.$left};
  width: ${(p) => p.$width};
  height: ${SELECTOR_HEIGHT}px;
  transition: ${(p) => (p.$transition ? 'all 0.2s ease-out' : 'unset')};

  ${cssAppearanceMixin};
`;
ActiveHorizontalTabSelector.displayName = 'ActiveHorizontalTabSelector';
