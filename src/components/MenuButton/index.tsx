import type { HTMLAttributes } from 'react';
import * as React from 'react';

import type { ItemProps } from '#src/components/Menu/MenuItem';
import type { DropMenuComponentProps } from '#src/components/DropMenu';
import { DropMenu } from '#src/components/DropMenu';
import { uid } from '#src/components/common/uid';
import { Button } from '#src/components/Button';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';

export type MenuButtonDimension = 'xl' | 'l' | 'm' | 's';
export type MenuButtonAppearance = 'primary' | 'secondary' | 'ghost' | 'white';

export interface MenuButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'>, DropMenuComponentProps {
  /** Массив опций */
  items: Array<ItemProps>;
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
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
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
      alignSelf = 'flex-end',
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
      className = '',
      ...props
    },
    ref,
  ) => {
    const dropMenuProps = passDropdownDataAttributes(props);

    return (
      <>
        <DropMenu
          items={items}
          onChange={onChange}
          onOpen={onOpen}
          onClose={onClose}
          isVisible={isVisible}
          onVisibilityChange={onVisibilityChange}
          onClickOutside={onClickOutside}
          ref={ref}
          dimension={dimension === 'xl' ? 'l' : dimension}
          disabled={skeleton ? true : disabled}
          loading={loading}
          disableSelectedOptionHighlight={disableSelectedOptionHighlight}
          selected={selected}
          onSelectItem={onSelectItem}
          active={active}
          onActivateItem={onActivateItem}
          menuMaxHeight={menuMaxHeight}
          menuWidth={menuWidth}
          dropContainerCssMixin={dropContainerCssMixin}
          alignSelf={alignSelf}
          {...dropMenuProps}
          renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, menuState }) => {
            return (
              <Button
                {...props}
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                skeleton={skeleton}
                dimension={dimension}
                appearance={appearance}
                disabled={skeleton ? true : disabled}
                loading={loading}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
                aria-expanded={menuState}
                className={className + ' menu-button-with-dropdown'}
              >
                {React.Children.toArray(children).map((child) =>
                  typeof child === 'string' ? <span key={uid()}>{child}</span> : child,
                )}
                {statusIcon}
              </Button>
            );
          }}
        >
          {children}
        </DropMenu>
      </>
    );
  },
);
