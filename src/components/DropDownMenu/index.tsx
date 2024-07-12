import * as React from 'react';
import type { ReactElement } from 'react';
import styled, { css } from 'styled-components';
import type { DropdownProps } from '#src/components/Dropdown';
import { Dropdown } from '#src/components/Dropdown';
import { keyboardKey } from '../common/keyboardKey';

export type DropDownDimensions = 'l' | 'm' | 's';

const menuListHeights = css<{ $dimension: DropDownDimensions }>`
  max-height: ${({ $dimension }) => {
    switch ($dimension) {
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

const UnstyledUL = styled.ul`
  padding: unset;
  margin: unset;
`;

const StyledDropdown = styled(Dropdown)<{ $dimension: DropDownDimensions }>`
  padding: 8px 0;
  overflow-x: hidden;
  overflow-y: auto;
  ${menuListHeights};
  cursor: pointer;
  outline: none;
  margin: 8px 0;
`;

export interface DropDownMenuProps extends DropdownProps {
  /** Размер Меню */
  dimension?: DropDownDimensions;
}

/**
 * @deprecated Помечено как deprecated в версии 1.5.0, будет удалено в версии 9.х.х.
 * Взамен используйте DropMenu
 */
export const DropDownMenu = React.forwardRef<HTMLDivElement, DropDownMenuProps>(
  ({ children, targetRef, dimension = 'l', alignSelf, onClickOutside, ...props }, ref) => {
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
      <StyledDropdown
        ref={ref}
        $dimension={dimension}
        targetRef={targetRef}
        alignSelf={alignSelf}
        onClickOutside={onClickOutside}
        {...props}
      >
        <UnstyledUL>{renderChildrenDropDown()}</UnstyledUL>
      </StyledDropdown>
    );
  },
);

DropDownMenu.displayName = 'DropDownMenu';
