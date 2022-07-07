import React, { HTMLAttributes } from 'react';
import { Tag, TagProps } from '#src/components/Tag';
import { DropMenu } from '#src/components/DropMenu';
import { ItemProps } from '#src/components/MenuItem';

export interface TagMenuProps extends Omit<HTMLAttributes<HTMLButtonElement>, 'onChange'>, Omit<TagProps, 'onChange'> {
  /** Опции выпадающего списка */
  items: Array<ItemProps>;
  /** Выбранная опция */
  selected?: string;
  /** Колбек на изменение выбранной опции */
  onChange: (id: string) => void;
  /** Колбек на открытие меню */
  onOpen?: () => void;
  /** Колбек на закрытие меню */
  onClose?: () => void;
  /** Отключение компонента */
  disabled?: boolean;
  /** Выравнивание выпадающего меню относительно компонента https://developer.mozilla.org/en-US/docs/Web/CSS/align-self */
  alignSelf?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
}

export const TagMenu = React.forwardRef<HTMLButtonElement, TagMenuProps>(
  (
    {
      children,
      kind = 'neutral',
      dimension = 'm',
      width,
      statusViaBackground = false,
      icon,
      onChange,
      items,
      selected,
      ...props
    },
    ref,
  ) => {
    return (
      <DropMenu
        {...props}
        ref={ref}
        dimension={dimension}
        items={items}
        selected={selected}
        onChange={onChange}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick, statusIcon, menuState }) => {
          return (
            <Tag
              ref={buttonRef as React.Ref<HTMLButtonElement>}
              kind={kind}
              dimension={dimension}
              width={width}
              statusViaBackground={statusViaBackground}
              onKeyDown={handleKeyDown}
              onClick={handleClick}
              aria-expanded={menuState}
              icon={statusIcon}
            >
              {children}
            </Tag>
          );
        }}
      />
    );
  },
);

TagMenu.displayName = 'TagMenu';
