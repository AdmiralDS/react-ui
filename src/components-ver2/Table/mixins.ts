import { css } from 'styled-components';
import { typography } from '#src/components-ver2/Typography';

// padding-bottom меньше padding-top на 1px, т.к. 1px остается для border-bottom ячейки
// padding-right больше padding-left на 1px, т.к. 1px остается для линии resizerа
export const cellStyle = css`
  [data-dimension='s'] & {
    padding: 6px 13px 5px 12px;
  }

  [data-dimension='m'] & {
    padding: 10px 13px 9px 12px;
  }

  [data-dimension='l'] & {
    padding: 12px 17px 11px 16px;
  }

  [data-dimension='xl'] & {
    padding: 16px 17px 15px 16px;
  }
`;

export const rowStyle = css`
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  ${typography['Body/Body 2 Short']}

  [data-dimension='l'] & {
    ${typography['Body/Body 1 Short']}
  }
  [data-dimension='xl'] & {
    ${typography['Body/Body 1 Short']}
  }
`;

export const headerStyle = css`
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  ${typography['Subtitle/Subtitle 3']}

  [data-dimension='l'] & {
    ${typography['Subtitle/Subtitle 2']}
  }
  [data-dimension='xl'] & {
    ${typography['Subtitle/Subtitle 2']}
  }
`;

export const singleLineTitle = css`
  display: inline-block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const multiLineTitle = css<{ lineClamp: number }>`
  display: -webkit-inline-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${({ lineClamp }) => lineClamp};
  overflow: hidden;
`;

export const disabledRow = css`
  color: ${({ theme }) => theme.color['Neutral/Neutral 30']};
  pointer-events: none;
`;

export const underlineRow = css`
  border-bottom: 1px solid ${({ theme }) => theme.color['Neutral/Neutral 20']};
`;

export const rowBackground = css`
  [data-selected='true'] & {
    background: ${({ theme }) => theme.color['Primary/Primary 20']};
  }
  [data-error='true'] & {
    background: ${({ theme }) => theme.color['Error/Error 20']};
  }
  [data-success='true'] & {
    background: ${({ theme }) => theme.color['Success/Success 20']};
  }
  [data-disabled='true'] & {
    background: ${({ theme }) => theme.color['Neutral/Neutral 00']};
  }
`;
