import * as React from 'react';
import styled from 'styled-components';
import { Stepper, Step, T, Button } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
`;

export const StepperProgressDisplayNextStepTemplate = () => {
  const [activeStep, setActiveStep] = React.useState(2);

  const steps = [
    'Заполнение данных',
    'Проверка документов',
    'Подтверждение заявки',
    'Обработка заявки',
    'Проверка кредитоспособности',
    'Принятие решения',
    'Подписание договора',
    'Выдача кредита',
  ];

  return (
    <Wrapper>
      <T font="Body/Body 1 Long" as="div">
        Без отображения следующего шага
      </T>
      <Stepper activeStep={activeStep} progressMode displayNextStepName={false}>
        {steps.map((step, index) => (
          <Step key={index}>{step}</Step>
        ))}
      </Stepper>

      <div>
        <Button
          onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
          disabled={activeStep === 0}
          style={{ marginRight: '8px' }}
          dimension="s"
        >
          Предыдущий шаг
        </Button>
        <Button
          onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
          disabled={activeStep === steps.length - 1}
          dimension="s"
        >
          Следующий шаг
        </Button>
      </div>
    </Wrapper>
  );
};
