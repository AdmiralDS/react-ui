import * as React from 'react';
import { uid } from '#src/components/common/uid';
import { refSetter } from '#src/components/common/utils/refSetter';
import type { FieldOwnProps } from '#src/components/Field';
import { Field } from '#src/components/Field';
import type { TreeSelectProps } from '#src/components/input';
import { TreeSelect } from '#src/components/input';
import {
  passFormFieldContainerDataAttributes,
  passFormFieldDataAttributes,
} from '#src/components/common/utils/splitDataAttributes';

export interface TreeSelectFieldProps
  extends TreeSelectProps,
    Omit<FieldOwnProps, 'inputRef' | 'maxLength' | 'displayCharacterCounter' | 'characterCounterVisibilityThreshold'> {}

export const TreeSelectField = React.forwardRef<HTMLInputElement, TreeSelectFieldProps>((props, ref) => {
  const inputRef = React.useRef<HTMLInputElement>(null);

  const {
    className,
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
    status,
    disabled,
    skeleton,
    ...restProps,
  };

  return (
    <Field {...fieldContainerProps}>
      <TreeSelect {...inputProps} />
    </Field>
  );
});

TreeSelectField.displayName = 'TreeSelectField';
