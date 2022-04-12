import { css } from 'styled-components';

export const secondaryAppearanceMixin = css`
  background-color: transparent;
  color: ${({ theme }) => theme.color.basic.primary};
  border: 2px solid ${({ theme }) => theme.color.basic.primary};

  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.basic.primary};
  }

  &:focus,
  &:hover {
    background-color: ${({ theme }) => theme.color.background.secondary};
    color: ${({ theme }) => theme.color.basic.hover};
    border-color: ${({ theme }) => theme.color.basic.hover};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
  }

  &:active {
    background-color: ${({ theme }) => theme.color.background.secondary};
    color: ${({ theme }) => theme.color.basic.press};
    border-color: ${({ theme }) => theme.color.basic.press};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.press};
    }
  }

  &[data-appearance~='disabled'],
  &:disabled {
    background-color: ${({ theme }) => theme.color.background.primary};
    color: ${({ theme }) => theme.color.text.tertiary};
    border-color: ${({ theme }) => theme.color.text.tertiary};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.text.tertiary};
    }
  }
`;
