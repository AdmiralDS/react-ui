import type { FC, HTMLAttributes } from 'react';
import { Children, cloneElement, isValidElement } from 'react';

import { CompositeWrapper } from './CompositeWrapper';
import type { CheckboxDimension } from '../Checkbox/CheckboxDimension';

export interface CheckboxCompositeGroupProps extends HTMLAttributes<HTMLDivElement> {
  dimension?: CheckboxDimension;
  disabled?: boolean;
}

export const CheckboxCompositeGroup: FC<CheckboxCompositeGroupProps> = ({
  children,
  disabled = false,
  dimension = 'm',
  ...props
}) => {
  const renderCheckboxGroup = () => {
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
    <CompositeWrapper $dimension={dimension} disabled={disabled} {...props}>
      {renderCheckboxGroup()}
    </CompositeWrapper>
  );
};

CheckboxCompositeGroup.displayName = 'CheckboxCompositeGroup';
