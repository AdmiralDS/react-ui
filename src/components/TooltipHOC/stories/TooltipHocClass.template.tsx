import * as React from 'react';
import { TooltipHoc } from '@admiral-ds/react-ui';
import type { TooltipHocProps, Theme } from '@admiral-ds/react-ui';
import { ThemeProvider } from 'styled-components';

type TestType = {
  innerRef: React.ForwardedRef<HTMLHeadingElement>;
  label: string;
};
class Test extends React.Component<TestType> {
  render() {
    const { innerRef, label } = this.props;
    return <h2 ref={innerRef}>{label}</h2>;
  }
}

const TestForwardingRef = React.forwardRef<HTMLHeadingElement, Omit<TestType, 'innerRef'>>((props, ref) => (
  <Test innerRef={ref} {...props} />
));
const TooltipedTest = TooltipHoc(TestForwardingRef);

export const TooltipHocClassTemplate = (args: TooltipHocProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <TooltipedTest
        {...args}
        renderContent={() => `Пример использования TooltipHoc с классовым компонентом.`}
        label={'Наведи на меня мышью и увидишь тултип'}
      />
    </ThemeProvider>
  );
};
