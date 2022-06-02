import { getKeyboardFocusableElements } from '#src/components/common/utils/getKeyboardFocusableElements';
import { refSetter } from '#src/components/common/utils/refSetter';
import { typography } from '#src/components/Typography';
import { ReactComponent as CloseOutline } from '@admiral-ds/icons/build/service/CloseOutline.svg';
import * as React from 'react';
import ReactDOM from 'react-dom';
import styled, { css, Interpolation } from 'styled-components';
import ModalManager from './manager';

type Dimension = 'xl' | 'l' | 'm' | 's';

const Overlay = styled.div<{ overlayStyledCss: Interpolation<any> }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: ${({ theme }) => theme.color['Opacity/Modal']};
  backdrop-filter: blur(8px);
  transition: opacity 0.3s ease 0s;
  z-index: ${({ theme }) => theme.zIndex.modal};
  ${(p) => p.overlayStyledCss}
  outline: none;
`;

const width = css<{ dimension: Dimension; mobile?: boolean }>`
  width: ${({ dimension, mobile }) => {
    // 16px on left and right side
    if (mobile) return 'calc(100% - 32px)';
    switch (dimension) {
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

const Title = styled.h5<{ mobile?: boolean }>`
  ${typography['Header/H5']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  margin: 0 32px 16px 0;
`;

const Content = styled.div<{ $overflow?: boolean }>`
  overflow-y: auto;
  outline: none;
  ${({ $overflow }) => $overflow && 'padding-right: 24px;'}
`;

const ButtonPanel = styled.div<{ mobile?: boolean }>`
  display: flex;
  flex-direction: row-reverse;
  margin-top: 24px;

  & > button {
    margin-right: 16px;
  }

  & > button:first-child {
    margin-right: 0;
  }
`;

const ModalComponent = styled.div<{ dimension: Dimension; mobile?: boolean }>`
  position: absolute;
  box-sizing: border-box;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: ${({ mobile }) => (mobile ? '20px 16px 24px 16px' : '20px 24px 24px 24px')};
  ${width};
  max-height: ${({ mobile }) => (mobile ? '84vh' : '90vh')};
  background-color: ${({ theme }) => theme.color['Special/Elevated BG']};
  ${({ theme }) => theme.shadow['Shadow 16']}
  border-radius: 8px;
  ${({ mobile }) => (mobile ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  outline: none;

  ${({ mobile }) =>
    mobile &&
    `
    & > ${Title} {
      ${typography['Header/H6']}
      margin: 0 30px 16px 0;
    }
    & > ${ButtonPanel} {
      flex-direction: column-reverse;
      & > button {
        width: 100%;
        margin-bottom: 16px;
      }
      & > button:first-child {
          margin-bottom: 0;
      }
    }
  `}
`;

const CloseButton = styled.button<{ mobile?: boolean }>`
  position: absolute;
  top: 20px;
  right: ${({ mobile }) => (mobile ? 16 : 24)}px;
  flex-shrink: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  cursor: pointer;
  outline: none;
  border: 0;
  padding: 0;
  width: 24px;
  height: 24px;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  &:before {
    content: '';
    position: absolute;
    top: -4px;
    bottom: -4px;
    left: -4px;
    right: -4px;
    background: transparent;
    border-radius: 50%;
  }

  & *[fill^='#'] {
    fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }

  &:hover,
  &:focus {
    &:before {
      background: ${(p) => p.theme.color['Opacity/Hover']};
    }
  }

  &:active {
    &:before {
      background: ${(p) => p.theme.color['Opacity/Press']};
    }
  }
`;

export const emptyOverlayStyledCss = css``;

export const ModalTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  return <Title {...props}>{children}</Title>;
};

export const ModalContent: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const [overflow, setOverflow] = React.useState(false);

  const detectOverflow = (e: any) => {
    return e.clientHeight < e.scrollHeight;
  };

  React.useLayoutEffect(() => {
    if (contentRef.current && detectOverflow(contentRef.current) !== overflow) {
      setOverflow(detectOverflow(contentRef.current));
    }
  }, [children]);

  return (
    <Content tabIndex={-1} ref={contentRef} $overflow={overflow} {...props}>
      {children}
    </Content>
  );
};

export const ModalButtonPanel: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
  return <ButtonPanel {...props}>{children}</ButtonPanel>;
};

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
   * Возможность изменять стили для подложки модального окна.
   * Например цвет фона в зависимости от темы:
   *  const overlayStyles = css\`background-color: ${({ theme }) => hexToRgba(theme.color['Neutral/Neutral 05'], 0.6)};\`
   * */
  overlayStyledCss?: Interpolation<any>;
}

const manager = new ModalManager();

export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      overlayStyledCss = emptyOverlayStyledCss,
      dimension = 'l',
      container,
      mobile,
      onClose,
      closeOnEscapeKeyDown,
      closeOnOutsideClick,
      displayCloseIcon = true,
      children,
      ...props
    },
    ref,
  ) => {
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
      event.stopPropagation();
      if (event.key === 'Escape' && closeOnEscapeKeyDown) {
        event.preventDefault();
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

    return ReactDOM.createPortal(
      <Overlay
        ref={overlayRef}
        tabIndex={-1}
        onMouseDown={handleMouseDown}
        onKeyDown={handleKeyDown}
        overlayStyledCss={overlayStyledCss}
      >
        <ModalComponent
          ref={refSetter(ref, modalRef)}
          tabIndex={-1}
          role="dialog"
          aria-modal
          dimension={dimension}
          mobile={mobile}
          {...props}
        >
          {children}
          {displayCloseIcon && (
            <CloseButton aria-label="Закрыть модальное окно" mobile={mobile} onClick={handleCloseBtnClick}>
              <CloseOutline width={24} height={24} aria-hidden />
            </CloseButton>
          )}
        </ModalComponent>
      </Overlay>,
      container || document.body,
    );
  },
);

Modal.displayName = 'Modal';
