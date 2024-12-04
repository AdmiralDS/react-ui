import { useEffect, useRef, useState } from 'react';

import { refSetter } from '#src/components/common/utils/refSetter';
import { Tooltip, TOOLTIP_DELAY } from '#src/components/Tooltip';
import type { ITooltipProps, TooltipDimension } from '#src/components/Tooltip';
import { fixedForwardRef } from '../common/fixedForwardRef';

export interface TooltipHocProps {
  /** Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание */
  renderContent: () => React.ReactNode;
  /**
   * @deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
   * Взамен используйте rootRef пропсу на DropdownProvider
   *
   * Контейнер, в котором будет отрисован тултип через React.createPortal.
   * По умолчанию тултип отрисовывается в document.body
   */
  container?: never;
  /** Отобразить тултип с задержкой в 1.5 секунды */
  withDelay?: boolean;
  /** Ссылка на тултип */
  tooltipRef?: React.Ref<HTMLDivElement>;
  /** Расположение тултипа */
  tooltipPosition?: ITooltipProps['tooltipPosition'];
  /** Размер тултипа */
  tooltipDimension?: TooltipDimension;
}

export function TooltipHoc<T>(Component: React.ComponentType<T>) {
  return fixedForwardRef<HTMLElement, T & TooltipHocProps>((props, ref) => {
    const { renderContent, container, withDelay, tooltipRef, tooltipPosition, tooltipDimension, ...wrappedCompProps } =
      props;
    // Пустая строка, undefined, null и false не будут отображены
    const emptyContent = !renderContent() && renderContent() !== 0;

    const anchorElementRef = useRef<HTMLElement | null>(null);
    const [visible, setVisible] = useState(false);
    const [node, setNode] = useState<HTMLElement | null>(null);
    const [timer, setTimer] = useState<ReturnType<typeof setTimeout>>();

    useEffect(() => {
      function show() {
        setTimer(setTimeout(() => setVisible(true), withDelay ? TOOLTIP_DELAY : 0));
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
        <Component {...(wrappedCompProps as T & object)} ref={refSetter(ref, anchorElementRef, setNode)} />
        {visible && !emptyContent && (
          <Tooltip
            targetElement={anchorElementRef.current}
            renderContent={renderContent}
            container={container}
            tooltipPosition={tooltipPosition}
            dimension={tooltipDimension}
            ref={tooltipRef}
          />
        )}
      </>
    );
  });
}
