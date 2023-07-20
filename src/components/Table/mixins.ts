import { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import type { TableProps, TableRow } from '#src/components/Table';

// padding-bottom меньше padding-top на 1px, т.к. 1px остается для border-bottom ячейки
// padding-right больше padding-left на 1px, т.к. 1px остается для линии resizerа
export const cellStyle = css<{ dimension: TableProps['dimension'] }>`
  padding: ${({ dimension }) => {
    switch (dimension) {
      case 's':
        return '6px 13px 5px 12px';
      case 'l':
        return '12px 17px 11px 16px';
      case 'xl':
        return '16px 17px 15px 16px';
      case 'm':
      default:
        return '10px 13px 9px 12px';
    }
  }};
`;

export const rowStyle = css<{ dimension: TableProps['dimension'] }>`
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  ${({ dimension }) =>
    dimension === 'l' || dimension === 'xl' ? typography['Body/Body 1 Short'] : typography['Body/Body 2 Short']}
`;

export const groupRowStyle = css<{ dimension: TableProps['dimension'] }>`
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  ${({ dimension }) =>
    dimension === 'l' || dimension === 'xl' ? typography['Subtitle/Subtitle 2'] : typography['Subtitle/Subtitle 3']}
`;

export const headerStyle = css<{ dimension: TableProps['dimension'] }>`
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  ${({ dimension }) =>
    dimension === 'l' || dimension === 'xl' ? typography['Subtitle/Subtitle 2'] : typography['Subtitle/Subtitle 3']}
`;

export const extraTextStyle = css<{ dimension: TableProps['dimension'] }>`
  color: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  ${({ dimension }) =>
    dimension === 'l' || dimension === 'xl' ? typography['Body/Body 2 Long'] : typography['Caption/Caption 1']}
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

const defaultRowBackground = css`background: ${({theme}) => theme.color['Neutral/Neutral 00']};`;
const disabledRowBackground = css`background: ${({theme}) => theme.color['Neutral/Neutral 00']};`;
const selectedRowBackground = css`background: ${({theme}) => theme.color['Primary/Primary 20']};`;
const errorRowBackground = css`background: ${({theme}) => theme.color['Error/Error 20']};`;
const successRowBackground = css`background: ${({theme}) => theme.color['Success/Success 20']};`;
const greyRowBackground = css`background: ${({theme}) => theme.color['Neutral/Neutral 05']};`;

export const rowBackground = css<{
  selected?: boolean;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  grey?: boolean;
  status?: TableRow['status'];
  rowStatusMap?: TableProps['rowStatusMap'];
}>`
  ${({ selected, error, success, disabled, grey, status, rowStatusMap }) => {
    if (disabled) return disabledRowBackground;
    if (selected) return selectedRowBackground;
    if (status && rowStatusMap?.[status]) return rowStatusMap[status];
    if (error) return errorRowBackground;
    if (success) return successRowBackground;
    if (grey) return greyRowBackground;
    return defaultRowBackground;
  }}
`;

const getActionSize = (dimension: TableProps['dimension']) => {
  switch (dimension) {
    case 's':
      return 32;
    case 'l':
      return 48;
    case 'xl':
      return 56;
    case 'm':
    default:
      return 40;
  }
};

export const actionsBGStyle = css<{ dimension: TableProps['dimension'] }>`
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 5;
  width: ${({ dimension }) => getActionSize(dimension)}px;
  padding: ${({ dimension }) => {
    switch (dimension) {
      case 's':
        return '0px';
      case 'l':
        return '6px 0 5px';
      case 'xl':
        return '10px 0 9px';
      case 'm':
      default:
        return '4px 0 3px';
    }
  }};
`;

export const overflowMenuStyle = css<{ $offset: number; dimension: TableProps['dimension'] }>`
  ${actionsBGStyle}
  left: ${({dimension, $offset}) => $offset - getActionSize(dimension)}px;
`;
