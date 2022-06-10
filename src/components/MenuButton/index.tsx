import type { HTMLAttributes } from 'react';
import * as React from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';

import { ItemProps } from '#src/components/MenuItem';
import { ButtonMenu } from '#src/components/ButtonMenu';
import { uid } from '#src/components/common/uid';
import { Button } from '#src/components/Button';

export type MenuButtonDimension = 'xl' | 'l' | 'm' | 's';
export type MenuButtonAppearance = 'primary' | 'secondary' | 'ghost' | 'white';

export interface MenuButtonProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Массив опций */
  items: Array<ItemProps>;
  /** Выбранная опция */
  selected: string | null;
  /** Колбек на изменение выбранной опции */
  onChange: (id: string) => void;
  /** Колбек на открытие меню */
  onOpen?: () => void;
  /** Колбек на закрытие меню */
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
      selected,
      onChange,
      ...props
    },
    ref,
  ) => {

    return (
      <>
        <ButtonMenu
          {...props}
          items={items}
          onChange={onChange}
          ref={ref}
          dimension={dimension === 'xl' ? 'l' : dimension}
          disabled={skeleton ? true : disabled}
          loading={loading}
          selected={selected}
          renderContent={({ buttonRef, handleKeyDown, handleClick, statusIcon, menuState }) => {
            return (
              <Button
                {...props}
                ref={buttonRef}
                dimension={dimension}
                appearance={appearance}
                disabled={skeleton ? true : disabled}
                loading={loading}
                onKeyDown={handleKeyDown}
                onClick={handleClick}
                aria-expanded={menuState}
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
        </ButtonMenu>
      </>
    );
  },
);
