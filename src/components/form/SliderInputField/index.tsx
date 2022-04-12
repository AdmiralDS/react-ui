import { uid } from '#/components/common/uid';
import { refSetter } from '#/components/common/utils/refSetter';
import { Field, FieldOwnProps } from '#/components/Field';
import { SliderInput, SliderInputProps } from '#/components/input/SliderInput';
import * as React from 'react';

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
    ...restProps,
  };

  return (
    <Field {...fieldContainerProps}>
      <SliderInput {...inputProps} />
    </Field>
  );
});

SliderInputField.displayName = 'SliderInputField';
