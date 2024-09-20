import { css } from 'styled-components';

import { typography } from './typography';

export const defaultTypographyMixin = css`
  div,
  span,
  main,
  footer,
  article,
  section {
    ${typography['Body/Body 1 Long']};
  }
  header {
    ${typography['Header/H4']};
  }
  details,
  summary {
    ${typography['Caption/Caption 1']};
  }
`;
