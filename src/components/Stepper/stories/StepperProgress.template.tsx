import * as React from 'react';
import styled from 'styled-components';
import { Stepper, Step, T, Button } from '@admiral-ds/react-ui';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  padding: 20px;
`;

const Separator = styled.div`
  height: 20px;
  width: 100%;
`;

export const StepperProgressTemplate = () => {
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
        Режим отображения ProgressMode для большого количества шагов. Представляет собой визуальное отображение
        пользовательского прогресса в виде заполняющейся линии. Уведомляет пользователя о текущем положении на пути при
        выполнении конкретной задачи.
        <Separator />
        Названия шагов должны сопровождать индикатор прогресса, чтобы указать, что пользователь будет выполнять на
        каждом из этапов. Рекомендуется использовать короткие и емкие названия шагов для явного отображения сути.
        <Separator />
        Линия условно делится на количество частей соответствующее количеству шагов. Может изменяться по ширине,
        минимальная ширина 388px.
      </T>
      <T font="Body/Body 1 Long" as="div">
        Базовый пример (формат в шагах)
      </T>
      <Stepper activeStep={activeStep} progressMode>
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
