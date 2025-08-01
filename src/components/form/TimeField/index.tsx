import * as React from 'react';
import type { TimeInputProps } from '#src/components/input';
import { TimeInput } from '#src/components/input';
import type { FieldOwnProps } from '#src/components/Field';
import { Field } from '#src/components/Field';
import { uid } from '#src/components/common/uid';
import {
  passFormFieldContainerDataAttributes,
  passFormFieldDataAttributes,
} from '#src/components/common/utils/splitDataAttributes';

export interface TimeFieldProps extends TimeInputProps, Omit<FieldOwnProps, 'inputRef'> {}

export const TimeField = React.forwardRef<HTMLInputElement, TimeFieldProps>((props, ref) => {
  const fieldRef = React.useRef(null);
  const {
    className,
    displayInline,
    status,
    required,
    extraText,
    label,
    additionalLabel,
    id = uid(),
    disabled,
    displayCharacterCounter,
    characterCounterVisibilityThreshold,
    skeleton,
    ...restProps
  } = props;
  const fieldContainerProps = {
    className,
    extraText,
    status,
    required,
    label,
    additionalLabel,
    id,
    displayInline,
    disabled,
    displayCharacterCounter,
    characterCounterVisibilityThreshold,
    ref: fieldRef,
    skeleton,
    'data-field-id': id,
    'data-field-name': restProps.name,
  } as Record<string, any>;

  passFormFieldDataAttributes(restProps, fieldContainerProps);
  passFormFieldContainerDataAttributes(restProps, fieldContainerProps);

  const TimeProps = {
    ref,
    id,
    'aria-required': required,
    status,
    disabled,
    skeleton,
    ...restProps,
  };
  return (
    <Field {...fieldContainerProps}>
      <TimeInput {...TimeProps} />
    </Field>
  );
});

TimeField.displayName = 'TimeField';
