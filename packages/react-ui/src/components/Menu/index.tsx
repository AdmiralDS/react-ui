import type { HTMLAttributes } from 'react';
import * as React from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled, { css } from 'styled-components';
import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { VirtualBody } from '#src/components/Menu/VirtualBody';
import { refSetter } from '#src/components/common/utils/refSetter';
import type { MenuDimensions } from '#src/components/Menu/types';
import { SubMenuContainer } from '#src/components/Menu/SubMenuContainer';
import { useDropdown } from '#src/components/DropdownProvider';
import type { RenderDirection } from '#src/components/Menu/utils';

export const getItemHeight = (dimension?: MenuDimensions) => {
  switch (dimension) {
    case 'l':
      return 48;
    case 'm':
      return 40;
    case 's':
      return 32;
    default:
      return 48;
  }
};

const getHeight = (rowCount: number, dimension?: MenuDimensions) => {
  return getItemHeight(dimension) * rowCount + 16;
};

const menuListHeights = css<{ dimension?: MenuDimensions; maxHeight?: string | number; rowCount: number }>`
  max-height: ${({ dimension, maxHeight, rowCount }) => {
    if (maxHeight) return maxHeight;
    return `min(calc(100vh - 16px), ${getHeight(rowCount, dimension)}px)`;
  }};
`;

const Wrapper = styled.div<{
  dimension?: MenuDimensions;
  hasTopPanel: boolean;
  hasBottomPanel: boolean;
  rowCount: number;
}>`
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
  &:focus-visible {
    border: 0;
    outline: none;
  }
`;

const StyledDiv = styled.div<{ hasTopPanel: boolean; hasBottomPanel: boolean }>`
  ${(p) => (!p.hasTopPanel ? 'padding-top: 8px' : '')};
  ${(p) => (!p.hasBottomPanel ? 'padding-bottom: 8px' : '')};
  margin: 0;
  appearance: none;
  flex: 1 1 auto;
  border: none;
  overflow-y: auto;
  box-sizing: border-box;
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
  model: Array<MenuModelItemProps>;
  /** Задает максимальную высоту меню */
  maxHeight?: string | number;
  /** Позволяет добавить панель сверху над выпадающим списком */
  renderTopPanel?: (props: RenderPanelProps) => React.ReactNode;
  /** Позволяет добавить панель внизу под выпадающим списком */
  renderBottomPanel?: (props: RenderPanelProps) => React.ReactNode;
  /**
   * Возможность множественного выбора (опции с Checkbox)
   *
   * @deprecated use disableSelectedOptionHighlight instead
   */
  multiSelection?: boolean;
  /** Количество строк в меню */
  rowCount?: number;
  /** Возможность отключить подсветку выбранной опции
   * (например, при множественном выборе, когда у каждой опции есть Checkbox */
  disableSelectedOptionHighlight?: boolean;
  onForwardCycleApprove?: () => boolean;
  onBackwardCycleApprove?: () => boolean;
  /** ссылка на контейнер, в котором находится Menu*/
  containerRef?: React.RefObject<HTMLElement>;
  /** Включение виртуального скролла для меню.
   * Максимальная высота меню рассчитывается исходя из высоты 1 пункта, если параметр 'auto', то в расчет идет
   * высота согласно dimension
   */
  virtualScroll?: {
    /** Фиксированная высота 1 пункта меню, для правильного функционирования виртуального скролла
     * все строки должны быть одной фиксированной высоты
     */
    itemHeight: 'auto' | number;
  };
  /**
   * Сторона от родительского меню, в которой по умолчанию будет появляться дочернее меню при наличии места
   * */
  subMenuRenderDirection?: RenderDirection;
  /** @internal
   * Ссылка на родительское меню для subMenu */
  parentMenuRef?: React.RefObject<HTMLElement>;
  /** @internal
   * Обработчик события при попытке закрыть subMenu */
  onCloseQuery?: () => void;
  /**
   * Признак необходимости активировать меню сразу при появлении
   */
  defaultIsActive?: boolean;
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
      disableSelectedOptionHighlight = false,
      onForwardCycleApprove,
      onBackwardCycleApprove,
      containerRef,
      virtualScroll,
      rowCount = 6,
      parentMenuRef,
      onCloseQuery,
      defaultIsActive = true,
      subMenuRenderDirection,
      ...props
    },
    ref,
  ) => {
    const findNextId = (currentId?: string) => {
      const currentIndex = currentId ? model.findIndex((item) => item.id === currentId) : -1;
      let nextIndex = currentIndex < model.length - 1 ? currentIndex + 1 : 0;
      let finishCycle = false;

      while ((model[nextIndex].disabled || model[nextIndex].readOnly) && !finishCycle) {
        nextIndex = nextIndex < model.length - 1 ? nextIndex + 1 : 0;
        finishCycle = currentIndex === -1 ? nextIndex === 0 : nextIndex === currentIndex;
      }

      const isCycle = currentIndex > -1 && nextIndex < currentIndex;
      const approve = isCycle && onForwardCycleApprove ? onForwardCycleApprove() : true;

      nextIndex = approve ? nextIndex : currentIndex;

      const disabled = model[nextIndex].disabled || model[nextIndex].readOnly;
      return disabled ? undefined : model[nextIndex].id;
    };

    const findPreviousId = (currentId?: string) => {
      const currentIndex = currentId ? model.findIndex((item) => item.id === currentId) : -1;
      let prevIndex = currentIndex > 0 ? currentIndex - 1 : model.length - 1;
      let finishCycle = false;

      while ((model[prevIndex].disabled || model[prevIndex].readOnly) && !finishCycle) {
        prevIndex = prevIndex > 0 ? prevIndex - 1 : model.length - 1;
        finishCycle = currentIndex === -1 ? prevIndex === 0 : prevIndex === currentIndex;
      }

      const isCycle = currentIndex > -1 && prevIndex > currentIndex;
      const approve = isCycle && onBackwardCycleApprove ? onBackwardCycleApprove() : true;

      prevIndex = approve ? prevIndex : currentIndex;

      const disabled = model[prevIndex].disabled || model[prevIndex].readOnly;
      return disabled ? undefined : model[prevIndex].id;
    };

    const uncontrolledActiveValue = model.length > 0 ? findNextId() : undefined;
    const [selectedState, setSelectedState] = React.useState<string | undefined>(defaultSelected);
    const [activeState, setActiveState] = React.useState<string | undefined>(uncontrolledActiveValue);
    const [lastScrollEvent, setLastScrollEvent] = React.useState<number>();
    const wrapperRef = React.useRef<HTMLDivElement | null>(null);
    const subMenuRef = React.useRef<HTMLDivElement | null>(null);
    const activeItemRef = React.useRef<HTMLDivElement | null>(null);
    const [submenuVisible, setSubmenuVisible] = React.useState<boolean>(false);

    const selectedId =
      multiSelection || disableSelectedOptionHighlight ? undefined : selected === undefined ? selectedState : selected;
    const activeId = active === undefined ? activeState : active;

    const menuRef = React.useRef<HTMLDivElement | null>(null);

    const hasTopPanel = !!renderTopPanel;
    const hasBottomPanel = !!renderBottomPanel;

    const findModelItem = (items: Array<MenuModelItemProps>, id: string): MenuModelItemProps | undefined => {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];

        if (item.id === id) return item;
        if (item.subItems && item.subItems.length > 0) {
          return findModelItem(item.subItems, id);
        }
      }
    };

    const activateItem = (id?: string) => {
      if (activeId !== id) setActiveState(id);
      onActivateItem?.(id);
    };

    const selectItem = (id: string) => {
      if (selectedId !== id && !multiSelection && !disableSelectedOptionHighlight) setSelectedState(id);

      const item = findModelItem(model, id);
      if (item && !item.disabled && !item.readOnly) onSelectItem?.(id);
    };

    const { currentActiveMenu, activateMenu, deactivateMenu } = useDropdown(wrapperRef);

    React.useEffect(() => {
      function handleKeyDown(e: KeyboardEvent) {
        if (currentActiveMenu?.current !== wrapperRef.current) return;

        const code = keyboardKey.getCode(e);
        switch (code) {
          case keyboardKey[' ']:
          case keyboardKey.Enter: {
            if (activeId) selectItem(activeId);
            e.preventDefault();
            break;
          }
          case keyboardKey.ArrowDown: {
            const nextId = findNextId(activeId);
            activateItem(nextId);
            e.preventDefault();
            break;
          }
          case keyboardKey.ArrowUp: {
            const previousId = findPreviousId(activeId);
            activateItem(previousId);
            e.preventDefault();
            break;
          }
          case keyboardKey.ArrowRight: {
            const item = model.find((item) => item.id === activeId);
            if (item && !item.disabled && !item.readOnly && item.subItems && !submenuVisible) {
              setSubmenuVisible(true);
            }

            if (subMenuRef && subMenuRef.current) {
              activateMenu?.(subMenuRef);
            }
            break;
          }
          case keyboardKey.ArrowLeft: {
            if (parentMenuRef && parentMenuRef.current) {
              onCloseQuery?.();
            }
            break;
          }
        }
      }

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [active, activeState, currentActiveMenu]);

    React.useEffect(() => {
      if (defaultIsActive) activateMenu?.(wrapperRef);

      return () => {
        if (defaultIsActive && currentActiveMenu === wrapperRef) deactivateMenu?.(wrapperRef);
      };
    }, [defaultIsActive]);

    const handleSubMenuClose = () => {
      setSubmenuVisible(false);
      activateMenu?.(wrapperRef);
    };

    const renderChildren = () => {
      return model.map(({ id, subItems, ...itemProps }) => {
        const hasSubmenu = !!subItems && subItems.length > 0;
        const hovered = activeId === id;
        const selected = selectedId === id || (!!selectedId && hasSubmenu && !!findModelItem(subItems, selectedId));

        return itemProps.render({
          hovered,
          selected,
          onHover: () => {
            activateItem(itemProps.disabled ? undefined : id);
            setSubmenuVisible(hasSubmenu);
          },
          onClickItem: () => selectItem(id),
          hasSubmenu,
          selfRef: (ref) => {
            if (activeId === id && hasSubmenu) {
              activeItemRef.current = ref;
            }
          },
          disabled: itemProps.disabled,
          containerRef,
          ...itemProps,
        });
      });
    };

    const renderVirtualChildren = () => {
      if (!virtualScroll) return null;

      const itemHeight = virtualScroll.itemHeight === 'auto' ? getItemHeight(dimension) : virtualScroll.itemHeight;

      return (
        <VirtualBody
          scrollContainerRef={menuRef}
          itemHeight={itemHeight}
          model={model}
          rowCount={rowCount}
          activeId={activeId}
          selectedId={selectedId}
          onActivateItem={activateItem}
          onSelectItem={selectItem}
        />
      );
    };

    React.useLayoutEffect(() => {
      setTimeout(() => {
        const hoveredItem = menuRef.current?.querySelector('[data-hovered="true"]');

        if (hoveredItem) {
          const scrollEventTime = Date.now();
          setLastScrollEvent(scrollEventTime);

          hoveredItem?.scrollIntoView({
            behavior: !lastScrollEvent || scrollEventTime - lastScrollEvent < 150 ? 'auto' : 'smooth',
            inline: 'center',
            block: 'nearest',
          });
        }
      }, 0);
    }, [active, activeState, model]);

    const renderSubMenu = () => {
      const activeItem = model.find((item) => item.id === activeId);

      return (
        activeItem &&
        activeItem.subItems &&
        activeItem.subItems.length > 0 && (
          <Menu
            ref={subMenuRef}
            parentMenuRef={wrapperRef}
            model={activeItem.subItems}
            subMenuRenderDirection={subMenuRenderDirection}
            onCloseQuery={handleSubMenuClose}
            selected={selectedId}
            onSelectItem={(id) => selectItem(id)}
          />
        )
      );
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      if (currentActiveMenu !== wrapperRef) activateMenu?.(wrapperRef);
      props.onMouseEnter?.(e);
    };

    const handleClickOutside = () => {
      setSubmenuVisible(false);
    };

    const handleFocus = (e: React.FocusEvent<HTMLDivElement>) => {
      if (currentActiveMenu !== wrapperRef) activateMenu?.(wrapperRef);
      props.onFocus?.(e);
    };

    const handleBlur = (e: React.FocusEvent<HTMLDivElement>) => {
      if (currentActiveMenu === wrapperRef) deactivateMenu?.(wrapperRef);
      props.onBlur?.(e);
    };

    return (
      <Wrapper
        ref={refSetter(wrapperRef, ref)}
        dimension={dimension}
        hasTopPanel={hasTopPanel}
        hasBottomPanel={hasBottomPanel}
        rowCount={rowCount}
        onMouseEnter={handleMouseEnter}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      >
        {hasTopPanel && renderTopPanel({ dimension })}
        <StyledDiv ref={menuRef} hasTopPanel={hasTopPanel} hasBottomPanel={hasBottomPanel}>
          {virtualScroll ? renderVirtualChildren() : renderChildren()}
        </StyledDiv>
        {submenuVisible && activeItemRef.current && (
          <SubMenuContainer
            target={activeItemRef}
            defaultRenderDirection={subMenuRenderDirection}
            onClickOutside={handleClickOutside}
          >
            {renderSubMenu()}
          </SubMenuContainer>
        )}
        {hasBottomPanel && renderBottomPanel({ dimension })}
      </Wrapper>
    );
  },
);

Menu.displayName = 'Menu';

export type { MenuDimensions } from '#src/components/Menu/types';
