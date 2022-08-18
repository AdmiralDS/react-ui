import * as React from 'react';
import { SuggestInput as Suggest, SuggestInputProps } from '#src/components/input';
import { Field, FieldOwnProps } from '#src/components/Field';
import { uid } from '#src/components/common/uid';
import { splitFormFieldDataAttributes } from '#src/components/common/utils/splitDataAttributes';

export interface SuggestFieldProps extends SuggestInputProps, Omit<FieldOwnProps, 'inputRef'> {}

export const SuggestField = React.forwardRef<HTMLInputElement, SuggestFieldProps>((props, ref) => {
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

  splitFormFieldDataAttributes(restProps, fieldContainerProps);

  const suggestProps = {
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
      <Suggest {...suggestProps} />
    </Field>
  );
});

SuggestField.displayName = 'SuggestField';
