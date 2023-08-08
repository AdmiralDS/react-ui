import * as React from 'react';
import { Stepper, Step, StepContent, Button } from '@admiral-ds/react-ui';

const initialSteps = [
  {
    key: 0,
    content: 'Текст занимает максимум три строки, далее идет сокращение',
  },
  { key: 1, content: 'Текст занимает максимум три строки, далее идет сокращение' },
  { key: 2, content: 'Текст занимает максимум три строки, далее идет сокращение' },
  { key: 3, content: 'Текст занимает максимум три строки, далее идет сокращение' },
];

export const StepperMobileTemplate = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [steps, setSteps] = React.useState(initialSteps);

  return (
    <>
      <div style={{ width: '400px', overflow: 'hidden' }}>
        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginBottom: '40px' }}>
          <Button
            onClick={() => {
              const newSteps = [...steps].map((step, i) =>
                i === activeStep - 1 ? { ...step, completed: false } : step,
              );
              setSteps(newSteps);
              setActiveStep(activeStep - 1);
            }}
            disabled={activeStep === 0}
            dimension="s"
          >
            Шаг назад
          </Button>
          <Button
            onClick={() => {
              const newSteps = [...steps].map((step, i) => (i === activeStep ? { ...step, completed: true } : step));
              setSteps(newSteps);
              setActiveStep(activeStep + 1);
            }}
            disabled={activeStep === 3}
            dimension="s"
          >
            Шаг вперёд
          </Button>
        </div>
        <Stepper activeStep={activeStep} mobile>
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
