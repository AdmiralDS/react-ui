import * as React from 'react';
import ReactDOM from 'react-dom';

import type { RefCallback, RefObject } from '../common/utils/handleRef';
import { handleRef } from '../common/utils/handleRef';
import { getScrollableParents } from '../common/utils/getScrollableParents';

import { AnchorWrapper } from './AnchorWrapper';
import { TooltipWrapper } from './TooltipWrapper';
import type { CalculationResult, TooltipPositionType } from './utils';
import { calculateDirection, getContainingBlockOffset } from './utils';

export interface ITooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание */
  renderContent: () => React.ReactNode;
  /** Контейнер, в котором будет отрисован тултип через React.createPortal. По умолчанию тултип отрисовывается в document.body */
  container?: Element | null;
  /** Отобразить тултип с задержкой в 1.5 секунды */
  withDelay?: boolean;
  /** Ссылка на тултип */
  tooltipRef?: RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null;
  /** Расположение тултипа */
  tooltipPosition?: TooltipPositionType;
  /** ClassName для внешнего контейнера (AnchorWrapper) */
  anchorClassName?: string;
  /** Id для внешнего контейнера (AnchorWrapper) */
  anchorId?: string;
}

const TOOLTIP_DELAY = 1500;

export const Tooltip: React.FC<ITooltipProps> = ({
  renderContent,
  container,
  withDelay,
  tooltipRef,
  tooltipPosition,
  children,
  anchorClassName,
  anchorId,
  ...props
}) => {
  const anchorElementRef = React.useRef<HTMLDivElement | null>(null);
  const tooltipElementRef = React.useRef<HTMLDivElement | null>(null);
  const portal: Element = container || document.body;
  let scrollableParents: Array<Element> | undefined = undefined;
  let showTooltipTimer: any;

  const [visible, setVisible] = React.useState<boolean>(false);

  const hideTooltip = () => setVisible(false);

  const manageTooltip = () => {
    if (anchorElementRef.current && tooltipElementRef.current) {
      const directionCalculationResult: CalculationResult = calculateDirection(
        anchorElementRef.current,
        tooltipElementRef.current,
        tooltipPosition,
      );
      const { parentTop, parentLeft } = getContainingBlockOffset(portal);
      const anchorElementRect = anchorElementRef.current.getBoundingClientRect();
      const tooltipElementRect = tooltipElementRef.current.getBoundingClientRect();
      const calculatedStyles = directionCalculationResult.getStyles(
        anchorElementRect,
        tooltipElementRect,
        parentTop,
        parentLeft,
      );
      tooltipElementRef.current.style.transform = calculatedStyles;
    }
  };

  const attachRef = (node: HTMLDivElement) => handleRef(node, tooltipRef, tooltipElementRef);

  React.useEffect(() => {
    window.addEventListener('resize', hideTooltip);
    window.addEventListener('scroll', hideTooltip);

    /**  если у anchorElement есть родительский элемент, который имеет собственный скролл,
     * необходимо повесить на этого родителя обработчик скролла */
    if (!scrollableParents && anchorElementRef.current) {
      scrollableParents = getScrollableParents(anchorElementRef.current);
      scrollableParents?.forEach((el) => el.addEventListener('scroll', hideTooltip));
    }
    return () => {
      clearTimeout(showTooltipTimer);
      window.removeEventListener('resize', hideTooltip);
      window.removeEventListener('scroll', hideTooltip);
      scrollableParents?.forEach((el) => el.removeEventListener('scroll', hideTooltip));
    };
  });

  React.useEffect(() => {
    manageTooltip();
  }, [renderContent(), anchorElementRef, tooltipPosition, container]);

  const handleMouseEnter = () => {
    showTooltipTimer = window.setTimeout(
      () => {
        setVisible(true);
        manageTooltip();
      },
      withDelay ? TOOLTIP_DELAY : 0,
    );
  };

  const handleMouseLeave = () => {
    clearTimeout(showTooltipTimer);
    hideTooltip();
  };

  return (
    <AnchorWrapper
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      ref={anchorElementRef}
      className={anchorClassName}
      id={anchorId}
    >
      {children}
      {visible &&
        ReactDOM.createPortal(
          <TooltipWrapper role="tooltip" ref={attachRef} {...props}>
            {renderContent()}
          </TooltipWrapper>,
          portal,
        )}
    </AnchorWrapper>
  );
};
