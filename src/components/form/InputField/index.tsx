import { uid } from '#src/components/common/uid';
import { refSetter } from '#src/components/common/utils/refSetter';
import type { FieldOwnProps, FieldContainerProps, FieldDataAttributes } from '#src/components/Field';
import { Field } from '#src/components/Field';
import type { TextInputProps } from '#src/components/input';
import { TextInput as Input } from '#src/components/input';
import * as React from 'react';
import {
  passFormFieldContainerDataAttributes,
  passFormFieldDataAttributes,
} from '#src/components/common/utils/splitDataAttributes';

export interface InputFieldProps extends TextInputProps, Omit<FieldOwnProps, 'inputRef'> {}

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const {
    className,
    maxLength,
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
  const fieldContainerProps: FieldContainerProps & FieldDataAttributes = {
    className,
    extraText,
    status,
    required,
    label,
    additionalLabel,
    id,
    displayInline,
    disabled,
    maxLength,
    inputRef,
    displayCharacterCounter,
    characterCounterVisibilityThreshold,
    skeleton,
    'data-field-id': id,
    'data-field-name': restProps.name,
  };

  passFormFieldDataAttributes(restProps, fieldContainerProps);
  passFormFieldContainerDataAttributes(restProps, fieldContainerProps);

  const inputProps = {
    ref: refSetter(ref, inputRef),
    id,
    'aria-required': required,
    status,
    disabled,
    maxLength,
    skeleton,
    ...restProps,
  };

  return (
    <Field {...fieldContainerProps}>
      <Input {...inputProps} />
    </Field>
  );
});

InputField.displayName = 'InputField';
