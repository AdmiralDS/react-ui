import * as React from 'react';
import { Tooltip } from '#src/components/Tooltip';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

import { Title, ExtraText } from './style';

type TitleTextProps = {
  lineClamp: number;
  children: React.ReactNode;
  dimension?: 'xl' | 'l' | 'm' | 's';
  extraText?: boolean;
};

export const TitleText: React.FC<TitleTextProps> = ({ lineClamp, dimension, extraText, children }) => {
  const textRef = React.useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = React.useState(false);
  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  React.useLayoutEffect(() => {
    const element = textRef.current;
    if (element && checkOverflow(element) !== overflow) {
      setOverflow(checkOverflow(element));
    }
  }, [tooltipVisible, textRef.current, setOverflow]);

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
  }, [setTooltipVisible, textRef.current]);

  return (
    <>
      {extraText ? (
        <ExtraText ref={textRef} dimension={dimension} lineClamp={lineClamp}>
          {children}
        </ExtraText>
      ) : (
        <Title ref={textRef} lineClamp={lineClamp}>
          {children}
        </Title>
      )}
      {overflow && tooltipVisible && <Tooltip targetRef={textRef} renderContent={() => children} />}
    </>
  );
};
