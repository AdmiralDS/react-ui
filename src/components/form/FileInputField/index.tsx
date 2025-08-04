import { uid } from '#src/components/common/uid';
import { refSetter } from '#src/components/common/utils/refSetter';
import type { FieldOwnProps } from '#src/components/Field';
import { Field as FieldComponent, ExtraTextContainer } from '#src/components/Field';
import type { FileInputProps } from '#src/components/input';
import { FileInput } from '#src/components/input';
import * as React from 'react';
import {
  passFormFieldContainerDataAttributes,
  passFormFieldDataAttributes,
} from '#src/components/common/utils/splitDataAttributes';
import styled from 'styled-components';

const Field = styled(FieldComponent)`
  & ${ExtraTextContainer} {
    padding-top: 20px;
  }
`;

export interface FileInputFieldProps
  extends Omit<FileInputProps, 'extraText' | 'status'>,
    Omit<FieldOwnProps, 'inputRef'> {}

export const FileInputField = React.forwardRef<HTMLInputElement, FileInputFieldProps>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const {
    className,
    maxLength,
    displayInline,
    status,
    required,
    extraText,
    label,
    additionalLabel,
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
    additionalLabel,
    id,
    displayInline,
    disabled,
    maxLength,
    inputRef,
    displayCharacterCounter,
    skeleton,
    'data-field-id': id,
    'data-field-name': restProps.name,
  } as const;

  passFormFieldDataAttributes(restProps, fieldContainerProps);
  passFormFieldContainerDataAttributes(restProps, fieldContainerProps);

  const inputProps = {
    ref: refSetter(ref, inputRef),
    id,
    'aria-required': required,
    disabled,
    maxLength,
    skeleton,
    ...restProps,
  } as const;

  return (
    <Field {...fieldContainerProps}>
      <FileInput {...inputProps} />
    </Field>
  );
});

FileInputField.displayName = 'FileInputField';
