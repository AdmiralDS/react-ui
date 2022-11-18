import * as React from 'react';
import { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

import { ReactComponent as MoreHorizontalOutline } from '@admiral-ds/icons/build/system/MoreHorizontalOutline.svg';
import { ReactComponent as MoreVerticalOutline } from '@admiral-ds/icons/build/system/MoreVerticalOutline.svg';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import type { ItemProps } from '#src/components/Menu/MenuItem';
import { DropMenu, DropMenuComponentProps, RenderContentProps } from '#src/components/DropMenu';
import { IconPlacement, IconPlacementDimension } from '#src/components/IconPlacement';

export type OverflowMenuDimension = 'l' | 'm' | 's';

export interface OverflowMenuProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'>,
    DropMenuComponentProps {
  /** Выбранная опция */
  selected?: string;
  /** @deprecated use onSelectItem instead
   * Колбек на изменение выбранной опции */
  onChange?: (id: string) => void;
  /** @deprecated use onVisibilityChange instead
   * Колбек на открытие меню */
  onOpen?: () => void;
  /** @deprecated use onVisibilityChange instead
   * Колбек на закрытие меню */
  onClose?: () => void;
  /** Размер компонента */
  dimension?: OverflowMenuDimension;
  /** Отключение компонента */
  disabled?: boolean;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /**  Ширина меню */
  menuWidth?: string;
  /** Задает максимальную высоту меню */
  menuMaxHeight?: string | number;
  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Ориентация компонента */
  isVertical?: boolean;
  /** Опции выпадающего списка */
  items: Array<ItemProps>;
}

export const OverflowMenu = React.forwardRef<HTMLButtonElement, OverflowMenuProps>(
  (
    {
      dimension = 'l',
      disabled = false,
      alignSelf = 'flex-end',
      isVertical = false,
      disableSelectedOptionHighlight,
      selected,
      onSelectItem,
      active,
      onActivateItem,
      isVisible,
      onVisibilityChange,
      onClickOutside,
      onChange,
      onOpen,
      onClose,
      items,
      className = '',
      menuWidth,
      menuMaxHeight,
      dropContainerCssMixin,
      ...props
    },
    ref,
  ) => {
    const dropMenuProps = passDropdownDataAttributes(props);

    const iconPlacementDimension = (dimension?: OverflowMenuDimension): IconPlacementDimension => {
      switch (dimension) {
        case 'l':
          return 'lBig';
        case 'm':
          return 'mBig';
        case 's':
          return 's';
        default:
          return 'lBig';
      }
    };

    return (
      <>
        <DropMenu
          dimension={dimension}
          menuWidth={menuWidth}
          menuMaxHeight={menuMaxHeight}
          items={items}
          disableSelectedOptionHighlight={disableSelectedOptionHighlight}
          selected={selected}
          onSelectItem={onSelectItem}
          active={active}
          onActivateItem={onActivateItem}
          isVisible={isVisible}
          onVisibilityChange={onVisibilityChange}
          onClickOutside={onClickOutside}
          onChange={onChange}
          onOpen={onOpen}
          onClose={onClose}
          disabled={disabled}
          alignSelf={alignSelf}
          dropContainerCssMixin={dropContainerCssMixin}
          ref={ref}
          {...dropMenuProps}
          renderContentProp={({ buttonRef, handleKeyDown, handleClick, menuState, disabled }: RenderContentProps) => {
            return (
              <IconPlacement
                {...props}
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                dimension={iconPlacementDimension(dimension)}
                disabled={disabled}
                highlightFocus={menuState}
                onClick={handleClick}
                aria-expanded={menuState}
                aria-haspopup={menuState}
                onKeyDown={handleKeyDown}
                className={className + ' overflow-menu-button-with-dropdown'}
              >
                {isVertical ? <MoreVerticalOutline /> : <MoreHorizontalOutline />}
              </IconPlacement>
            );
          }}
        />
      </>
    );
  },
);

OverflowMenu.displayName = 'OverflowMenu';
