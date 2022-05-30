import type { HTMLAttributes } from 'react';
import * as React from 'react';
import { useEffect } from 'react';
import styled, { css } from 'styled-components';
import type { ItemProps } from '#src/components/MenuItem';
import { keyboardKey } from '#src/components/common/keyboardKey';

export type MenuDimensions = 'l' | 'm' | 's';

export const menuListHeights = css<{ dimension?: MenuDimensions }>`
  max-height: ${({ dimension }) => {
    switch (dimension) {
      case 'l':
        return `${48 * 6 + 16}px`;
      case 'm':
        return `${40 * 6 + 16}px`;
      case 's':
        return `${32 * 6 + 16}px`;
      default:
        return `${48 * 6 + 16}px`;
    }
  }};
`;

const Wrapper = styled.div<{ dimension?: MenuDimensions }>`
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

export type ItemIdentifier = string | number | null;

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер Меню */
  dimension?: MenuDimensions;
  /** Активная секция Menu */
  active?: ItemIdentifier;
  /** выбранная секция Menu */
  selected?: ItemIdentifier;
  /** выбранная по умолчаниию секция Menu */
  defaultSelected?: ItemIdentifier;
  /** Обработчик выбора item в меню */
  onActivateItem?: (id: ItemIdentifier) => void;
  /** Обработчик выбора item в меню */
  onSelectItem?: (id: ItemIdentifier) => void;
  /** Модель данных, с рендер-пропсами*/
  model: Array<ItemProps>;
}

export const Menu = React.forwardRef<HTMLDivElement | null, MenuProps>(
  ({ model, defaultSelected = null, selected, active, onSelectItem, onActivateItem, ...props }, ref) => {
    const [selectedState, setSelectedState] = React.useState<ItemIdentifier>(defaultSelected);
    const [activeState, setActiveState] = React.useState<ItemIdentifier>(null);

    const selectedId = selected === undefined ? selectedState : selected;
    const activeId = active === undefined ? activeState : active;

    const menuRef = React.useRef<HTMLDivElement | null>(null);

    const findNextId = () => {
      const currentIndex = model.findIndex((item) => item.id === activeId);
      let nextIndex = currentIndex < model.length - 1 ? currentIndex + 1 : 0;

      while (model[nextIndex].disabled && nextIndex !== currentIndex) {
        nextIndex = nextIndex < model.length - 1 ? nextIndex + 1 : 0;
      }
      return model[nextIndex].id;
    };

    const findPreviousId = () => {
      const currentIndex = model.findIndex((item) => item.id === activeId);
      let nextIndex = currentIndex > 0 ? currentIndex - 1 : model.length - 1;

      while (model[nextIndex].disabled && nextIndex !== currentIndex) {
        nextIndex = nextIndex > 0 ? nextIndex - 1 : model.length - 1;
      }
      return model[nextIndex].id;
    };

    const activateItem = (id: ItemIdentifier) => {
      if (activeId !== id) setActiveState(id);
      onActivateItem?.(id);
    };

    const selectItem = (id: ItemIdentifier) => {
      if (selectedId !== id) setSelectedState(id);
      onSelectItem?.(id);
    };

    useEffect(() => {
      function handleKeyDown(e: KeyboardEvent) {
        const code = keyboardKey.getCode(e);
        switch (code) {
          case keyboardKey[' ']:
          case keyboardKey.Enter: {
            selectItem(activeId);
            e.preventDefault();
            break;
          }
          case keyboardKey.ArrowDown: {
            const nextId = findNextId();
            activateItem(nextId);
            e.preventDefault();
            break;
          }
          case keyboardKey.ArrowUp: {
            const previousId = findPreviousId();
            activateItem(previousId);
            e.preventDefault();
            break;
          }
        }
      }

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [active, activeState]);

    const renderChildren = () => {
      return model.map((item) =>
        item.render({
          hovered: activeId === item.id,
          selected: selectedId === item.id,
          onHover: () => {
            activateItem(item.disabled ? null : item.id);
          },
          onClickItem: () => selectItem(item.id),
          disabled: item.disabled,
        }),
      );
    };

    useEffect(() => {
      const hoveredItem = menuRef.current?.querySelector('[data-hovered="true"]');

      hoveredItem?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }, [active, activeState]);

    return (
      <Wrapper ref={ref} {...props}>
        <StyledDiv ref={menuRef}>{renderChildren()}</StyledDiv>
      </Wrapper>
    );
  },
);

Menu.displayName = 'Menu';
