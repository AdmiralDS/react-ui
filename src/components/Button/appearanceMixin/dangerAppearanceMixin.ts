import { css } from 'styled-components';

export const dangerAppearanceMixin = css`
  background-color: ${({ theme }) => theme.color['Error/Error 60 Main']};
  color: ${({ theme }) => theme.color['Special/Static White']};
  border: 1px solid ${({ theme }) => theme.color['Error/Error 60 Main']};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Special/Static White']};
  }

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.color['Error/Error 70']};
    border-color: ${({ theme }) => theme.color['Error/Error 70']};
  }

  &:active {
    background-color: ${({ theme }) => theme.color['Error/Error 80']};
    border-color: ${({ theme }) => theme.color['Error/Error 80']};
  }

  &[data-appearance~='disabled'],
  &:disabled {
    background-color: ${({ theme }) => theme.color['Neutral/Neutral 10']};
    color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    border-color: ${({ theme }) => theme.color['Neutral/Neutral 10']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
`;
