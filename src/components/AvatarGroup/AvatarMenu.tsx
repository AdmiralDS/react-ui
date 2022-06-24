import * as React from 'react';
import styled from 'styled-components';
import type { AvatarProps } from '#src/components/Avatar';
import { Avatar, AvatarInternalProps } from '#src/components/Avatar';
import { DropMenu } from '#src/components/DropMenu';
import { ItemProps } from '#src/components/MenuItem';

const MenuAvatar = styled(Avatar)`
  cursor: pointer;
`;

const MenuAvatarButton = React.forwardRef<HTMLElement, AvatarProps & AvatarInternalProps>(
  ({ children, ...props }, ref) => {
    return <MenuAvatar {...props}>{children}</MenuAvatar>;
  },
);

export interface SelectProps extends Omit<React.HTMLAttributes<HTMLElement>, 'onChange'> {
  /** Референс на контейнер для правильного позиционирования выпадающего списка */
  portalTargetRef?: React.RefObject<HTMLElement>;
  /**
   * Позволяет выравнивать позицию дропдаун контейнера относительно селекта.
   * Принимает стандартные значения css свойства align-self (auto | flex-start | flex-end | center | baseline | stretch)
   */
  alignDropdown?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';
  /** Задает максимальную высоту контейнера с опциями */
  dropMaxHeight?: string | number;
  /** Внешний вид аватара, который будет использован в меню */
  appearance: AvatarProps['appearance'];
  /** Размер аватара, который будет использован в меню */
  dimension: AvatarProps['dimension'];
  /** Опции выпадающего списка */
  items: Array<ItemProps>;
  onAvatarSelect?: (e: any) => void;
}

export const AvatarMenu = React.forwardRef<HTMLButtonElement, SelectProps>(
  (
    {
      portalTargetRef,
      children,
      alignDropdown,
      dropMaxHeight = '300px',
      appearance,
      dimension,
      onAvatarSelect,
      items,
      ...props
    },
    ref,
  ) => {
    const menuDimension = dimension === 'xs' ? 's' : dimension === 'xl' ? 'l' : dimension;

    return (
      <DropMenu
        {...props}
        ref={ref}
        dimension={menuDimension}
        alignSelf={alignDropdown}
        items={items}
        onChange={onAvatarSelect}
        renderContentProp={({ buttonRef, handleKeyDown, handleClick }) => {
          return (
            <MenuAvatarButton
              ref={buttonRef as React.Ref<HTMLButtonElement>}
              userName={'+' + items.length}
              isMenuAvatar
              appearance={appearance}
              dimension={dimension}
              showTooltip={false}
              onClick={handleClick}
              onKeyDown={handleKeyDown}
            />
          );
        }}
      />
    );
  },
);
