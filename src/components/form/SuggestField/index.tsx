import * as React from 'react';
import { SuggestInput as Suggest, SuggestInputProps } from '#src/components/input';
import { Field, FieldOwnProps } from '#src/components/Field';
import { uid } from '#src/components/common/uid';
import { passFormFieldContainerDataAttributes } from '#src/components/common/utils/splitDataAttributes';

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

  (Object.keys(restProps) as Array<keyof typeof restProps>).forEach((key) => {
    if (key.startsWith('data-field')) {
      fieldContainerProps[key] = restProps[key];
    }
  });

  passFormFieldContainerDataAttributes(restProps, fieldContainerProps);

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
