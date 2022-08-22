import { uid } from '#src/components/common/uid';
import { Field, FieldOwnProps } from '#src/components/Field';
import { SliderRange, SliderRangeProps } from '#src/components/input/SliderRange';
import * as React from 'react';
import { FORM_FIELD_DATA_ATTRIBUTE, passFormFieldContainerDataAttributes } from '#src/components/common/utils/splitDataAttributes';

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

  const input1Props = {} as Record<string, any>;
  const input2Props = {} as Record<string, any>;
  (Object.keys(restProps) as Array<keyof typeof restProps>).forEach((key) => {
    if (key.startsWith(FORM_FIELD_DATA_ATTRIBUTE)) {
      const internalKey1 = 'data-input1' + key.slice(FORM_FIELD_DATA_ATTRIBUTE.length);
      const internalKey2 = 'data-input2' + key.slice(FORM_FIELD_DATA_ATTRIBUTE.length);
      input1Props[internalKey1] = restProps[key];
      input2Props[internalKey2] = restProps[key];
    }
  });
  passFormFieldContainerDataAttributes(restProps, fieldContainerProps);

  const componentProps = {
    id,
    disabled,
    skeleton,
    input1: input1Props,
    input2: input2Props,
    ...restProps,
  };

  return (
    <Field {...fieldContainerProps}>
      <SliderRange {...componentProps} />
    </Field>
  );
};

SliderRangeField.displayName = 'SliderRangeField';
