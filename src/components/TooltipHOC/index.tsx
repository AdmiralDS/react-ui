import * as React from 'react';
import type { RefCallback, RefObject } from '#src/components/common/utils/handleRef';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Tooltip } from '#src/components/TooltipRefactor';
import type { ITooltipProps } from '#src/components/TooltipRefactor';

export interface TooltipHocProps {
  /** Видимость тултипа */
  visible: boolean;
  /** Колбек на изменение видимости тултипа
   * При ховере/фокусе на target элементе колбек вызовется со значением visible=true,
   * при потере ховера/фокуса на target элементе колбек вызовется со значением visible=false.
   */
  handleVisibilityChange: (visible: boolean) => void;
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
  /** Стандартные html-атрибуты, которые можно повесить на тултип */
  tooltipProps?: React.HTMLAttributes<HTMLDivElement>;
}

type WrappedComponentProps = {
  forwardedRef?: any;
};

export function TooltipHoc<P extends React.ComponentPropsWithRef<any>>(Component: React.ComponentType<P>) {
  const WrappedComponent = (props: P & TooltipHocProps & WrappedComponentProps) => {
    const {
      forwardedRef,
      visible,
      handleVisibilityChange,
      renderContent,
      container,
      withDelay,
      tooltipRef,
      tooltipPosition,
      tooltipProps,
      ...wrappedOnlyProps
    } = props;
    const anchorElementRef = React.useRef<any>(null);

    return (
      <>
        <Component
          {...(wrappedOnlyProps as any)}
          ref={refSetter(forwardedRef, anchorElementRef)}
          style={{ ...((wrappedOnlyProps as any).style ?? {}), ...{ cursor: 'pointer' } }}
        />
        <Tooltip
          visible={visible}
          onVisibilityChange={handleVisibilityChange}
          targetRef={anchorElementRef}
          renderContent={renderContent}
          container={container}
          withDelay={withDelay}
          tooltipPosition={tooltipPosition}
          tooltipRef={tooltipRef}
          {...tooltipProps}
        />
      </>
    );
  };

  return React.forwardRef<any, P & TooltipHocProps>((props: P & TooltipHocProps, ref) => {
    return <WrappedComponent forwardedRef={ref} {...props} />;
  });
}
