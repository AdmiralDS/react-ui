import { getKeyboardFocusableElements } from '#src/components/common/utils/getKeyboardFocusableElements';
import { refSetter } from '#src/components/common/utils/refSetter';
import * as React from 'react';
import ReactDOM from 'react-dom';
import type { Interpolation } from 'styled-components';
import styled, { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { manager } from '#src/components/Modal/manager';
import { CloseIconPlacementButton } from '#src/components/IconPlacement';

import { DrawerContext } from './components';
import useMountTransition from './useMountTransition';

export { DrawerTitle, DrawerContent, DrawerButtonPanel } from './components';

type Position = 'right' | 'left';

const Overlay = styled.div<{ overlayStyledCss: Interpolation<any>; $visible?: boolean; $in?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: ${({ theme }) => theme.zIndex.modal};
  ${(p) => p.overlayStyledCss}
  outline: none;

  background-color: ${({ $visible, $in, theme }) => ($visible && $in ? theme.color['Opacity/Modal'] : 'transparent')};
  transition: 0.3s background-color cubic-bezier(0, 0, 0.2, 1) 0ms;
`;

const DrawerComponent = styled.div<{ mobile?: boolean; $visible?: boolean; $in?: boolean }>`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  right: 0;
  ${({ mobile }) => mobile && 'left: 16px;'}
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  overflow: hidden;
  padding: 20px 0 24px;
  min-width: 320px;
  max-width: calc(100vw - 16px);
  background-color: ${({ theme }) => theme.color['Neutral/Neutral 00']};
  ${({ theme }) => theme.shadow['Shadow 16']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  outline: none;

  transform: ${({ $visible, $in, theme }) => ($visible && $in ? 'translateX(0)' : 'translateX(100%)')};
  transition: 0.3s transform cubic-bezier(0, 0, 0.2, 1) 0ms;
`;

const CloseButton = styled(CloseIconPlacementButton)<{ mobile?: boolean }>`
  position: absolute;
  top: 20px;
  right: ${({ mobile }) => (mobile ? 16 : 24)}px;
`;

export interface DrawerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** */
  visible?: boolean;
  /** С какой части экрана будет выдвигаться компонент */
  position?: Position;
  /** Происходит ли блокировка контента страницы */
  backdrop?: boolean;
  /** Контейнер, в котором происходит размещение модального окна (BODY по умолчанию) */
  container?: Element;
  /** Мобильная версия компонента */
  mobile?: boolean;
  /** Закрытие на нажатие клавиши Escape */
  closeOnEscapeKeyDown?: boolean;
  /** Закрытие на клик извне */
  closeOnOutsideClick?: boolean;
  /** Отображение иконки крестика в верхнем правом углу */
  displayCloseIcon?: boolean;
  /** Обработчик закрытия компонента. Срабатывает:
   * 1) при клике на крестик в верхнем правому углу
   * 2) при нажатии Escape и closeOnEscapeKeyDown равным true
   * 3) при клике извне и closeOnOutsideClick равным true
   */
  onClose?: () => void;

  /**
   * Возможность изменять стили для подложки модального окна.
   * Например цвет фона в зависимости от темы:
   *  const overlayStyles = css\`background-color: ${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\`
   * */
  overlayStyledCss?: Interpolation<any>;
  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Атрибут aria-label, описывающий назначение кнопки с крестиком, закрывающей модальное окно */
    closeButtonAriaLabel?: string;
  };
}

export const Drawer = React.forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      visible = false,
      position = 'right',
      backdrop = true,
      overlayStyledCss,
      container,
      mobile = false,
      onClose,
      closeOnEscapeKeyDown = true,
      closeOnOutsideClick = true,
      displayCloseIcon = true,
      children,
      locale,
      ...props
    },
    ref,
  ) => {
    const hasTransitionedIn = useMountTransition(visible, 300);

    const theme = React.useContext(ThemeContext) || LIGHT_THEME;
    const closeBtnAriaLabel =
      locale?.closeButtonAriaLabel || theme.locales[theme.currentLocale].modal.closeButtonAriaLabel;
    const modal = React.useRef<any>({});
    const modalRef: any = React.useRef<HTMLDivElement>(null);
    const overlayRef = React.useRef<HTMLDivElement>(null);
    const previousFocusedElement: any = React.useRef(null);

    const getModal = () => {
      modal.current.modalEl = modalRef.current;
      modal.current.containerEl = container || document.body;
      return modal.current;
    };

    React.useLayoutEffect(() => {
      if (backdrop && (visible || hasTransitionedIn)) {
        previousFocusedElement.current = document.activeElement;
        // set focus inside modalComponent
        modalRef.current?.focus();

        manager.add(getModal(), container || document.body);
        if (modalRef.current) {
          manager.mount(getModal());
        }
        return () => {
          // return focus on close/unmount of modal
          previousFocusedElement.current?.focus();

          manager.remove(getModal());
        };
      }
    }, [backdrop, visible, hasTransitionedIn]);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Escape' && closeOnEscapeKeyDown) {
        // prevent browser-specific escape key behavior (Safari exits fullscreen)
        event.preventDefault();
        // prevent other overlays from closing
        event.stopPropagation();
        onClose?.();
      } else if (event.key === 'Tab' && backdrop) {
        // focus trap
        const focusableEls: any = getKeyboardFocusableElements(modalRef.current);
        if (event.shiftKey) {
          /* shift + tab */
          if (document.activeElement === focusableEls[0] || document.activeElement === modalRef.current) {
            focusableEls[focusableEls.length - 1].focus();
            event.preventDefault();
          }
        } /* tab */ else {
          if (document.activeElement === focusableEls[focusableEls.length - 1]) {
            focusableEls[0].focus();
            event.preventDefault();
          }
        }
      }
    };

    const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
      closeOnOutsideClick && event.target === overlayRef.current && onClose?.();
    };

    const handleCloseBtnClick = (
      event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>,
    ) => {
      event.stopPropagation();
      onClose?.();
    };

    return visible || hasTransitionedIn
      ? ReactDOM.createPortal(
          <Overlay
            ref={overlayRef}
            tabIndex={-1}
            onMouseDown={handleMouseDown}
            onKeyDown={handleKeyDown}
            overlayStyledCss={overlayStyledCss}
            $visible={visible}
            $in={hasTransitionedIn}
          >
            <DrawerComponent
              ref={refSetter(ref, modalRef)}
              tabIndex={-1}
              role="dialog"
              aria-modal
              mobile={mobile}
              $visible={visible}
              $in={hasTransitionedIn}
              {...props}
            >
              <DrawerContext.Provider value={{ mobile, displayCloseIcon }}>{children}</DrawerContext.Provider>
              {displayCloseIcon && (
                <CloseButton
                  dimension="lSmall"
                  aria-label={closeBtnAriaLabel}
                  mobile={mobile}
                  onClick={handleCloseBtnClick}
                />
              )}
            </DrawerComponent>
          </Overlay>,
          container || document.body,
        )
      : null;
  },
);

Drawer.displayName = 'Drawer';
