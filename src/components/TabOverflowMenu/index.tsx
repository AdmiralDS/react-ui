import * as React from 'react';
import styled from 'styled-components';
import { keyboardKey } from '#/components/common/keyboardKey';
import { refSetter } from '#/components/common/utils/refSetter';

import { Dropdown } from '#/components/Dropdown';
import { Item } from './Item';
import type { Dimension } from './Buton';
import { Button } from './Buton';

const HiddenTab = styled.div`
  height: 0;
  width: 0;
  opacity: 0;
  flex: 0 0 auto;
  z-index: -10;
`;

export interface OverflowMenuItem extends React.HTMLAttributes<HTMLLIElement> {
  id: string;
  content: React.ReactNode;
  disabled?: boolean;
  icon?: React.ReactNode;
  badge?: number;
}

export interface OverflowMenuProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  options: Array<OverflowMenuItem>;
  selected: string | null;
  onChange: (id: string) => void;
  dimension?: Dimension;
  disabled?: boolean;
  onMenuReachTop: () => void;
  onMenuReachBottom: () => void;
  menuFocus: 'firstOption' | 'lastOption' | 'activeOption';
  setMenuFocus: React.Dispatch<React.SetStateAction<'firstOption' | 'lastOption' | 'activeOption'>>;
  alignSelf?: string;
}

export const TabOverflowMenu: React.FC<any> = React.forwardRef<HTMLButtonElement, OverflowMenuProps>(
  (
    {
      dimension = 'l',
      disabled = false,
      options,
      selected,
      onMenuReachTop,
      alignSelf,
      menuFocus,
      onChange,
      onMenuReachBottom,
      setMenuFocus,
      ...props
    },
    ref,
  ) => {
    const [menuOpened, setMenuOpened] = React.useState<boolean>(false);
    const btnRef = React.useRef<HTMLButtonElement | null>(null);

    const reverseMenu = (e: any) => {
      e.preventDefault();
      setMenuOpened((prevOpened) => !prevOpened);
    };

    const closeMenu = () => {
      /**
       * В IE element.focus() вызывает обработчик onFocus, из-за этого ломается работа меню.
       * В качестве временного фикса используется dataset
       */
      if (btnRef.current) btnRef.current.dataset.focusHandler = 'disabled';
      /** Set focus so that SHIFT + TAB works correctly */
      btnRef.current?.focus();
      setMenuOpened(false);
    };
    const handleBtnFocus = (e: React.FocusEvent<HTMLButtonElement>) => {
      if (btnRef.current && btnRef.current.dataset.focusHandler === 'disabled') {
        btnRef.current.removeAttribute('data-focus-handler');
      } else {
        setMenuOpened(true);
      }
    };
    const handleReachBottom = () => {
      closeMenu();
      onMenuReachBottom?.();
    };
    const handleReachTop = () => {
      closeMenu();
      onMenuReachTop?.();
    };
    return (
      <>
        {!menuOpened &&
          options.map(({ id, content }) => {
            // When menu is closed, render invisible tabs so that screen reader can count tabs amount correctly
            return (
              <HiddenTab role="tab" tabIndex={-1} key={id} id={id}>
                {content}
              </HiddenTab>
            );
          })}
        <Button
          {...props}
          ref={refSetter(ref, btnRef)}
          dimension={dimension}
          disabled={disabled}
          menuOpened={menuOpened}
          onMouseDown={reverseMenu}
          onFocus={handleBtnFocus}
          role="none"
          aria-hidden
        />
        {menuOpened && (
          <Dropdown
            targetRef={btnRef}
            alignSelf={alignSelf}
            onMenuReachTop={handleReachTop}
            onMenuReachBottom={handleReachBottom}
            menuFocus={menuFocus}
            setMenuFocus={setMenuFocus}
            role="none"
          >
            {options.map(({ disabled: optionDisabled, id, ...props }) => {
              const isDisabled = disabled || optionDisabled;
              const handleClick = (e: React.MouseEvent<HTMLLIElement>) => {
                if (!isDisabled) {
                  onChange(e.currentTarget.id);
                  closeMenu();
                }
              };
              const handleKeyDown = (e: React.KeyboardEvent<HTMLLIElement>) => {
                const code = keyboardKey.getCode(e);
                if ((code === keyboardKey.Enter || code === keyboardKey[' ']) && !isDisabled) {
                  onChange(e.currentTarget.id);
                  e.preventDefault();
                }
              };
              return (
                <Item
                  key={id}
                  id={id}
                  disabled={isDisabled}
                  dimension={dimension}
                  selected={selected}
                  onClick={handleClick}
                  onKeyDown={handleKeyDown}
                  {...props}
                />
              );
            })}
          </Dropdown>
        )}
      </>
    );
  },
);
