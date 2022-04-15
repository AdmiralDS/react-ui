import { uid } from '#src/components/common/uid';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Field, FieldOwnProps } from '#src/components-ver2/Field';
import { NumberInput, NumberInputProps } from '#src/components-ver2/input/NumberInput';
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
    displayCharacterCounter,
    'data-field-id': id,
    'data-field-name': restProps.name,
  } as Record<string, any>;

  (Object.keys(restProps) as Array<keyof typeof restProps>).forEach((key) => {
    if (key.startsWith('data-field')) {
      fieldContainerProps[key] = restProps[key];
    }
  });
  const inputProps = {
    ref: refSetter(ref, inputRef),
    id,
    'aria-required': required,
    status,
    disabled,
    maxLength,
    ...restProps,
  };

  return (
    <Field {...fieldContainerProps}>
      <NumberInput {...inputProps} />
    </Field>
  );
});

NumberInputField.displayName = 'NumberInputField';
