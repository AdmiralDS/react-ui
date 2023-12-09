import { getKeyboardFocusableElements } from '#src/components/common/utils/getKeyboardFocusableElements';
import { refSetter } from '#src/components/common/utils/refSetter';
import { typography } from '#src/components/Typography';
import * as React from 'react';
import { createPortal } from 'react-dom';
import type { RuleSet } from 'styled-components';
import styled, { css, useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { manager } from './manager';
import { largeGroupBorderRadius } from '#src/components/themes/borderRadius';
import { checkOverflow } from '#src/components/common/utils/checkOverflow';
import { CloseIconPlacementButton } from '#src/components/IconPlacement';
import type { CSSProperties, FC } from 'react';
import { ReactComponent as InfoOutline } from '@admiral-ds/icons/build/service/InfoOutline.svg';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';
import { ReactComponent as CloseCircleOutline } from '@admiral-ds/icons/build/service/CloseCircleOutline.svg';
import { ReactComponent as ErrorOutline } from '@admiral-ds/icons/build/service/ErrorOutline.svg';

type Dimension = 'xl' | 'l' | 'm' | 's';

export type ModalStatusIconType = 'information' | 'success' | 'warning' | 'danger';

export interface ModalStatusIconProps {
  status: ModalStatusIconType;
}

const Overlay = styled.div<{ $overlayStyledCss: RuleSet<object> }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color['Opacity/Modal']};
  transition: opacity 0.3s ease 0s;
  z-index: ${({ theme }) => theme.zIndex.modal};
  ${(p) => p.$overlayStyledCss}
  outline: none;
`;

const width = css<{ $dimension: Dimension; $mobile?: boolean }>`
  width: ${({ $dimension, $mobile }) => {
    // 16px on left and right side
    if ($mobile) return 'calc(100% - 32px)';
    switch ($dimension) {
      case 's':
        return '384px';
      case 'm':
        return '488px';
      case 'xl':
        return '800px';
      case 'l':
      default:
        return '592px';
    }
  }};
`;

const Title = styled.h5<{ $mobile: boolean; $displayCloseIcon: boolean }>`
  ${({ $mobile }) => ($mobile ? typography['Header/H6'] : typography['Header/H5'])};
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  margin: 0;
  padding: ${({ $mobile, $displayCloseIcon }) => {
    if ($mobile) {
      return $displayCloseIcon ? '0 46px 8px 16px' : '0 16px 8px';
    }
    return $displayCloseIcon ? '0 56px 8px 24px' : '0 24px 8px';
  }};
`;

const Content = styled.div<{ $mobile: boolean }>`
  overflow-y: auto;
  outline: none;
  padding: ${({ $mobile }) => `8px ${$mobile ? 16 : 24}px 8px ${$mobile ? 16 : 24}px`};
`;

const ButtonPanel = styled.div<{ $mobile: boolean }>`
  display: flex;
  flex-direction: ${({ $mobile }) => ($mobile ? 'column-reverse' : 'row-reverse')};
  padding: ${({ $mobile }) => ($mobile ? '16px 16px 0' : '16px 24px 0')};

  & > button {
    margin: ${({ $mobile }) => ($mobile ? '0 0 16px 0' : '0 16px 0 0')};
    ${({ $mobile }) => $mobile && 'width: 100%;'}
  }

  & > button:first-child {
    margin: 0;
  }
`;

function getModalIcon(status: ModalStatusIconType) {
  switch (status) {
    case 'success':
      return <CheckOutline />;
    case 'warning':
      return <ErrorOutline />;
    case 'danger':
      return <CloseCircleOutline />;
    case 'information':
    default:
      return <InfoOutline />;
  }
}

function getModalIconColor(status: ModalStatusIconType) {
  switch (status) {
    case 'success':
      return 'Success/Success 50 Main';
    case 'warning':
      return 'Warning/Warning 50 Main';
    case 'danger':
      return 'Error/Error 60 Main';
    case 'information':
    default:
      return 'Primary/Primary 60 Main';
  }
}

const ModalStatusIconWrapper = styled.div<{ $status: ModalStatusIconType; $mobile: boolean }>`
  margin-left: ${({ $mobile }) => ($mobile ? 16 : 24)}px;
  margin-bottom: ${({ $mobile }) => ($mobile ? 6 : 8)}px;
  width: 40px;
  height: 40px;

  & *[fill^='#'] {
    fill: ${({ theme, $status }) => theme.color[getModalIconColor($status)]};
  }
`;

const ModalComponent = styled.div<{ $dimension: Dimension; $mobile?: boolean }>`
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 20px 0 24px;
  ${width};
  max-height: ${({ $mobile }) => ($mobile ? '84vh' : '90vh')};
  background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
  ${({ theme }) => theme.shadow['Shadow 16']}
  border-radius: ${(p) => largeGroupBorderRadius(p.theme.shape)};
  ${({ $mobile }) => ($mobile ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  outline: none;
`;

const CloseButton = styled(CloseIconPlacementButton)<{ $mobile?: boolean }>`
  position: absolute;
  top: 16px;
  right: ${({ $mobile }) => ($mobile ? 12 : 20)}px;
`;

export const emptyOverlayStyledCss = css``;

const ModalContext = React.createContext({ mobile: false, displayCloseIcon: true } as {
  mobile: boolean;
  displayCloseIcon: boolean;
});

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: Dimension;
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
   * Позволяет добавлять стили для подложки модального окна через миксин, созданный с помощью styled css.
   * Например цвет фона в зависимости от темы:
   *  const overlayStyles = css\`background-color: ${({ theme }) => hexToRgba(theme.color["Neutral/Neutral 05"], 0.6)};\`
   * */
  overlayStyledCss?: RuleSet<object>;
  /** Позволяет добавлять класс на подложку модального окна  */
  overlayClassName?: string;
  /** Позволяет добавлять стили на подложку модального окна  */
  overlayStyle?: CSSProperties;
  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Атрибут aria-label, описывающий назначение кнопки с крестиком, закрывающей модальное окно */
    closeButtonAriaLabel?: string;
  };
}

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      overlayStyledCss = emptyOverlayStyledCss,
      overlayClassName,
      overlayStyle,
      dimension = 'l',
      container,
      mobile = false,
      onClose,
      closeOnEscapeKeyDown,
      closeOnOutsideClick,
      displayCloseIcon = true,
      children,
      locale,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme() || LIGHT_THEME;
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
    }, []);

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Escape' && closeOnEscapeKeyDown) {
        // prevent browser-specific escape key behavior (Safari exits fullscreen)
        event.preventDefault();
        // prevent other overlays from closing
        event.stopPropagation();
        onClose?.();
      } else if (event.key === 'Tab') {
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

    return createPortal(
      <Overlay
        ref={overlayRef}
        tabIndex={-1}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        $overlayStyledCss={overlayStyledCss}
        className={overlayClassName}
        style={overlayStyle}
      >
        <ModalComponent
          ref={refSetter(ref, modalRef)}
          tabIndex={-1}
          role="dialog"
          aria-modal
          $dimension={dimension}
          $mobile={mobile}
          {...props}
        >
          <ModalContext.Provider value={{ mobile, displayCloseIcon }}>{children}</ModalContext.Provider>
          {displayCloseIcon && (
            <CloseButton
              dimension="lSmall"
              aria-label={closeBtnAriaLabel}
              $mobile={mobile}
              onClick={handleCloseBtnClick}
            />
          )}
        </ModalComponent>
      </Overlay>,
      container || document.body,
    );
  },
);

Modal.displayName = 'Modal';

export const ModalTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  const { mobile, displayCloseIcon } = React.useContext(ModalContext);
  const asProp = mobile ? 'h6' : 'h5';
  return (
    <Title $mobile={mobile} $displayCloseIcon={displayCloseIcon} as={asProp} {...props}>
      {children}
    </Title>
  );
};

export const ModalContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const mobile = React.useContext(ModalContext).mobile;

  React.useLayoutEffect(() => {
    const node = contentRef.current;
    if (node) {
      let timeOut = setTimeout(() => {});
      const resizeObserver = new ResizeObserver(() => {
        clearTimeout(timeOut);
        const overflow = checkOverflow(node);
        if (overflow) {
          const paddingValue = `${(mobile ? 16 : 24) - (node.offsetWidth - node.clientWidth)}px`;
          timeOut = setTimeout(() => {
            node.style.paddingRight = paddingValue;
          }, 1000);
        } else {
          node.style.paddingRight = '';
        }
      });
      resizeObserver.observe(node);
      return () => {
        resizeObserver.unobserve(node);
      };
    }
  }, [mobile]);

  return (
    <Content tabIndex={-1} ref={contentRef} $mobile={mobile} {...props}>
      {children}
    </Content>
  );
};

export const ModalButtonPanel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  const mobile = React.useContext(ModalContext).mobile;
  return (
    <ButtonPanel $mobile={mobile} {...props}>
      {children}
    </ButtonPanel>
  );
};

export const ModalStatusIcon: FC<ModalStatusIconProps> = ({ status }) => {
  const mobile = React.useContext(ModalContext).mobile;
  return (
    <ModalStatusIconWrapper $status={status} $mobile={mobile}>
      {getModalIcon(status)}
    </ModalStatusIconWrapper>
  );
};
