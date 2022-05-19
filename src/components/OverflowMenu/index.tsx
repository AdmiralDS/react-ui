import * as React from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';

import type { Dimension } from '#src/components/OverflowMenu/Button';
import { Button } from '#src/components/OverflowMenu/Button';
import { DropdownContainer } from '../DropdownContainer';
import { ItemIdentifier, Menu } from '../Menu';
import type { ItemProps } from '#src/components/MenuItem';

export interface OverflowMenuProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Выбранная опция */
  selected?: string | null;
  /** Колбек на изменение выбранной опции */
  onChange?: (id: string) => void;
  /** Колбек на открытие меню */
  onOpen?: () => void;
  /** Колбек на закрытие меню */
  onClose?: () => void;
  /** Размер компонента */
  dimension?: Dimension;
  /** Отключение компонента */
  disabled?: boolean;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** Ориентация компонента */
  isVertical?: boolean;
  /** Опции выпадающего списка */
  items: Array<ItemProps>;
}

export const OverflowMenu = React.forwardRef<HTMLButtonElement, OverflowMenuProps>(
  (
    {
      dimension = 'l',
      disabled = false,
      alignSelf = 'flex-end',
      isVertical = false,
      onClose,
      onOpen,
      selected,
      onChange,
      onClick,
      items,
      ...props
    },
    ref,
  ) => {
    const [menuOpened, setMenuOpened] = React.useState<boolean>(false);
    const btnRef = React.useRef<HTMLButtonElement>(null);

    const reverseMenu = (e: React.MouseEvent<HTMLButtonElement>) => {
      setMenuOpened((prevOpened) => {
        prevOpened ? onClose?.() : onOpen?.();
        return !prevOpened;
      });
      onClick?.(e);
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
      onClose?.();
    };

    const handleClick = (selected: ItemIdentifier) => {
      if (selected) {
        onChange?.(selected.toString());
      }
      closeMenu();
    };

    return (
      <>
        <Button
          {...props}
          ref={refSetter(ref, btnRef)}
          dimension={dimension}
          disabled={disabled}
          isVertical={isVertical}
          menuOpened={menuOpened}
          onClick={reverseMenu}
          aria-expanded={menuOpened}
          aria-haspopup={menuOpened}
        />
        {menuOpened && (
          <DropdownContainer alignSelf={alignSelf} targetRef={btnRef} onClickOutside={clickOutside}>
            <Menu model={items} selected={selected} onSelectItem={handleClick} dimension={dimension} />
          </DropdownContainer>
        )}
      </>
    );
  },
);

OverflowMenu.displayName = 'OverflowMenu';
