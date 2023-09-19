import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { TooltipHoc } from '@admiral-ds/react-ui';
import type { TooltipHocProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

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

export const TooltipHocFCTemplate = ({ themeBorderKind, ...props }: TooltipHocProps & { themeBorderKind?: BorderRadiusType }) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <TooltipedHeading
        {...props}
        renderContent={() => `Пример использования TooltipHoc с функциональным компонентом.`}
      />
    </ThemeProvider>
  );
};
