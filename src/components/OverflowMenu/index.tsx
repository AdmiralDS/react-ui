import * as React from 'react';

import type { Dimension } from '#src/components/OverflowMenu/Button';
import { Button, OverflowMenuIcon } from '#src/components/OverflowMenu/Button';
import type { ItemProps } from '#src/components/MenuItem';
import { DropMenu, RenderContentProps } from '#src/components/DropMenu';
import { passDropdownDataAttributes } from '#src/components/common/utils/splitDataAttributes';

export interface OverflowMenuProps extends Omit<React.HTMLAttributes<HTMLButtonElement>, 'onChange'> {
  /** Выбранная опция */
  selected?: string;
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
      selected,
      onChange,
      onOpen,
      onClose,
      items,
      ...props
    },
    ref,
  ) => {
    const iconRef = React.useRef<HTMLDivElement>(null);

    const dropMenuProps = passDropdownDataAttributes(props);

    return (
      <>
        <DropMenu
          ref={ref}
          alignSelf={alignSelf}
          items={items}
          onChange={onChange}
          onOpen={onOpen}
          onClose={onClose}
          dimension={dimension}
          disabled={disabled}
          selected={selected}
          alignMenuRef={iconRef}
          {...dropMenuProps}
          renderContentProp={({ buttonRef, handleKeyDown, handleClick, menuState, disabled }: RenderContentProps) => {
            return (
              <Button
                {...props}
                ref={buttonRef as React.Ref<HTMLButtonElement>}
                dimension={dimension}
                disabled={disabled}
                menuOpened={menuState}
                onClick={handleClick}
                aria-expanded={menuState}
                aria-haspopup={menuState}
                onKeyDown={handleKeyDown}
              >
                <OverflowMenuIcon ref={iconRef} dimension={dimension} isVertical={isVertical} />
              </Button>
            );
          }}
        />
      </>
    );
  },
);

OverflowMenu.displayName = 'OverflowMenu';
