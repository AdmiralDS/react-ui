import { css } from 'styled-components';

export const focusVisibleStyle = css`
  &:focus-visible {
    outline-offset: 2px;
    outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
  }
`;
