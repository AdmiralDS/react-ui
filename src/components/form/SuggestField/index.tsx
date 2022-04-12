import * as React from 'react';
import { SuggestInput as Suggest, SuggestInputProps } from '#/components/input';
import { Field, FieldOwnProps } from '#/components/Field';
import { uid } from '#/components/common/uid';

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
  const suggestProps = {
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
      <Suggest {...suggestProps} />
    </Field>
  );
});

SuggestField.displayName = 'SuggestField';
