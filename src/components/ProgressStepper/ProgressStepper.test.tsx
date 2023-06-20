import * as React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '../themes';

import type { ProgressStepperProps } from '.';
import { ProgressStepper } from '.';

describe('Spinner', () => {
  const steps = [
    'название первого шага',
    'название второго шага',
    'название третьего шага',
    'название четвертого шага',
    'название пятого шага',
    'название шестого шага',
  ];
  const steps2 = [
    'название первого этапа',
    'название второго этапа',
    'название третьего этапа',
    'название четвертого этапа',
    'название пятого этапа',
    'название шестого этапа',
  ];
  const Comp = ({ steps, activeStep, ...props }: ProgressStepperProps) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <ProgressStepper steps={steps} activeStep={activeStep} {...props} />
    </ThemeProvider>
  );
  it('should render default component', () => {
    const wrapper = render(<Comp steps={steps} activeStep={2} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render mobile component', () => {
    const wrapper = render(<Comp steps={steps} activeStep={2} mobile />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component without nextStepName', () => {
    const wrapper = render(<Comp steps={steps} activeStep={2} displayNextStepName={false} mobile />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with custom nextStepName', () => {
    const wrapper = render(
      <Comp
        steps={steps}
        activeStep={2}
        locale={{ renderNextStepName: (nextStepName) => `Далее следует шаг: ${nextStepName}` }}
      />,
    );
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with custom stepName', () => {
    const wrapper = render(<Comp steps={steps2} activeStep={2} locale={{ stepName: ['этап', 'этапов'] }} />);
    expect(wrapper).toMatchSnapshot();
  });
});
