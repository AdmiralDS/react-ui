import type { SelectProps } from '#src/components/Select';
import { Select as BaseSelect } from '#src/components/Select';
import * as React from 'react';
import { Field, FieldOwnProps } from '#src/components/Field';
import styled from 'styled-components';
import { uid } from '#src/components/common/uid';

const Select = styled(BaseSelect)`
  [data-status='error'] & {
    border-color: ${(props) => props.theme.color.status.danger};
  }
`;

export interface SelectFieldProps
  extends SelectProps,
    Omit<FieldOwnProps, 'inputRef' | 'onChange' | 'displayCharacterCounter' | 'maxLength'> {}

/**
 * @deprecated Используйте SearchSelectField
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<SelectFieldProps> & React.RefAttributes<HTMLDivElement>>}
 */
export const SelectField = React.forwardRef<HTMLDivElement, SelectFieldProps>((props, ref) => {
  const fieldRef = React.useRef(null);
  const { className, displayInline, status, required, extraText, label, id = uid(), disabled, ...restProps } = props;
  const fieldContainerProps = {
    className,
    extraText,
    status,
    required,
    label,
    id,
    displayInline,
    disabled,
    ref: fieldRef,
  };
  const selectProps = {
    ref,
    id,
    'aria-required': required,
    status,
    disabled,
    ...restProps,
    portalTargetRef: fieldRef,
  };
  return (
    <Field {...fieldContainerProps}>
      <Select {...selectProps} />
    </Field>
  );
});

SelectField.displayName = 'SelectField';
