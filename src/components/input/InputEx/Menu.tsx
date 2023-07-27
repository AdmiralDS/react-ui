import type { HTMLAttributes } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';
import { keyboardKey } from '../../common/keyboardKey';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import type { RenderPropsType } from '#src/components/input/InputEx/SuffixSelect';
import type { MenuItemProps } from '#src/components/Menu/MenuItem';
import { MenuItem } from '#src/components/Menu/MenuItem';
import type { ValueType } from './ValueType';

export type MenuDimensions = 'l' | 'm' | 's';

const menuListHeights = css<{ dimension?: MenuDimensions; maxHeight?: string | number }>`
  max-height: ${({ dimension, maxHeight }) => {
    if (maxHeight) return maxHeight;
    switch (dimension) {
      case 'l':
        return `${48 * 6 + 16}px`;
      case 'm':
        return `${40 * 6 + 16}px`;
      case 's':
        return `${32 * 6 + 16}px`;
      default:
        return `${48 * 6 + 16}px`;
    }
  }};
`;

const Wrapper = styled.div<{ dimension?: MenuDimensions }>`
  pointer-events: initial;
  background-color: ${(p) => p.theme.color['Special/Elevated BG']};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(p) => p.theme.shadow['Shadow 08']}
  max-width: calc(100vw - 32px);
  border-color: transparent;
  ${menuListHeights};
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

const StyledDiv = styled.div`
  margin: 0;
  padding: 8px 0;
  appearance: none;
  flex: 0 0 auto;
  border: none;
`;

function defaultOptionRender({ value, ...props }: RenderPropsType<ValueType> & MenuItemProps) {
  return <MenuItem {...props}>{String(value)}</MenuItem>;
}

export interface MenuProps<T> extends Omit<HTMLAttributes<HTMLDivElement>, 'onSelect'> {
  /** Размер Меню */
  dimension?: MenuDimensions;

  /** выбранная секция Menu */
  selected: T | null;

  /** Обработчик выбора item в меню */
  onSelect: (option: T) => void;

  /** Модель данных, с рендер-пропсами*/
  options: Array<T>;

  renderOption?: (props: RenderPropsType<T> & MenuItemProps) => React.ReactNode;

  /** Задает максимальную высоту меню */
  maxHeight?: string | number;

  /** Клик по меню не преводит к перемещению фокуса */
  preventFocusSteal?: boolean;
}

export const Menu = React.forwardRef<HTMLDivElement, MenuProps<ValueType>>(
  (
    { options, selected, renderOption = defaultOptionRender, onSelect, dimension, preventFocusSteal, ...props },
    ref,
  ) => {
    const [activeOption, setActiveOption] = React.useState<null | ValueType>(null);

    const menuRef = React.useRef<HTMLDivElement | null>(null);

    const findNext = () => {
      const currentIndex = selected ? options.indexOf(activeOption || selected) : 0;
      return currentIndex + 1 > options.length ? options[0] : options[currentIndex + 1];
    };

    const findPrevious = () => {
      const currentIndex = selected ? options.indexOf(activeOption || selected) : 0;
      return currentIndex - 1 < 0 ? options[options.length - 1] : options[currentIndex - 1];
    };

    React.useEffect(() => {
      function handleKeyDown(e: KeyboardEvent) {
        const code = keyboardKey.getCode(e);
        switch (code) {
          case keyboardKey[' ']:
          case keyboardKey.Enter: {
            if (activeOption) onSelect(activeOption);
            e.preventDefault();
            break;
          }
          case keyboardKey.ArrowDown: {
            setActiveOption(findNext());
            e.preventDefault();
            break;
          }
          case keyboardKey.ArrowUp: {
            setActiveOption(findPrevious());
            e.preventDefault();
            break;
          }
        }
      }

      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, [activeOption]);

    const renderChildren = () =>
      options.map((option, index) =>
        renderOption({
          key: index,
          value: option,
          hovered: option === activeOption,
          selected: option === selected,
          onHover: () => setActiveOption(option),
          onClick: () => onSelect(option),
          onMouseDown: preventFocusSteal ? (e: React.MouseEvent<HTMLElement>) => e.preventDefault() : undefined,
          dimension: dimension,
        }),
      );

    React.useEffect(() => {
      const hoveredItem = menuRef.current?.querySelector('[data-hovered="true"]');

      hoveredItem?.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }, [activeOption]);

    return (
      <Wrapper ref={ref} dimension={dimension} {...props}>
        <StyledDiv ref={menuRef}>{renderChildren()}</StyledDiv>
      </Wrapper>
    );
  },
);

Menu.displayName = 'Menu';
