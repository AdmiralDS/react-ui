import type { HTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import { ReactElement, UIEvent, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { MenuItem } from '#src/components/MenuItem';

export type MenuDimensions = 'l' | 'm' | 's';

export const menuListHeights = css<{ dimension?: MenuDimensions; maxLines?: number }>`
  max-height: ${({ dimension, maxLines = 6 }) => {
    switch (dimension) {
      case 'l':
        return `${48 * maxLines}px`;
      case 'm':
        return `${40 * maxLines}px`;
      case 's':
        return `${32 * maxLines}px`;
      default:
        return `${48 * maxLines}px`;
    }
  }};
`;

const Wrapper = styled.div<{ dimension?: MenuDimensions; maxLines?: number }>`
  pointer-events: initial;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: 4px;
  ${(p) => p.theme.shadow['Shadow 08']}
  max-width: calc(100vw - 32px);
  border-color: transparent;
  ${menuListHeights};
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const StyledDiv = styled.div`
  margin: 0;
  padding: 8px 0;
  appearance: none;
  flex: 0 0 auto;
  border: none;
`;

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер Меню */
  dimension?: MenuDimensions;
  /** Элементы содержимого */
  children: ReactNode;
  /** Активная секция Menu */
  active?: string | number | null;
  /** выбранная секция Menu */
  selected?: string | number | null;
  /** максимальное количество строк в меню */
  maxLines?: number;
  /** Обработчик выбора item в меню **/
  onActivateItem?: (id: string) => void;
  /** Обработчик выбора item в меню **/
  onSelectItem?: (id: string) => void;
}

export const Menu = React.forwardRef<HTMLDivElement | null, MenuProps>(
  (
    { children, dimension = 'l', selected = null, active = null, maxLines = 6, onSelectItem, onActivateItem, ...props },
    ref,
  ) => {
    const menuRef = React.useRef<HTMLDivElement | null>(null);

    const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
      const activeOption = e.currentTarget.id;

      const skipMove = e.currentTarget.dataset.disabled;
      if (skipMove) return;

      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });

      if (onActivateItem && active !== activeOption) onActivateItem(activeOption);
    };

    const clickHandler = (e: React.MouseEvent<HTMLDivElement>) => {
      const activeOption = e.currentTarget.id;
      if (e.currentTarget.dataset.disabled) return;
      if (onSelectItem) onSelectItem(activeOption);
    };

    const decorateHandlers = <T extends UIEvent>(...handlers: Array<React.EventHandler<T> | undefined>) => {
      return function (e: T) {
        handlers.forEach((item) => {
          if (item) item(e);
        });
      };
    };

    const getClonedChild = (child: ReactElement) => {
      const isMenuItem = child.type === MenuItem;

      const clonedChild = React.cloneElement(child, {
        dimension: child.props.dimension || dimension,
        hovered: active === child.props.id,
        selected: selected === child.props.id,
        onClick: decorateHandlers(clickHandler, child.props.onClick),
        onMouseMove: decorateHandlers(mouseMoveHandler, child.props.onMouseMove),
        'aria-selected': (isMenuItem && selected === child.props.id) || undefined,
        'data-active': (isMenuItem && active === child.props.id) || undefined,
        ...child.props,
      });

      return child.type === MenuItem ? (
        clonedChild
      ) : (
        <MenuItem
          id={child.props.id}
          dimension={dimension}
          hovered={active === child.props.id}
          selected={selected === child.props.id}
          onClick={clickHandler}
          onMouseMove={mouseMoveHandler}
          aria-selected={selected === child.props.id || undefined}
          data-active={active === child.props.id || undefined}
        >
          {clonedChild}
        </MenuItem>
      );
    };

    const renderChildrenDropDown = () => {
      return React.Children.map(children, (child: React.ReactNode) => {
        if (React.isValidElement(child)) {
          const detectedSubGroup = child.props.children?.some?.((element: ReactElement) => Array.isArray(element));

          if (detectedSubGroup) {
            return child.props.children.flat().map((child: ReactElement) => {
              return getClonedChild(child);
            });
          }

          return getClonedChild(child);
        }
        return child;
      });
    };

    useEffect(() => {
      const hoveredItem = menuRef.current?.querySelector('[data-active="true"]');

      hoveredItem?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }, [active]);

    return (
      <Wrapper ref={ref} maxLines={maxLines} {...props}>
        <StyledDiv ref={menuRef}>{renderChildrenDropDown()}</StyledDiv>
      </Wrapper>
    );
  },
);

Menu.displayName = 'Menu';
