import { uid } from '#/components/common/uid';
import { Field, FieldOwnProps } from '#/components/Field';
import { PhoneNumberInput, PhoneNumberInputProps } from '#/components/input/PhoneNumberInput';
import * as React from 'react';

export interface PhoneInputFieldProps extends PhoneNumberInputProps, Omit<FieldOwnProps, 'inputRef'> {}

export const PhoneInputField = React.forwardRef<HTMLInputElement, PhoneInputFieldProps>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const {
    className,
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
    displayCharacterCounter,
    ref: inputRef,
  };
  const inputProps = {
    ref,
    id,
    'aria-required': required,
    status,
    disabled,
    ...restProps,
    portalTargetRef: inputRef,
  };

  return (
    <Field {...fieldContainerProps}>
      <PhoneNumberInput {...inputProps} />
    </Field>
  );
});

PhoneInputField.displayName = 'NumberInputField';
