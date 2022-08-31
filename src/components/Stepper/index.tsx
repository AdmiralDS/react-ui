import type { FC } from 'react';
import React, { HTMLAttributes } from 'react';

import StepperContext from '#src/components/Stepper/StepperContext';
import { List } from '#src/components/Stepper/style';

export * from '#src/components/Stepper/StepContent';
export * from '#src/components/Stepper/Step';

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
  /** Ширина шага
   * Если данный параметр не задан, то ширина шага будет адаптивной:
   * - при горизонтальной ориентации все шаги будут в равной степени делить между собой свободное пространство (ширину степпера);
   * - при вертикальной ориентации каждый шаг займет 100% ширины степпера.
   * То есть шаги будут пропорционально увеличиваться/уменьшаться при изменении ширины степпера.
   */
  stepWidth?: number | string;
  /** В последнем шаге опционально можно выключать статусную полосу */
  hideLastStepLine?: boolean;
  /** Мобильное отображение компонента
   * В мобильной версии компонента применяется только горизонтальный вариант компонента, ширина шагов фиксирована,
   * по мере прохождения шагов происходит автоматический скролл по горизонтали
   */
  mobile?: boolean;
}

export const Stepper: FC<StepperProps> = ({
  orientation = 'horizontal',
  activeStep = -1,
  lineClamp = 3,
  stepWidth,
  hideLastStepLine = false,
  mobile,
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
  const stepsAmount = steps.length;
  const contextValue = React.useMemo(
    () => ({
      activeStep,
      orientation,
      lineClamp,
      stepsAmount,
      stepWidth,
      mobile,
    }),
    [activeStep, orientation, lineClamp, stepWidth, stepsAmount, mobile],
  );

  React.useEffect(() => {
    if (listRef.current && mobile && orientation === 'horizontal') {
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
