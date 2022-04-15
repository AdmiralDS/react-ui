import type { FC } from 'react';
import React, { Children, cloneElement, HTMLAttributes, isValidElement } from 'react';

import { CheckboxGroupWrapper } from './CheckboxWrapper';

import type { CheckboxDimension } from '../Checkbox/CheckboxDimension';

export interface CheckboxGroupProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  dimension?: CheckboxDimension;
  disabled?: boolean;
}

export const CheckboxGroup: FC<CheckboxGroupProps> = ({
  children,
  label,
  disabled = false,
  dimension = 'm',
  ...props
}) => {
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
    <CheckboxGroupWrapper disabled={disabled} dimension={dimension} {...props}>
      {label && label}
      {renderGroup()}
    </CheckboxGroupWrapper>
  );
};

CheckboxGroup.displayName = 'CheckboxGroup';
