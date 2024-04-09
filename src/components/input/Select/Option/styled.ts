import type { ComponentDimension } from '#src/components/input';
import styled from 'styled-components';
import { OptionWrapper } from '#src/components/input/Select/styled';
import { CheckboxField } from '#src/components/form/CheckboxField';

interface CustomOptionProps {
  disabled?: boolean;
  selected?: boolean;
  active?: boolean;
  dimension?: ComponentDimension;
}

export const CustomOption = styled(OptionWrapper)<CustomOptionProps>`
  background-color: ${({ active, selected, theme }) => {
    if (selected) {
      return `var(--admiral-color-Opacity_Focus, ${theme.color['Opacity/Focus']})`;
    }
    if (active) {
      return `var(--admiral-color-Opacity_Hover, ${theme.color['Opacity/Hover']})`;
    }
    return 'transparent';
  }};

  color: ${({ disabled, theme }) =>
    disabled
      ? `var(--admiral-color-Neutral_Neutral30, ${theme.color['Neutral/Neutral 30']})`
      : `var(--admiral-color-Neutral_Neutral90, ${theme.color['Neutral/Neutral 90']})`};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  & > * {
    pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
  }
`;

export const StyledCheckbox = styled(CheckboxField)`
  margin-right: 8px;
  flex-shrink: 0;
`;
