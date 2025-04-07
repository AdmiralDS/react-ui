import type { FC, HTMLAttributes } from 'react';
import * as React from 'react';
import styled, { useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { typography } from '#src/components/Typography';

import { convertNumberToIntegerPercent, fitLimit, setFirstLetterToLowerCase, setFirstLetterToUpperCase } from './utils';

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
  background-color: var(--admiral-color-Neutral_Neutral20, ${(p) => p.theme.color['Neutral/Neutral 20']});
`;

const Progress = styled.div`
  background-color: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']});
`;

const Header = styled.div<{ $mobile?: boolean }>`
  display: flex;
  flex-direction: ${({ $mobile }) => ($mobile ? 'column' : 'row')};
  ${({ $mobile }) => !$mobile && '  justify-content: space-between;'}
  margin-bottom: 8px;
`;

const ActiveStep = styled.div`
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

const ProgressText = styled.div`
  white-space: nowrap;
  flex-shrink: 0;
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  ${typography['Caption/Caption 1']}
`;

const NextStep = styled.div`
  width: 100%;
  text-align: left;
  margin-top: 8px;
  color: var(--admiral-color-Neutral_Neutral50, ${(p) => p.theme.color['Neutral/Neutral 50']});
  ${typography['Caption/Caption 1']}
`;

export interface ProgressStepperProps extends HTMLAttributes<HTMLDivElement> {
  /** Массив шагов */
  steps: string[];
  /** Номер активного шага, соответствует индексу шага в массиве */
  activeStep?: number;
  /** Отображение/скрытие подписи о следующем шаге */
  displayNextStepName?: boolean;
  /** Мобильная версия компонента */
  mobile?: boolean;
  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Название шага: массив слов во множественном числе для чисел (1,5), например, ['яблоко', 'яблок'] */
    stepName?: [string, string];
    /** Функция, возвращающая текст, поясняющий, на каком шаге из скольки шагов находится пользователь */
    progressText?: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string;
    /** Функция, которая формирует подпись о следующем шаге, на основе nextStepName */
    renderNextStepName?: (nextStepName: string) => React.ReactNode;
  };
}

export const ProgressStepper: FC<ProgressStepperProps> = ({
  steps,
  activeStep: activeStepProp = -1,
  displayNextStepName = true,
  mobile = false,
  locale,
  ...props
}) => {
  const theme = useTheme() || LIGHT_THEME;
  const stepName = locale?.stepName || theme.locales[theme.currentLocale].progressStepper.stepName;
  const progressText = locale?.progressText || theme.locales[theme.currentLocale].progressStepper.progressText;
  const renderNextStepName =
    locale?.renderNextStepName || theme.locales[theme.currentLocale].progressStepper.renderNextStepName;

  const stepsAmount = steps.length;
  const activeStep = fitLimit(0, stepsAmount, activeStepProp) ? activeStepProp : -1;
  const activeStepNumber = activeStep + 1;
  const nextStep = activeStep + 1;
  const nextStepContent = renderNextStepName(setFirstLetterToLowerCase(steps[nextStep]));

  const fixedStepName = stepName[0];
  const fixedStepNamePlural = stepName[stepName.length - 1];

  return (
    <Wrapper {...props}>
      <Header $mobile={mobile} aria-hidden>
        <ActiveStep>{setFirstLetterToUpperCase(steps[activeStep])}</ActiveStep>
        <ProgressText>{progressText(activeStepNumber, stepsAmount, fixedStepNamePlural?.toLowerCase())}</ProgressText>
      </Header>
      <ProgressWrapper>
        <Progress
          tabIndex={0}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={stepsAmount}
          aria-valuenow={activeStepNumber}
          aria-valuetext={`${fixedStepName} ${activeStepNumber}: ${steps[activeStep]}`}
          style={{ width: `${convertNumberToIntegerPercent(activeStepNumber, stepsAmount)}%` }}
        />
      </ProgressWrapper>
      {displayNextStepName && steps[nextStep] && <NextStep aria-hidden>{nextStepContent}</NextStep>}
    </Wrapper>
  );
};

ProgressStepper.displayName = 'ProgressStepper';
