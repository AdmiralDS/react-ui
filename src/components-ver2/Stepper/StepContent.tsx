import React from 'react';
import type { FC } from 'react';
import { ThemeContext } from 'styled-components';
import { Tooltip } from '#src/components-ver2/Tooltip';
import type { ITooltipProps } from '#src/components-ver2/Tooltip';
import { DARK_THEME, LIGHT_THEME } from '#src/components-ver2/themes';

import { Content, ContentWrapper } from '#src/components-ver2/Stepper/style';
import StepperContext from '#src/components-ver2/Stepper/StepperContext';

const InverseTooltip = (props: any) => {
  const themeContext = React.useContext(ThemeContext);
  return <Tooltip {...props} theme={themeContext.name == 'dark' ? LIGHT_THEME : DARK_THEME} />;
};

export const StepContent: FC<{ children: string; tooltipProps?: Partial<ITooltipProps> }> = ({
  children,
  tooltipProps,
}) => {
  const { orientation, lineClamp, stepWidth } = React.useContext(StepperContext);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const [overflow, setOverflow] = React.useState(false);

  const detectOverflow = (e: any) => e.clientHeight < e.scrollHeight;

  React.useLayoutEffect(() => {
    if (contentRef.current && detectOverflow(contentRef.current) !== overflow) {
      setOverflow(detectOverflow(contentRef.current));
    }
  }, [children, orientation, stepWidth, lineClamp]);

  return overflow ? (
    <InverseTooltip renderContent={() => children} {...tooltipProps}>
      <ContentWrapper>
        <Content ref={contentRef} lineClamp={lineClamp}>
          {children}
        </Content>
      </ContentWrapper>
    </InverseTooltip>
  ) : (
    <ContentWrapper>
      <Content ref={contentRef} lineClamp={lineClamp}>
        {children}
      </Content>
    </ContentWrapper>
  );
};
