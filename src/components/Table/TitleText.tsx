import * as React from 'react';
import { Tooltip } from '#src/components/Tooltip';
import { Title, ExtraText } from './style';

type TitleTextProps = {
  lineClamp: number;
  children: React.ReactNode;
  dimension?: 'xl' | 'l' | 'm' | 's';
  extraText?: boolean;
};

export const TitleText: React.FC<TitleTextProps> = ({ lineClamp, extraText, dimension, children }) => {
  const textRef = React.useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = React.useState(false);

  const detectOverflow = (element: HTMLElement) =>
    element.offsetWidth < element.scrollWidth || element.offsetHeight < element.scrollHeight;

  React.useLayoutEffect(() => {
    const element = textRef.current;
    if (element && detectOverflow(element) !== overflow) {
      setOverflow(detectOverflow(element));
    }
  });

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

  return overflow ? (
    <Tooltip renderContent={() => children} anchorClassName="table-title-tooltip">
      {renderTitle()}
    </Tooltip>
  ) : (
    renderTitle()
  );
};
