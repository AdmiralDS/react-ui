import type { SearchSelectProps } from '#/components/input/SearchSelect';
import { SearchSelect as BaseSelect } from '#/components/input/SearchSelect';
import * as React from 'react';
import { Field, FieldOwnProps } from '#/components/Field';
import styled from 'styled-components';
import { uid } from '#/components/common/uid';

const Select = styled(BaseSelect)`
  [data-status='error'] & {
    border-color: ${(props) => props.theme.color.status.danger};
  }
`;

export interface SearchSelectFieldProps
  extends SearchSelectProps,
    Omit<FieldOwnProps, 'inputRef' | 'onChange' | 'displayCharacterCounter' | 'maxLength'> {}

export const SearchSelectField = React.forwardRef<HTMLSelectElement, SearchSelectFieldProps>((props, ref) => {
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

SearchSelectField.displayName = 'SearchSelectField';
