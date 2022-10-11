import * as React from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Tooltip, TOOLTIP_DELAY } from '#src/components/Tooltip';
import type { ITooltipProps } from '#src/components/Tooltip';

export interface TooltipHocProps {
  /** Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание */
  renderContent: () => React.ReactNode;
  /** Контейнер, в котором будет отрисован тултип через React.createPortal. По умолчанию тултип отрисовывается в document.body */
  container?: Element | null;
  /** Отобразить тултип с задержкой в 1.5 секунды */
  withDelay?: boolean;
  /** Ссылка на тултип */
  tooltipRef?: React.Ref<HTMLDivElement>;
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
    const [node, setNode] = React.useState<HTMLElement | null>(null);
    const [timer, setTimer] = React.useState<number>();

    React.useEffect(() => {
      function show() {
        setTimer(window.setTimeout(() => setVisible(true), withDelay ? TOOLTIP_DELAY : 0));
      }
      function hide() {
        clearTimeout(timer);
        setVisible(false);
      }
      if (node) {
        node.addEventListener('mouseenter', show);
        node.addEventListener('focus', show);
        node.addEventListener('mouseleave', hide);
        node.addEventListener('blur', hide);
        return () => {
          if (timer) clearTimeout(timer);
          node.removeEventListener('mouseenter', show);
          node.removeEventListener('focus', show);
          node.removeEventListener('mouseleave', hide);
          node.removeEventListener('blur', hide);
        };
      }
    }, [node, setTimer, setVisible, timer]);

    return (
      <>
        <Component {...(wrappedCompProps as P & object)} ref={refSetter(forwardedRef, anchorElementRef, setNode)} />
        {visible && (
          <Tooltip
            targetRef={anchorElementRef}
            renderContent={renderContent}
            container={container}
            tooltipPosition={tooltipPosition}
            ref={tooltipRef}
          />
        )}
      </>
    );
  };

  return React.forwardRef<any, P & TooltipHocProps>((props: P & TooltipHocProps, ref) => {
    return <WrappedComponent forwardedRef={ref} {...props} />;
  });
}
