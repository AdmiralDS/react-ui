import { css } from 'styled-components';
import { typography } from '#src/components/Typography';

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

export const extraTextStyle = css`
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  ${typography['Caption/Caption 1']}

  [data-dimension='l'] & {
    ${typography['Body/Body 2 Long']}
  }
  [data-dimension='xl'] & {
    ${typography['Body/Body 2 Long']}
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

export const rowBackground = css<{ selected?: boolean; disabled?: boolean; error?: boolean; success?: boolean }>`
  ${({ theme, selected, error, success, disabled }) => {
    if (selected) return theme.color['Primary/Primary 20'];
    if (error) return theme.color['Error/Error 20'];
    if (success) return theme.color['Success/Success 20'];
    if (disabled) return theme.color['Neutral/Neutral 00'];
    return theme.color['Neutral/Neutral 00'];
  }}
`;

export const overflowMenuStyle = css<{ $offset: number }>`
  [data-dimension='s'] && {
    width: 31px;
    height: 31px;
    padding: 0;
    left: ${({ $offset }) => `${$offset - 32}px`};
  }
  [data-dimension='m'] && {
    width: 39px;
    height: 39px;
    padding: 4px 4px 3px 3px;
    left: ${({ $offset }) => `${$offset - 39}px`};
  }
  [data-dimension='l'] && {
    width: 47px;
    height: 47px;
    padding: 6px 6px 5px 5px;
    left: ${({ $offset }) => `${$offset - 47}px`};
  }
  [data-dimension='xl'] && {
    width: 55px;
    height: 55px;
    padding: 10px 10px 9px 9px;
    left: ${({ $offset }) => `${$offset - 55}px`};
  }
`;
