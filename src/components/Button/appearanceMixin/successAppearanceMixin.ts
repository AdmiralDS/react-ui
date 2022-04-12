import { css } from 'styled-components';

export const successAppearanceMixin = css`
  background-color: ${({ theme }) => theme.color.status.success};
  color: ${({ theme }) => theme.color.text.staticWhite};
  border: 2px solid ${({ theme }) => theme.color.status.success};

  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.text.staticWhite};
  }

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.color.status.hoverSuccess};
    border-color: ${({ theme }) => theme.color.status.hoverSuccess};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.status.pressSuccess};
    border-color: ${({ theme }) => theme.color.status.pressSuccess};
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
