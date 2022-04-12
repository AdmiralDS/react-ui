import { Field } from '#/components/Field';
import type { FieldOwnProps } from '#/components/Field';
import type { DateInputProps } from '#/components/input/DateInput';
import { DateInput } from '#/components/input/DateInput';
import * as React from 'react';
import { uid } from '#/components/common/uid';

export interface DateFieldProps extends DateInputProps, Omit<FieldOwnProps, 'inputRef'> {}

export const DateField = React.forwardRef<HTMLInputElement, DateFieldProps>((props, ref) => {
  const { className, displayInline, status, required, extraText, label, id = uid(), disabled, ...restProps } = props;
  const fieldContainerProps = { className, extraText, status, required, label, id, displayInline, disabled };
  const inputProps = { ref, id, 'aria-required': required, status, disabled, ...restProps };
  return (
    <Field {...fieldContainerProps}>
      <DateInput {...inputProps} />
    </Field>
  );
});

DateField.displayName = 'DateField';
