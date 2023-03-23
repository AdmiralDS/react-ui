import { uid } from '#src/components/common/uid';
import { refSetter } from '#src/components/common/utils/refSetter';
import type { FieldOwnProps } from '#src/components/Field';
import { Field as FieldComponent } from '#src/components/Field';
import type { SliderInputProps } from '#src/components/input/SliderInput';
import { SliderInput } from '#src/components/input/SliderInput';
import * as React from 'react';
import styled from 'styled-components';
import {
  passFormFieldContainerDataAttributes,
  passFormFieldDataAttributes,
} from '#src/components/common/utils/splitDataAttributes';

const Field = styled(FieldComponent)`
  overflow: visible;
`;

export interface SliderInputFieldProps extends SliderInputProps, Omit<FieldOwnProps, 'inputRef'> {}

export const SliderInputField = React.forwardRef<HTMLInputElement, SliderInputFieldProps>((props, ref) => {
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
    skeleton,
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
    skeleton,
    ...restProps,
  };

  return (
    <Field {...fieldContainerProps}>
      <SliderInput {...inputProps} />
    </Field>
  );
});

SliderInputField.displayName = 'SliderInputField';
