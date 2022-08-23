import * as React from 'react';
import { TimeInput, TimeInputProps } from '#src/components/input';
import { Field, FieldOwnProps } from '#src/components/Field';
import { uid } from '#src/components/common/uid';
import { passFormFieldContainerDataAttributes } from '#src/components/common/utils/splitDataAttributes';

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
    ref: fieldRef,
    skeleton,
    'data-field-id': id,
    'data-field-name': restProps.name,
  } as Record<string, any>;

  (Object.keys(restProps) as Array<keyof typeof restProps>).forEach((key) => {
    if (key.startsWith('data-field')) {
      fieldContainerProps[key] = restProps[key];
    }
  });

  passFormFieldContainerDataAttributes(restProps, fieldContainerProps);

  const TimeProps = {
    ref,
    id,
    'aria-required': required,
    status,
    disabled,
    skeleton,
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
