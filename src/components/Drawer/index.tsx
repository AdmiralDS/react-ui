import type { CSSProperties, HTMLAttributes, KeyboardEvent, MouseEvent } from 'react';
import { forwardRef, useEffect, useLayoutEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled, { css, useTheme, keyframes } from 'styled-components';
import type { DataAttributes } from 'styled-components';

import { getKeyboardFocusableElements } from '#src/components/common/utils/getKeyboardFocusableElements';
import { parseShadow } from '#src/components/common/utils/parseShadowFromTheme';
import { refSetter } from '#src/components/common/utils/refSetter';
import { LIGHT_THEME } from '#src/components/themes';
import { manager } from '#src/components/Modal/manager';
import { CloseIconPlacementButton } from '#src/components/IconPlacement';

import { DrawerContext } from './components';

type Position = 'right' | 'left';

const transitionTimingFunc = 'cubic-bezier(0, 0, 0.2, 1)';
const transitionDuration = '0.3s';
const transitionMixin = `
  ${transitionDuration} ${transitionTimingFunc} 0ms
`;

const fadeInRight = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const fadeInLeft = keyframes`
  from {
    transform: translateX(-100%);
  }
  to {
    transform: translateX(0);
  }
`;

const fadeInMixin = css<{ $position?: Position }>`
  animation-name: ${({ $position }) => ($position === 'right' ? fadeInRight : fadeInLeft)};
  animation-duration: ${transitionDuration};
  animation-timing-function: ${transitionTimingFunc};
`;

const Overlay = styled.div<{
  $overlayCssMixin: ReturnType<typeof css>;
  $backdrop?: boolean;
  $position: Position;
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: var(--admiral-z-index-drawer, ${({ theme }) => theme.zIndex.drawer});
  ${(p) => p.$overlayCssMixin}
  outline: none;
  pointer-events: none;
  background-color: transparent;
  transition: background-color ${transitionMixin};

  &[data-visible='true'] {
    ${({ theme, $backdrop }) =>
      $backdrop && `background-color: var(--admiral-color-Opacity_Modal, ${theme.color['Opacity/Modal']});`}
    ${({ $backdrop }) => $backdrop && `pointer-events: auto;`}

    & > div {
      opacity: 1;
      transform: translateX(0);
      transition: opacity 0ms linear 0ms;
      ${fadeInMixin}
    }
  }
`;

const DrawerComponent = styled.div<{ $position: Position; $mobile?: boolean }>`
  position: absolute;
  box-sizing: border-box;
  top: 0;
  bottom: 0;
  ${({ $position }) => ($position === 'right' ? 'right: 0;' : 'left: 0;')}
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
  overflow: hidden;
  padding: 20px 0 24px;
  ${({ $mobile }) => $mobile && 'min-width: calc(100% - 16px);'}
  max-width: calc(100% - 16px);
  background-color: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  box-shadow: var(--admiral-box-shadow-Shadow16, ${(p) => parseShadow(p.theme.shadow['Shadow 16'])});
  outline: none;
  transform: ${({ $position }) => ($position === 'right' ? 'translateX(100%)' : 'translateX(-100%)')};
  transition:
    transform ${transitionMixin},
    opacity 0ms linear 0.3s;
  pointer-events: auto;
  opacity: 0;
`;

const CloseButton = styled(CloseIconPlacementButton)<{ $mobile?: boolean }>`
  position: absolute;
  top: 20px;
  right: ${({ $mobile }) => ($mobile ? 16 : 24)}px;
`;

const nothing = () => {};
export interface DrawerProps extends HTMLAttributes<HTMLDivElement> {
  /** Состояние компонента: открыт/закрыт */
  isOpen?: boolean;
  /** С какой части экрана будет выдвигаться компонент (right по умолчанию) */
  position?: Position;
  /** Наличие затемненного фона, блокирующего контент страницы */
  backdrop?: boolean;
  /** Контейнер, в котором происходит размещение компонента (BODY по умолчанию) */
  container?: Element;
  /** Мобильная версия компонента */
  mobile?: boolean;
  /** Закрытие на нажатие клавиши Escape. Происходит только при условии, что фокус находится внутри drawerа.
   * По умолчанию при открытии компонента фокус проставляется внутри него.
   * Однако при backdrop = false, пользователь может взаимодействовать с остальной страницей и вывести фокус из drawerа,
   * в этом случае нажатие на клавишу Escape обработано не будет. */
  closeOnEscapeKeyDown?: boolean;
  /** Закрытие на клик по затемненному фону (если backdrop = true) */
  closeOnBackdropClick?: boolean;
  /** Отображение иконки крестика в верхнем правом углу */
  displayCloseIcon?: boolean;
  /** Обработчик закрытия компонента. Срабатывает:
   * 1) при клике на крестик в верхнем правому углу
   * 2) при нажатии Escape и closeOnEscapeKeyDown равным true
   * 3) при клике по затемненному фону и closeOnBackdropClick равным true
   */
  onClose?: () => void;

  /**
   * Возможность изменять стили для подложки drawerа через миксин, созданный с помощью styled css.
   * Например цвет фона в зависимости от темы:
   *  const overlayStyles = css\`background-color: ${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\`
   * */
  overlayCssMixin?: ReturnType<typeof css>;
  /** Позволяет добавлять класс на подложку drawerа  */
  overlayClassName?: string;
  /** Позволяет добавлять стили на подложку drawerа  */
  overlayStyle?: CSSProperties;
  locale?: {
    /** Атрибут aria-label, описывающий назначение кнопки с крестиком, закрывающей компонент */
    closeButtonAriaLabel?: string;
  };
  /** Конфиг функция пропсов для кнопки закрытия компонента. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  closeButtonPropsConfig?: (
    props: React.ComponentProps<typeof CloseButton>,
  ) => Partial<React.ComponentProps<typeof CloseButton> & DataAttributes>;
}

export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      isOpen = false,
      position: userPosition = 'right',
      backdrop = true,
      overlayCssMixin = css``,
      overlayClassName,
      overlayStyle,
      container,
      mobile = false,
      onClose,
      closeOnEscapeKeyDown = false,
      closeOnBackdropClick = false,
      displayCloseIcon = true,
      children,
      locale,
      closeButtonPropsConfig = nothing,
      ...props
    },
    ref,
  ) => {
    const position = mobile ? 'right' : userPosition;
    const theme = useTheme() || LIGHT_THEME;
    const closeBtnAriaLabel =
      locale?.closeButtonAriaLabel || theme.locales[theme.currentLocale].modal.closeButtonAriaLabel;
    const drawer = useRef<any>({});
    const drawerRef: any = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const previousFocusedElement: any = useRef(null);

    useEffect(() => {
      if (overlayRef.current) {
        if (isOpen) {
          overlayRef.current.dataset.visible = 'true';
        } else {
          overlayRef.current.dataset.visible = 'false';
        }
      }
    }, [isOpen]);

    const getDrawer = () => {
      drawer.current.modalEl = drawerRef.current;
      drawer.current.containerEl = container || document.body;
      return drawer.current;
    };

    // manage styles of drawer container
    useLayoutEffect(() => {
      if (backdrop && isOpen) {
        manager.add(getDrawer(), container || document.body);
        if (drawerRef.current) {
          manager.mount(getDrawer());
        }
        return () => {
          manager.remove(getDrawer());
        };
      }
    }, [backdrop, isOpen, container]);

    // manage focus
    useLayoutEffect(() => {
      if (isOpen) {
        previousFocusedElement.current = document.activeElement;

        // set focus inside drawer
        drawerRef.current?.focus();

        return () => {
          // return focus on close of drawer
          previousFocusedElement.current?.focus();
        };
      }
    }, [isOpen]);

    const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Escape' && closeOnEscapeKeyDown) {
        // prevent browser-specific escape key behavior (Safari exits fullscreen)
        event.preventDefault();
        // prevent other overlays from closing
        event.stopPropagation();
        onClose?.();
      } else if (event.key === 'Tab') {
        // focus trap
        const focusableEls: any = getKeyboardFocusableElements(drawerRef.current);
        if (event.shiftKey) {
          /* shift + tab */
          if (document.activeElement === focusableEls[0] || document.activeElement === drawerRef.current) {
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

    const handleMouseDown = (event: MouseEvent<HTMLDivElement>) => {
      closeOnBackdropClick && event.target === overlayRef.current && onClose?.();
    };

    const handleCloseBtnClick = (event: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>) => {
      event.stopPropagation();
      onClose?.();
    };

    const closeButtonProps = {
      dimension: 'lSmall',
      'aria-label': closeBtnAriaLabel,
      $mobile: mobile,
      onClick: handleCloseBtnClick,
    } satisfies React.ComponentProps<typeof CloseButton>;

    return createPortal(
      <Overlay
        ref={overlayRef}
        tabIndex={-1}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        $overlayCssMixin={overlayCssMixin}
        className={overlayClassName}
        style={overlayStyle}
        $backdrop={backdrop}
        data-visible={false}
        $position={position}
      >
        <DrawerComponent
          ref={refSetter(ref, drawerRef)}
          tabIndex={-1}
          role="dialog"
          aria-modal
          $position={position}
          $mobile={mobile}
          {...props}
        >
          <DrawerContext.Provider value={{ mobile, displayCloseIcon }}>{children}</DrawerContext.Provider>
          {displayCloseIcon && <CloseButton {...closeButtonProps} {...closeButtonPropsConfig(closeButtonProps)} />}
        </DrawerComponent>
      </Overlay>,
      container || document.body,
    );
  },
);

Drawer.displayName = 'Drawer';

export { DrawerTitle, DrawerContent, DrawerButtonPanel } from './components';
