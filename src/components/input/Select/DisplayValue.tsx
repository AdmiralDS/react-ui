import * as React from 'react';
import { Tooltip } from '#src/components/Tooltip';
import { StringValueWrapper } from './styled';

export const DisplayValue: React.FC<any> = ({ visibleValue, isSearchPanelOpen }) => {
  const valueRef = React.useRef(null);
  const [overflowActive, setOverflowActive] = React.useState<boolean>(false);
  const [tooltipVisible, setTooltipVisible] = React.useState<boolean>(false);

  const checkOverflow = (textContainer: HTMLDivElement | null): boolean => {
    if (textContainer)
      return (
        textContainer.offsetHeight < textContainer.scrollHeight || textContainer.offsetWidth < textContainer.scrollWidth
      );
    return false;
  };
  React.useEffect(() => {
    if (checkOverflow(valueRef.current)) {
      setOverflowActive(true);
      return;
    }
    setOverflowActive(false);
  }, [visibleValue]);

  return (
    <>
      <StringValueWrapper ref={valueRef}>{visibleValue}</StringValueWrapper>
      {overflowActive && !isSearchPanelOpen && (
        <Tooltip
          visible={tooltipVisible}
          onVisibilityChange={setTooltipVisible}
          renderContent={() => visibleValue}
          targetRef={valueRef}
        />
      )}
    </>
  );
};
