import { refSetter } from '#src/components/common/utils/refSetter';
import { getScrollbarSize } from '#src/components/common/dom/scrollbarUtil';

import { FakeTarget, Portal, TooltipContainer, TooltipWrapper } from './style';
import type { TooltipPositionType, InternalTooltipPositionType } from './utils';
import { getTooltipDirection } from './utils';
import { DropdownContext } from '../DropdownProvider';
import type { CSSProperties } from 'react';
import { forwardRef, useContext, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';

export type TooltipDimension = 'm' | 's';

export interface ITooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: TooltipDimension;
  /** Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание */
  renderContent: () => React.ReactNode;
  /** Элемент, относительно которого позиционируется портал */
  targetElement: Element | null;
  /**
   * @deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
   * Взамен используйте rootRef пропсу на DropdownProvider.
   *
   * Контейнер, в котором будет отрисован тултип через React.createPortal.
   * По умолчанию тултип отрисовывается в document.body
   * */
  container?: never;
  /** Расположение тултипа */
  tooltipPosition?: TooltipPositionType;
}

export const TOOLTIP_DELAY = 1500;

export const Tooltip = forwardRef<HTMLDivElement, ITooltipProps>(
  ({ dimension = 'm', renderContent, targetElement, tooltipPosition, ...props }, ref) => {
    const tooltipElementRef = useRef<HTMLDivElement | null>(null);
    const tooltipHeight = useRef(0);
    const { rootRef } = useContext(DropdownContext);

    // Пустая строка, undefined, null и false не будут отображены
    const emptyContent: boolean = useMemo(() => !renderContent() && renderContent() !== 0, [renderContent]);

    const [portalFlexDirection, setPortalFlexDirection] = useState<CSSProperties['flexDirection']>();
    const [portalFullWidth, setPortalFullWidth] = useState(false);
    const [recalculation, startRecalculation] = useState({});

    const manageTooltip = (scrollbarSize: number) => {
      const target = targetElement;
      if (target && tooltipElementRef.current) {
        const direction: InternalTooltipPositionType = getTooltipDirection(
          target as HTMLElement,
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

    useEffect(() => {
      const scrollbarSize = getScrollbarSize();
      manageTooltip(scrollbarSize);
    }, [renderContent(), targetElement, tooltipPosition, recalculation]);

    // During fonts loading tooltip size can be changed and tooltip direction should be recalculated
    useLayoutEffect(() => {
      if (tooltipElementRef.current && !emptyContent) {
        const resizeObserver = new ResizeObserver((entries) => {
          entries.forEach((entry) => {
            if (tooltipHeight.current === 0) {
              // don't recalculate tooltip direction on its mount
              tooltipHeight.current = entry.contentRect.height;
            } else {
              startRecalculation({});
            }
          });
        });
        resizeObserver.observe(tooltipElementRef.current);
        return () => {
          resizeObserver.disconnect();
        };
      }
    }, [emptyContent]);

    // First container render always happens downward and transparent,
    // after size and position settled transparency returns to normal
    useEffect(() => {
      if (tooltipElementRef.current && !emptyContent) {
        tooltipElementRef.current.style.opacity = '1';
      }
    }, [emptyContent]);

    return emptyContent ? null : (
      <Portal
        targetElement={targetElement}
        rootRef={rootRef}
        $flexDirection={portalFlexDirection}
        fullContainerWidth={portalFullWidth}
      >
        <FakeTarget />
        <TooltipWrapper ref={refSetter(ref, tooltipElementRef)}>
          <TooltipContainer role="tooltip" $dimension={dimension} {...props}>
            {renderContent()}
          </TooltipContainer>
        </TooltipWrapper>
      </Portal>
    );
  },
);

Tooltip.displayName = 'Tooltip';
