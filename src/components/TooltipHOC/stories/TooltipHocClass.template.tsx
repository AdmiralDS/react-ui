import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { TooltipHoc } from '@admiral-ds/react-ui';
import type { TooltipHocProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

type TestType = {
  innerRef: React.ForwardedRef<HTMLHeadingElement>;
  label: string;
};

const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
`;

class Test extends React.Component<TestType> {
  render() {
    const { innerRef, label } = this.props;
    return <StyledH2 ref={innerRef}>{label}</StyledH2>;
  }
}

const TestForwardingRef = React.forwardRef<HTMLHeadingElement, Omit<TestType, 'innerRef'>>((props, ref) => (
  <Test innerRef={ref} {...props} />
));
const TooltipedTest = TooltipHoc(TestForwardingRef);

export const TooltipHocClassTemplate = ({ themeBorderKind, ...props }: TooltipHocProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <TooltipedTest
        {...props}
        renderContent={() => `Пример использования TooltipHoc с классовым компонентом.`}
        label={'Наведи на меня мышью и увидишь тултип'}
      />
    </ThemeProvider>
  );
};
