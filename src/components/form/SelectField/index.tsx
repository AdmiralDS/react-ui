import { forwardRef } from 'react';
import styled from 'styled-components';
import type { SelectProps } from '#src/components/input/Select';
import { Select as BaseSelect } from '#src/components/input/Select';
import type { FieldOwnProps } from '#src/components/Field';
import { Field } from '#src/components/Field';
import {
  passFormFieldContainerDataAttributes,
  passFormFieldDataAttributes,
} from '#src/components/common/utils/splitDataAttributes';
import { useId } from '#src/components/common/hooks/useId';

const Select = styled(BaseSelect)`
  [data-status='error'] & {
    border-color: var(--admiral-color-Error_Error60Main, ${(p) => p.theme.color['Error/Error 60 Main']});
  }
`;

export interface SearchSelectFieldProps
  extends SelectProps,
    Omit<FieldOwnProps, 'inputRef' | 'onChange' | 'displayCharacterCounter' | 'maxLength'> {}

export const SelectField = forwardRef<HTMLSelectElement, SearchSelectFieldProps>((props, ref) => {
  const {
    className,
    displayInline,
    status,
    required,
    extraText,
    label,
    additionalLabel,
    id = useId(),
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
    skeleton,
    'data-field-id': id,
    'data-field-name': restProps.name,
  } as Record<string, any>;

  passFormFieldDataAttributes(restProps, fieldContainerProps);
  passFormFieldContainerDataAttributes(restProps, fieldContainerProps);

  const selectProps = {
    ref,
    id,
    'aria-required': required,
    status,
    disabled,
    skeleton,
    ...restProps,
  };
  return (
    <Field {...fieldContainerProps}>
      <Select {...selectProps} />
    </Field>
  );
});

SelectField.displayName = 'SelectField';
