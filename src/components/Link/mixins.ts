import { css } from 'styled-components';
import type { AppearanceLink, Dimension } from './LinkComponent';
import { TYPOGRAPHY } from '../Typography';

export const styleDisabledMixin = css<{ disabled: boolean }>`
  color: ${({ theme }) => theme.color.text.tertiary};
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.text.tertiary};
  }
  user-select: none;
`;

export const styleColorMixin = css<{ appearance: AppearanceLink }>`
  color: ${({ theme, appearance }) =>
    appearance === 'secondary' ? theme.color.text.primary : theme.color.basic.primary};
  & *[fill^='#'] {
    fill: ${({ theme, appearance }) =>
      appearance === 'secondary' ? theme.color.basic.tertiary : theme.color.basic.primary};
  }
`;

export const styleMixin = css`
  &:hover {
    color: ${({ theme }) => theme.color.basic.hover};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
  }
  &:focus {
    color: ${({ theme }) => theme.color.basic.hover};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
    outline-color: ${({ theme }) => theme.color.basic.hover};
  }
  &:active {
    color: ${({ theme }) => theme.color.basic.press};
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.press};
    }
  }
`;

export const styleTextMixin = css<{ dimension: Dimension }>`
  font-size: ${({ dimension }) => (dimension === 'm' ? 16 : 14)}px;
  font-weight: normal;
  line-height: ${({ dimension }) => (dimension === 'm' ? 24 : 20)}px;
  font-family: ${TYPOGRAPHY.fontFamily};
`;
