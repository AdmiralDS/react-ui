import type { HTMLAttributes } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';
import type { DropDownItemDimension } from './mixins';
import { backgroundColor, colorTextMixin, paddings, styleTextMixin } from './mixins';

export interface DropDownItemProps extends HTMLAttributes<HTMLLIElement> {
  /** Отключение секции */
  disabled?: boolean;
  /** Размер DropDownItems */
  dimension?: DropDownItemDimension;
  /** Активная секция DropDownItems */
  selected?: boolean;
  /** Акцентная секция DropDownItems */
  hovered?: boolean;
  /** Значение DropDownItems */
  value?: string | number | undefined;
}

const hoverStyle = css`
  background-color: var(--admiral-color-Opacity_Hover, ${(p) => p.theme.color['Opacity/Hover']});
  cursor: pointer;
`;

const Item = styled.li<{
  $dimension: DropDownItemDimension;
  selected?: boolean;
  $hovered?: boolean;
  $width?: number;
  id?: string;
  disabled?: boolean;
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
  ${paddings}
  ${styleTextMixin}
  ${colorTextMixin}
  ${backgroundColor}
  ${(p) => p.$hovered && hoverStyle};

  &:hover {
    ${hoverStyle}
  }

  &&[data-disabled='true'] {
    cursor: not-allowed;
    background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    && *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
  }
`;

export const DropDownItem = React.forwardRef<HTMLLIElement, DropDownItemProps>(
  ({ children, disabled, hovered, dimension = 'l', selected = false, id, ...props }, ref) => {
    return (
      <Item
        ref={ref}
        $dimension={dimension}
        tabIndex={!disabled ? props.tabIndex || 0 : undefined}
        selected={selected}
        $hovered={hovered}
        id={id}
        data-disabled={disabled}
        {...props}
      >
        {children}
      </Item>
    );
  },
);

DropDownItem.displayName = 'DropDownItem';
