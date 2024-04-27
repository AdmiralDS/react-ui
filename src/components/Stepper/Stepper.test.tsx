import type { Orientation } from '#src/components/Stepper';
import { Step, StepContent, Stepper } from '#src/components/Stepper';
import { render } from '@testing-library/react';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '#src/components/themes';

describe('Spinner', () => {
  const steps = [
    {
      key: 0,
      content: 'Завершенный шаг, текст занимает максимум три строки, далее идет сокращение',
    },
    { key: 1, content: 'Шаг с ошибкой, текст занимает максимум три строки', error: true },
    { key: 2, content: 'Активный шаг, текст занимает максимум три строки' },
    { key: 3, content: 'Неактивный шаг, текст занимает максимум три строки' },
  ];

  const Comp = ({
    lineClamp = 3,
    orientation = 'horizontal',
    activeStep = -1,
    stepWidth,
  }: {
    orientation?: Orientation;
    activeStep?: number;
    lineClamp?: 1 | 2 | 3;
    stepWidth?: number | string;
  }) => (
    <ThemeProvider theme={LIGHT_THEME}>
      <Stepper lineClamp={lineClamp} activeStep={activeStep} orientation={orientation} stepWidth={stepWidth}>
        {steps.map((step) => {
          return (
            <Step {...step} key={step.key}>
              <StepContent tooltipProps={{ style: { maxWidth: '300px' } }}>{step.content}</StepContent>
            </Step>
          );
        })}
      </Stepper>
    </ThemeProvider>
  );
  it('should render default component', () => {
    const wrapper = render(<Comp />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render vertical component', () => {
    const wrapper = render(<Comp orientation="vertical" />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with lineClamp equal 1', () => {
    const wrapper = render(<Comp lineClamp={1} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with lineClamp equal 2', () => {
    const wrapper = render(<Comp lineClamp={2} />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render component with stepWidth', () => {
    const wrapper = render(<Comp stepWidth={'100px'} />);
    expect(wrapper).toMatchSnapshot();
  });
});
