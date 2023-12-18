import * as React from 'react';
import type { CSSProperties, HTMLAttributes } from 'react';

import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';
import type { DropMenuComponentProps, RenderContentProps } from '#src/components/DropMenu';
import { DropMenu } from '#src/components/DropMenu';
import { uid } from '#src/components/common/uid';
import type { ButtonProps } from '#src/components/Button';
import { Button } from '#src/components/Button';
import type { RuleSet } from 'styled-components';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import { refSetter } from '#src/components/common/utils/refSetter';

export type MenuButtonDimension = 'xl' | 'l' | 'm' | 's';
export type MenuButtonAppearance = 'primary' | 'secondary' | 'ghost' | 'white';

export interface MenuButtonProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'>,
    DropMenuComponentProps,
    Omit<ButtonProps, 'onChange'> {
  /** Массив опций */
  items: Array<MenuModelItemProps>;
  /** Выбранная опция */
  selected?: string;
  /** @deprecated use onSelectItem instead
   * Колбек на изменение выбранной опции */
  onChange?: (id: string) => void;
  /** @deprecated use onVisibilityChange instead
   * Колбек на открытие меню */
  onOpen?: () => void;
  /** @deprecated use onVisibilityChange instead
   * Колбек на закрытие меню */
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
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /**  Ширина меню */
  menuWidth?: string;
  /** Задает максимальную высоту меню */
  menuMaxHeight?: string | number;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: RuleSet<object>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  dropContainerClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  dropContainerStyle?: CSSProperties;
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
      renderContentProp,
    };

    return (
      <>
        <DropMenu
          dimension={dimension === 'xl' ? 'l' : dimension}
          disabled={skeleton ? true : disabled}
          {...dropMenuProps}
        >
          {children}
        </DropMenu>
      </>
    );
  },
);
