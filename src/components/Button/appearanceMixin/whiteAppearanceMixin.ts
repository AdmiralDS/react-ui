import { css } from 'styled-components';

export const whiteAppearanceMixin = css`
  background-color: transparent;
  color: ${({ theme }) => theme.color.text.staticWhite};
  border: 2px solid ${({ theme }) => theme.color.text.staticWhite};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.text.staticWhite};
  }

  &[data-appearance~='disabled'],
  &:disabled {
    border-color: ${({ theme }) => theme.color.basic.tertiary};
    color: ${({ theme }) => theme.color.basic.tertiary};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.tertiary};
    }
  }
`;
