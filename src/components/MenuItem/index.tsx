import type { HTMLAttributes } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import { backgroundColor, colorTextMixin, ItemDimension, paddings, styleTextMixin } from './mixins';

export interface MenuItemProps extends HTMLAttributes<HTMLDivElement> {
  /** Отключение секции */
  disabled?: boolean;
  /** Размер MenuItems */
  dimension?: ItemDimension;
  /** Активная секция MenuItems */
  selected?: boolean;
  /** Акцентная секция MenuItems */
  hovered?: boolean;
  /** Значение DropDownItems */
  value?: string | number | undefined;
}

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  ({ children, disabled, hovered, dimension = 'l', selected = false, id, ...props }, ref) => {
    return (
      <Item
        ref={ref}
        dimension={dimension}
        tabIndex={!disabled ? props.tabIndex || 0 : undefined}
        selected={selected}
        hovered={hovered}
        id={id}
        data-disabled={disabled}
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
  id?: string;
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
