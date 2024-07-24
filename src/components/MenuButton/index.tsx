import * as React from 'react';
import type { HTMLAttributes } from 'react';

import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';
import type { DropMenuComponentProps, DropMenuStyleProps, RenderContentProps } from '#src/components/DropMenu';
import { DropMenu } from '#src/components/DropMenu';
import { uid } from '#src/components/common/uid';
import type { ButtonProps } from '#src/components/Button';
import { Button } from '#src/components/Button';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import { refSetter } from '#src/components/common/utils/refSetter';

export type MenuButtonDimension = 'xl' | 'l' | 'm' | 's';
export type MenuButtonAppearance = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'white';

export interface MenuButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'>,
    Omit<DropMenuComponentProps, 'targetElement'>,
    DropMenuStyleProps,
    Omit<ButtonProps, 'onChange' | 'displayAsSquare'> {
  /** Массив опций */
  items: Array<MenuModelItemProps>;
  /** Выбранная опция */
  selected?: string;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
   * Взамен используйте onSelectItem
   *
   * Колбек на изменение выбранной опции
   **/
  onChange?: (id: string) => void;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
   * Взамен используйте onVisibilityChange
   *
   * Колбек на открытие меню
   **/
  onOpen?: () => void;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
   * Взамен используйте onVisibilityChange
   *
   * Колбек на закрытие меню
   **/
  onClose?: () => void;
  /** Размер компонента */
  dimension?: MenuButtonDimension;
  /** Внешний вид компонента */
  appearance?: MenuButtonAppearance;
  /** Отключение компонента */
  disabled?: boolean;
  /** Состояние loading */
  loading?: boolean;
  /** Состояние skeleton */
  skeleton?: boolean;
}

export const MenuButton = React.forwardRef<HTMLButtonElement, MenuButtonProps>(
  (
    {
      children,
      dimension = 'l',
      appearance = 'primary',
      disabled = false,
      loading = false,
      skeleton = false,
      alignSelf = 'auto',
      onClose,
      onOpen,
      items,
      disableSelectedOptionHighlight,
      selected,
      onSelectItem,
      active,
      onActivateItem,
      isVisible,
      onVisibilityChange,
      onClickOutside,
      onChange,
      menuWidth,
      menuMaxHeight,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      className,
      renderTopPanel,
      renderBottomPanel,
      onForwardCycleApprove,
      onBackwardCycleApprove,
      ...props
    },
    ref,
  ) => {
    const renderContentProp: (options: RenderContentProps) => React.ReactNode = ({
      buttonRef,
      handleKeyDown,
      handleClick,
      statusIcon,
      menuState,
    }) => {
      return (
        <Button
          {...props}
          ref={refSetter(ref, buttonRef as React.Ref<HTMLButtonElement>)}
          skeleton={skeleton}
          dimension={dimension}
          appearance={appearance}
          disabled={skeleton ? true : disabled}
          loading={loading}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          aria-expanded={menuState}
          className={'menu-button-with-dropdown' + (className ? ` ${className}` : '')}
          iconEnd={statusIcon}
        >
          {React.Children.toArray(children).map((child) =>
            typeof child === 'string' ? <span key={uid()}>{child}</span> : child,
          )}
        </Button>
      );
    };
    const dropMenuProps = {
      ...passDropdownDataAttributes(props),
      renderTopPanel,
      renderBottomPanel,
      items,
      onChange,
      onOpen,
      onClose,
      isVisible,
      onVisibilityChange,
      onClickOutside,
      loading,
      disableSelectedOptionHighlight,
      selected,
      onSelectItem,
      active,
      onActivateItem,
      menuMaxHeight,
      menuWidth,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      alignSelf,
      onForwardCycleApprove,
      onBackwardCycleApprove,
      renderContentProp,
    };

    return (
      <>
        <DropMenu
          {...dropMenuProps}
          dimension={dimension === 'xl' ? 'l' : dimension}
          disabled={skeleton ? true : disabled}
        >
          {children}
        </DropMenu>
      </>
    );
  },
);
