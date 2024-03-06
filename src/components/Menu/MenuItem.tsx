import type { HTMLAttributes } from 'react';
import * as React from 'react';
import styled from 'styled-components';
import type { ItemDimension } from './menuItemMixins';
import { backgroundColor, colorTextMixin, paddings, styleTextMixin } from './menuItemMixins';
import { Chevron } from '#src/components/Menu/styled';
import { refSetter } from '#src/components/common/utils/refSetter';

const stopEventHandler = (e: React.MouseEvent) => {
  e.preventDefault();
  e.stopPropagation();
};

export interface RenderOptionProps {
  key?: string | number;
  /** Активная секция MenuItems */
  selected?: boolean;
  /** Акцентная секция MenuItems */
  hovered?: boolean;
  /** Обработчик клика по item */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /** Обработчик наведения мыши на item */
  onHover?: () => void;
  /** обработчик выхода мыши за пределы item */
  onLeave?: React.MouseEventHandler<HTMLElement>;
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  /** ссылка на контейнер, в котором находится Menu*/
  containerRef?: React.RefObject<HTMLElement>;
  expandIcon?: React.ReactNode;
  hasSubmenu?: boolean;
  selfRef?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null;
  /** Отключение секции */
  disabled?: boolean;
  /** Только для чтения */
  readOnly?: boolean;
  /** Размер MenuItems */
  dimension?: ItemDimension;
}

export interface MenuModelItemProps {
  id: string;
  render: ((options: RenderOptionProps) => React.ReactNode) | React.ReactNode;
  disabled?: boolean;
  readOnly?: boolean;
  subItems?: Array<MenuModelItemProps>;
  expandIcon?: React.ReactNode;
  dimension?: ItemDimension;
}

export interface MenuItemProps extends HTMLAttributes<HTMLElement>, RenderOptionProps {}

export const MenuItem = React.forwardRef<HTMLDivElement, MenuItemProps>(
  (
    {
      children,
      expandIcon = <Chevron />,
      hasSubmenu,
      onHover,
      disabled,
      hovered,
      dimension = 'l',
      selected = false,
      selfRef,
      onMouseDown,
      onLeave,
      containerRef,
      ...props
    },
    ref,
  ) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      onHover?.();
      props.onMouseMove?.(e);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      onHover?.();
      props.onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      onLeave?.(e);
      props.onMouseLeave?.(e);
    };

    const handleMouseDown = !disabled ? onMouseDown : stopEventHandler;

    const resolvedRef = selfRef ? refSetter(ref, selfRef) : ref;

    return (
      <Item
        ref={resolvedRef}
        $dimension={dimension}
        $selected={selected}
        $hovered={hovered}
        data-hovered={hovered}
        data-disabled={disabled}
        data-dimension={dimension}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        {...props}
      >
        {React.Children.toArray(children).map((child, index) =>
          typeof child === 'string' ? <TextWrapper key={child + index}>{child}</TextWrapper> : child,
        )}
        {hasSubmenu && expandIcon}
      </Item>
    );
  },
);

MenuItem.displayName = 'MenuItem';

const Item = styled.div<{
  $dimension: ItemDimension;
  $selected?: boolean;
  $hovered?: boolean;
  $width?: number;
  $disabled?: boolean;
}>`
  display: flex;
  align-items: center;
  user-select: none;
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
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    && *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
    && input[type='checkbox'] + * [fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
    }
  }
`;

const TextWrapper = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;
