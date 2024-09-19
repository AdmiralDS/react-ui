import { ReactComponent as ChevronDownOutline } from '@admiral-ds/icons/build/system/ChevronDownOutline.svg';
import styled from 'styled-components';

export type Appearance = 'primary' | 'white';

export const OpenStatusButton = styled(ChevronDownOutline)<{ $isOpen?: boolean; appearance?: Appearance }>`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${(p) => (p.$isOpen ? 180 : 0)}deg);
  & *[fill^='#'] {
    fill: ${({ appearance, theme }) =>
      appearance === 'white'
        ? `var(--admiral-color-Special_StaticWhite, ${theme.color['Special/Static White']})`
        : `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`};
  }

  &:hover *[fill^='#'] {
    fill: ${(p) =>
      p.appearance === 'white' ? '' : `var(--admiral-color-Primary_Primary70, ${p.theme.color['Primary/Primary 70']})`};
  }

  &[data-loading] {
    pointer-events: none;
  }

  &[data-disabled] {
    pointer-events: none;

    *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;
