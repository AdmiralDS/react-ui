import { css } from 'styled-components';
import { TYPOGRAPHY } from '#src/components/Typography';
import { CheckboxDimension } from '#src/components-ver2/Checkbox/CheckboxDimension';

export const width = css<{ dimension: CheckboxDimension }>`
  width: ${({ dimension }) => {
    switch (dimension) {
      case 'm':
        return '20px';
      case 's':
        return '16px';
      default:
        return '20px';
    }
  }};
`;

export const height = css<{ dimension: CheckboxDimension }>`
  height: ${({ dimension }) => {
    switch (dimension) {
      case 'm':
        return '20px';
      case 's':
        return '16px';
      default:
        return '20px';
    }
  }};
`;

export const styleTextMixin = css<{ dimension: CheckboxDimension; disabled?: boolean }>`
  font-size: ${({ dimension }) => (dimension === 'm' ? 16 : 14)}px;
  line-height: ${({ dimension }) => (dimension === 'm' ? 20 : 16)}px;
  font-weight: normal;
  font-family: ${TYPOGRAPHY.fontFamily};
  color: ${({ disabled, theme }) => (disabled ? theme.color['Neutral/Neutral 30'] : theme.color['Neutral/Neutral 90'])};
  user-select: none;
`;
