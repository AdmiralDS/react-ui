import * as React from 'react';
import { handleRef } from '#src/components/common/utils/handleRef';
import { getScrollableParents } from '#src/components/common/utils/getScrollableParents';
import { getScrollbarSize } from '#src/components/common/dom/scrollbarUtil';
import { refSetter } from '#src/components/common/utils/refSetter';

import { getTooltipDirection } from './utils';
import { FakeTarget, Portal, TooltipContainer, TooltipWrapper } from './style';

const TOOLTIP_DELAY = 1500;

export function TooltipHOC<P extends object>(
  Component: React.ComponentType<P>,
  renderContent: () => React.ReactNode,
  tooltipPosition?: any,
  withDelay?: any,
  tooltipRef?: any,
) {
  const WrappedComponent = ({ innerRef, ...props }: any) => {
    const anchorElementRef = React.useRef<any>(null);
    const tooltipElementRef = React.useRef<HTMLDivElement | null>(null);
    // const container: Element = userContainer || document.body;
    const container: Element = document.body;
    let scrollableParents: Array<Element> | undefined = undefined;
    let showTooltipTimer: any;

    const [visible, setVisible] = React.useState<boolean>(false);
    const [portalFlexDirection, setPortalFlexDirection] = React.useState('');
    const [portalFullWidth, setPortalFullWidth] = React.useState(false);

    const hideTooltip = () => setVisible(false);

    const manageTooltip = (scrollbarSize: number) => {
      if (anchorElementRef.current && tooltipElementRef.current) {
        const direction = getTooltipDirection(
          anchorElementRef.current,
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
      const scrollbarSize = getScrollbarSize();
      manageTooltip(scrollbarSize);
    }, [renderContent(), anchorElementRef, tooltipPosition, container]);

    // First container render always happens downward and transparent,
    // after size and position settled transparency returns to normal
    React.useEffect(() => {
      if (tooltipElementRef.current) {
        tooltipElementRef.current.style.opacity = '1';
      }
    }, [tooltipElementRef.current, visible]);

    /** Вешаю обработчик на mouseenter через addEventListener,
     * React SyntheticEvent onMouseEnter отрабатывает некорректно в случае,
     * если мышь была наведена на задизейбленный элемент, а потом была передвинута на AnchorWrapper
     * https://github.com/facebook/react/issues/19419#:~:text=mouseenter%20does%20not%20fire%20because,element%20of%20the%20opposing%20event.
     */
    React.useEffect(() => {
      anchorElementRef.current?.addEventListener('mouseenter', handleMouseEnter);
      anchorElementRef.current?.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        anchorElementRef.current?.removeEventListener('mouseenter', handleMouseEnter);
        anchorElementRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, [anchorElementRef.current]);

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

    return (
      <>
        <Component
          {...(props as P)}
          innerRef={refSetter(innerRef, anchorElementRef)}
          onFocus={(e: FocusEvent) => {
            handleMouseEnter();
            (props as any)?.onFocus?.(e);
          }}
          onBlur={(e: FocusEvent) => {
            handleMouseLeave();
            (props as any)?.onBlur?.(e);
          }}
        />
        {visible && (
          <Portal
            targetRef={anchorElementRef}
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
        )}
      </>
    );
  };

  // использую forwardRef на тот случай, если ref захотят прокинуть на результат вызова TooltipHoc
  return React.forwardRef((props, ref) => {
    return <WrappedComponent innerRef={ref} {...props} />;
  });
}
