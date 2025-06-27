import type { HTMLAttributes, KeyboardEvent, MouseEvent, ReactNode, Ref, RefObject } from 'react';
import { forwardRef, useRef, useState } from 'react';
import type { css } from 'styled-components';
import styled from 'styled-components';

import { keyboardKey } from '../common/keyboardKey';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';
import type { DropContainerProps, DropContainerStyles } from '#src/components/DropdownContainer';
import { StyledDropdownContainer } from '#src/components/DropdownContainer';
import type { MenuDimensions as Dimension, MenuProps } from '#src/components/Menu';
import { Menu } from '#src/components/Menu';

const StyledMenu = styled(Menu)<{ $width?: string }>`
  width: ${({ $width }) => ($width ? $width : 'auto')};
`;
const DropMenuContainer = styled(StyledDropdownContainer)<{
  $dropContainerCssMixin?: ReturnType<typeof css>;
}>`
  ${(p) => p.$dropContainerCssMixin || ''}
`;

export interface RenderContentProps {
  /** Ref на отрендеренный элемент */
  buttonRef: Ref<HTMLElement>;
  /** Состояние меню */
  menuState: boolean;
  /** Обработчик нажатия клавиш */
  handleKeyDown?: (e: KeyboardEvent<HTMLElement>) => void;
  /** Обработчик клика мыши */
  handleClick?: (e: MouseEvent<HTMLElement>) => void;
  /** Иконка для отображения статуса меню */
  statusIcon?: ReactNode;
  /** Доступность кнопки */
  disabled?: boolean;
}

export interface DropMenuStyleProps extends DropContainerStyles {
  /**  Ширина меню */
  menuWidth?: string;
  /** Задает максимальную высоту меню */
  menuMaxHeight?: string | number;
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
      | 'targetElement'
    >,
    DropContainerProps {}

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
      | 'virtualScroll'
    >,
    DropContainerProps,
    Omit<HTMLAttributes<HTMLElement>, 'onChange'>,
    DropMenuStyleProps {
  /** Размер компонента */
  dimension?: Dimension;
  /** Состояние загрузки */
  loading?: boolean;
  /** Опции выпадающего списка */
  items: Array<MenuModelItemProps>;
  /** Выбранная опция */
  selected?: string;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 9.x.x версии.
   * Взамен используйте onSelectItem
   *
   * Колбек на изменение выбранной опции
   **/
  onChange?: (id: string) => void;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 9.x.x версии.
   * Взамен используйте isVisible and onVisibilityChange
   *
   * Колбек на открытие меню
   **/
  onOpen?: () => void;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 9.x.x версии.
   * Взамен используйте isVisible and onVisibilityChange
   *
   * Колбек на закрытие меню
   **/
  onClose?: () => void;
  /** Отключение компонента */
  disabled?: boolean;
  /**
   * @deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
   * Взамен используйте параметр targetElement.
   *
   * Компонент, относительно которого необходимо выравнивать выпадающее меню
   **/
  alignMenuRef?: RefObject<HTMLElement>;
  /** Элемент, относительно которого позиционируется выпадающее меню */
  targetElement?: Element | null;
  /** Компонент, для которого необходимо Menu */
  renderContentProp: (options: RenderContentProps) => ReactNode;
  /** Видимость выпадающего меню */
  isVisible?: boolean;
  /** Колбек на изменение видимости меню */
  onVisibilityChange?: (isVisible: boolean) => void;
}

export const DropMenu = forwardRef<HTMLDivElement, DropMenuProps>(
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
      virtualScroll,
      ...props
    },
    ref,
  ) => {
    const [isMenuOpenState, setIsMenuOpenState] = useState<boolean>(false);
    const btnRef = useRef<HTMLElement>(null);
    const targetNode = targetElement || alignMenuRef?.current || btnRef.current;

    const isMenuOpen = isVisible ?? isMenuOpenState;
    const setIsMenuOpen = (newMenuOpenState: boolean) => {
      setIsMenuOpenState(newMenuOpenState);
      onVisibilityChange(newMenuOpenState);
    };

    const reverseMenu = (e: MouseEvent<HTMLElement>) => {
      if (isMenuOpen)
        onClose?.(); // TODO: убрать после удаления onClose в DropMenuProps
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

    const handleBtnKeyDown = (e: KeyboardEvent<HTMLElement>) => {
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
            targetElement={targetNode}
            onClickOutside={clickOutside}
            $dropContainerCssMixin={dropContainerCssMixin}
            className={dropContainerClassName}
            style={dropContainerStyle}
            {...props}
          >
            <StyledMenu
              maxHeight={menuMaxHeight}
              $width={menuWidth}
              virtualScroll={virtualScroll}
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
