import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { TooltipHoc } from '@admiral-ds/react-ui';
import type { TooltipHocProps, Theme } from '@admiral-ds/react-ui';

const StyledH2 = styled.h2`
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
`;

const H2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  return (
    <StyledH2 ref={ref} {...props}>
      Наведи на меня мышью и увидишь тултип
    </StyledH2>
  );
});
const TooltipedHeading = TooltipHoc(H2);

export const TooltipHocFCTemplate = (args: TooltipHocProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <TooltipedHeading
        {...args}
        renderContent={() => `Пример использования TooltipHoc с функциональным компонентом.`}
      />
    </ThemeProvider>
  );
};
