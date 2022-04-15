import React, { HTMLAttributes } from 'react';
import type { FC } from 'react';

import StepperContext from '#src/components-ver2/Stepper/StepperContext';
import { List } from '#src/components-ver2/Stepper/style';

export * from '#src/components-ver2/Stepper/StepContent';
export * from '#src/components-ver2/Stepper/Step';

export type Orientation = 'horizontal' | 'vertical';

export interface StepperProps extends HTMLAttributes<HTMLUListElement> {
  /** Ориентация компонента */
  orientation?: Orientation;
  /** Индекс активного шага, нумерация шагов начинается с 0.
   * Этот параметр будет перезаписан, если какому-то шагу задан параметр active равный true
   */
  activeStep: number;
  /** Количество строк в шаге, все шаги по высоте вмещают одинаковое количество строк */
  lineClamp?: 1 | 2 | 3;
  /** Ширина шага */
  stepWidth?: number | string;
  /** В последнем шаге опционально можно выключать статусную полосу */
  hideLastStepLine?: boolean;
}

export const Stepper: FC<StepperProps> = ({
  orientation = 'horizontal',
  activeStep = -1,
  lineClamp = 3,
  stepWidth,
  hideLastStepLine = false,
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
          hideLine: index === React.Children.toArray(children).length - 1 && hideLastStepLine,
          ...step.props,
        })
      : React.cloneElement(step, {
          index,
          role: 'listitem',
          hideLine: index === React.Children.toArray(children).length - 1 && hideLastStepLine,
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

Stepper.displayName = 'Stepper';
