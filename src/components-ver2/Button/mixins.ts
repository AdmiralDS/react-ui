import { css } from 'styled-components';
import type { Appearance } from './types';

const getAppearance = (appearance: Appearance) => appearance === 'secondary' || appearance === 'ghost';

export const styleColorTextMixin = css<{ appearance: Appearance }>`
  color: ${({ theme, appearance }) =>
    getAppearance(appearance) ? theme.color.basic.primary : theme.color.text.staticWhite};

  &:focus,
  &:hover {
    color: ${({ theme, appearance }) =>
      getAppearance(appearance) ? theme.color.basic.hover : theme.color.text.staticWhite};
  }

  &:active {
    color: ${({ theme, appearance }) =>
      getAppearance(appearance) ? theme.color.basic.press : theme.color.text.staticWhite};
  }

  &:disabled {
    color: ${({ theme, appearance }) =>
      getAppearance(appearance)
        ? theme.color.text.tertiary
        : appearance === 'white'
        ? theme.color.basic.tertiary
        : theme.color.text.inversion};
  }
`;

export const styleBorderMixin = css<{ appearance: Appearance }>`
  &:before {
    content: '';
    border: 2px solid;
    border-color: ${({ theme, appearance }) =>
      appearance === 'secondary' ? theme.color.basic.primary : theme.color.background.primary};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: 4px;
  }

  &:focus,
  &:hover {
    &:before {
      border-color: ${({ theme, appearance }) =>
        appearance === 'secondary' ? theme.color.basic.hover : theme.color.background.primary};
    }
  }

  &:active {
    &:before {
      border-color: ${({ theme, appearance }) =>
        appearance === 'secondary' ? theme.color.basic.press : theme.color.background.primary};
    }
  }

  &:disabled {
    &:before {
      border-color: ${({ theme, appearance }) =>
        appearance === 'secondary' ? theme.color.text.tertiary : theme.color.basic.tertiary};
    }
  }
`;
