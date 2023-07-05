import { css } from 'styled-components';
import { typography } from '#src/components/Typography';
import type { TableProps } from '#src/components/Table';

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

export const rowBackground = css<{
  selected?: boolean;
  disabled?: boolean;
  error?: boolean;
  success?: boolean;
  grey?: boolean;
}>`
  ${({ theme, selected, error, success, disabled, grey }) => {
    if (disabled) return theme.color['Neutral/Neutral 00'];
    if (selected) return theme.color['Primary/Primary 20'];
    if (error) return theme.color['Error/Error 20'];
    if (success) return theme.color['Success/Success 20'];
    if (grey) return theme.color['Neutral/Neutral 05'];
    return theme.color['Neutral/Neutral 00'];
  }}
`;

export const actionsBGStyle = css<{ dimension: TableProps['dimension'] }>`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  z-index: 5;
  ${({ dimension }) => {
    switch (dimension) {
      case 's':
        return css`
          width: 31px;
          height: 31px;
        `;
      case 'l':
        return css`
          width: 47px;
          height: 47px;
        `;
      case 'xl':
        return css`
          width: 55px;
          height: 55px;
        `;
      case 'm':
      default:
        return css`
          width: 39px;
          height: 39px;
        `;
    }
  }}
`;

export const overflowMenuStyle = css<{ $offset: number; dimension: TableProps['dimension'] }>`
  ${actionsBGStyle}
  left: ${({ dimension, $offset }) => {
    switch (dimension) {
      case 's':
        return $offset - 32;
      case 'l':
        return $offset - 47;
      case 'xl':
        return $offset - 55;
      case 'm':
      default:
        return $offset - 39;
    }
  }}px;
`;
