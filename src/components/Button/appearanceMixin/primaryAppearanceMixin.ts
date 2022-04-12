import { css } from 'styled-components';

export const primaryAppearanceMixin = css`
  background-color: ${({ theme }) => theme.color.basic.primary};
  color: ${({ theme }) => theme.color.text.staticWhite};
  border: 2px solid ${({ theme }) => theme.color.basic.primary};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.text.staticWhite};
  }

  :focus,
  :hover {
    background-color: ${({ theme }) => theme.color.basic.hover};
    border-color: ${({ theme }) => theme.color.basic.hover};
  }

  :active {
    background-color: ${({ theme }) => theme.color.basic.press};
    border-color: ${({ theme }) => theme.color.basic.press};
  }

  &[data-appearance~='disabled'],
  :disabled {
    background-color: ${({ theme }) => theme.color.basic.disable};
    color: ${({ theme }) => theme.color.text.inversion};
    border-color: ${({ theme }) => theme.color.basic.disable};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.text.inversion};
    }
  }
`;
