import { uid } from '#src/components/common/uid';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Field, FieldOwnProps } from '#src/components/Field';
import { SliderInput, SliderInputProps } from '#src/components/input/SliderInput';
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
      <SliderInput {...inputProps} />
    </Field>
  );
});

SliderInputField.displayName = 'SliderInputField';
