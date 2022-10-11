import type { FC } from 'react';
import React from 'react';
import type { ITooltipProps } from '#src/components/Tooltip';
import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

import { Content, ContentWrapper } from '#src/components/Stepper/style';
import StepperContext from '#src/components/Stepper/StepperContext';

export const StepContent: FC<{ children: string; tooltipProps?: Partial<ITooltipProps> }> = ({
  children,
  tooltipProps,
}) => {
  const { lineClamp } = React.useContext(StepperContext);
  const wrapperRef = React.useRef<HTMLDivElement | null>(null);
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const [overflow, setOverflow] = React.useState(false);
  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  React.useLayoutEffect(() => {
    if (contentRef.current && checkOverflow(contentRef.current) !== overflow) {
      setOverflow(checkOverflow(contentRef.current));
    }
  }, [tooltipVisible, contentRef.current, setOverflow]);

  React.useLayoutEffect(() => {
    function show() {
      setTooltipVisible(true);
    }
    function hide() {
      setTooltipVisible(false);
    }
    const wrapper = wrapperRef.current;
    if (wrapper) {
      wrapper.addEventListener('mouseenter', show);
      wrapper.addEventListener('mouseleave', hide);
      return () => {
        wrapper.removeEventListener('mouseenter', show);
        wrapper.removeEventListener('mouseleave', hide);
      };
    }
  }, [setTooltipVisible, wrapperRef.current]);

  return (
    <>
      <ContentWrapper ref={wrapperRef} withTooltip={overflow}>
        <Content ref={contentRef} lineClamp={lineClamp}>
          {children}
        </Content>
      </ContentWrapper>
      {tooltipVisible && overflow && (
        <Tooltip targetRef={wrapperRef} renderContent={() => children} {...tooltipProps} />
      )}
    </>
  );
};
