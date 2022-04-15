import { uid } from '#src/components/common/uid';
import { Field, FieldOwnProps } from '#src/components/Field';
import { PhoneNumberInput, PhoneNumberInputProps } from '#src/components/input/PhoneNumberInput';
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
    'data-field-id': id,
    'data-field-name': restProps.name,
  } as Record<string, any>;

  (Object.keys(restProps) as Array<keyof typeof restProps>).forEach((key) => {
    if (key.startsWith('data-field')) {
      fieldContainerProps[key] = restProps[key];
    }
  });
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
