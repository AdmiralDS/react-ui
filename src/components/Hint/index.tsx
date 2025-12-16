import * as React from 'react';
import type { css } from 'styled-components';

import type { RefCallback, RefObject } from '#src/components/common/utils/handleRef';
import { handleRef } from '#src/components/common/utils/handleRef';
import { getScrollableParents } from '#src/components/common/utils/getScrollableParents';
import { uid } from '#src/components/common/uid';
import { keyboardKey } from '../common/keyboardKey';

import type { Dimension } from './style';
import { AnchorWrapper, FakeTarget, Portal } from './style';
import { getHintDirection } from './utils';
import type { HintPositionType, InternalHintPositionType } from './utils';
import { HintContainer } from './HintContainer';
import { DropdownContext } from '#src/components/DropdownProvider';

type Trigger = 'click' | 'hover';

export interface HintProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Видимость компонента */
  visible: boolean;
  /** Колбек на изменение видимости хинта
   *
   * Если visibilityTrigger = 'hover', при ховере/фокусе на target элементе или hint колбек вызовется со значением visible=true,
   * при потере ховера/фокуса на target элементе или hint колбек вызовется со значением visible=false.
   *
   * Если visibilityTrigger = 'click', при клике на target элемент или нажатии клавиш Space/Enter на
   * target элементе колбек вызовется со значением visible=true,
   * при клике на крестик внутри хинта/клике вне хинта и target элемента/нажатии клавиши Escape
   * колбек вызовется со значением visible=false.
   */
  onVisibilityChange?: (visible: boolean) => void;
  /** Функция, которая возвращает реакт-компонент с контентом тултипа. Если этому компоненту нужны props, используйте замыкание */
  renderContent: () => React.ReactNode;
  /** Расположение хинта */
  hintPosition?: HintPositionType;
  /**
   * @deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
   * Взамен используйте rootRef пропсу на DropdownProvider.
   *
   * Контейнер, в котором будет отрисован тултип через React.createPortal.
   * По умолчанию тултип отрисовывается в document.body
   **/
  container?: never;
  /** Элемент, относительно которого будет позиционироваться хинт, если позиционирование относительно children не подходит */
  targetElement?: Element | null;
  /** Триггер появления компонента (событие, которое вызывает появление хинта) */
  visibilityTrigger?: Trigger;
  /** Размер компонента */
  dimension?: Dimension;
  /** Ссылка на тултип */
  hintRef?: RefCallback<HTMLDivElement> | RefObject<HTMLDivElement> | null;
  /** ClassName для внешнего контейнера (AnchorWrapper) */
  anchorClassName?: string;
  /** Id для внешнего контейнера (AnchorWrapper) */
  anchorId?: string;
  /** Позволяет добавлять миксин созданный с помощью styled css для внешнего контейнера (AnchorWrapper) */
  anchorCssMixin?: ReturnType<typeof css>;
  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Атрибут aria-label, описывающий назначение кнопки с крестиком, закрывающей хинт */
    closeButtonAriaLabel?: string;
  };
  /** Появление хинта не приводит к перемещению фокуса */
  preventFocusSteal?: boolean;
}

export const Hint: React.FC<HintProps> = ({
  visible,
  onVisibilityChange,
  renderContent,
  hintPosition,
  targetElement: userTargetElement,
  visibilityTrigger = 'hover',
  dimension = 'l',
  hintRef,
  children,
  anchorClassName,
  anchorId: anchorIdProp,
  anchorCssMixin,
  locale,
  preventFocusSteal,
  ...props
}) => {
  const { rootRef } = React.useContext(DropdownContext);
  const anchorElementRef = React.useRef<HTMLDivElement | null>(null);
  const hintElementRef = React.useRef<HTMLDivElement | null>(null);
  const content = renderContent();
  const anchorId = anchorIdProp || uid();

  const targetElement = userTargetElement || anchorElementRef.current;

  const [recalculation, startRecalculation] = React.useState<Record<string, never> | null>(null);
  const [portalFlexDirection, setPortalFlexDirection] = React.useState('');
  const [portalFullWidth, setPortalFullWidth] = React.useState(false);
  const [isMobile, setMobile] = React.useState(window.innerWidth < 640);

  const showHint = () => onVisibilityChange?.(true);
  const hideHint = () => onVisibilityChange?.(false);

  // если ширина экрана меньше 640 пикселей, хинт переходит в состояние mobile
  // (адаптируется по ширине к экрану и может располагаться только снизу или сверху от target-элемента)
  React.useLayoutEffect(() => {
    const listener = () => {
      if (window.innerWidth < 640) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    addEventListener('resize', listener);

    return () => {
      removeEventListener('resize', listener);
    };
  }, []);

  React.useLayoutEffect(() => {
    const hint = hintElementRef.current;

    if (visible && targetElement && hint) {
      const anchorElementRect = targetElement.getBoundingClientRect();
      const hintElementRect = hint.getBoundingClientRect();
      if (isMobile) {
        if (window.innerHeight - anchorElementRect.bottom > hintElementRect.height) {
          setPortalFlexDirection('column');
        } else {
          setPortalFlexDirection('column-reverse');
        }
        setPortalFullWidth(true);
        hint.style.alignSelf = 'center';
        hint.style.margin = '0';
      } else {
        const direction: InternalHintPositionType = getHintDirection(targetElement as HTMLElement, hint, hintPosition);
        switch (direction) {
          case 'topPageCenter':
            setPortalFlexDirection('column-reverse');
            setPortalFullWidth(true);
            hint.style.alignSelf = 'center';
            hint.style.margin = '0';
            break;
          case 'bottomPageCenter':
            setPortalFlexDirection('column');
            setPortalFullWidth(true);
            hint.style.alignSelf = 'center';
            hint.style.margin = '0';
            break;
          case 'right':
            setPortalFlexDirection('row');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'center';
            hint.style.margin = '0';
            break;
          case 'left':
            setPortalFlexDirection('row-reverse');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'center';
            hint.style.margin = '0';
            break;
          case 'top':
            setPortalFlexDirection('column-reverse');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'center';
            hint.style.margin = '0';
            break;
          case 'bottom':
            setPortalFlexDirection('column');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'center';
            hint.style.margin = '0';
            break;
          case 'rightTop':
            setPortalFlexDirection('row');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'flex-end';
            hint.style.margin = '0 0 -8px 0';
            break;
          case 'rightBottom':
            setPortalFlexDirection('row');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'flex-start';
            hint.style.margin = '-8px 0 0 0';
            break;
          case 'leftTop':
            setPortalFlexDirection('row-reverse');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'flex-end';
            hint.style.margin = '0 0 -8px 0';
            break;
          case 'leftBottom':
            setPortalFlexDirection('row-reverse');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'flex-start';
            hint.style.margin = '-8px 0 0 0';
            break;
          case 'topLeft':
            setPortalFlexDirection('column-reverse');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'flex-end';
            hint.style.margin = '0 -8px 0 0';
            break;
          case 'topRight':
            setPortalFlexDirection('column-reverse');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'flex-start';
            hint.style.margin = '0 0 0 -8px';
            break;
          case 'bottomLeft':
            setPortalFlexDirection('column');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'flex-end';
            hint.style.margin = '0 -8px 0 0';
            break;
          case 'bottomRight':
          default:
            setPortalFlexDirection('column');
            setPortalFullWidth(false);
            hint.style.alignSelf = 'flex-start';
            hint.style.margin = '0 0 0 -8px';
        }
      }
    }
  }, [userTargetElement, hintPosition, visible, recalculation, dimension, content, isMobile]);

  const attachRef = (node: HTMLDivElement) => handleRef(node, hintRef, hintElementRef);
  const scrollableParents = React.useMemo(
    () => getScrollableParents(anchorElementRef.current) ?? [],
    [anchorElementRef.current],
  );

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (event) => {
    const code = keyboardKey.getCode(event);
    if (code === keyboardKey.Enter || code === keyboardKey[' ']) {
      event.preventDefault();
      showHint();
    }
  };

  // First hint render always happens downward and transparent,
  // after size and position settled transparency returns to normal
  React.useEffect(() => {
    if (visible && hintElementRef.current) {
      hintElementRef.current.style.opacity = '1';
    }
  }, [visible]);

  // Очистка таймера при размонтировании
  React.useEffect(() => {
    return () => {
      if (blockTimeoutRef.current) {
        clearTimeout(blockTimeoutRef.current);
        blockTimeoutRef.current = null;
      }
    };
  }, []);

  // Флаг для блокировки закрытия Hint при взаимодействии (клик на anchor или Hint)
  const shouldBlockHideHint = React.useRef(false);
  const blockTimeoutRef = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  // В режиме hover: предотвращаем закрытие Hint при переходе курсора с anchor на Hint
  const handleAnchorMouseLeave =
    visibilityTrigger === 'hover'
      ? (e: React.MouseEvent) => {
          const relatedTarget = e.relatedTarget as Node;
          // Если курсор перешёл на Hint, не закрываем
          if (hintElementRef.current && relatedTarget && hintElementRef.current.contains(relatedTarget)) {
            return;
          }
          // Если курсор перешёл на anchor (вернулся обратно), не закрываем
          if (anchorElementRef.current && relatedTarget && anchorElementRef.current.contains(relatedTarget)) {
            return;
          }
          // Проверяем, не заблокировано ли закрытие (например, при клике)
          if (shouldBlockHideHint.current) {
            return;
          }
          // Если relatedTarget не определён (быстрое движение мыши), проверяем через requestAnimationFrame
          if (!relatedTarget) {
            requestAnimationFrame(() => {
              // Проверяем, не находится ли курсор над Hint или anchor
              const mouseEvent = e as React.MouseEvent<HTMLDivElement>;
              const hoveredElement = document.elementFromPoint(mouseEvent.clientX || 0, mouseEvent.clientY || 0);
              if (hoveredElement && hintElementRef.current && hintElementRef.current.contains(hoveredElement)) {
                return;
              }
              if (hoveredElement && anchorElementRef.current && anchorElementRef.current.contains(hoveredElement)) {
                return;
              }
              if (!shouldBlockHideHint.current) {
                hideHint();
              }
            });
            return;
          }
          hideHint();
        }
      : undefined;

  // В режиме hover: предотвращаем закрытие Hint при потере фокуса, если фокус перешёл на Hint
  const handleAnchorBlur =
    visibilityTrigger === 'hover'
      ? (e: React.FocusEvent) => {
          const relatedTarget = e.relatedTarget as Node;
          // Если фокус перешёл на Hint, не закрываем
          if (hintElementRef.current && relatedTarget && hintElementRef.current.contains(relatedTarget)) {
            return;
          }
          // Если фокус перешёл на anchor, не закрываем
          if (anchorElementRef.current && relatedTarget && anchorElementRef.current.contains(relatedTarget)) {
            return;
          }
          // Проверяем, не заблокировано ли закрытие
          if (shouldBlockHideHint.current) {
            return;
          }
          hideHint();
        }
      : undefined;

  // В режиме hover: при mousedown на anchor блокируем закрытие (срабатывает раньше mouseleave/blur)
  const handleAnchorMouseDown =
    visibilityTrigger === 'hover'
      ? () => {
          shouldBlockHideHint.current = true;
          if (blockTimeoutRef.current) {
            clearTimeout(blockTimeoutRef.current);
          }
          // Сбрасываем флаг через небольшую задержку (после завершения клика)
          blockTimeoutRef.current = setTimeout(() => {
            shouldBlockHideHint.current = false;
            blockTimeoutRef.current = null;
          }, 150);
        }
      : undefined;

  return (
    <AnchorWrapper
      onMouseEnter={visibilityTrigger === 'click' ? undefined : showHint}
      onMouseLeave={visibilityTrigger === 'click' ? undefined : handleAnchorMouseLeave}
      onFocus={visibilityTrigger === 'click' ? undefined : showHint}
      onBlur={visibilityTrigger === 'click' ? undefined : handleAnchorBlur}
      onClick={visibilityTrigger === 'click' ? showHint : undefined}
      onMouseDown={handleAnchorMouseDown}
      onKeyDown={visibilityTrigger === 'click' ? handleKeyDown : undefined}
      ref={anchorElementRef}
      className={anchorClassName}
      id={anchorId}
      $anchorCssMixin={anchorCssMixin}
    >
      {children}
      {visible && (
        <Portal
          targetElement={targetElement}
          rootRef={rootRef}
          $flexDirection={portalFlexDirection}
          fullContainerWidth={portalFullWidth}
        >
          <FakeTarget />
          <HintContainer
            ref={attachRef}
            dimension={dimension}
            isMobile={isMobile}
            content={content}
            visibilityTrigger={visibilityTrigger}
            scrollableParents={scrollableParents}
            startRecalculation={startRecalculation}
            anchorElementRef={anchorElementRef}
            anchorId={anchorId}
            hideHint={hideHint}
            locale={locale}
            preventFocusSteal={preventFocusSteal}
            visible={visible}
            onHintInteraction={
              visibilityTrigger === 'hover'
                ? () => {
                    shouldBlockHideHint.current = true;
                    if (blockTimeoutRef.current) {
                      clearTimeout(blockTimeoutRef.current);
                    }
                    // Сбрасываем флаг через небольшую задержку
                    blockTimeoutRef.current = setTimeout(() => {
                      shouldBlockHideHint.current = false;
                      blockTimeoutRef.current = null;
                    }, 150);
                  }
                : undefined
            }
            {...props}
          />
        </Portal>
      )}
    </AnchorWrapper>
  );
};

Hint.displayName = 'Hint';
