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
  const valueRef = React.useRef(null);
  const [overflowActive, setOverflowActive] = React.useState<boolean>(false);
  const [tooltipVisible, setTooltipVisible] = React.useState<boolean>(false);

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
          targetRef={targetRef}
        />
      )}
    </>
  );
};
