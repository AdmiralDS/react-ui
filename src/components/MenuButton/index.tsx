import type { HTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Dropdown } from '#src/components/Dropdown';
import styled from 'styled-components';
import { ButtonMenu } from '#src/components/ButtonMenu/ButtonMenu';
import { ItemProps } from '#src/components/MenuItem';

export type MenuButtonDimension = 'xl' | 'l' | 'm' | 's';
export type MenuButtonAppearance = 'primary' | 'secondary' | 'ghost' | 'white';

export interface MenuButtonItem extends HTMLAttributes<HTMLLIElement> {
  /** Содержимое опции, предназначенное для отображения */
  display: ReactNode;
  /** Отключение опции */
  disabled?: boolean;
  /** Значение опции */
  value?: string | number | undefined;
}

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

const StyledDropdown = styled(Dropdown)`
  padding: 8px 0;
`;

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
    const btnRef = React.useRef<HTMLButtonElement>(null);

    return (
      <>
        <ButtonMenu
          {...props}
          useTextButton={false}
          items={items}
          onChange={onChange}
          ref={refSetter(ref, btnRef)}
          dimension={dimension}
          appearance={appearance}
          disabled={skeleton ? true : disabled}
          loading={loading}
          selected={selected}
        >
          {children}
        </ButtonMenu>
      </>
    );
  },
);
