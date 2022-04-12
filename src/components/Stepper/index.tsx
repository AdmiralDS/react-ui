import React, { HTMLAttributes } from 'react';
import type { FC } from 'react';

import StepperContext from './StepperContext';
import { List } from './style';

export * from './StepContent';
export * from './Step';

export type Orientation = 'horizontal' | 'vertical';

export interface StepperProps extends HTMLAttributes<HTMLUListElement> {
  /** Ориентация компонента */
  orientation?: Orientation;
  /** Индекс активного шага, нумерация шагов начинается с 0 */
  activeStep: number;
  /** Количество строк в шаге, все шаги по высоте вмещают одинаковое количество строк */
  lineClamp?: 1 | 2 | 3;
  /** Ширина шага */
  stepWidth?: number | string;
}

export const Stepper: FC<StepperProps> = ({
  orientation = 'horizontal',
  activeStep = -1,
  lineClamp = 3,
  stepWidth,
  children,
  ...props
}) => {
  const listRef = React.useRef<any>();
  const steps = React.Children.toArray(children).map((step, index) => {
    if (!React.isValidElement(step)) {
      return null;
    }
    return activeStep === index
      ? React.cloneElement(step, {
          index,
          role: 'listitem',
          'aria-current': 'step',
          ...step.props,
        })
      : React.cloneElement(step, {
          index,
          role: 'listitem',
          ...step.props,
        });
  });
  const contextValue = React.useMemo(
    () => ({ activeStep, orientation, lineClamp, stepWidth }),
    [activeStep, orientation, lineClamp, stepWidth],
  );

  React.useEffect(() => {
    if (listRef.current && orientation === 'horizontal') {
      const activeNode = listRef.current.childNodes[activeStep] || listRef.current.firstChild;
      listRef.current.scrollLeft = activeStep === 0 ? activeNode.offsetLeft : activeNode.offsetLeft - 16;
    }
  }, [activeStep, listRef.current, steps]);

  return (
    <StepperContext.Provider value={contextValue}>
      <List ref={listRef} role="list" orientation={orientation} {...props}>
        {steps}
      </List>
    </StepperContext.Provider>
  );
};
