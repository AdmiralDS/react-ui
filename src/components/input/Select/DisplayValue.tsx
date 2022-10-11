import * as React from 'react';
import { Tooltip } from '#src/components/Tooltip';
import { StringValueWrapper } from './styled';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

export interface DisplayValueProps {
  visibleValue: string;
  isSearchPanelOpen: boolean;
  targetRef: React.RefObject<HTMLElement>;
}

export const DisplayValue: React.FC<DisplayValueProps> = ({ visibleValue, isSearchPanelOpen, targetRef }) => {
  const valueRef = React.useRef<HTMLDivElement>(null);
  const [overflowActive, setOverflowActive] = React.useState<boolean>(false);
  const [tooltipVisible, setTooltipVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (valueRef.current && checkOverflow(valueRef.current) !== overflowActive) {
      setOverflowActive(checkOverflow(valueRef.current));
    }
  }, [tooltipVisible, valueRef.current, setOverflowActive]);

  React.useEffect(() => {
    function show() {
      setTooltipVisible(true);
    }
    function hide() {
      setTooltipVisible(false);
    }
    const value = valueRef.current;
    if (value) {
      value.addEventListener('mouseenter', show);
      value.addEventListener('mouseleave', hide);
      return () => {
        value.removeEventListener('mouseenter', show);
        value.removeEventListener('mouseleave', hide);
      };
    }
  }, [setTooltipVisible, valueRef.current]);

  return (
    <>
      <StringValueWrapper ref={valueRef}>{visibleValue}</StringValueWrapper>
      {!isSearchPanelOpen && tooltipVisible && overflowActive && (
        <Tooltip renderContent={() => visibleValue} targetRef={targetRef} />
      )}
    </>
  );
};
