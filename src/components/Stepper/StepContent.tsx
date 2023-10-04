import { useRef, useContext, useState, useLayoutEffect } from 'react';
import type { FC } from 'react';
import type { ITooltipProps } from '#src/components/Tooltip';
import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

import { Content, ContentWrapper } from './style';
import { StepperContext } from './StepperContext';

export const StepContent: FC<{ children: string; tooltipProps?: Partial<ITooltipProps> }> = ({
  children,
  tooltipProps,
}) => {
  const { lineClamp } = useContext(StepperContext);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);
  const [overflow, setOverflow] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useLayoutEffect(() => {
    if (contentRef.current && checkOverflow(contentRef.current) !== overflow) {
      setOverflow(checkOverflow(contentRef.current));
    }
  }, [tooltipVisible, setOverflow]);

  useLayoutEffect(() => {
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
  }, [setTooltipVisible]);

  return (
    <>
      <ContentWrapper ref={wrapperRef} $withTooltip={overflow}>
        <Content ref={contentRef} $lineClamp={lineClamp}>
          {children}
        </Content>
      </ContentWrapper>
      {tooltipVisible && overflow && (
        <Tooltip targetElement={wrapperRef.current} renderContent={() => children} {...tooltipProps} />
      )}
    </>
  );
};

StepContent.displayName = 'StepContent';
