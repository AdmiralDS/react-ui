import { css } from 'styled-components';

export const primaryAppearanceMixin = css`
  background-color: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  color: ${({ theme }) => theme.color['Special/Static White']};
  border: 1px solid ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Special/Static White']};
  }

  :hover {
    background-color: ${({ theme }) => theme.color['Primary/Primary 70']};
    border-color: ${({ theme }) => theme.color['Primary/Primary 70']};
  }

  :active {
    background-color: ${({ theme }) => theme.color['Primary/Primary 80']};
    border-color: ${({ theme }) => theme.color['Primary/Primary 80']};
  }

  &[data-appearance~='disabled'],
  :disabled {
    background-color: ${({ theme }) => theme.color['Neutral/Neutral 10']};
    color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    border-color: ${({ theme }) => theme.color['Neutral/Neutral 10']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
`;
