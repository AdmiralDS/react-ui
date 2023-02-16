import { css } from 'styled-components';

export const whiteAppearanceMixin = css`
  background-color: transparent;
  color: ${({ theme }) => theme.color['Special/Static White']};
  border: 1px solid ${({ theme }) => theme.color['Special/Static White']};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Special/Static White']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color['Opacity/Dark Static Hover']};
    color: ${({ theme }) => theme.color['Special/Static White']};
    border-color: ${({ theme }) => theme.color['Special/Static White']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Special/Static White']};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.color['Opacity/Dark Static Press']};
    color: ${({ theme }) => theme.color['Special/Static White']};
    border-color: ${({ theme }) => theme.color['Special/Static White']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Special/Static White']};
    }
  }

  &[data-appearance~='disabled'],
  &:disabled {
    border-color: ${({ theme }) => theme.color['Special/Dark Static Neutral 30']};
    color: ${({ theme }) => theme.color['Special/Dark Static Neutral 30']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Special/Dark Static Neutral 30']};
    }
  }
`;
