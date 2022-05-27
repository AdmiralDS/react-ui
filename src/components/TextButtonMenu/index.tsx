import * as React from 'react';
import type { HTMLAttributes, KeyboardEvent } from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { refSetter } from '#src/components/common/utils/refSetter';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import { TextButton } from '#src/components/TextButton';
import type { Appearance, Dimension } from '#src/components/TextButton/types';
import type { ItemProps } from '#src/components/MenuItem';
import { DropdownContainer } from '#src/components/DropdownContainer';
import { ItemIdentifier, Menu } from '#src/components/Menu';

export interface TextButtonMenuProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Внешний вид кнопки */
  appearance?: Appearance;
  /** Размер кнопки */
  dimension?: Dimension;
  /** Текст кнопки */
  text?: string;
  /** Состояние загрузки */
  loading?: boolean;
  /** Состояние skeleton */
  skeleton?: boolean;
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
    const [menuOpened, setMenuOpened] = React.useState<boolean>(false);
    const btnRef = React.useRef<HTMLButtonElement>(null);

    const reverseMenu = () => {
      setMenuOpened((prevOpened) => {
        prevOpened ? onClose?.() : onOpen?.();
        return !prevOpened;
      });
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
    };

    const handleBtnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      const code = keyboardKey.getCode(e);
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

    const handleClick = (selected: ItemIdentifier) => {
      if (selected) {
        onChange?.(selected.toString());
      }
      closeMenu();
    };

    return (
      <>
        <TextButton
          {...props}
          ref={refSetter(ref, btnRef)}
          dimension={dimension}
          appearance={appearance}
          displayRight
          disabled={skeleton ? true : disabled}
          loading={loading}
          onKeyDown={handleBtnKeyDown}
          onClick={reverseMenu}
          aria-expanded={menuOpened}
          icon={<OpenStatusButton $isOpen={menuOpened} aria-hidden />}
        />
        {menuOpened && !loading && !skeleton && (
          <DropdownContainer alignSelf={alignSelf} targetRef={btnRef} onClickOutside={clickOutside}>
            <Menu model={items} selected={selected} onSelectItem={handleClick} dimension={dimension} />
          </DropdownContainer>
        )}
      </>
    );
  },
);

TextButtonMenu.displayName = 'TextButtonMenu';
