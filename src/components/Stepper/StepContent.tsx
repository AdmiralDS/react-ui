import type { FC } from 'react';
import React from 'react';
import type { ITooltipProps } from '#src/components/TooltipRefactor';
import { Tooltip } from '#src/components/TooltipRefactor';

import { Content, ContentWrapper } from '#src/components/Stepper/style';
import StepperContext from '#src/components/Stepper/StepperContext';

export const StepContent: FC<{ children: string; tooltipProps?: Partial<ITooltipProps> }> = ({
  children,
  tooltipProps,
}) => {
  const { orientation, lineClamp, stepWidth } = React.useContext(StepperContext);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const [overflow, setOverflow] = React.useState(false);
  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  const detectOverflow = (e: any) => e.clientHeight < e.scrollHeight;
  const handleTooltipVisibilityChange = (visible: boolean) => setTooltipVisible(visible);

  React.useLayoutEffect(() => {
    if (contentRef.current && detectOverflow(contentRef.current) !== overflow) {
      setOverflow(detectOverflow(contentRef.current));
    }
  }, [children, orientation, stepWidth, lineClamp]);

  return (
    <>
      <ContentWrapper ref={wrapperRef} withTooltip={overflow}>
        <Content ref={contentRef} lineClamp={lineClamp}>
          {children}
        </Content>
      </ContentWrapper>
      {overflow ? (
        <Tooltip
          targetRef={wrapperRef}
          visible={tooltipVisible}
          onVisibilityChange={handleTooltipVisibilityChange}
          renderContent={() => children}
          {...tooltipProps}
        />
      ) : null}
    </>
  );
};
