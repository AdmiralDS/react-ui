import * as React from 'react';
import { KeyboardEvent } from 'react';
import { keyboardKey } from '#/components/common/keyboardKey';
import { refSetter } from '#/components/common/utils/refSetter';
import { Dropdown } from '#/components/Dropdown';

import type { Dimension } from './Buton';
import { Button } from './Buton';

export interface OverflowMenuProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Выбранная опция */
  selected: string | null;
  /** Колбек на изменение выбранной опции */
  onChange: (id: string) => void;
  /** Колбек на открытие меню */
  onOpen?: () => void;
  /** Колбек на закрытие меню */
  onClose?: () => void;
  /** Размер компонента */
  dimension?: Dimension;
  /** Отключение компонента */
  disabled?: boolean;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: string;
}

export const OverflowMenu = React.forwardRef<HTMLButtonElement, OverflowMenuProps>(
  (
    {
      children,
      dimension = 'l',
      disabled = false,
      alignSelf = 'flex-end',
      onClose,
      onOpen,
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
      if (code === keyboardKey.ArrowDown || code === keyboardKey.Enter || code === keyboardKey[' ']) {
        setMenuOpened(true);
        onOpen?.();
        e.preventDefault();
      }
    };

    const handleMenuKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
      const code = keyboardKey.getCode(e);
      if (code === keyboardKey.Escape || code === keyboardKey.Tab) {
        closeMenu();
      }
    };
    return (
      <>
        <Button
          {...props}
          ref={refSetter(ref, btnRef)}
          dimension={dimension}
          disabled={disabled}
          menuOpened={menuOpened}
          onKeyDown={handleBtnKeyDown}
          onClick={reverseMenu}
          aria-expanded={menuOpened}
          aria-haspopup={menuOpened}
        />
        {menuOpened && (
          <Dropdown
            role="listbox"
            targetRef={btnRef}
            alignSelf={alignSelf}
            onClickOutside={clickOutside}
            onKeyDown={handleMenuKeyDown}
          >
            {React.Children.map(children, (child: React.ReactNode) => {
              if (!React.isValidElement(child)) {
                return null;
              }
              const handleClick = (e: React.MouseEvent<HTMLElement>) => {
                if (!child.props.disabled) {
                  onChange(e.currentTarget.id);
                  closeMenu();
                }
              };
              const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
                const code = keyboardKey.getCode(e);
                if (code === keyboardKey.Enter || code === keyboardKey[' ']) {
                  if (!child.props.disabled) {
                    onChange(e.currentTarget.id);
                    closeMenu();
                    e.preventDefault();
                  }
                }
              };
              return React.cloneElement(child, {
                onClick: handleClick,
                onKeyDown: handleKeyDown,
                'aria-selected': selected === child.props.id,
                ...child.props,
              });
            })}
          </Dropdown>
        )}
      </>
    );
  },
);
