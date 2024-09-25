import type { HTMLAttributes } from 'react';
import { Children, cloneElement, forwardRef, isValidElement } from 'react';

import { CheckboxGroupWrapper } from './CheckboxWrapper';

import type { CheckboxDimension } from '../Checkbox/CheckboxDimension';

export interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  dimension?: CheckboxDimension;
  disabled?: boolean;
}

export const CheckboxGroup = forwardRef<HTMLDivElement, CheckboxGroupProps>(
  ({ children, label, disabled = false, dimension = 'm', ...props }, ref) => {
    const renderGroup = () => {
      return Children.map(children, (child: React.ReactNode) => {
        if (!isValidElement(child)) {
          return null;
        }
        return cloneElement(child, {
          disabled: disabled || child.props.disabled,
          dimension: dimension,
          ...child.props,
        });
      });
    };
    return (
      <CheckboxGroupWrapper disabled={disabled} $dimension={dimension} ref={ref} {...props}>
        {label && label}
        {renderGroup()}
      </CheckboxGroupWrapper>
    );
  },
);

CheckboxGroup.displayName = 'CheckboxGroup';
