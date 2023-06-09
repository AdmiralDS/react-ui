import * as React from 'react';
import { Stepper, Step, StepContent } from '@admiral-ds/react-ui';

const initialSteps = [
  {
    key: 0,
    content: '1. Пройденный шаг',
    completed: true,
  },
  { key: 1, content: '2. Ранее пройденный шаг, на котрый мы вернулись с 4го шага' },
  { key: 2, content: '3. Пройденный шаг', completed: true },
  { key: 3, content: '4. Отсюда мы вернулись на 2 шаг.', completed: true },
  { key: 4, content: '5. Неактивный шаг, еще не пройденный' },
];

export const StepperPreviousStepsTemplate = () => {
  const [activeStep, setActiveStep] = React.useState(1);
  const [steps, setSteps] = React.useState(initialSteps);
  const handleStepClick = ({ index }: any) => {
    const newSteps = [...steps].map((step, i) => (i < 4 ? { ...step, completed: i !== index } : step));
    setSteps(newSteps);
    setActiveStep(index);
  };
  return (
    <>
      <div style={{ maxWidth: '800px', overflow: 'hidden' }}>
        <Stepper lineClamp={2} activeStep={activeStep}>
          {steps.map(({ content, ...step }) => {
            return (
              <Step {...step} onClick={handleStepClick}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </div>
    </>
  );
};
