import * as React from 'react';
import { Stepper, Step } from '@admiral-ds/react-ui';

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

export const StepperCustomStepContentTemplate = () => {
  return (
    <>
      <Stepper lineClamp={2} activeStep={2}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <i>{content}</i>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};
