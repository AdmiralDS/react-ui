import * as React from 'react';
import styled from 'styled-components';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { refSetter } from '#src/components/common/utils/refSetter';

import { Dropdown } from '#src/components/Dropdown';
import { Item } from '#src/components/TabOverflowMenu/Item';
import type { Dimension } from '#src/components/TabOverflowMenu/Button';
import { Button } from '#src/components/TabOverflowMenu/Button';

const StyledDropdown = styled(Dropdown)`
  padding: 8px 0;
`;

const HiddenTab = styled.div`
  height: 0;
  width: 0;
  opacity: 0;
  flex: 0 0 auto;
  z-index: -10;
`;

export interface ItemWithId {
  id: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface OverflowMenuItem extends ItemWithId, React.HTMLAttributes<HTMLLIElement> {
  id: string;
  icon?: React.ReactNode;
  badge?: number;
}

export interface OverflowMenuProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  options: Array<ItemWithId>;
  selected: string | null;
  onChange: (id: string) => void;
  dimension?: Dimension;
  disabled?: boolean;
  onMenuReachTop: () => void;
  onMenuReachBottom: () => void;
  menuFocus: 'firstOption' | 'lastOption' | 'activeOption';
  setMenuFocus: React.Dispatch<React.SetStateAction<'firstOption' | 'lastOption' | 'activeOption'>>;
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export const TabOverflowMenu = React.forwardRef<HTMLButtonElement, OverflowMenuProps>(
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
    const containsActiveTab: boolean = React.useMemo(
      () => options.findIndex((item) => item.id === selected) != -1,
      [options, selected],
    );

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
          isActive={containsActiveTab}
          onMouseDown={reverseMenu}
          onFocus={handleBtnFocus}
          role="none"
          aria-hidden
        />
        {menuOpened && (
          <StyledDropdown
            targetRef={btnRef}
            alignSelf={alignSelf}
            onMenuReachTop={handleReachTop}
            onMenuReachBottom={handleReachBottom}
            menuFocus={menuFocus}
            setMenuFocus={setMenuFocus}
            role="none"
            onClickOutside={closeMenu}
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
                  closeMenu();
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
          </StyledDropdown>
        )}
      </>
    );
  },
);

TabOverflowMenu.displayName = 'TabOverflowMenu';
