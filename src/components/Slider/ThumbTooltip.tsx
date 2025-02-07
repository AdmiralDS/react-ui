import { useState, useEffect } from 'react';
import { Tooltip } from '#src/components/Tooltip';

interface ThumbTooltipProps {
  targetElement: HTMLDivElement | null;
  value: number;
  isDraging?: boolean;
}

export const ThumbTooltip = ({ targetElement, value, isDraging }: ThumbTooltipProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function show() {
      setVisible(true);
    }
    function hide() {
      setVisible(false);
    }
    if (targetElement) {
      targetElement.addEventListener('mouseenter', show);
      targetElement.addEventListener('focus', show);
      targetElement.addEventListener('mouseleave', hide);
      targetElement.addEventListener('blur', hide);
      return () => {
        targetElement.removeEventListener('mouseenter', show);
        targetElement.removeEventListener('focus', show);
        targetElement.removeEventListener('mouseleave', hide);
        targetElement.removeEventListener('blur', hide);
      };
    }
  }, [targetElement]);

  return (visible || isDraging) && targetElement ? (
    <Tooltip targetElement={targetElement} renderContent={() => value} dimension="s" tooltipPosition="top" />
  ) : null;
};
