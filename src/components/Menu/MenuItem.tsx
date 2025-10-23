import React, { Children, forwardRef } from 'react';
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
  /** Секция в состоянии preselected */
  preselected?: boolean;
  /** Акцентная секция MenuItems */
  hovered?: boolean;
  /** Обработчик клика по item */
  onClick?: React.MouseEventHandler<HTMLElement>;
  /** Обработчик наведения мыши на item */
  onHover?: React.MouseEventHandler<HTMLElement>;
  /** обработчик выхода мыши за пределы item */
  onLeave?: React.MouseEventHandler<HTMLElement>;
  onMouseDown?: React.MouseEventHandler<HTMLElement>;
  /** ссылка на контейнер, в котором находится Menu*/
  containerRef?: React.RefObject<HTMLElement>;
  expandIcon?: React.ReactNode;
  hasSubmenu?: boolean;
  /**
   * @deprecated Помечено как deprecated в версии 8.17.0, будет удалено в 10.x.x версии.
   *
   * ссылка на элемент, при работе через renderProp
   */
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

export type MenuItemProps = React.ComponentPropsWithoutRef<'div'> & RenderOptionProps;

export const MenuItem = forwardRef<HTMLDivElement, MenuItemProps>(
  (
    {
      children,
      expandIcon = <Chevron />,
      hasSubmenu,
      onHover,
      disabled,
      readOnly,
      hovered,
      dimension = 'l' as ItemDimension,
      selected = false,
      preselected = false,
      selfRef,
      onMouseDown,
      onLeave,
      containerRef,
      ...props
    },
    ref,
  ) => {
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      onHover?.(e);
      props.onMouseMove?.(e);
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
      onHover?.(e);
      props.onMouseEnter?.(e);
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
      onLeave?.(e);
      props.onMouseLeave?.(e);
    };

    const handleMouseDown = !disabled ? onMouseDown : stopEventHandler;

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      if (disabled) {
        e.preventDefault();
        e.stopPropagation();
      } else {
        props.onClick?.(e);
      }
    };

    const resolvedRef = selfRef ? refSetter(ref, selfRef) : ref;

    return (
      <Item
        ref={resolvedRef}
        $dimension={dimension}
        $preselected={preselected}
        $selected={selected}
        $hovered={hovered}
        data-preselected={preselected}
        data-hovered={hovered}
        data-disabled={disabled}
        data-readonly={readOnly}
        data-dimension={dimension}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseDown={handleMouseDown}
        {...props}
        onClick={handleClick}
      >
        {Children.toArray(children).map((child, index) =>
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
  $preselected: boolean;
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
    background-color: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
    color: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    && *[fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral30, ${(p) => p.theme.color['Neutral/Neutral 30']});
    }
    && input[type='checkbox'] + * [fill^='#'] {
      fill: var(--admiral-color-Neutral_Neutral00, ${(p) => p.theme.color['Neutral/Neutral 00']});
    }
  }

  &&[data-readonly='true'] {
    cursor: default;
  }
`;

const TextWrapper = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
`;
