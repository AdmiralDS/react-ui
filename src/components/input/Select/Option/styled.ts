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
    if (selected) return theme.color['Opacity/Focus'];
    if (active) return theme.color['Opacity/Hover'];
    return 'transparent';
  }};

  color: ${({ disabled, theme }) => (disabled ? theme.color['Neutral/Neutral 30'] : theme.color['Neutral/Neutral 90'])};
  cursor: ${({ disabled }) => (disabled ? 'text' : 'pointer')};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'all')};
`;

export const StyledCheckbox = styled(CheckboxField)`
  margin-right: 8px;
  flex-shrink: 0;
`;
