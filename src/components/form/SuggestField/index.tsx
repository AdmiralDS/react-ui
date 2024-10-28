import * as React from 'react';
import type { SuggestInputProps } from '#src/components/input';
import { SuggestInput as Suggest } from '#src/components/input';
import type { FieldOwnProps } from '#src/components/Field';
import { Field } from '#src/components/Field';
import { uid } from '#src/components/common/uid';
import {
  passFormFieldContainerDataAttributes,
  passFormFieldDataAttributes,
} from '#src/components/common/utils/splitDataAttributes';
import { refSetter } from '#src/components/common/utils/refSetter';

export interface SuggestFieldProps extends SuggestInputProps, Omit<FieldOwnProps, 'inputRef'> {}

export const SuggestField = React.forwardRef<HTMLInputElement, SuggestFieldProps>((props, ref) => {
  const fieldRef = React.useRef(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
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
    characterCounterVisibilityThreshold,
    maxLength,
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
    characterCounterVisibilityThreshold,
    maxLength,
    ref: fieldRef,
    inputRef,
    skeleton,
    'data-field-id': id,
    'data-field-name': restProps.name,
  } as Record<string, any>;

  passFormFieldDataAttributes(restProps, fieldContainerProps);
  passFormFieldContainerDataAttributes(restProps, fieldContainerProps);

  const suggestProps = {
    ref: refSetter(ref, inputRef),
    id,
    'aria-required': required,
    status,
    maxLength,
    disabled,
    skeleton,
    ...restProps,
    portalTargetRef: fieldRef,
  };

  return (
    <Field {...fieldContainerProps}>
      <Suggest {...suggestProps} />
    </Field>
  );
});

SuggestField.displayName = 'SuggestField';
