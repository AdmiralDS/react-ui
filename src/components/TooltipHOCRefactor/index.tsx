import * as React from 'react';
import type { RefCallback, RefObject } from '#src/components/common/utils/handleRef';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Tooltip, TOOLTIP_DELAY } from '#src/components/TooltipRefactor';
import type { ITooltipProps } from '#src/components/Tooltip';

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
    let showTooltipTimer: any;

    const show = () => {
      showTooltipTimer = window.setTimeout(() => setVisible(true), withDelay ? TOOLTIP_DELAY : 0);
    };
    const hide = () => {
      clearTimeout(showTooltipTimer);
      setVisible(false);
    };

    // обязательно использовать addEventListener
    React.useEffect(() => {
      anchorElementRef.current?.addEventListener('mouseenter', show);
      anchorElementRef.current?.addEventListener('focus', show);
      anchorElementRef.current?.addEventListener('mouseleave', hide);
      anchorElementRef.current?.addEventListener('mousedown', hide);
      anchorElementRef.current?.addEventListener('blur', hide);
      return () => {
        anchorElementRef.current?.removeEventListener('mouseenter', show);
        anchorElementRef.current?.removeEventListener('focus', show);
        anchorElementRef.current?.removeEventListener('mouseleave', hide);
        anchorElementRef.current?.removeEventListener('mousedown', hide);
        anchorElementRef.current?.removeEventListener('blur', hide);
      };
    }, [anchorElementRef.current]);

    return (
      <>
        <Component {...(wrappedCompProps as P & object)} ref={refSetter(forwardedRef, anchorElementRef)} />
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
