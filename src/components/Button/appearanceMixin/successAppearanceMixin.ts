import { css } from 'styled-components';

export const successAppearanceMixin = css`
  background-color: ${({ theme }) => theme.color['Success/Success 50 Main']};
  color: ${({ theme }) => theme.color['Special/Static White']};
  border: 1px solid ${({ theme }) => theme.color['Success/Success 50 Main']};

  &&& *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Special/Static White']};
  }

  &&&:hover {
    background-color: ${({ theme }) => theme.color['Success/Success 60']};
    border-color: ${({ theme }) => theme.color['Success/Success 60']};
  }

  &&&:active {
    background-color: ${({ theme }) => theme.color['Success/Success 70']};
    border-color: ${({ theme }) => theme.color['Success/Success 70']};
  }

  &&&[data-appearance~='disabled'],
  &&&:disabled {
    background-color: ${({ theme }) => theme.color['Neutral/Neutral 10']};
    color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    border-color: ${({ theme }) => theme.color['Neutral/Neutral 10']};
    &&& *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
`;
