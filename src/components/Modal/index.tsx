import { createPortal } from 'react-dom';
import styled, { css, useTheme } from 'styled-components';
import type { DataAttributes } from 'styled-components';
import { createContext, forwardRef, useContext, useEffect, useRef } from 'react';
import { getKeyboardFocusableElements } from '#src/components/common/utils/getKeyboardFocusableElements';
import { refSetter } from '#src/components/common/utils/refSetter';
import { parseShadow } from '#src/components/common/utils/parseShadowFromTheme';
import { typography } from '#src/components/Typography';
import { LIGHT_THEME } from '#src/components/themes';
import { manager } from './manager';
import { largeGroupBorderRadius } from '#src/components/themes/borderRadius';
import { CloseIconPlacementButton } from '#src/components/IconPlacement';
import { ReactComponent as InfoOutline } from '@admiral-ds/icons/build/service/InfoOutline.svg';
import { ReactComponent as CheckOutline } from '@admiral-ds/icons/build/service/CheckOutline.svg';
import { ReactComponent as CloseCircleOutline } from '@admiral-ds/icons/build/service/CloseCircleOutline.svg';
import { ReactComponent as ErrorOutline } from '@admiral-ds/icons/build/service/ErrorOutline.svg';
import type { ScrollContainerProps } from '#src/components/Scrollbar';
import { ScrollContainer } from '#src/components/Scrollbar';

type Dimension = 'xl' | 'l' | 'm' | 's';

export type ModalStatusIconType = 'information' | 'success' | 'warning' | 'danger';

export interface ModalStatusIconProps {
  status: ModalStatusIconType;
}

const Overlay = styled.div<{ $overlayStyledCss: ReturnType<typeof css> }>`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: var(--admiral-color-Opacity_Modal, ${(p) => p.theme.color['Opacity/Modal']});
  transition: opacity 0.3s ease 0s;
  z-index: var(--admiral-z-index-modal, ${({ theme }) => theme.zIndex.modal});
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
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  margin: 0;
  padding: ${({ $mobile, $displayCloseIcon }) => {
    if ($mobile) {
      return $displayCloseIcon ? '0 46px 8px 16px' : '0 16px 8px';
    }
    return $displayCloseIcon ? '0 56px 8px 24px' : '0 24px 8px';
  }};
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

const modalIconColor = css<{ $status: ModalStatusIconType }>`
  fill: ${({ $status, theme }) => {
    switch ($status) {
      case 'success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
      case 'warning':
        return `var(--admiral-color-Warning_Warning50Main, ${theme.color['Warning/Warning 50 Main']})`;
      case 'danger':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'information':
      default:
        return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
    }
  }};
`;

const ModalStatusIconWrapper = styled.div<{ $status: ModalStatusIconType; $mobile: boolean }>`
  margin-left: ${({ $mobile }) => ($mobile ? 16 : 24)}px;
  margin-bottom: ${({ $mobile }) => ($mobile ? 6 : 8)}px;
  width: 40px;
  height: 40px;

  & *[fill^='#'] {
    ${modalIconColor}
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
  background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
  box-shadow: var(--admiral-box-shadow-Shadow16, ${(p) => parseShadow(p.theme.shadow['Shadow 16'])});
  border-radius: var(--admiral-border-radius-Large, ${(p) => largeGroupBorderRadius(p.theme.shape)});
  ${({ $mobile }) => ($mobile ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  outline: none;
`;

const CloseButton = styled(CloseIconPlacementButton)<{ $mobile?: boolean }>`
  position: absolute;
  top: 16px;
  right: ${({ $mobile }) => ($mobile ? 12 : 20)}px;
`;

export const emptyOverlayStyledCss = css``;

const ModalContext = createContext({ mobile: false, displayCloseIcon: true } as {
  mobile: boolean;
  displayCloseIcon: boolean;
});

const nothing = () => {};
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
  overlayStyledCss?: ReturnType<typeof css>;
  /** Позволяет добавлять класс на подложку модального окна  */
  overlayClassName?: string;
  /** Позволяет добавлять стили на подложку модального окна  */
  overlayStyle?: React.CSSProperties;
  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Атрибут aria-label, описывающий назначение кнопки с крестиком, закрывающей модальное окно */
    closeButtonAriaLabel?: string;
  };
  /** Конфиг функция пропсов для кнопки закрытия модального окна. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  closeButtonPropsConfig?: (
    props: React.ComponentProps<typeof CloseButton>,
  ) => Partial<React.ComponentProps<typeof CloseButton> & DataAttributes>;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
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
      closeButtonPropsConfig = nothing,
      ...props
    },
    ref,
  ) => {
    const theme = useTheme() || LIGHT_THEME;
    const closeBtnAriaLabel =
      locale?.closeButtonAriaLabel || theme.locales[theme.currentLocale].modal.closeButtonAriaLabel;
    const modalRef = useRef<HTMLDivElement | null>(null);
    const overlayRef = useRef<HTMLDivElement | null>(null);
    const previousFocusedElement = useRef<Element | null>(null);

    useEffect(() => {
      if (modalRef.current) {
        previousFocusedElement.current = document.activeElement;
        // set focus inside modalComponent
        modalRef.current.focus();
        const modal = {
          containerEl: container || document.body,
          modalEl: modalRef.current,
        };
        manager.add(modal, container || document.body);
        manager.mount(modal);

        return () => {
          // return focus on close/unmount of modal
          (previousFocusedElement.current as HTMLElement).focus();

          manager.remove(modal);
        };
      }
    }, [container]);

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
          {displayCloseIcon && <CloseButton {...closeButtonProps} {...closeButtonPropsConfig(closeButtonProps)} />}
        </ModalComponent>
      </Overlay>,
      container || document.body,
    );
  },
);

Modal.displayName = 'Modal';

export const ModalTitle: React.FC<React.HTMLAttributes<HTMLHeadingElement>> = ({ children, ...props }) => {
  const { mobile, displayCloseIcon } = useContext(ModalContext);
  const asProp = mobile ? 'h6' : 'h5';
  return (
    <Title $mobile={mobile} $displayCloseIcon={displayCloseIcon} as={asProp} {...props}>
      {children}
    </Title>
  );
};

export const ModalContent = ({
  children,
  contentBlockProps = {},
  ...props
}: ScrollContainerProps & { children: React.ReactNode }) => {
  const mobile = useContext(ModalContext).mobile;
  contentBlockProps.style = {
    ...contentBlockProps.style,
    paddingBlock: '8px',
    paddingInline: mobile ? '16px' : '24px',
  };
  return (
    <ScrollContainer tabIndex={-1} contentBlockProps={contentBlockProps} {...props}>
      {children}
    </ScrollContainer>
  );
};

export const ModalButtonPanel = ({ children, ...props }: React.ComponentPropsWithoutRef<'div'>) => {
  const mobile = useContext(ModalContext).mobile;
  return (
    <ButtonPanel $mobile={mobile} {...props}>
      {children}
    </ButtonPanel>
  );
};

export const ModalStatusIcon: React.FC<ModalStatusIconProps> = ({ status }) => {
  const mobile = useContext(ModalContext).mobile;
  return (
    <ModalStatusIconWrapper $status={status} $mobile={mobile}>
      {getModalIcon(status)}
    </ModalStatusIconWrapper>
  );
};
