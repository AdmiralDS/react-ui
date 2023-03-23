import type { FieldOwnProps } from '#src/components/Field';
import { Field } from '#src/components/Field';
import type { DateInputProps } from '#src/components/input/DateInput';
import { DateInput } from '#src/components/input/DateInput';
import * as React from 'react';
import { uid } from '#src/components/common/uid';
import {
  passFormFieldContainerDataAttributes,
  passFormFieldDataAttributes,
} from '#src/components/common/utils/splitDataAttributes';

export interface DateFieldProps extends DateInputProps, Omit<FieldOwnProps, 'inputRef'> {}

export const DateField = React.forwardRef<HTMLInputElement, DateFieldProps>((props, ref) => {
  const {
    className,
    displayInline,
    status,
    required,
    extraText,
    label,
    id = uid(),
    name,
    disabled,
    skeleton,
    ...restProps
  } = props;

  const fieldContainerProps = {
    className,
    extraText,
    status,
    required,
    label,
    id,
    skeleton,
    'data-field-id': id,
    'data-field-name': name,
    displayInline,
    disabled,
  } as Record<string, any>;

  passFormFieldDataAttributes(restProps, fieldContainerProps);
  passFormFieldContainerDataAttributes(restProps, fieldContainerProps);

  const inputProps = { ref, id, name, 'aria-required': required, status, disabled, skeleton, ...restProps };
  return (
    <Field {...fieldContainerProps}>
      <DateInput {...inputProps} />
    </Field>
  );
});

DateField.displayName = 'DateField';
