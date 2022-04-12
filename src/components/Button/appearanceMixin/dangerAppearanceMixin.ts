import { css } from 'styled-components';

export const dangerAppearanceMixin = css`
  background-color: ${({ theme }) => theme.color.status.danger};
  color: ${({ theme }) => theme.color.text.staticWhite};
  border: 2px solid ${({ theme }) => theme.color.status.danger};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.text.staticWhite};
  }

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.color.status.hoverDanger};
    border-color: ${({ theme }) => theme.color.status.hoverDanger};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.status.pressDanger};
    border-color: ${({ theme }) => theme.color.status.pressDanger};
  }

  &[data-appearance~='disabled'],
  &:disabled {
    background-color: ${({ theme }) => theme.color.basic.disable};
    color: ${({ theme }) => theme.color.text.inversion};
    border-color: ${({ theme }) => theme.color.basic.disable};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.text.inversion};
    }
  }
`;
