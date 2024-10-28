import { refSetter } from '#src/components/common/utils/refSetter';
import * as React from 'react';
import type { TextAreaProps } from '#src/components/input';
import { TextArea as Input } from '#src/components/input';
import type { FieldOwnProps } from '#src/components/Field';
import { Field } from '#src/components/Field';
import { uid } from '#src/components/common/uid';
import {
  passFormFieldContainerDataAttributes,
  passFormFieldDataAttributes,
} from '#src/components/common/utils/splitDataAttributes';

export interface TextFieldProps extends TextAreaProps, Omit<FieldOwnProps, 'inputRef'> {}

export const TextField = React.forwardRef<HTMLTextAreaElement, TextFieldProps>((props, ref) => {
  const inputRef = React.useRef<HTMLTextAreaElement>(null);
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
    characterCounterVisibilityThreshold,
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
    characterCounterVisibilityThreshold,
    skeleton,
    'data-field-id': id,
    'data-field-name': restProps.name,
  } as Record<string, any>;

  passFormFieldDataAttributes(restProps, fieldContainerProps);
  passFormFieldContainerDataAttributes(restProps, fieldContainerProps);

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

TextField.displayName = 'TextField';
