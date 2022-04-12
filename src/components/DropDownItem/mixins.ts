import { css } from 'styled-components';
import { typography } from '../Typography';

export type DropDownItemDimension = 'l' | 'm' | 's';

export const styleTextMixin = css<{ dimension: DropDownItemDimension }>`
  ${({ dimension }) => (dimension === 's' ? typography['Additional/S'] : typography['Additional/L'])}
  ul[data-dimension='s'] & {
    ${typography['Additional/S']}
  }
  text-overflow: ellipsis;
`;

export const colorTextMixin = css<{ disabled?: boolean }>`
  color: ${({ theme, disabled }) => (disabled ? theme.color.text.tertiary : theme.color.text.primary)};
`;

export const backgroundColor = css<{ selected?: boolean; id?: string }>`
  background: ${({ theme, selected }) => (selected ? theme.color.background.tertiary : theme.color.background.primary)};
  ${({ id, theme }) => id && `ul[data-selectedid="${id}"] && {background: ${theme.color.background.tertiary};}`}}
`;

export const paddings = css<{ dimension?: DropDownItemDimension }>`
  padding: ${({ dimension }) => {
    switch (dimension) {
      case 'l':
        return '12px 16px';
      case 'm':
        return '8px 16px';
      case 's':
        return '6px 12px';
      default:
        return '12px 16px';
    }
  }};
  ul[data-dimension='m'] && {
    padding: 8px 16px;
  }
  ul[data-dimension='s'] && {
    padding: 6px 12px;
  }
`;
