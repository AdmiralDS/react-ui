import * as React from 'react';
import { Stepper, Step, StepContent } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

const steps = [
  {
    key: 0,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    completed: true,
  },
  { key: 1, content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение', completed: true },
  { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
  { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
];

export const StepperClickPropTemplate = () => {
  return (
    <>
      <Stepper activeStep={2} data-testid="stepper">
        {steps.map(({ content, key, completed }) => {
          return (
            <Step
              completed={completed}
              key={`step-${key}`}
              onClick={(step: { index: number; active: boolean; completed: boolean; disabled?: boolean }) => {
                // Обработчик клика по шагу
                console.log(`step ${step.index}`);
              }}
              data-testid="step"
            >
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Separator />
      <Stepper activeStep={2} orientation="vertical" style={{ width: '225px' }}>
        {steps.map(({ content, key, completed }) => {
          return (
            <Step
              completed={completed}
              key={`step-${key}`}
              onClick={(step: { index: number; active: boolean; completed: boolean; disabled?: boolean }) => {
                // Обработчик клика по шагу
                console.log(`step ${step.index}`);
              }}
            >
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};
