import { uid } from '#src/components/common/uid';
import type { FieldOwnProps } from '#src/components/Field';
import { Field as FieldComponent } from '#src/components/Field';
import type { SliderRangeProps } from '#src/components/input/SliderRange';
import { SliderRange } from '#src/components/input/SliderRange';
import * as React from 'react';
import styled from 'styled-components';
import {
  passFormFieldContainerDataAttributes,
  passFormFieldDataAttributes,
} from '#src/components/common/utils/splitDataAttributes';

const Field = styled(FieldComponent)`
  overflow: visible;
`;

export interface SliderRangeFieldProps extends SliderRangeProps, Omit<FieldOwnProps, 'inputRef'> {
  name?: string;
}

export const SliderRangeField: React.FC<SliderRangeFieldProps> = (props) => {
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
    skeleton,
    'data-field-id': id,
    'data-field-name': restProps.name,
  } as Record<string, any>;

  passFormFieldDataAttributes(restProps, fieldContainerProps);
  passFormFieldContainerDataAttributes(restProps, fieldContainerProps);

  const componentProps = {
    id,
    disabled,
    skeleton,
    ...restProps,
  };

  return (
    <Field {...fieldContainerProps}>
      <SliderRange {...componentProps} />
    </Field>
  );
};

SliderRangeField.displayName = 'SliderRangeField';
