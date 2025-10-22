import * as React from 'react';
import { Stepper, Step, StepContent } from '@admiral-ds/react-ui';
import styled from 'styled-components';

const Separator = styled.div`
  height: 20px;
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

export const StepperClickableLinksTemplate = () => {
  return (
    <>
      <Stepper activeStep={2} data-testid="stepper">
        {steps.map(({ content, ...step }) => {
          return (
            <Step {...step}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
      <Separator />
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
