import * as React from 'react';
import { Stepper, Step, StepContent, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Wrapper = styled.div`
  max-width: 800px;
  overflow: hidden;
`;
const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

const steps = [
  { key: 0, content: 'Шаг с предупреждением', warning: true },
  { key: 1, content: 'Disabled шаг', disabled: true },
  { key: 2, content: 'Шаг с ошибкой', error: true },
  { key: 3, content: 'Шаг Redo повторное редактирование', redo: true },
  { key: 4, content: 'Завершенный шаг', completed: true },
  { key: 5, content: 'Активный шаг' },
  { key: 6, content: 'Неактивный шаг' },
];

export const StepperStepKindsTemplate = () => {
  return (
    <>
      <Wrapper>
        <T font="Body/Body 1 Long" as="div">
          Для обозначения активного шага в компонент Stepper нужно передать параметр activeStep, равный индексу
          активного шага. Либо для самого Step можно задать параметр active (перезаписывает собой параметр activeStep).
          <Separator />
          Чтобы обозначить завершенные (пройденные) шаги, для соответствующих шагов необходимо задать параметр
          completed. Чтобы обозначить повторно редактируемые шаги, для соответствующих шагов необходимо задать параметр
          redo. Также компонент Step имеет параметры disabled, error, warning.
          <Separator />
          Пройденные шаги могут быть кликабельными, для этого у них должен быть задан колбек onClick или параметр link.
        </T>
        <Separator $height={24} />
        <Stepper activeStep={5}>
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
