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
  /** Обработчик клика по item */
  onClickItem?: () => void;
  /** Обработчик наведения мыши на item */
  onHover?: () => void;
  /** ссылка на контейнер, в котором находится Menu*/
  containerRef?: React.RefObject<HTMLElement>;
  /** Отключение секции */
  disabled?: boolean;
  /** Только для чтения */
  readOnly?: boolean;
}

export interface MenuModelItemProps {
  id: string;
  render: (options: RenderOptionProps) => React.ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
}

/** @deprecated use MenuModeItemProps instead */
export type ItemProps = MenuModelItemProps;

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement>, RenderOptionProps {
  /** Размер MenuItems */
  dimension?: ItemDimension;
}

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  ({ children, onHover, onClickItem, disabled = false, hovered, dimension = 'l', selected = false, ...props }, ref) => {
    const handleMouseMove = () => {
      onHover?.();
    };

    const handleClick = (e: React.MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
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
        onMouseDown={handleClick}
        {...props}
      >
        {React.Children.toArray(children).map((child, index) =>
          typeof child === 'string' ? <TextWrapper key={child + index}>{child}</TextWrapper> : child,
        )}
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
  box-sizing: border-box;
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
    && input[type='checkbox'] + * [fill^='#'] {
      fill: ${(p) => p.theme.color['Neutral/Neutral 00']};
    }
  }
`;

const TextWrapper = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;
