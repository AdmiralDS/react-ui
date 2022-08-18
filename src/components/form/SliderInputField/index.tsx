import { uid } from '#src/components/common/uid';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Field, FieldOwnProps } from '#src/components/Field';
import { SliderInput, SliderInputProps } from '#src/components/input/SliderInput';
import * as React from 'react';
import { splitFormFieldDataAttributes } from '#src/components/common/utils/splitDataAttributes';

export interface SliderInputFieldProps extends SliderInputProps, Omit<FieldOwnProps, 'inputRef'> {}

export const SliderInputField = React.forwardRef<HTMLInputElement, SliderInputFieldProps>((props, ref) => {
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
    skeleton,
    'data-field-id': id,
    'data-field-name': restProps.name,
  } as Record<string, any>;

  splitFormFieldDataAttributes(restProps, fieldContainerProps);

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
      <SliderInput {...inputProps} />
    </Field>
  );
});

SliderInputField.displayName = 'SliderInputField';
