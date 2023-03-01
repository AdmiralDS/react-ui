import type { HTMLAttributes } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import type { ItemDimension } from './menuItemMixins';
import { backgroundColor, colorTextMixin, paddings, styleTextMixin } from './menuItemMixins';

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
  /** ссылка на контейнер, в котором находится Menu*/
  containerRef?: React.RefObject<HTMLElement>;
}

export interface ItemProps {
  id: string;
  render: (options: RenderOptionProps) => React.ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
}

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement>, RenderOptionProps {
  /** Размер MenuItems */
  dimension?: ItemDimension;
}

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  ({ children, onHover, onClickItem, disabled = false, hovered, dimension = 'l', selected = false, ...props }, ref) => {
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
