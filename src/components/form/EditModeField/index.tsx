import { uid } from '#/components/common/uid';
import { refSetter } from '#/components/common/utils/refSetter';
import { Field, FieldOwnProps } from '#/components/Field';
import { EditMode, EditModeProps } from '#/components/input';
import * as React from 'react';

export interface EditModeFieldProps extends EditModeProps, Omit<FieldOwnProps, 'inputRef'> {}

export const EditModeField = React.forwardRef<HTMLInputElement, EditModeFieldProps>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
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
      <EditMode {...inputProps} />
    </Field>
  );
});

EditModeField.displayName = 'EditModeField';
