import * as React from 'react';

const StepperContext = React.createContext<{
  orientation: 'horizontal' | 'vertical';
  activeStep: number;
  lineClamp: 1 | 2 | 3;
  stepsAmount: number;
  stepWidth?: number | string;
  mobile?: boolean;
}>({ orientation: 'horizontal', activeStep: -1, lineClamp: 3, stepsAmount: 0 });

StepperContext.displayName = 'StepperContext';
export default StepperContext;
