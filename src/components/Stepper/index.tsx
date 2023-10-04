import { Children, cloneElement, isValidElement, useRef, useMemo, useEffect } from 'react';
import type { FC, HTMLAttributes } from 'react';

import { StepperContext } from './StepperContext';
import { List } from './style';
import type { Orientation } from './type';

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

export * from './type';
export * from './Step';
export * from './StepContent';
export * from './StepperContext';

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
  const listRef = useRef<HTMLUListElement>(null);
  const steps = Children.toArray(children).map((step, index) => {
    if (!isValidElement(step)) {
      return null;
    }
    return activeStep === index
      ? cloneElement(step, {
          index,
          role: 'listitem',
          'aria-current': 'step',
          hideLine: index === Children.toArray(children).length - 1 && hideLastStepLine,
          ...step.props,
        })
      : cloneElement(step, {
          index,
          role: 'listitem',
          hideLine: index === Children.toArray(children).length - 1 && hideLastStepLine,
          ...step.props,
        });
  });
  const stepsAmount = steps.length;
  const contextValue = useMemo(
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

  useEffect(() => {
    if (listRef.current && mobile && orientation === 'horizontal') {
      const activeNode = (listRef.current.childNodes[activeStep] || listRef.current.firstChild) as HTMLElement;
      listRef.current.scrollLeft = activeStep === 0 ? activeNode.offsetLeft : activeNode.offsetLeft - 16;
    }
  }, [activeStep, steps]);

  return (
    <StepperContext.Provider value={contextValue}>
      <List ref={listRef} role="list" $orientation={orientation} {...props}>
        {steps}
      </List>
    </StepperContext.Provider>
  );
};

Stepper.displayName = 'Stepper';
