import * as React from 'react';

import { ReactComponent as MoreHorizontalOutline } from '@admiral-ds/icons/build/system/MoreHorizontalOutline.svg';
import { ReactComponent as MoreVerticalOutline } from '@admiral-ds/icons/build/system/MoreVerticalOutline.svg';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';
import type { MenuModelItemProps } from '#src/components/Menu/MenuItem';
import type { DropMenuComponentProps, DropMenuStyleProps, RenderContentProps } from '#src/components/DropMenu';
import { DropMenu } from '#src/components/DropMenu';
import type { IconPlacementDimension } from '#src/components/IconPlacement';
import { IconPlacement } from '#src/components/IconPlacement';
import { refSetter } from '../common/utils/refSetter';

export type OverflowMenuDimension = 'l' | 'm' | 's';

export interface OverflowMenuProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'>,
    Omit<DropMenuComponentProps, 'targetElement'>,
    DropMenuStyleProps {
  /** Выбранная опция */
  selected?: string;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
   * Взамен используйте onSelectItem
   *
   * Колбек на изменение выбранной опции
   **/
  onChange?: (id: string) => void;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
   * Взамен используйте onVisibilityChange
   *
   * Колбек на открытие меню
   **/
  onOpen?: () => void;
  /**
   * @deprecated Помечено как deprecated в версии 3.2.0, будет удалено в 10.x.x версии.
   * Взамен используйте nVisibilityChange
   *
   * Колбек на закрытие меню
   **/
  onClose?: () => void;
  /** Размер компонента */
  dimension?: OverflowMenuDimension;
  /** Отключение компонента */
  disabled?: boolean;
  /** Ориентация компонента */
  isVertical?: boolean;
  /** Опции выпадающего списка */
  items: Array<MenuModelItemProps>;
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
      dropContainerClassName,
      dropContainerStyle,
      onForwardCycleApprove,
      onBackwardCycleApprove,
      renderTopPanel,
      renderBottomPanel,
      ...props
    },
    ref,
  ) => {
    const dropMenuProps = {
      ...passDropdownDataAttributes(props),
      renderTopPanel,
      renderBottomPanel,
      items,
      onChange,
      onOpen,
      onClose,
      isVisible,
      onVisibilityChange,
      onClickOutside,
      disableSelectedOptionHighlight,
      selected,
      onSelectItem,
      active,
      onActivateItem,
      menuMaxHeight,
      menuWidth,
      dropContainerCssMixin,
      dropContainerClassName,
      dropContainerStyle,
      alignSelf,
      onForwardCycleApprove,
      onBackwardCycleApprove,
    };

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
          {...dropMenuProps}
          dimension={dimension}
          disabled={disabled}
          renderContentProp={({ buttonRef, handleKeyDown, handleClick, menuState, disabled }: RenderContentProps) => {
            return (
              <IconPlacement
                {...props}
                ref={refSetter(ref, buttonRef as React.Ref<HTMLButtonElement>)}
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
