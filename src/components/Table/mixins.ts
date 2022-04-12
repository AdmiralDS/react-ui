import { css } from 'styled-components';
import { typography } from '#/components/Typography';

export const firstCellPadding = css`
  & *[data-first='true'] {
    padding: 0 12px 0 20px;
    [data-dimension='l'] & {
      padding: 0 16px 0 24px;
    }
    [data-dimension='xl'] & {
      padding: 0 16px 0 24px;
    }
  }
`;

export const cellStyle = css`
  padding: 0 20px 0 4px;
  line-height: 40px;
  [data-dimension='s'] & {
    line-height: 32px;
  }
  [data-dimension='l'] & {
    padding: 0 24px 0 8px;
    line-height: 48px;
  }
  [data-dimension='xl'] & {
    padding: 0 24px 0 8px;
    line-height: 56px;
  }
`;

export const headerCellStyle = css`
  padding: 0 0 0 4px;
  line-height: 40px;
  [data-dimension='s'] & {
    line-height: 32px;
  }
  [data-dimension='l'] & {
    padding: 0 0 0 8px;
    line-height: 48px;
  }
  [data-dimension='xl'] & {
    padding: 0 0 0 8px;
    line-height: 56px;
  }
`;

export const rowStyle = css`
  ${typography['Additional/XS']}
  height: 40px;
  cursor: pointer;

  [data-dimension='s'] & {
    height: 32px;
  }
  [data-dimension='l'] & {
    ${typography['Additional/M']}
    height: 48px;
  }
  [data-dimension='xl'] & {
    ${typography['Additional/M']}
    height: 56px;
  }
`;

export const headerStyle = css`
  ${typography['Additional/S-bold']}
  height: 40px;

  [data-dimension='s'] & {
    ${typography['Additional/S-bold']}
    height: 32px;
  }
  [data-dimension='l'] & {
    ${typography['Additional/L-bold']}
    height: 48px;
  }
  [data-dimension='xl'] & {
    ${typography['Additional/L-bold']}
    height: 56px;
  }
`;
