import type { HTMLAttributes } from 'react';
import * as React from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import type { ItemProps } from '#src/components/Menu/MenuItem';
import { StyledDropdownContainer } from '#src/components/DropdownContainer';
import { Menu, MenuDimensions as Dimension, MenuProps } from '#src/components/Menu';
import { refSetter } from '#src/components/common/utils/refSetter';
import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

const StyledMenu = styled(Menu)<{ width?: string }>`
  width: ${({ width }) => (width ? width : 'auto')};
`;
const DropMenuContainer = styled(StyledDropdownContainer)<{
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  ${(p) => p.dropContainerCssMixin || ''}
`;

export interface RenderContentProps {
  /** Ref на отрендеренный элемент */
  buttonRef: React.Ref<HTMLElement>;
  /** Состояние меню */
  menuState: boolean;
  /** Обработчик нажатия клавиш */
  handleKeyDown?: (e: React.KeyboardEvent<HTMLElement>) => void;
  /** Обработчик клика мыши */
  handleClick?: (e: React.MouseEvent<HTMLElement>) => void;
  /** Иконка для отображения статуса меню */
  statusIcon?: React.ReactNode;
  /** Доступность кнопки */
  disabled?: boolean;
}

export interface DropMenuProps
  extends Pick<MenuProps, 'active' | 'onActivateItem' | 'onSelectItem'>,
    Omit<HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Размер компонента */
  dimension?: Dimension;
  /**  Ширина меню */
  menuWidth?: string;
  /** Задает максимальную высоту меню */
  menuMaxHeight?: string | number;
  /** Состояние загрузки */
  loading?: boolean;
  /** Опции выпадающего списка */
  items: Array<ItemProps>;
  /** Выбранная опция */
  selected?: string;
  /** Колбек на изменение выбранной опции */
  onChange?: (id: string) => void;
  /** Колбек на открытие меню */
  onOpen?: () => void;
  /** Колбек на закрытие меню */
  onClose?: () => void;
  /** Отключение компонента */
  disabled?: boolean;
  /**  Компонент, относительно которого необходимо выравнивать выпадающее меню */
  alignMenuRef?: React.RefObject<HTMLElement>;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** Компонент, для которого необходимо Menu */
  renderContentProp: (options: RenderContentProps) => React.ReactNode;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const DropMenu = React.forwardRef<HTMLElement, DropMenuProps>(
  (
    {
      dimension = 'm',
      menuWidth,
      disabled = false,
      loading = false,
      alignSelf = 'flex-end',
      onClose,
      onOpen,
      items,
      selected,
      onChange,
      onClick,
      onKeyDown,
      alignMenuRef,
      renderContentProp,
      menuMaxHeight,
      dropContainerCssMixin,
      ...props
    },
    ref,
  ) => {
    const [menuOpened, setMenuOpened] = React.useState<boolean>(false);
    const btnRef = React.useRef<HTMLElement>(null);
    const [active, setActive] = React.useState<string | undefined>();

    const reverseMenu = (e: React.MouseEvent<HTMLElement>) => {
      setMenuOpened((prevOpened) => !prevOpened);
      if (menuOpened) onClose?.();
      else onOpen?.();
      onClick?.(e);
    };
    const closeMenu = () => {
      setMenuOpened(false);
      onClose?.();
      btnRef.current?.focus();
    };

    const clickOutside = (e: Event) => {
      if (e.target && btnRef.current?.contains(e.target as Node)) {
        return;
      }
      setMenuOpened(false);
      onClose?.();
    };

    const handleBtnKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
      const code = keyboardKey.getCode(e);
      onKeyDown?.(e);
      switch (code) {
        case keyboardKey.Escape:
          if (menuOpened) closeMenu();
          break;
        case keyboardKey.Enter:
        case keyboardKey[' ']:
          if (!menuOpened) {
            e.stopPropagation();
            setMenuOpened(true);
            onOpen?.();
            e.preventDefault();
          }
          break;
        default:
          break;
      }
    };

    const handleClick = (selected?: string) => {
      if (selected) {
        onChange?.(selected);
      }
      closeMenu();
    };

    React.useEffect(() => {
      if (menuOpened) {
        setActive(selected || items?.[0]?.id);
      }
    }, [menuOpened]);

    return (
      <>
        {renderContentProp({
          disabled,
          buttonRef: refSetter(ref, btnRef),
          handleKeyDown: handleBtnKeyDown,
          handleClick: reverseMenu,
          statusIcon: <OpenStatusButton $isOpen={menuOpened} aria-hidden />,
          menuState: menuOpened,
        })}
        {menuOpened && !loading && (
          <DropMenuContainer
            role="listbox"
            alignSelf={alignSelf}
            targetRef={alignMenuRef || btnRef}
            onClickOutside={clickOutside}
            dropContainerCssMixin={dropContainerCssMixin}
            {...props}
          >
            <StyledMenu
              maxHeight={menuMaxHeight}
              width={menuWidth}
              model={items}
              selected={selected}
              onSelectItem={handleClick}
              dimension={dimension}
              active={active}
              onActivateItem={setActive}
            />
          </DropMenuContainer>
        )}
      </>
    );
  },
);

DropMenu.displayName = 'DropMenu';
