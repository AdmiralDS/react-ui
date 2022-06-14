import * as React from 'react';

import type { Dimension } from '#src/components/OverflowMenu/Button';
import { Button, OverflowMenuIcon } from '#src/components/OverflowMenu/Button';
import type { ItemProps } from '#src/components/MenuItem';
import { DropMenu } from '#src/components/DropMenu';

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
      onClose,
      onOpen,
      selected = null,
      onChange,
      onClick,
      onKeyDown,
      items,
      ...props
    },
    ref,
  ) => {
    const iconRef = React.useRef<HTMLDivElement>(null);

    return (
      <>
        <DropMenu
          {...props}
          items={items}
          onChange={onChange}
          ref={ref}
          dimension={dimension}
          disabled={disabled}
          selected={selected}
          alignMenuRef={iconRef}
          renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, menuState }) => {
            return (
              <Button
                {...props}
                ref={buttonRef}
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
