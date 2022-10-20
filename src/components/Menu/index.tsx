import type { HTMLAttributes } from 'react';
import * as React from 'react';
import { useEffect } from 'react';
import styled, { css, DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import type { ItemProps } from '#src/components/Menu/MenuItem';
import { keyboardKey } from '#src/components/common/keyboardKey';

export type MenuDimensions = 'l' | 'm' | 's';

const menuListHeights = css<{ dimension?: MenuDimensions; maxHeight?: string | number }>`
  max-height: ${({ dimension, maxHeight }) => {
    if (maxHeight) return maxHeight;
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

const Wrapper = styled.div<{ dimension?: MenuDimensions; hasTopPanel: boolean; hasBottomPanel: boolean }>`
  padding: 0;
  ${(p) => (p.hasTopPanel ? 'padding-top: 8px' : '')};
  ${(p) => (p.hasBottomPanel ? 'padding-bottom: 8px' : '')};
  box-sizing: border-box;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: stretch;
  pointer-events: initial;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  max-width: calc(100vw - 32px);
  border-color: transparent;
  ${menuListHeights};
`;

const StyledDiv = styled.div<{ hasTopPanel: boolean; hasBottomPanel: boolean }>`
  ${(p) => (!p.hasTopPanel ? 'padding-top: 8px' : '')};
  ${(p) => (!p.hasBottomPanel ? 'padding-bottom: 8px' : '')};
  margin: 0;
  appearance: none;
  flex: 1 1 auto;
  border: none;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

export interface RenderPanelProps {
  /** Размер компонента */
  dimension: MenuDimensions;
  /** Позволяет добавлять миксин для панели, созданный с помощью styled css  */
  menuActionsPanelCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export interface MenuProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер Меню */
  dimension?: MenuDimensions;
  /** Активная секция Menu */
  active?: string;
  /** выбранная секция Menu */
  selected?: string;
  /** выбранная по умолчаниию секция Menu */
  defaultSelected?: string;
  /** Обработчик активации (hover) item в меню */
  onActivateItem?: (id?: string) => void;
  /** Обработчик выбора item в меню */
  onSelectItem?: (id: string) => void;
  /** Модель данных, с рендер-пропсами*/
  model: Array<ItemProps>;
  /** Задает максимальную высоту меню */
  maxHeight?: string | number;
  /** Позволяет добавить панель сверху над выпадающим списком */
  renderTopPanel?: (props: RenderPanelProps) => React.ReactNode;
  /** Позволяет добавить панель внизу под выпадающим списком */
  renderBottomPanel?: (props: RenderPanelProps) => React.ReactNode;
  /** Возможность множественного выбора */
  multiSelection?: boolean;
}

export const Menu = React.forwardRef<HTMLDivElement | null, MenuProps>(
  (
    {
      model,
      defaultSelected,
      selected,
      active,
      onSelectItem,
      onActivateItem,
      renderTopPanel,
      renderBottomPanel,
      dimension = 'l',
      multiSelection = false,
      ...props
    },
    ref,
  ) => {
    const uncontrolledActiveValue = model.length > 0 ? model[0].id : undefined;
    const [selectedState, setSelectedState] = React.useState<string | undefined>(defaultSelected);
    const [activeState, setActiveState] = React.useState<string | undefined>(uncontrolledActiveValue);

    const selectedId = multiSelection ? undefined : selected === undefined ? selectedState : selected;
    const activeId = active === undefined ? activeState : active;

    const menuRef = React.useRef<HTMLDivElement | null>(null);

    const hasTopPanel = !!renderTopPanel;
    const hasBottomPanel = !!renderBottomPanel;

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

    const activateItem = (id?: string) => {
      if (activeId !== id) setActiveState(id);
      onActivateItem?.(id);
    };

    const selectItem = (id: string) => {
      if (selectedId !== id && !multiSelection) setSelectedState(id);
      onSelectItem?.(id);
    };

    useEffect(() => {
      function handleKeyDown(e: KeyboardEvent) {
        const code = keyboardKey.getCode(e);
        switch (code) {
          case keyboardKey[' ']:
          case keyboardKey.Enter: {
            if (activeId) selectItem(activeId);
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
            activateItem(item.disabled ? undefined : item.id);
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
      <Wrapper ref={ref} dimension={dimension} hasTopPanel={hasTopPanel} hasBottomPanel={hasBottomPanel} {...props}>
        {hasTopPanel && renderTopPanel({ dimension })}
        <StyledDiv ref={menuRef} hasTopPanel={hasTopPanel} hasBottomPanel={hasBottomPanel}>
          {renderChildren()}
        </StyledDiv>
        {hasBottomPanel && renderBottomPanel({ dimension })}
      </Wrapper>
    );
  },
);

Menu.displayName = 'Menu';
