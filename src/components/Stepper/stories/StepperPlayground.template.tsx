import * as React from 'react';
import { Stepper, Step, StepContent } from '@admiral-ds/react-ui';
import type { StepperProps } from '@admiral-ds/react-ui';

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

export const StepperPlaygroundTemplate = ({ lineClamp, activeStep, orientation, ...args }: StepperProps) => {
  return (
    <>
      <Stepper lineClamp={lineClamp} activeStep={activeStep || 2} orientation={orientation} stepWidth={200} {...args}>
        {steps.map(({ content, ...step }) => {
          return (
            // eslint-disable-next-line no-console
            <Step {...step} onClick={(step: any) => console.log(step.index)}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};
