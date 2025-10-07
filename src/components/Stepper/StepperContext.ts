import { createContext } from 'react';
import type { ProgressMode, Orientation, LineClamp } from './type';

export const StepperContext = createContext<{
  orientation: Orientation;
  activeStep: number;
  lineClamp: LineClamp;
  stepsAmount: number;
  stepWidth?: number | string;
  mobile?: boolean;
  progressMode?: boolean;
  displayNextStepName?: boolean;
  progressFormat?: ProgressMode;
  progressLocale?: {
    stepName?: [string, string] | [string, string, string];
    progressText?: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string;
    renderNextStepName?: (nextStepName: string) => React.ReactNode;
  };
}>({
  orientation: 'horizontal',
  activeStep: -1,
  lineClamp: 3,
  stepsAmount: 0,
  progressMode: false,
  displayNextStepName: true,
  progressFormat: 'steps',
});

StepperContext.displayName = 'StepperContext';
