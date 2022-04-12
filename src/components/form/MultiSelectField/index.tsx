import type { MultiSelectProps } from '#/components/MultiSelect';
import * as React from 'react';
import styled from 'styled-components';
import { Field } from '#/components/Field';
import { uid } from '#/components/common/uid';
import { MultiSelect as BaseMultiSelect } from '#/components/MultiSelect';

const Select = styled(BaseMultiSelect)`
  [data-status='error'] & {
    border-color: ${(props) => props.theme.color.status.danger};
  }
`;

export interface MultiSelectFieldProps
  extends MultiSelectProps,
    Omit<React.ComponentPropsWithoutRef<typeof Field>, 'onChange'> {}

export const MultiSelectField = React.forwardRef<HTMLDivElement, MultiSelectFieldProps>((props, ref) => {
  const { className, displayInline, status, required, extraText, label, id = uid(), disabled, ...restProps } = props;
  const fieldContainerProps = {
    className,
    extraText,
    status,
    required,
    label,
    id,
    displayInline,
    disabled,
  };
  const selectProps = { ref, id, disabled, ...restProps };
  return (
    <Field {...fieldContainerProps}>
      <Select {...selectProps} />
    </Field>
  );
});

MultiSelectField.displayName = 'MultiSelectField';
