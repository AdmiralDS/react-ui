import { uid } from '#src/components/common/uid';
import { Field, FieldOwnProps } from '#src/components/Field';
import { SliderRange, SliderRangeProps } from '#src/components/input/SliderRange';
import * as React from 'react';

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
    skeleton,
    'data-field-id': id,
    'data-field-name': restProps.name,
  } as Record<string, any>;

  (Object.keys(restProps) as Array<keyof typeof restProps>).forEach((key) => {
    if (key.startsWith('data-field')) {
      fieldContainerProps[key] = restProps[key];
    }
  });

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
