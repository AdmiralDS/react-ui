import * as React from 'react';
import { Tooltip } from '#src/components/Tooltip';
import { StringValueWrapper } from './styled';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';

export interface DisplayValueProps {
  forceHideOverflowTooltip: boolean;
  visibleValue: string;
  isSearchPanelOpen: boolean;
  targetRef: React.RefObject<HTMLElement>;
}

export const DisplayValue = ({
  visibleValue,
  isSearchPanelOpen,
  targetRef,
  forceHideOverflowTooltip,
}: DisplayValueProps) => {
  const valueRef = React.useRef<HTMLDivElement>(null);
  const [overflowActive, setOverflowActive] = React.useState<boolean>(false);
  const [tooltipVisible, setTooltipVisible] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (valueRef.current && checkOverflow(valueRef.current) !== overflowActive) {
      setOverflowActive(checkOverflow(valueRef.current));
    }
  }, [tooltipVisible, setOverflowActive]);

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
  }, [setTooltipVisible]);

  const showTooltip = !forceHideOverflowTooltip && !isSearchPanelOpen && tooltipVisible && overflowActive;

  return (
    <>
      <StringValueWrapper ref={valueRef}>{visibleValue}</StringValueWrapper>
      {showTooltip && <Tooltip renderContent={() => visibleValue} targetElement={targetRef.current} />}
    </>
  );
};
