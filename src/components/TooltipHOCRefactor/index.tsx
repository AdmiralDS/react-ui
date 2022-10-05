import * as React from 'react';
import type { RefCallback, RefObject } from '#src/components/common/utils/handleRef';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Tooltip, TOOLTIP_DELAY } from '#src/components/TooltipRefactor';
import type { ITooltipProps } from '#src/components/TooltipRefactor';

export interface TooltipHocProps {
  /** Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание */
  renderContent: () => React.ReactNode;
  /** Контейнер, в котором будет отрисован тултип через React.createPortal. По умолчанию тултип отрисовывается в document.body */
  container?: Element | null;
  /** Отобразить тултип с задержкой в 1.5 секунды */
  withDelay?: boolean;
  /** Ссылка на тултип */
  tooltipRef?: RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null;
  /** Расположение тултипа */
  tooltipPosition?: ITooltipProps['tooltipPosition'];
}

type WrappedComponentProps = {
  forwardedRef?: any;
};

export function TooltipHoc<P extends React.ComponentPropsWithRef<any>>(Component: React.ComponentType<P>) {
  const WrappedComponent = (props: P & TooltipHocProps & WrappedComponentProps) => {
    const { forwardedRef, renderContent, container, withDelay, tooltipRef, tooltipPosition, ...wrappedCompProps } =
      props;
    const anchorElementRef = React.useRef<any>(null);
    const [visible, setVisible] = React.useState(false);
    const [node, setNode] = React.useState<any>(null);
    let showTooltipTimer: any;

    const show = () => {
      showTooltipTimer = window.setTimeout(() => setVisible(true), withDelay ? TOOLTIP_DELAY : 0);
    };
    const hide = () => {
      clearTimeout(showTooltipTimer);
      setVisible(false);
    };

    const setRef = React.useCallback((node: HTMLElement | null) => {
      if (node) {
        setNode(node);
      }
    }, []);

    React.useEffect(() => {
      if (node) {
        node.addEventListener('mouseenter', show);
        node.addEventListener('focus', show);
        node.addEventListener('mouseleave', hide);
        node.addEventListener('mousedown', hide);
        node.addEventListener('blur', hide);
        return () => {
          node.removeEventListener('mouseenter', show);
          node.removeEventListener('focus', show);
          node.removeEventListener('mouseleave', hide);
          node.removeEventListener('mousedown', hide);
          node.removeEventListener('blur', hide);
        };
      }
    }, [node]);

    // React.useEffect(() => {
    //   const anchor = anchorElementRef.current;
    //   if (anchor) {
    //     anchor.addEventListener('mouseenter', show);
    //     anchor.addEventListener('focus', show);
    //     anchor.addEventListener('mouseleave', hide);
    //     anchor.addEventListener('mousedown', hide);
    //     anchor.addEventListener('blur', hide);
    //     return () => {
    //       anchor.removeEventListener('mouseenter', show);
    //       anchor.removeEventListener('focus', show);
    //       anchor.removeEventListener('mouseleave', hide);
    //       anchor.removeEventListener('mousedown', hide);
    //       anchor.removeEventListener('blur', hide);
    //     };
    //   }
    // }, [anchorElementRef.current]);

    return (
      <>
        {/* <Component {...(wrappedCompProps as P & object)} ref={refSetter(forwardedRef, anchorElementRef)} /> */}
        <Component {...(wrappedCompProps as P & object)} ref={refSetter(forwardedRef, anchorElementRef, setRef)} />
        {visible && (
          <Tooltip
            targetRef={anchorElementRef}
            renderContent={renderContent}
            container={container}
            tooltipPosition={tooltipPosition}
            tooltipRef={tooltipRef}
          />
        )}
      </>
    );
  };

  return React.forwardRef<any, P & TooltipHocProps>((props: P & TooltipHocProps, ref) => {
    return <WrappedComponent forwardedRef={ref} {...props} />;
  });
}
