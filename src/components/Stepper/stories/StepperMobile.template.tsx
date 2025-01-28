import * as React from 'react';
import { Stepper, Step, StepContent, Button, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;
const Wrapper = styled.div`
  width: 400px;
  overflow: hidden;
`;
const MobileWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 40px;
`;

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
      <T font="Body/Body 1 Long" as="div">
        В мобильной версии применяется только горизонтальный вариант компонента с автоматическим скроллом по горизонтали
        по мере прохождения шагов.
        <Separator />
        Компонент можно скроллить пальцем, если нужно посмотреть пройденные или будущие шаги.
        <Separator />
        При переходе на следующий шаг, который становится текущим, он выравнивается относительно левого края на
        расстоянии 16px (боковой падинг). Шаг перед текущим уходит за границы экрана.
        <Separator />
        Для перевода компонента в мобильный вид используйте параметр mobile.
      </T>
      <Separator $height={24} />
      <Wrapper>
        <MobileWrapper>
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
        </MobileWrapper>
        <Stepper activeStep={activeStep} mobile>
          {steps.map(({ content, ...step }) => {
            return (
              <Step {...step}>
                <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </Wrapper>
    </>
  );
};
