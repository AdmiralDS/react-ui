import * as React from 'react';
import { MenuButtonItem } from '#src/components/MenuButton';
import { HTMLAttributes, KeyboardEvent, MouseEvent } from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { refSetter } from '#src/components/common/utils/refSetter';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import { DropDownItem } from '#src/components/DropDownItem';
import styled from 'styled-components';
import { Dropdown } from '#src/components/Dropdown';
import { TextButton } from '#src/components/TextButton';
import { Appearance, Dimension } from '#src/components/TextButton/types';
import { ItemProps } from '#src/components/MenuItem';
import { DropdownContainer } from '#src/components/DropdownContainer';
import { ItemIdentifier, Menu } from '#src/components/Menu';

const StyledDropdown = styled(Dropdown)`
  padding: 8px 0;
`;

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

    const handleBtnKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
      const code = keyboardKey.getCode(e);
      if (code === keyboardKey.ArrowDown || code === keyboardKey.Enter || code === keyboardKey[' ']) {
        setMenuOpened(true);
        onOpen?.();
        e.preventDefault();
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
