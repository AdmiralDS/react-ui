import * as React from 'react';

import type { RefCallback, RefObject } from '#src/components/common/utils/handleRef';
import { handleRef } from '#src/components/common/utils/handleRef';
import { getScrollableParents } from '#src/components/common/utils/getScrollableParents';

import { FakeTarget, Portal, TooltipContainer, TooltipWrapper } from './style';
import type { TooltipPositionType } from './utils';
import { getTooltipDirection } from './utils';
import { getScrollbarSize } from '#src/components/common/dom/scrollbarUtil';

export interface ITooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание */
  renderContent: () => React.ReactNode;
  /** Ref на элемент, относительно которого позиционируется тултип */
  targetRef: React.RefObject<HTMLElement>;
  /** Контейнер, в котором будет отрисован тултип через React.createPortal. По умолчанию тултип отрисовывается в document.body */
  container?: Element | null;
  /** Отобразить тултип с задержкой в 1.5 секунды */
  withDelay?: boolean;
  /** Ссылка на тултип */
  tooltipRef?: RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null;
  /** Расположение тултипа */
  tooltipPosition?: TooltipPositionType;
}

const TOOLTIP_DELAY = 1500;

export const Tooltip: React.FC<ITooltipProps> = ({
  renderContent,
  targetRef,
  container: userContainer,
  withDelay,
  tooltipRef,
  tooltipPosition,
  ...props
}) => {
  const tooltipElementRef = React.useRef<HTMLDivElement | null>(null);
  const container: Element = userContainer || document.body;
  let scrollableParents: Array<Element> | undefined = undefined;
  let showTooltipTimer: any;

  const [visible, setVisible] = React.useState<boolean>(false);
  const [portalFlexDirection, setPortalFlexDirection] = React.useState('');
  const [portalFullWidth, setPortalFullWidth] = React.useState(false);

  const hideTooltip = () => setVisible(false);

  const manageTooltip = (scrollbarSize: number) => {
    if (targetRef.current && tooltipElementRef.current) {
      const direction = getTooltipDirection(
        targetRef.current,
        tooltipElementRef.current,
        scrollbarSize,
        tooltipPosition,
      );
      const tooltip = tooltipElementRef.current;
      switch (direction) {
        case 'topPageCenter':
          setPortalFlexDirection('column-reverse');
          setPortalFullWidth(true);
          tooltip.style.margin = '0 0 8px 0';
          break;
        case 'bottomPageCenter':
          setPortalFlexDirection('column');
          setPortalFullWidth(true);
          tooltip.style.margin = '8px 0 0 0';
          break;
        case 'left':
          setPortalFlexDirection('row-reverse');
          setPortalFullWidth(false);
          tooltip.style.margin = '0 8px 0 0';
          break;
        case 'right':
          setPortalFlexDirection('row');
          setPortalFullWidth(false);
          tooltip.style.margin = '0 0 0 8px';
          break;
        case 'top':
          setPortalFlexDirection('column-reverse');
          setPortalFullWidth(false);
          tooltip.style.margin = '0 0 8px 0';
          break;
        case 'bottom':
        default:
          setPortalFlexDirection('column');
          setPortalFullWidth(false);
          tooltip.style.margin = '8px 0 0 0';
      }
    }
  };

  const attachRef = (node: HTMLDivElement) => handleRef(node, tooltipRef, tooltipElementRef);

  React.useEffect(() => {
    window.addEventListener('resize', hideTooltip);
    window.addEventListener('scroll', hideTooltip);

    /**  если у targetRef.current есть родительский элемент, который имеет собственный скролл,
     * необходимо повесить на этого родителя обработчик скролла */
    if (!scrollableParents && targetRef.current) {
      scrollableParents = getScrollableParents(targetRef.current);
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
    const scrollbarSize = getScrollbarSize();
    manageTooltip(scrollbarSize);
  }, [renderContent(), targetRef, tooltipPosition, container]);

  // First container render always happens downward and transparent,
  // after size and position settled transparency returns to normal
  React.useEffect(() => {
    if (tooltipElementRef.current) {
      tooltipElementRef.current.style.opacity = '1';
    }
  }, [tooltipElementRef.current, visible]);

  React.useEffect(() => {
    targetRef.current?.addEventListener('mouseenter', handleMouseEnter);
    targetRef.current?.addEventListener('focus', handleMouseEnter);
    targetRef.current?.addEventListener('mouseleave', handleMouseLeave);
    targetRef.current?.addEventListener('blur', handleMouseLeave);
    return () => {
      targetRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      targetRef.current?.removeEventListener('focus', handleMouseEnter);
      targetRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      targetRef.current?.removeEventListener('blur', handleMouseLeave);
    };
  }, [targetRef.current]);

  const handleMouseEnter = () => {
    showTooltipTimer = window.setTimeout(
      () => {
        setVisible(true);
        manageTooltip(getScrollbarSize());
      },
      withDelay ? TOOLTIP_DELAY : 0,
    );
  };

  const handleMouseLeave = () => {
    clearTimeout(showTooltipTimer);
    hideTooltip();
  };

  return visible ? (
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
  ) : null;
};

Tooltip.displayName = 'Tooltip';
