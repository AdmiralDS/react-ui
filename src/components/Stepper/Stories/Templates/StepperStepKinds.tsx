import * as React from 'react';
import { Stepper, Step, StepContent } from '@admiral-ds/react-ui';

const steps = [
  { key: 0, content: 'Шаг с предупреждением', warning: true },
  { key: 1, content: 'Disabled шаг', disabled: true },
  { key: 2, content: 'Шаг с ошибкой', error: true },
  { key: 3, content: 'Завершенный шаг', completed: true },
  { key: 4, content: 'Активный шаг' },
  { key: 5, content: 'Неактивный шаг' },
];

export const StepperStepKindsTemplate = () => {
  return (
    <>
      <div style={{ maxWidth: '800px', overflow: 'hidden' }}>
        <Stepper activeStep={4}>
          {steps.map(({ content, ...step }) => {
            return (
              <Step {...step}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </div>
    </>
  );
};
