import * as React from 'react';
import { Tooltip } from '#src/components/Tooltip';

import { Title, ExtraText } from './style';

type TitleTextProps = {
  width: string | number;
  lineClamp: number;
  children: React.ReactNode;
  dimension?: 'xl' | 'l' | 'm' | 's';
  extraText?: boolean;
};

export const TitleText: React.FC<TitleTextProps> = ({ lineClamp, dimension, width, extraText, children }) => {
  const textRef = React.useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = React.useState(false);
  const [tooltipVisible, setTooltipVisible] = React.useState(false);

  const detectOverflow = (element: HTMLElement) =>
    element.offsetWidth < element.scrollWidth || element.offsetHeight < element.scrollHeight;

  React.useLayoutEffect(() => {
    const element = textRef.current;
    if (element && detectOverflow(element) !== overflow) {
      setOverflow(detectOverflow(element));
    }
  }, [children, lineClamp, dimension, width, extraText]);

  const renderTitle = () =>
    extraText ? (
      <ExtraText ref={textRef} dimension={dimension} lineClamp={lineClamp}>
        {children}
      </ExtraText>
    ) : (
      <Title ref={textRef} lineClamp={lineClamp}>
        {children}
      </Title>
    );

  return (
    <>
      {renderTitle()}
      {overflow && (
        <Tooltip
          targetRef={textRef}
          visible={tooltipVisible}
          onVisibilityChange={setTooltipVisible}
          renderContent={() => children}
        />
      )}
    </>
  );
};
