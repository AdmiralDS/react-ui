import * as React from 'react';
import { ProgressStepper } from '@admiral-ds/react-ui';
import type { ProgressStepperProps } from '@admiral-ds/react-ui';

const steps = [
  'Название первого шага',
  'Название второго шага',
  'Название третьего шага',
  'Название четвертого шага',
  'Название пятого шага',
  'Название шестого шага',
];

export const ProgressStepperPlaygroundTemplate = (args: ProgressStepperProps) => {
  return (
    <>
      <ProgressStepper {...args} steps={steps} />
    </>
  );
};
