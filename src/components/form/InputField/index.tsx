import { uid } from '#src/components/common/uid';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Field, FieldOwnProps } from '#src/components/Field';
import { TextInput as Input, TextInputProps } from '#src/components/input';
import * as React from 'react';
import { splitDataAttributes } from '#src/components/common/utils/splitDataAttributes';

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
    id = uid(),
    disabled,
    displayCharacterCounter,
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
    displayInline,
    disabled,
    maxLength,
    inputRef,
    displayCharacterCounter,
    skeleton,
    'data-field-id': id,
    'data-field-name': restProps.name,
  } as Record<string, any>;

  splitDataAttributes(restProps, fieldContainerProps);

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
