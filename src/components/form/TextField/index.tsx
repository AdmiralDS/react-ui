import { refSetter } from '#/components/common/utils/refSetter';
import * as React from 'react';
import { TextArea as Input, TextAreaProps } from '#/components/input';
import { Field, FieldOwnProps } from '#/components/Field';
import { uid } from '#/components/common/uid';

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
      <Input {...inputProps} />
    </Field>
  );
});

TextField.displayName = 'TextField';
