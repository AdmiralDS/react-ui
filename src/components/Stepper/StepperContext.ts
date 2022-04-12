import * as React from 'react';

const StepperContext = React.createContext<{
  orientation: 'horizontal' | 'vertical';
  activeStep: number;
  lineClamp: 1 | 2 | 3;
  stepWidth?: number | string;
}>({ orientation: 'horizontal', activeStep: -1, lineClamp: 3 });

if (process.env.NODE_ENV !== 'production') {
  StepperContext.displayName = 'StepperContext';
}

export default StepperContext;
