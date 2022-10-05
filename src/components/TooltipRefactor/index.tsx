import * as React from 'react';

import type { RefCallback, RefObject } from '#src/components/common/utils/handleRef';
import { handleRef } from '#src/components/common/utils/handleRef';

import { FakeTarget, Portal, TooltipContainer, TooltipWrapper } from './style';
import type { TooltipPositionType, InternalTooltipPositionType } from './utils';
import { getTooltipDirection } from './utils';
import { getScrollbarSize } from '#src/components/common/dom/scrollbarUtil';

export interface ITooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание */
  renderContent: () => React.ReactNode;
  /** Ref на элемент, относительно которого позиционируется тултип */
  targetRef: React.RefObject<HTMLElement>;
  /** Контейнер, в котором будет отрисован тултип через React.createPortal. По умолчанию тултип отрисовывается в document.body */
  container?: Element | null;
  /** Ссылка на тултип */
  tooltipRef?: RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null;
  /** Расположение тултипа */
  tooltipPosition?: TooltipPositionType;
}

export const TOOLTIP_DELAY = 1500;

export const Tooltip: React.FC<ITooltipProps> = ({
  renderContent,
  targetRef,
  container: userContainer,
  tooltipRef,
  tooltipPosition,
  ...props
}) => {
  const tooltipElementRef = React.useRef<HTMLDivElement | null>(null);
  const container: Element = userContainer || document.body;

  const [portalFlexDirection, setPortalFlexDirection] = React.useState('');
  const [portalFullWidth, setPortalFullWidth] = React.useState(false);

  const manageTooltip = (scrollbarSize: number) => {
    if (targetRef.current && tooltipElementRef.current) {
      const direction: InternalTooltipPositionType = getTooltipDirection(
        targetRef.current,
        tooltipElementRef.current,
        scrollbarSize,
        tooltipPosition,
      );
      const tooltip = tooltipElementRef.current;
      switch (direction) {
        case 'leftBottom':
        case 'leftTop':
        case 'left':
          setPortalFlexDirection('row-reverse');
          setPortalFullWidth(false);
          tooltip.style.margin = '0 8px 0 0';
          tooltip.style.alignSelf =
            direction === 'leftBottom' ? 'flex-start' : direction === 'leftTop' ? 'flex-end' : 'center';
          break;
        case 'rightBottom':
        case 'rightTop':
        case 'right':
          setPortalFlexDirection('row');
          setPortalFullWidth(false);
          tooltip.style.margin = '0 0 0 8px';
          tooltip.style.alignSelf =
            direction === 'rightBottom' ? 'flex-start' : direction === 'rightTop' ? 'flex-end' : 'center';
          break;
        case 'topPageCenter':
        case 'topLeft':
        case 'topRight':
        case 'top':
          setPortalFlexDirection('column-reverse');
          setPortalFullWidth(direction === 'topPageCenter' ? true : false);
          tooltip.style.margin = '0 0 8px 0';
          tooltip.style.alignSelf =
            direction === 'topLeft' ? 'flex-end' : direction === 'topRight' ? 'flex-start' : 'center';
          break;
        case 'bottomPageCenter':
        case 'bottomLeft':
        case 'bottomRight':
        case 'bottom':
        default:
          setPortalFlexDirection('column');
          setPortalFullWidth(direction === 'bottomPageCenter' ? true : false);
          tooltip.style.margin = '8px 0 0 0';
          tooltip.style.alignSelf =
            direction === 'bottomLeft' ? 'flex-end' : direction === 'bottomRight' ? 'flex-start' : 'center';
      }
    }
  };

  const attachRef = (node: HTMLDivElement) => handleRef(node, tooltipRef, tooltipElementRef);

  React.useEffect(() => {
    const scrollbarSize = getScrollbarSize();
    manageTooltip(scrollbarSize);
  }, [renderContent(), targetRef, tooltipPosition, container]);

  // First container render always happens downward and transparent,
  // after size and position settled transparency returns to normal
  React.useEffect(() => {
    if (tooltipElementRef.current) {
      tooltipElementRef.current.style.opacity = '1';
    }
  }, [tooltipElementRef.current]);

  return (
    <Portal
      targetRef={targetRef}
      container={container}
      flexDirection={portalFlexDirection}
      fullContainerWidth={portalFullWidth}
    >
      <FakeTarget />
      <TooltipWrapper ref={attachRef}>
        <TooltipContainer role="tooltip" {...props}>
          {renderContent()}
        </TooltipContainer>
      </TooltipWrapper>
    </Portal>
  );
};

Tooltip.displayName = 'Tooltip';
