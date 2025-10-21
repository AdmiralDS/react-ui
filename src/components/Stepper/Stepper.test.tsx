import type { Orientation } from '#src/components/Stepper';
import { Step, StepContent, Stepper } from '#src/components/Stepper';
import { render } from '@testing-library/react';
import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { LIGHT_THEME } from '#src/components/themes';

describe('Stepper', () => {
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

  // ProgressMode tests
  describe('ProgressMode', () => {
    const progressSteps = [
      { key: 0, content: 'Первый шаг' },
      { key: 1, content: 'Второй шаг' },
      { key: 2, content: 'Третий шаг' },
      { key: 3, content: 'Четвертый шаг' },
      { key: 4, content: 'Пятый шаг' },
    ];

    const ProgressComp = ({
      activeStep = 2,
      progressMode = true,
      displayNextStepName = true,
      progressFormat = 'steps',
      mobile = false,
      progressLocale,
    }: {
      activeStep?: number;
      progressMode?: boolean;
      displayNextStepName?: boolean;
      progressFormat?: 'steps' | 'percentage';
      mobile?: boolean;
      progressLocale?: {
        stepName?: [string, string] | [string, string, string];
        progressText?: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string;
        renderNextStepName?: (nextStepName: string) => React.ReactNode;
      };
    }) => (
      <ThemeProvider theme={LIGHT_THEME}>
        <Stepper
          activeStep={activeStep}
          progressMode={progressMode}
          displayNextStepName={displayNextStepName}
          progressFormat={progressFormat}
          mobile={mobile}
          progressLocale={progressLocale}
        >
          {progressSteps.map((step) => {
            return (
              <Step {...step} key={step.key}>
                <StepContent>{step.content}</StepContent>
              </Step>
            );
          })}
        </Stepper>
      </ThemeProvider>
    );

    it('should render ProgressMode with steps format', () => {
      const wrapper = render(<ProgressComp />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render ProgressMode with percentage format', () => {
      const wrapper = render(<ProgressComp progressFormat="percentage" />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render ProgressMode without next step name', () => {
      const wrapper = render(<ProgressComp displayNextStepName={false} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render ProgressMode in mobile version', () => {
      const wrapper = render(<ProgressComp mobile={true} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render ProgressMode with first step active', () => {
      const wrapper = render(<ProgressComp activeStep={0} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render ProgressMode with last step active', () => {
      const wrapper = render(<ProgressComp activeStep={4} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render ProgressMode with custom locale', () => {
      const customLocale = {
        stepName: ['этап', 'этапа', 'этапов'] as [string, string, string],
        progressText: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) =>
          `Этап ${activeStepNumber} из ${stepsAmount} ${stepNamePlural}`,
        renderNextStepName: (nextStepName: string) => `Следующий: ${nextStepName}`,
      };
      const wrapper = render(<ProgressComp progressLocale={customLocale} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render ProgressMode with custom locale (2 forms)', () => {
      const customLocale = {
        stepName: ['шаг', 'шагов'] as [string, string],
        progressText: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) =>
          `${activeStepNumber} из ${stepsAmount} ${stepNamePlural}`,
        renderNextStepName: (nextStepName: string) => `Далее: ${nextStepName}`,
      };
      const wrapper = render(<ProgressComp progressLocale={customLocale} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render ProgressMode with negative activeStep', () => {
      const wrapper = render(<ProgressComp activeStep={-1} />);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render ProgressMode with activeStep greater than steps count', () => {
      const wrapper = render(<ProgressComp activeStep={10} />);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
