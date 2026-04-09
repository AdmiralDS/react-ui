import { checkOverflow } from '#src/components/common/utils/checkOverflow';
import { useLayoutEffect, useState } from 'react';

//todo ревью для других компонентов

export const checkTooltipVisible = (containerTriggerVisible: HTMLElement | null, element: HTMLElement | null) => {
  const [overflow, setOverflow] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);

  useLayoutEffect(() => {
    if (element && checkOverflow(element) !== overflow) {
      setOverflow(checkOverflow(element));
    }
  }, [tooltipVisible, element]);

  useLayoutEffect(() => {
    function show() {
      setTooltipVisible(true);
    }
    function hide() {
      setTooltipVisible(false);
    }

    if (containerTriggerVisible) {
      containerTriggerVisible.addEventListener('mouseenter', show);
      containerTriggerVisible.addEventListener('mouseleave', hide);
      return () => {
        containerTriggerVisible.removeEventListener('mouseenter', show);
        containerTriggerVisible.removeEventListener('mouseleave', hide);
      };
    }
  }, [containerTriggerVisible]);

  return overflow && tooltipVisible;
};
