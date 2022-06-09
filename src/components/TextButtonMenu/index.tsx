import * as React from 'react';
import type { HTMLAttributes } from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';
import type { Appearance, Dimension } from '#src/components/TextButton/types';
import type { ItemProps } from '#src/components/MenuItem';
import { ButtonMenu } from '#src/components/ButtonMenu/ButtonMenu';

export interface TextButtonMenuProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Внешний вид кнопки */
  appearance?: Appearance;
  /** Размер кнопки */
  dimension?: Dimension;
  /** Текст кнопки */
  text?: string;
  /** Состояние загрузки */
  loading?: boolean;
  /** Опции выпадающего списка */
  items: Array<ItemProps>;
  /** Выбранная опция */
  selected: string | null;
  /** Колбек на изменение выбранной опции */
  onChange: (id: string) => void;
  /** Колбек на открытие меню */
  onOpen?: () => void;
  /** Колбек на закрытие меню */
  onClose?: () => void;
  /** Отключение компонента */
  disabled?: boolean;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export const TextButtonMenu = React.forwardRef<HTMLButtonElement, TextButtonMenuProps>(
  (
    {
      dimension = 'm',
      appearance = 'primary',
      disabled = false,
      loading = false,
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
      <ButtonMenu
        useTextButton
        {...props}
        ref={refSetter(ref, btnRef)}
        dimension={dimension}
        appearance={appearance}
        displayRight
        disabled={disabled}
        loading={loading}
        items={items}
        selected={selected}
        onChange={onChange}
      />
    );
  },
);

TextButtonMenu.displayName = 'TextButtonMenu';
