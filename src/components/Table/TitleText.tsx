import * as React from 'react';
import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

import { Title, ExtraText } from './style';

type TitleTextProps = {
  lineClamp: number;
  title: React.ReactNode;
  dimension?: 'xl' | 'l' | 'm' | 's';
  extraText?: boolean;
};

export const TitleText: React.FC<TitleTextProps> = ({ lineClamp, dimension, extraText, title }) => {
  const textRef = React.useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = React.useState(false);
  const [tooltipVisible, setTooltipVisible] = React.useState(false);
  const titleNotCustom = typeof title === 'string' || typeof title === 'number';
  const withTooltip = overflow && tooltipVisible && titleNotCustom;

  React.useLayoutEffect(() => {
    const element = textRef.current;
    if (element && checkOverflow(element) !== overflow) {
      setOverflow(checkOverflow(element));
    }
  }, [tooltipVisible, setOverflow]);

  React.useLayoutEffect(() => {
    function show() {
      setTooltipVisible(true);
    }
    function hide() {
      setTooltipVisible(false);
    }
    const text = textRef.current;
    if (text) {
      text.addEventListener('mouseenter', show);
      text.addEventListener('mouseleave', hide);
      return () => {
        text.removeEventListener('mouseenter', show);
        text.removeEventListener('mouseleave', hide);
      };
    }
  }, [setTooltipVisible]);

  return (
    <>
      {extraText ? (
        <ExtraText ref={textRef} $dimension={dimension} $lineClamp={lineClamp} $withTooltip={withTooltip}>
          {title}
        </ExtraText>
      ) : (
        <Title ref={textRef} $lineClamp={lineClamp} $withTooltip={withTooltip} data-title>
          {title}
        </Title>
      )}
      {withTooltip && <Tooltip targetElement={textRef.current} renderContent={() => title} />}
    </>
  );
};
