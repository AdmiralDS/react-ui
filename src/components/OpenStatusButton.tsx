import { ReactComponent as ChevronDownOutline } from '@admiral-ds/icons/build/system/ChevronDownOutline.svg';
import styled from 'styled-components';

export type Appearance = 'primary' | 'white';

export const OpenStatusButton = styled(ChevronDownOutline)<{ $isOpen?: boolean; appearance?: Appearance }>`
  transition: transform 0.3s ease-in-out;
  transform: rotate(${(p) => (p.$isOpen ? 180 : 0)}deg);
  & *[fill^='#'] {
    fill: ${({ appearance, theme }) =>
      appearance === 'white' ? theme.color['Special/Static White'] : theme.color['Neutral/Neutral 50']};
  }

  &:hover *[fill^='#'] {
    fill: ${(props) => (props.appearance === 'white' ? '' : props.theme.color['Primary/Primary 70'])};
  }

  &[data-disabled] {
    pointer-events: none;

    *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
`;
