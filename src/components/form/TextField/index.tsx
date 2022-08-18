import { refSetter } from '#src/components/common/utils/refSetter';
import * as React from 'react';
import { TextArea as Input, TextAreaProps } from '#src/components/input';
import { Field, FieldOwnProps } from '#src/components/Field';
import { uid } from '#src/components/common/uid';
import { splitFormFieldDataAttributes } from '#src/components/common/utils/splitDataAttributes';

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
      <Input {...inputProps} />
    </Field>
  );
});

TextField.displayName = 'TextField';
