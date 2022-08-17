import { uid } from '#src/components/common/uid';
import { Field, FieldOwnProps } from '#src/components/Field';
import { PhoneNumberInput, PhoneNumberInputProps } from '#src/components/input/PhoneNumberInput';
import * as React from 'react';
import { splitDataAttributes } from '#src/components/common/utils/splitDataAttributes';

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
    displayCharacterCounter,
    ref: inputRef,
    skeleton,
    'data-field-id': id,
    'data-field-name': restProps.name,
  } as Record<string, any>;

  splitDataAttributes(restProps, fieldContainerProps);

  const inputProps = {
    ref,
    id,
    'aria-required': required,
    status,
    disabled,
    skeleton,
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
