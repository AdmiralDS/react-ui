import type { MultiSelectProps } from '#src/components/MultiSelect';
import * as React from 'react';
import { Field } from '#src/components/Field';
import { uid } from '#src/components/common/uid';
import { MultiSelect } from '#src/components/MultiSelect';

export interface MultiSelectFieldProps
  extends MultiSelectProps,
    Omit<React.ComponentPropsWithoutRef<typeof Field>, 'onChange'> {}

/**
 * @deprecated Используйте SearchSelectField
 * @type {React.ForwardRefExoticComponent<React.PropsWithoutRef<MultiSelectFieldProps> & React.RefAttributes<HTMLDivElement>>}
 */
export const MultiSelectField = React.forwardRef<HTMLDivElement, MultiSelectFieldProps>((props, ref) => {
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
  };
  const selectProps = { ref, id, disabled, ...restProps };
  return (
    <Field {...fieldContainerProps}>
      <MultiSelect {...selectProps} />
    </Field>
  );
});

MultiSelectField.displayName = 'MultiSelectField';
