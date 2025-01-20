import { useState } from 'react';
import { ProgressStepper, Button, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > div {
    margin-bottom: 24px;
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
      <T font="Body/Body 1 Long" as="div">
        В некоторых случаях может быть необходимо изменить значения текстовых констант для отдельных компонентов. Для
        этого у компонентов, использующих текстовые константы, есть специальный параметр locale - объект, в котором
        можно задать альтернативные значения текстовых констант, отличные от тех, что заданы в theme.locales. Текстовая
        константа, заданная через пропс locale компонента имеет больший приоритет, чем та же константа, заданная в
        theme.locale.
      </T>
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
