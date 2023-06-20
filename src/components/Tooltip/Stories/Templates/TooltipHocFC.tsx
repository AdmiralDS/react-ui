import * as React from 'react';
import { TooltipHoc } from '@admiral-ds/react-ui';

const H2 = React.forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLElement>>((props, ref) => {
  return (
    <h2 ref={ref} {...props}>
      Наведи на меня мышью и увидишь тултип
    </h2>
  );
});
const TooltipedHeading = TooltipHoc(H2);

export const TooltipHocFCTemplate = () => {
  return <TooltipedHeading renderContent={() => `Пример использования TooltipHoc с функциональным компонентом.`} />;
};
