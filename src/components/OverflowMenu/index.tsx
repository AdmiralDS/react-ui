import * as React from 'react';
import { KeyboardEvent } from 'react';
import styled from 'styled-components';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Dropdown } from '#src/components/Dropdown';

import type { Dimension } from '#src/components/OverflowMenu/Buton';
import { Button } from '#src/components/OverflowMenu/Buton';

const StyledDropdown = styled(Dropdown)`
  padding: 8px 0;
`;

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
      onClick,
      onKeyDown,
      ...props
    },
    ref,
  ) => {
    const [menuOpened, setMenuOpened] = React.useState<boolean>(false);
    const [hovered, setHovered] = React.useState('');
    const btnRef = React.useRef<HTMLButtonElement>(null);
    const childrenArray = React.Children.toArray(children);
    const findOptionValue = (option: (React.ReactChild | React.ReactFragment | React.ReactPortal)[]) => {
      if (React.isValidElement(option[0]) && 'props' in option[0]) {
        return option[0].props.id;
      }
    };

    const hoverIndex = React.useMemo(
      () =>
        childrenArray?.findIndex((child) => {
          if (React.isValidElement(child) && 'props' in child) {
            return child.props.id === hovered;
          }
          return -1;
        }),
      [childrenArray, hovered],
    );

    const findNextHoverValue = React.useCallback(() => {
      const nextAbledOptionValue = findOptionValue(childrenArray.slice(hoverIndex + 1));
      if (nextAbledOptionValue) return nextAbledOptionValue;
      return findOptionValue(childrenArray);
    }, [hoverIndex, childrenArray]);

    const findPrevHoverValue = React.useCallback(() => {
      const sliceInd = hoverIndex === -1 ? undefined : hoverIndex;
      const prevAbledOptionValue = findOptionValue(childrenArray.slice(0, sliceInd).reverse());
      if (prevAbledOptionValue) return prevAbledOptionValue;
      return findOptionValue(childrenArray.slice().reverse());
    }, [hoverIndex, childrenArray]);

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

    const handleBtnKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      const code = keyboardKey.getCode(e);
      onKeyDown?.(e);
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
          <StyledDropdown
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
              const { onClick, onKeyDown, disabled, id, ...props } = child.props;
              const handleClick = (e: React.MouseEvent<HTMLElement>) => {
                if (!disabled) {
                  onChange?.(e.currentTarget.id);
                  closeMenu();
                  onClick?.(e);
                }
              };
              const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
                const code = keyboardKey.getCode(e);
                onKeyDown?.(e);
                switch (code) {
                  case keyboardKey[' ']:
                  case keyboardKey.Enter: {
                    if (!disabled) {
                      onChange?.(hovered ?? '');
                      closeMenu();
                      e.preventDefault();
                    }
                    break;
                  }
                  case keyboardKey.ArrowUp: {
                    const prevValue = findPrevHoverValue();
                    if (!prevValue) break;
                    setHovered(prevValue);
                    break;
                  }
                  case keyboardKey.ArrowDown: {
                    const nextValue = findNextHoverValue();
                    if (!nextValue) break;
                    setHovered(nextValue);
                    break;
                  }
                }
              };
              return React.cloneElement(child, {
                onClick: handleClick,
                onKeyDown: handleKeyDown,
                'aria-selected': selected === id,
                selected: selected === id,
                hovered: hovered === id,
                ...props,
              });
            })}
          </StyledDropdown>
        )}
      </>
    );
  },
);

OverflowMenu.displayName = 'OverflowMenu';
