import { uid } from '#src/components/common/uid';
import type { FieldOwnProps, FieldContainerProps, FieldDataAttributes } from '#src/components/Field';
import { Field } from '#src/components/Field';
import type { PhoneNumberInputProps } from '#src/components/input/PhoneNumberInput';
import { PhoneNumberInput } from '#src/components/input/PhoneNumberInput';
import * as React from 'react';
import {
  passFormFieldContainerDataAttributes,
  passFormFieldDataAttributes,
} from '#src/components/common/utils/splitDataAttributes';

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
    additionalLabel,
    id = uid(),
    disabled,
    displayCharacterCounter,
    characterCounterVisibilityThreshold,
    skeleton,
    ...restProps
  } = props;
  const fieldContainerProps: FieldContainerProps &
    FieldDataAttributes & {
      ref?: React.Ref<HTMLDivElement>;
    } = {
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
    ref: inputRef,
    skeleton,
    'data-field-id': id,
    'data-field-name': restProps.name,
  };

  passFormFieldDataAttributes(restProps, fieldContainerProps);
  passFormFieldContainerDataAttributes(restProps, fieldContainerProps);

  const inputProps = {
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
      <PhoneNumberInput {...inputProps} />
    </Field>
  );
});

PhoneInputField.displayName = 'PhoneInputField';
