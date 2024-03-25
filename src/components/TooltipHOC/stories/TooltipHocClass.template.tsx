import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { TooltipHoc } from '@admiral-ds/react-ui';
import type { TooltipHocProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

type TestType = {
  innerRef: React.ForwardedRef<HTMLHeadingElement>;
  label: string;
};

const StyledH2 = styled.h2`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
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

export const TooltipHocClassTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TooltipHocProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TooltipedTest
        {...props}
        renderContent={() => `Пример использования TooltipHoc с классовым компонентом.`}
        label={'Наведи на меня мышью и увидишь тултип'}
      />
    </ThemeProvider>
  );
};
