import styled, { css } from 'styled-components';

import { SELECTOR_HEIGHT } from '#src/components/TabMenuComponent/constants';
import type { TabAppearance, VerticalUnderlinePosition } from '#src/components/TabMenuComponent/types';

const cssAppearanceMixin = css<{ $appearance?: TabAppearance }>`
  background-color: ${(p) =>
    p.$appearance === 'secondary'
      ? `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`
      : `var(--admiral-color-Primary_Primary60Main, ${p.theme.color['Primary/Primary 60 Main']})`};
`;

export const ActiveVerticalTabSelector = styled.div<{
  $top: number | string;
  $height: number | string;
  $transition?: boolean;
  $underlinePosition?: VerticalUnderlinePosition;
  $appearance?: TabAppearance;
}>`
  box-sizing: border-box;
  position: absolute;
  ${(p) => (p.$underlinePosition === 'left' ? 'left: 0;' : 'right: 0;')};
  top: ${(p) => p.$top};
  height: ${(p) => p.$height};
  width: ${SELECTOR_HEIGHT}px;
  transition: ${(p) => (p.$transition ? 'all 0.2s ease-out' : 'unset')};

  ${cssAppearanceMixin};
`;
ActiveVerticalTabSelector.displayName = 'ActiveVerticalTabSelector';
