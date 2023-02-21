import { css } from 'styled-components';

export const secondaryAppearanceMixin = css`
  background-color: transparent;
  color: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  border: 1px solid ${({ theme }) => theme.color['Primary/Primary 60 Main']};

  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color['Opacity/Hover']};
    color: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
    border-color: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.color['Opacity/Press']};
    color: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
    border-color: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
    }
  }

  &[data-appearance~='disabled'],
  &:disabled {
    background-color: transparent;
    color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    border-color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
`;
