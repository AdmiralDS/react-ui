import * as React from 'react';
import { Stepper, Step, StepContent, T } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
  width: 100%;
`;

const steps = [
  {
    key: 0,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    link: '#',
    completed: true,
  },
  {
    key: 1,
    content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    link: '#',
    completed: true,
  },
  { key: 2, content: 'Активный шаг, текст занимает максимум три строки', link: '#' },
  { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки', link: '#' },
];

export const StepperAdaptiveTemplate = () => {
  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        С помощью параметра stepWidth можно задать ширину шага. Если данный параметр не задан, то ширина шага будет
        рассчитываться следующим образом:
        <Separator />- при горизонтальной ориентации все шаги будут в равной степени делить между собой свободное
        пространство;
        <Separator />- при вертикальной ориентации каждый шаг займет 100% ширины степпера.
        <Separator />
        Таким образом шаги будут пропорционально увеличиваться/уменьшаться при изменении ширины степпера.
      </T>
      <Separator $height={24} />
      <Stepper activeStep={2}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Separator $height={20} />
      <Stepper activeStep={2} orientation="vertical" style={{ width: '25%' }}>
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </>
  );
};
