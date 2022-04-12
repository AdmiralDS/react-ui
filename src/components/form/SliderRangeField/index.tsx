import { uid } from '#/components/common/uid';
import { Field, FieldOwnProps } from '#/components/Field';
import { SliderRange, SliderRangeProps } from '#/components/input/SliderRange';
import * as React from 'react';

export interface SliderRangeFieldProps extends SliderRangeProps, Omit<FieldOwnProps, 'inputRef'> {}

export const SliderRangeField: React.FC<SliderRangeFieldProps> = (props) => {
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
  };
  const componentProps = {
    id,
    disabled,
    ...restProps,
  };

  return (
    <Field {...fieldContainerProps}>
      <SliderRange {...componentProps} />
    </Field>
  );
};

SliderRangeField.displayName = 'SliderRangeField';
