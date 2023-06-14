import * as React from 'react';
import { TooltipHoc } from '@admiral-ds/react-ui';

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

export const TooltipHocClassTemplate = () => {
  return (
    <TooltipedTest
      renderContent={() => `Пример использования TooltipHoc с классовым компонентом.`}
      label={'Наведи на меня мышью и увидишь тултип'}
    />
  );
};
