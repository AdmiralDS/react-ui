import React, { HTMLAttributes } from 'react';
import type { FC } from 'react';
import styled from 'styled-components';
import { typography } from '#/components/Typography';

import {
  convertNumberToIntegerPercent,
  fitLimit,
  getPlural,
  setFirstLetterToLowerCase,
  setFirstLetterToUpperCase,
} from './utils';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 388px;
`;

const ProgressWrapper = styled.div`
  display: flex;
  overflow: hidden;
  height: 4px;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.color.background.tertiary};
`;

const Progress = styled.div<{ percent: number }>`
  width: ${({ percent }) => percent}%;
  background-color: ${({ theme }) => theme.color.basic.primary};
`;

const Header = styled.div<{ mobile?: boolean }>`
  display: flex;
  flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
  ${({ mobile }) => !mobile && '  justify-content: space-between;'}
  margin-bottom: 8px;
`;

const ActiveStep = styled.div`
  ${typography['Additional/S']}
  color: ${({ theme }) => theme.color.text.primary};
`;

const ProgressText = styled.div`
  white-space: nowrap;
  flex-shrink: 0;
  color: ${({ theme }) => theme.color.text.secondary};
  ${typography['Caption/XS']}
`;

const NextStep = styled.div`
  width: 100%;
  align-text: left;
  margin-top: 8px;
  color: ${({ theme }) => theme.color.text.secondary};
  ${typography['Caption/XS']}
`;

export interface ProgressStepperProps extends HTMLAttributes<HTMLDivElement> {
  /** Массив шагов */
  steps: string[];
  /** Номер активного шага, соответствует индексу шага в массиве */
  activeStep?: number;
  /** Название шага: массив слов во множественном числе для чисел (1, 4, 5), например, ['яблоко', 'яблока', 'яблок'] */
  stepName?: string[];
  /** Функция, которая формирует подпись о следующем шаге, на основе nextStepName */
  renderNextStepName?: (nextStepName: string) => void;
  /** Отображение/скрытие подписи о следующем шаге */
  displayNextStepName?: boolean;
  /** Мобильная версия компонента */
  mobile?: boolean;
}

export const ProgressStepper: FC<ProgressStepperProps> = ({
  steps,
  activeStep: activeStepProp = -1,
  stepName = ['шаг', 'шага', 'шагов'],
  renderNextStepName,
  displayNextStepName = true,
  mobile = false,
  ...props
}) => {
  const stepsAmount = steps.length;
  const activeStep = fitLimit(0, stepsAmount, activeStepProp) ? activeStepProp : -1;
  const activeStepNumber = activeStep + 1;
  const nextStep = activeStep + 1;
  const nextStepContent =
    renderNextStepName?.(steps[nextStep]) || 'Далее - ' + setFirstLetterToLowerCase(steps[nextStep]);

  const fixedStepName = getPlural(stepName)(1);
  const fixedStepNamePlural = getPlural(stepName)(5);

  return (
    <Wrapper {...props}>
      <Header mobile={mobile} aria-hidden>
        <ActiveStep>{setFirstLetterToUpperCase(steps[activeStep])}</ActiveStep>
        <ProgressText>
          {activeStepNumber} из {stepsAmount} {fixedStepNamePlural?.toLowerCase()}
        </ProgressText>
      </Header>
      <ProgressWrapper>
        <Progress
          tabIndex={0}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={stepsAmount}
          aria-valuenow={activeStepNumber}
          aria-valuetext={`${fixedStepName} ${activeStepNumber}: ${steps[activeStep]}`}
          percent={convertNumberToIntegerPercent(activeStepNumber, stepsAmount)}
        />
      </ProgressWrapper>
      {displayNextStepName && steps[nextStep] && <NextStep aria-hidden>{nextStepContent}</NextStep>}
    </Wrapper>
  );
};
