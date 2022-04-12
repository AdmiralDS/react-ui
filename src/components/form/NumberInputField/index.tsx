import { uid } from '#/components/common/uid';
import { refSetter } from '#/components/common/utils/refSetter';
import { Field, FieldOwnProps } from '#/components/Field';
import { NumberInput, NumberInputProps } from '#/components/input/NumberInput';
import * as React from 'react';

export interface NumberInputFieldProps extends NumberInputProps, Omit<FieldOwnProps, 'inputRef'> {}

export const NumberInputField = React.forwardRef<HTMLInputElement, NumberInputFieldProps>((props, ref) => {
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
  };
  const inputProps = {
    ref: refSetter(ref, inputRef),
    id,
    'aria-required': required,
    status,
    disabled,
    maxLength,
    displayCharacterCounter,
    ...restProps,
  };

  return (
    <Field {...fieldContainerProps}>
      <NumberInput {...inputProps} />
    </Field>
  );
});

NumberInputField.displayName = 'NumberInputField';
