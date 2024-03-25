import * as React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { TooltipHoc } from '@admiral-ds/react-ui';
import type { TooltipHocProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const StyledH2 = styled.h2`
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

const H2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  return (
    <StyledH2 ref={ref} {...props}>
      Наведи на меня мышью и увидишь тултип
    </StyledH2>
  );
});
const TooltipedHeading = TooltipHoc(H2);

export const TooltipHocFCTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: TooltipHocProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <TooltipedHeading
        {...props}
        renderContent={() => `Пример использования TooltipHoc с функциональным компонентом.`}
      />
    </ThemeProvider>
  );
};
