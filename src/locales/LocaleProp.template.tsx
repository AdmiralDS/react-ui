import { useState } from 'react';
import { ProgressStepper, Button } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    margin-bottom: 20px;
  }
`;

export const LocalePropTemplate = () => {
  const steps = [
    'Определение стратегии',
    'Анализ',
    'Проектирование',
    'Реализация',
    'Тестирование',
    'Внедрение',
    'Техническая поддержка',
  ];
  const [activeStep, setActiveStep] = useState(0);
  return (
    <Wrapper>
      <ProgressStepper
        steps={steps}
        activeStep={activeStep}
        locale={{
          stepName: ['этап', 'этапов'],
          renderNextStepName: (stepName: string) => `Далее следует этап - ${stepName}`,
        }}
      />
      <div>
        <Button
          dimension="s"
          disabled={activeStep <= 0}
          onClick={() => setActiveStep(activeStep - 1)}
          style={{ marginRight: '40px' }}
        >
          Назад
        </Button>
        <Button dimension="s" disabled={activeStep >= 6} onClick={() => setActiveStep(activeStep + 1)}>
          Вперёд
        </Button>
      </div>
    </Wrapper>
  );
};
