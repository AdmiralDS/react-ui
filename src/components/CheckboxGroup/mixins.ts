import { css } from 'styled-components';
import { TYPOGRAPHY } from '#src/components/Typography';
import { CheckboxDimension } from '#src/components/Checkbox/CheckboxDimension';

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
  color: ${({ disabled, theme }) => (disabled ? theme.color.text.tertiary : theme.color.basic.secondary)};
  user-select: none;
`;

export const styleFocusBorder = css<{ dimension: CheckboxDimension }>`
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: ${({ theme }) => `2px solid ${theme.color.basic.hover}`};
    width: ${({ dimension }) => (dimension === 'm' ? 22 : 18)}px;
    height: ${({ dimension }) => (dimension === 'm' ? 22 : 18)}px;
    border-radius: 4px;
  }
`;

export const backGroundHover = css<{ checked?: boolean }>`
  background: ${({ theme, checked }) => (checked ? theme.color.basic.hover : theme.color.background.secondary)};
`;

export const borderHover = css<{ disabled?: boolean }>`
  border: ${({ theme, disabled }) => `1px solid ${disabled ? theme.color.basic.disable : theme.color.basic.hover}`};
`;

export const backGroundHoverChecked = css`
  background: ${({ theme }) => theme.color.basic.hover};
`;

export const background = css<{ checked?: boolean }>`
  background-color: ${({ checked, theme }) => (checked ? theme.color.basic.primary : theme.color.background.primary)};
`;

export const borderDefault = css<{ disabled?: boolean }>`
  border: ${({ theme, disabled }) => `1px solid ${disabled ? theme.color.basic.disable : theme.color.basic.tertiary}`};
`;

export const backGroundDisabled = css`
  background: ${({ theme }) => theme.color.basic.disable};
`;
