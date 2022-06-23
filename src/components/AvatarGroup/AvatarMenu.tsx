import * as React from 'react';
import { refSetter } from '#src/components/common/utils/refSetter';
import { Dropdown } from '#src/components/Dropdown';
import styled from 'styled-components';
import type { AvatarProps } from '#src/components/Avatar';
import { Avatar, AvatarInternalProps } from '#src/components/Avatar';
import { DropMenu } from '#src/components/DropMenu';
import { ItemProps } from '#src/components/MenuItem';

const StyledDropDown = styled(Dropdown)<{ alignDropdown?: string; dropMaxHeight: string | number }>`
  padding: 8px 0;
  overflow-x: hidden;
  overflow-y: auto;
  ${(p) => (p.alignDropdown ? `align-self: ${p.alignDropdown}` : '')};
  max-height: ${(p) => p.dropMaxHeight};
  min-width: 100%;
`;

const SelectWrapper = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  cursor: pointer;
`;

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
    const [open, setOpen] = React.useState(false);
    const refWrapper = React.useRef<HTMLInputElement>(null);

    const handleKeyDownItem = (e: React.KeyboardEvent<HTMLElement>, onKeyDown: (e: any) => void) => {
      e.preventDefault();
      if (e.key === 'Enter' || e.key === ' ') {
        onKeyDown?.(e);
        onAvatarSelect?.(e);
        setOpen(false);
        (refWrapper.current as HTMLElement).focus();
      } else if (e.key === 'Escape' || e.key === 'Tab') {
        setOpen(false);
        (refWrapper.current as HTMLElement).focus();
      }
    };

    const handleClickItem = (e: React.MouseEvent<HTMLElement>, onClick: (e: any) => void) => {
      refWrapper.current?.focus();
      onClick?.(e);
      onAvatarSelect?.(e);
    };

    const renderChildrenDropDown = () => {
      return React.Children.map(children, (child: React.ReactNode) => {
        if (!React.isValidElement(child)) {
          return null;
        }

        return React.cloneElement(child, {
          ...child.props,
          onClick: (e: React.MouseEvent<HTMLElement>) => handleClickItem(e, child.props.onClick),
          onKeyDown: (e: React.KeyboardEvent<HTMLElement>) => handleKeyDownItem(e, child.props.onKeyDown),
        });
      });
    };

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
              ref={buttonRef}
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
