import * as React from 'react';
import { TimeInput, TimeInputProps } from '#/components/input';
import { Field, FieldOwnProps } from '#/components/Field';
import { uid } from '#/components/common/uid';

export interface TimeFieldProps extends TimeInputProps, Omit<FieldOwnProps, 'inputRef'> {}

export const TimeField = React.forwardRef<HTMLInputElement, TimeFieldProps>((props, ref) => {
  const fieldRef = React.useRef(null);
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
    ref: fieldRef,
  };
  const TimeProps = {
    ref,
    id,
    'aria-required': required,
    status,
    disabled,
    ...restProps,
    portalTargetRef: fieldRef,
  };
  return (
    <Field {...fieldContainerProps}>
      <TimeInput {...TimeProps} />
    </Field>
  );
});

TimeField.displayName = 'TimeField';
