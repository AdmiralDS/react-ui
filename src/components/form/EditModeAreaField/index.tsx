import { forwardRef, useRef } from 'react';

import { uid } from '#src/components/common/uid';
import { refSetter } from '#src/components/common/utils/refSetter';
import type { FieldOwnProps } from '#src/components/Field';
import { Field } from '#src/components/Field';
import type { EditModeAreaProps } from '#src/components/input';
import { EditModeArea } from '#src/components/input';
import {
  passFormFieldContainerDataAttributes,
  passFormFieldDataAttributes,
} from '#src/components/common/utils/splitDataAttributes';

export interface EditModeAreaFieldProps
  extends EditModeAreaProps,
    Omit<FieldOwnProps, 'inputRef' | 'additionalLabel'> {}

export const EditModeAreaField = forwardRef<HTMLTextAreaElement, EditModeAreaFieldProps>((props, ref) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);
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

  passFormFieldDataAttributes(restProps, fieldContainerProps);
  passFormFieldContainerDataAttributes(restProps, fieldContainerProps);

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
      <EditModeArea {...inputProps} />
    </Field>
  );
});

EditModeAreaField.displayName = 'EditModeAreaField';
