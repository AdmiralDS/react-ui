import { Children, cloneElement, isValidElement, useRef, useMemo, useEffect } from 'react';
import type { FC, HTMLAttributes } from 'react';

import { StepperContext } from './StepperContext';
import {
  List,
  ProgressWrapper,
  ProgressHeader,
  ProgressActiveStep,
  ProgressText,
  ProgressBarWrapper,
  ProgressBar,
  ProgressNextStep,
} from './style';
import type { Orientation, LineClamp, ProgressMode } from './type';
import {
  convertNumberToIntegerPercent,
  setFirstLetterToUpperCase,
  setFirstLetterToLowerCase,
  getStepsPluralForm,
} from './utils';
import { useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

export interface StepperProps extends HTMLAttributes<HTMLUListElement> {
  /** Ориентация компонента */
  orientation?: Orientation;
  /** Индекс активного шага, нумерация шагов начинается с 0.
   * Этот параметр будет перезаписан, если какому-то шагу задан параметр active равный true
   */
  activeStep: number;
  /** Количество строк в шаге, все шаги по высоте вмещают одинаковое количество строк */
  lineClamp?: LineClamp;
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
  /** Включить режим отображения Progress для большого количества шагов */
  progressMode?: boolean;
  /** Отображение/скрытие подписи о следующем шаге в режиме Progress */
  displayNextStepName?: boolean;
  /** Формат отображения прогресса: 'percentage' - проценты, 'steps' - в шагах */
  progressFormat?: ProgressMode;
  /** Объект локализации для режима Progress */
  progressLocale?: {
    /** Название шага, допускает 2 или 3 формы, например, ['шаг', 'шагов'] или ['шаг', 'шага', 'шагов'] */
    stepName?: [string, string] | [string, string, string];
    /** Функция, возвращающая текст, поясняющий, на каком шаге из скольки шагов находится пользователь */
    progressText?: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string;
    /** Функция, которая формирует подпись о следующем шаге, на основе nextStepName */
    renderNextStepName?: (nextStepName: string) => React.ReactNode;
  };
}

export * from './type';
export * from './Step';
export * from './StepContent';
export * from './StepperContext';
export * from './utils';

export const Stepper: FC<StepperProps> = ({
  orientation = 'horizontal',
  activeStep = -1,
  lineClamp = 3,
  stepWidth,
  hideLastStepLine = false,
  mobile,
  progressMode = false,
  displayNextStepName = true,
  progressFormat = 'steps',
  progressLocale,
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
      progressMode,
      displayNextStepName,
      progressFormat,
      progressLocale,
    }),
    [
      activeStep,
      orientation,
      lineClamp,
      stepWidth,
      stepsAmount,
      mobile,
      progressMode,
      displayNextStepName,
      progressFormat,
      progressLocale,
    ],
  );

  useEffect(() => {
    if (listRef.current && mobile && orientation === 'horizontal') {
      const activeNode = (listRef.current.childNodes[activeStep] || listRef.current.firstChild) as HTMLElement;
      listRef.current.scrollLeft = activeStep === 0 ? activeNode.offsetLeft : activeNode.offsetLeft - 16;
    }
  }, [activeStep, steps]);

  // Progress Mode Logic
  if (progressMode) {
    const theme = useTheme() || LIGHT_THEME;
    const stepNames = Children.toArray(children)
      .map((step) => {
        if (isValidElement(step) && typeof step.props.children === 'string') {
          return step.props.children;
        }
        return '';
      })
      .filter(Boolean);

    const stepsAmount = stepNames.length;
    const currentStep = Math.max(0, Math.min(activeStep, stepsAmount - 1));
    const currentStepNumber = currentStep + 1;
    const nextStep = currentStep + 1;
    const nextStepName = stepNames[nextStep];

    // Локализация
    const stepName = progressLocale?.stepName ||
      theme.locales[theme.currentLocale].progressStepper?.stepName || ['шага', 'шагов', 'шагов'];
    const progressText =
      progressLocale?.progressText ||
      theme.locales[theme.currentLocale].progressStepper?.progressText ||
      ((activeStepNumber: number, stepsAmount: number, stepNamePlural: string) =>
        `${activeStepNumber} из ${stepsAmount} ${stepNamePlural}`);
    const renderNextStepName =
      progressLocale?.renderNextStepName ||
      theme.locales[theme.currentLocale].progressStepper?.renderNextStepName ||
      ((nextStepName: string) => `Далее - ${setFirstLetterToLowerCase(nextStepName)}`);

    const progressPercentage = convertNumberToIntegerPercent(currentStepNumber, stepsAmount);
    const stepNamePlural = getStepsPluralForm(stepsAmount, stepName);
    const progressTextContent =
      progressFormat === 'percentage'
        ? `${progressPercentage}%`
        : progressText(currentStepNumber, stepsAmount, stepNamePlural);

    return (
      <StepperContext.Provider value={contextValue}>
        <ProgressWrapper className={props.className} style={props.style} data-testid="progress-wrapper">
          <ProgressHeader $mobile={mobile} aria-hidden>
            <ProgressActiveStep $lineClamp={lineClamp} data-testid="progress-active-step">
              {setFirstLetterToUpperCase(stepNames[currentStep])}
            </ProgressActiveStep>
            <ProgressText data-testid="progress-text">{progressTextContent}</ProgressText>
          </ProgressHeader>
          <ProgressBarWrapper>
            <ProgressBar
              tabIndex={0}
              role="progressbar"
              aria-valuemin={0}
              aria-valuemax={stepsAmount}
              aria-valuenow={currentStepNumber}
              aria-valuetext={`${stepName[0]} ${currentStepNumber}: ${stepNames[currentStep]}`}
              style={{ width: `${progressPercentage}%` }}
            />
          </ProgressBarWrapper>
          {displayNextStepName && nextStepName && (
            <ProgressNextStep $lineClamp={lineClamp} aria-hidden data-testid="progress-next-step">
              {renderNextStepName(setFirstLetterToLowerCase(nextStepName))}
            </ProgressNextStep>
          )}
        </ProgressWrapper>
      </StepperContext.Provider>
    );
  }

  return (
    <StepperContext.Provider value={contextValue}>
      <List ref={listRef} role="list" $orientation={orientation} {...props}>
        {steps}
      </List>
    </StepperContext.Provider>
  );
};

Stepper.displayName = 'Stepper';
