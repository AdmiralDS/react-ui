import type { CSSProperties, HTMLAttributes } from 'react';
import * as React from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import type { ItemProps } from '#src/components/Menu/MenuItem';
import type { DropdownContainerProps } from '#src/components/DropdownContainer';
import { StyledDropdownContainer } from '#src/components/DropdownContainer';
import type { MenuDimensions as Dimension, MenuProps } from '#src/components/Menu';
import { Menu } from '#src/components/Menu';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled from 'styled-components';

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

export interface DropMenuComponentProps
  extends Pick<
      DropMenuProps,
      | 'isVisible'
      | 'onVisibilityChange'
      | 'active'
      | 'onActivateItem'
      | 'onSelectItem'
      | 'disableSelectedOptionHighlight'
      | 'renderTopPanel'
      | 'renderBottomPanel'
      | 'onForwardCycleApprove'
      | 'onBackwardCycleApprove'
    >,
    Pick<DropdownContainerProps, 'onClickOutside'> {}

export interface DropMenuProps
  extends Pick<
      MenuProps,
      | 'active'
      | 'onActivateItem'
      | 'onSelectItem'
      | 'multiSelection'
      | 'disableSelectedOptionHighlight'
      | 'renderTopPanel'
      | 'renderBottomPanel'
      | 'onForwardCycleApprove'
      | 'onBackwardCycleApprove'
    >,
    Pick<DropdownContainerProps, 'onClickOutside'>,
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
  /** @deprecated use onSelectItem instead
   * Колбек на изменение выбранной опции */
  onChange?: (id: string) => void;
  /** @deprecated use isVisible and onVisibilityChange instead
   * Колбек на открытие меню */
  onOpen?: () => void;
  /** @deprecated use isVisible and onVisibilityChange instead
   * Колбек на закрытие меню */
  onClose?: () => void;
  /** Отключение компонента */
  disabled?: boolean;
  /**  Компонент, относительно которого необходимо выравнивать выпадающее меню */
  alignMenuRef?: React.RefObject<HTMLElement>;
  /** Элемент, относительно которого позиционируется портал */
  targetElement?: Element;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** Компонент, для которого необходимо Menu */
  renderContentProp: (options: RenderContentProps) => React.ReactNode;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  dropContainerClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  dropContainerStyle?: CSSProperties;
  /** Видимость выпадающего меню */
  isVisible?: boolean;
  /** Колбек на изменение видимости меню */
  onVisibilityChange?: (isVisible: boolean) => void;
}

export const DropMenu = React.forwardRef<HTMLDivElement, DropMenuProps>(
  (
    {
      dimension = 'm',
      menuWidth,
      disabled = false,
      loading = false,
      alignSelf = 'flex-end',
      onClose, // TODO: убрать после удаления в DropMenuProps
      onOpen, // TODO: убрать после удаления в DropMenuProps
      items,
      selected,
      active,
      onSelectItem,
      onActivateItem,
      onChange, // TODO: убрать после удаления в DropMenuProps
      onClick,
      onKeyDown,
      alignMenuRef,
      targetElement,
      renderContentProp,
      menuMaxHeight,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      multiSelection = false, // TODO: убрать после удаления в Menu
      disableSelectedOptionHighlight = false,
      isVisible,
      onVisibilityChange = () => undefined,
      onClickOutside,
      renderTopPanel,
      renderBottomPanel,
      onForwardCycleApprove,
      onBackwardCycleApprove,
      ...props
    },
    ref,
  ) => {
    const [isMenuOpenState, setIsMenuOpenState] = React.useState<boolean>(false);
    const btnRef = React.useRef<HTMLElement>(null);

    const isMenuOpen = isVisible ?? isMenuOpenState;
    const setIsMenuOpen = (newMenuOpenState: boolean) => {
      setIsMenuOpenState(newMenuOpenState);
      onVisibilityChange(newMenuOpenState);
    };

    const reverseMenu = (e: React.MouseEvent<HTMLElement>) => {
      if (isMenuOpen) onClose?.(); // TODO: убрать после удаления onClose в DropMenuProps
      else onOpen?.(); // TODO: убрать после удаления onOpen в DropMenuProps
      setIsMenuOpen(!isMenuOpen);
      onClick?.(e);
    };
    const closeMenu = () => {
      setIsMenuOpen(false);
      onClose?.(); // TODO: убрать после удаления onClose в DropMenuProps
      btnRef.current?.focus();
    };

    const clickOutside = (e: Event) => {
      if (e.target && btnRef.current?.contains(e.target as Node)) {
        return;
      }
      if (onClickOutside) {
        onClickOutside(e);
      } else {
        setIsMenuOpen(false);
        onClose?.(); // TODO: убрать после удаления onClose в DropMenuProps
      }
    };

    const handleBtnKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
      const code = keyboardKey.getCode(e);
      onKeyDown?.(e);
      switch (code) {
        case keyboardKey.Escape:
          if (isMenuOpen) closeMenu();
          break;
        case keyboardKey.Enter:
        case keyboardKey[' ']:
          if (!isMenuOpen) {
            e.stopPropagation();
            setIsMenuOpen(true);
            onOpen?.(); // TODO: убрать после удаления onOpen в DropMenuProps
            e.preventDefault();
          }
          break;
        default:
          break;
      }
    };

    const handleSelectItem = (id: string) => {
      onChange?.(id); // TODO: убрать onChange после удаления
      onSelectItem?.(id);
      // TODO: убрать multiSelection после удаления
      if (isVisible === undefined && !multiSelection && !disableSelectedOptionHighlight) {
        closeMenu();
      }
    };

    return (
      <>
        {renderContentProp({
          disabled,
          buttonRef: btnRef,
          handleKeyDown: handleBtnKeyDown,
          handleClick: reverseMenu,
          statusIcon: <OpenStatusButton $isOpen={isMenuOpen} aria-hidden />,
          menuState: isMenuOpen,
        })}
        {isMenuOpen && !loading && (
          <DropMenuContainer
            ref={ref}
            role="listbox"
            alignSelf={alignSelf}
            targetRef={alignMenuRef || btnRef}
            targetElement={targetElement}
            onClickOutside={clickOutside}
            dropContainerCssMixin={dropContainerCssMixin}
            className={dropContainerClassName}
            style={dropContainerStyle}
            {...props}
          >
            <StyledMenu
              maxHeight={menuMaxHeight}
              width={menuWidth}
              model={items}
              selected={selected}
              onSelectItem={handleSelectItem}
              dimension={dimension}
              active={active}
              onActivateItem={onActivateItem}
              multiSelection={multiSelection}
              disableSelectedOptionHighlight={disableSelectedOptionHighlight}
              renderTopPanel={renderTopPanel}
              renderBottomPanel={renderBottomPanel}
              onForwardCycleApprove={onForwardCycleApprove}
              onBackwardCycleApprove={onBackwardCycleApprove}
            />
          </DropMenuContainer>
        )}
      </>
    );
  },
);

DropMenu.displayName = 'DropMenu';
