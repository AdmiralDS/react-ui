import type { HTMLAttributes } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { backgroundColor, colorTextMixin, ItemDimension, paddings, styleTextMixin } from './menuItemMixins';
import { ReactComponent as ChevronRightOutline } from '@admiral-ds/icons/build/system/ChevronRightOutline.svg';

export interface RenderOptionProps {
  key?: string | number;
  /** Активная секция MenuItems */
  selected?: boolean;
  /** Акцентная секция MenuItems */
  hovered?: boolean;
  /** Отключение секции */
  disabled?: boolean;
  /** Обработчик клика по item */
  onClickItem?: () => void;
  /** Обработчик наведения мыши на item */
  onHover?: () => void;
}

export interface ItemProps {
  id: string;
  render: (options: RenderOptionProps) => React.ReactNode;
  disabled?: boolean;
}

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement>, RenderOptionProps {
  /** Размер MenuItems */
  dimension?: ItemDimension;
  /** Вызывает следующий уровень меню */
  hasSubMenu?: boolean;
}

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  (
    {
      children,
      onHover,
      onClickItem,
      disabled = false,
      hovered,
      dimension = 'l',
      hasSubMenu = false,
      selected = false,
      ...props
    },
    ref,
  ) => {
    const handleMouseMove = () => {
      onHover?.();
    };

    const handleClick = () => {
      if (!disabled) onClickItem?.();
    };

    return (
      <Item
        ref={ref}
        dimension={dimension}
        selected={selected}
        hovered={hovered}
        data-hovered={hovered}
        data-disabled={disabled}
        onMouseMove={handleMouseMove}
        onClick={handleClick}
        {...props}
      >
        {children}
        {hasSubMenu && <ChevronIcon dimension={dimension} />}
      </Item>
    );
  },
);

MenuItem.displayName = 'MenuItem';

const Item = styled.div<{
  dimension: ItemDimension;
  selected?: boolean;
  hovered?: boolean;
  width?: number;
}>`
  display: flex;
  align-items: center;
  user-select: none;
  flex-flow: wrap;
  position: relative;
  justify-content: space-between;
  outline: none;
  white-space: pre;
  margin: 0;
  cursor: pointer;
  ${paddings}
  ${styleTextMixin}
  ${colorTextMixin}
  ${backgroundColor}

  &&[data-disabled='true'] {
    cursor: not-allowed;
    background-color: ${(p) => p.theme.color['Special/Elevated BG']};
    color: ${(p) => p.theme.color['Neutral/Neutral 30']};
    && *[fill^='#'] {
      fill: ${(p) => p.theme.color['Neutral/Neutral 30']};
    }
  }
`;

const ChevronIcon = styled(ChevronRightOutline)<{ dimension: ItemDimension }>`
  width: ${(p) => (p.dimension === 's' ? 20 : 24)}px;
  height: ${(p) => (p.dimension === 's' ? 20 : 24)}px;
  margin-left: 8px;

  & *[fill^='#'] {
    fill: ${(p) => p.theme.color['Neutral/Neutral 50']};
  }
`;
