import type { HTMLAttributes, MutableRefObject, ReactNode } from 'react';
import * as React from 'react';
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import styled, { css } from 'styled-components';
import { moveFocus, nextItem, previousItem } from './utils';
import { keyboardKey } from '#/components/common/keyboardKey';
import { refSetter } from '#/components/common/utils/refSetter';

export type DropDownDimensions = 'l' | 'm' | 's';

export const menuListHeights = css<{ dimension: DropDownDimensions }>`
  max-height: ${({ dimension }) => {
    switch (dimension) {
      case 'l':
        return `${48 * 6}px`;
      case 'm':
        return `${40 * 6}px`;
      case 's':
        return `${32 * 6}px`;
      default:
        return `${48 * 6}px`;
    }
  }};
`;

const MenuList = styled.ul<{ dimension: DropDownDimensions }>`
  ${(props) => props.theme.shadow.NonClickable}
  border-radius: 4px;
  background: ${({ theme }) => theme.color.background.primary};
  ${menuListHeights};
  overflow-x: hidden;
  overflow-y: auto;
  cursor: pointer;
  position: absolute;
  padding: 8px 0;
  outline: none;
  margin: 0;
`;

export interface DropDownMenuProps extends HTMLAttributes<HTMLUListElement> {
  /** Размер Меню */
  dimension?: DropDownDimensions;
  /** Элементы содержимого */
  children: ReactNode;
}

export const DropDownMenu = React.forwardRef<HTMLUListElement | null, DropDownMenuProps>(
  ({ children, dimension = 'l', ...props }, ref) => {
    const menuRef: MutableRefObject<HTMLUListElement | null> = useRef(null);

    const handleKeyDown = useCallback(
      (e) => {
        const focusedOption = ((menuRef.current && menuRef.current.ownerDocument) || document).activeElement;
        const code = keyboardKey.getCode(e);
        if (code === keyboardKey.ArrowDown) {
          moveFocus(menuRef.current, focusedOption, nextItem);
          e.preventDefault();
        } else if (code === keyboardKey.ArrowUp) {
          moveFocus(menuRef.current, focusedOption, previousItem);
          e.preventDefault();
        } else if (e.keyCode === 32) {
          e.preventDefault();
        } else if (code === keyboardKey.Home) {
          e.preventDefault();
          moveFocus(menuRef.current, null, nextItem);
        } else if (code === keyboardKey.End) {
          e.preventDefault();
          moveFocus(menuRef.current, null, previousItem);
        }
        props?.onKeyDown?.(e);
      },
      [menuRef.current, previousItem, nextItem],
    );

    useLayoutEffect(() => {
      if (menuRef.current !== document.activeElement) {
        menuRef?.current?.focus();
      }
      const focusedOption = ((menuRef.current && menuRef.current.ownerDocument) || document).activeElement;

      moveFocus(menuRef.current, focusedOption, nextItem);
    }, [menuRef, nextItem, moveFocus]);

    useEffect(() => {
      menuRef.current?.addEventListener('keydown', handleKeyDown);
      return () => {
        menuRef.current?.removeEventListener('keydown', handleKeyDown);
      };
    }, [menuRef.current]);

    return (
      <MenuList ref={refSetter(ref, menuRef)} dimension={dimension} {...props}>
        {children}
      </MenuList>
    );
  },
);
