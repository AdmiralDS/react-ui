import type { HTMLAttributes, MutableRefObject, ReactNode } from 'react';
import * as React from 'react';
import { ReactElement, useRef } from 'react';
import styled, { css } from 'styled-components';
import { Dropdown } from '#src/components-ver2/Dropdown';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { refSetter } from '#src/components/common/utils/refSetter';

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

const StyledDropdown = styled(Dropdown)<{ dimension: DropDownDimensions }>`
  padding: 8px 0;
  overflow-x: hidden;
  overflow-y: auto;
  ${menuListHeights};
  cursor: pointer;
  outline: none;
  margin: 0;
`;

const MenuList = styled.ul``;

export interface DropDownMenuProps extends HTMLAttributes<HTMLUListElement> {
  /** Размер Меню */
  dimension?: DropDownDimensions;
  /** Элементы содержимого */
  children: ReactNode;
  /**
   *  Позволяет выравнивать контейнер с компонентами относительно тарджет компонента
   *  https://developer.mozilla.org/en-US/docs/Web/CSS/align-self
   */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export const DropDownMenu = React.forwardRef<HTMLUListElement | null, DropDownMenuProps>(
  ({ children, dimension = 'l', alignSelf, ...props }, ref) => {
    const menuRef: MutableRefObject<HTMLUListElement | null> = useRef(null);
    const [hovered, setHovered] = React.useState<string | undefined>('');

    const handleKeyUp = (e: React.KeyboardEvent) => {
      const code = keyboardKey.getCode(e);
      const activeOption = (e.target as HTMLElement).id;
      switch (code) {
        case keyboardKey[' ']: {
          e.preventDefault();
          break;
        }
        case keyboardKey.ArrowUp: {
          setHovered(activeOption);
          e.preventDefault();
          break;
        }
        case keyboardKey.ArrowDown: {
          setHovered(activeOption);
          e.preventDefault();
          break;
        }
      }
    };

    const renderChildrenDropDown = () => {
      return React.Children.map(children, (child: React.ReactNode) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        const detectedSubGroup = child.props.children?.some?.((element: ReactElement) => Array.isArray(element));

        if (detectedSubGroup) {
          return child.props.children.flat().map((child: ReactElement) => {
            return React.cloneElement(child, {
              hovered: hovered === child.props.id,
              onKeyUp: handleKeyUp,
              ...child.props,
            });
          });
        }

        return React.cloneElement(child, {
          hovered: hovered === child.props.id,
          onKeyUp: handleKeyUp,
          ...child.props,
        });
      });
    };

    return (
      <MenuList ref={refSetter(ref, menuRef)} {...props}>
        <StyledDropdown dimension={dimension} targetRef={menuRef} alignSelf={alignSelf}>
          {renderChildrenDropDown()}
        </StyledDropdown>
      </MenuList>
    );
  },
);

DropDownMenu.displayName = 'DropDownMenu';
