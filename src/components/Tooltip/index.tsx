import * as React from 'react';

import { refSetter } from '#src/components/common/utils/refSetter';
import { getScrollbarSize } from '#src/components/common/dom/scrollbarUtil';

import { FakeTarget, Portal, TooltipContainer, TooltipWrapper } from './style';
import type { TooltipPositionType, InternalTooltipPositionType } from './utils';
import { getTooltipDirection } from './utils';
import { DropdownContext } from '../DropdownProvider';

export interface ITooltipProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание */
  renderContent: () => React.ReactNode;
  // TODO: Удалить targetRef в 8.x.x версии, сделать targetElement обязательным параметром
  /**
   * @deprecated Будет удалено в 8.x.x версии.
   * Взамен используйте параметр targetElement
   *
   * Ref на элемент, относительно которого позиционируется портал
   **/
  targetRef?: React.RefObject<HTMLElement>;
  /** Элемент, относительно которого позиционируется портал.
   * В качестве значения можно передать конкретный элемент или значение ref.current */
  targetElement?: Element | null;
  /**
   * @deprecated Используйте rootRef пропсу на DropdownProvider
   * Контейнер, в котором будет отрисован тултип через React.createPortal.
   * По умолчанию тултип отрисовывается в document.body
   * */
  container?: never;
  /** Расположение тултипа */
  tooltipPosition?: TooltipPositionType;
}

export const TOOLTIP_DELAY = 1500;

export const Tooltip = React.forwardRef<HTMLDivElement, ITooltipProps>(
  ({ renderContent, targetRef, targetElement, tooltipPosition, ...props }, ref) => {
    const tooltipElementRef = React.useRef<HTMLDivElement | null>(null);
    const tooltipHeight = React.useRef(0);
    const { rootRef } = React.useContext(DropdownContext);

    // Пустая строка, undefined, null и false не будут отображены
    const emptyContent: boolean = React.useMemo(() => !renderContent() && renderContent() !== 0, [renderContent]);

    const [portalFlexDirection, setPortalFlexDirection] = React.useState('');
    const [portalFullWidth, setPortalFullWidth] = React.useState(false);
    const [recalculation, startRecalculation] = React.useState({});

    const manageTooltip = (scrollbarSize: number) => {
      const target = targetElement ?? targetRef?.current;
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

    React.useEffect(() => {
      const scrollbarSize = getScrollbarSize();
      manageTooltip(scrollbarSize);
    }, [renderContent(), targetRef, targetElement, tooltipPosition, recalculation]);

    // During fonts loading tooltip size can be changed and tooltip direction should be recalculated
    React.useLayoutEffect(() => {
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
    React.useEffect(() => {
      if (tooltipElementRef.current && !emptyContent) {
        tooltipElementRef.current.style.opacity = '1';
      }
    }, [emptyContent]);

    return emptyContent ? null : (
      <Portal
        targetElement={targetElement ?? targetRef?.current}
        rootRef={rootRef}
        flexDirection={portalFlexDirection}
        fullContainerWidth={portalFullWidth}
      >
        <FakeTarget />
        <TooltipWrapper ref={refSetter(ref, tooltipElementRef)}>
          <TooltipContainer role="tooltip" {...props}>
            {renderContent()}
          </TooltipContainer>
        </TooltipWrapper>
      </Portal>
    );
  },
);

Tooltip.displayName = 'Tooltip';
