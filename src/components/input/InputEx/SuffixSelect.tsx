import type { CSSProperties, ReactNode, RefObject, MouseEvent, PropsWithChildren } from 'react';
import { useState, useRef } from 'react';
import styled, { css } from 'styled-components';

import { OpenStatusButton } from '#src/components/OpenStatusButton';
import { StyledDropdownContainer } from '#src/components/DropdownContainer';
import type { MenuDimensions } from '#src/components/input/InputEx/Menu';
import { Menu } from '#src/components/input/InputEx/Menu';
import type { MenuItemProps } from '#src/components/Menu/MenuItem';

const StyledMenu = styled(Menu)<{ $width?: string }>`
  width: ${({ $width }) => ($width ? $width : 'auto')};
`;

const preventDefault = (e: MouseEvent) => e.preventDefault();
const Container = styled.div<{ $iconSizeValue?: string; disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;

  &[data-read-only] {
    cursor: default;
  }

  & > svg {
    display: block;
    width: ${(p) => p.$iconSizeValue || '24px'};

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: var(--admiral-color-Primary_Primary60Main, ${(p) => p.theme.color['Primary/Primary 60 Main']}) solid 2px;
    }
  }

  ${(p) =>
    p.disabled
      ? 'cursor: not-allowed;'
      : css`
          &:hover {
            & > ${OpenStatusButton} *[fill^='#'] {
              fill: var(--admiral-color-Primary_Primary70, ${(p) => p.theme.color['Primary/Primary 70']});
            }
          }
        `}
`;
const ValueContainer = styled.div`
  margin-right: 4px;
`;
export type RenderPropsType<T> = {
  value: T;
};

export type SuffixSelectProps<T> = {
  /**
   * @deprecated Помечено как deprecated в версии 8.8.0, будет удалено в 10.x.x версии.
   * Взамен используйте параметр targetElement.
   *
   * ref элемента относительно которого будет выравниваться дроп контейнер */
  alignRef?: RefObject<HTMLElement>;
  /** Элемент, относительно которого позиционируется выпадающее меню */
  targetElement?: Element | null;

  /** задает выравнивание дроп контейнера относительно компонента */
  dropAlign?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Размер Меню */
  dimension?: MenuDimensions;

  /**  Ширина меню */
  menuWidth?: string;

  /** Задает максимальную высоту дроп контейнера */
  dropMaxHeight?: string | number;

  /** выбранное на данный момент значение */
  value: T;

  /** список значений для выбора */
  options: T[];

  /** обработчик события на выбор элемента */
  onChange: (value: ReactNode) => void;

  /** состояние видимости контейнера с опциями */
  isOpen?: boolean;

  /** обработчик события на изменение видимости контейнера с опциями */
  onOpenChange?: (isOpen: boolean) => void;

  renderValue?: (props: RenderPropsType<T>) => ReactNode;
  renderOption?: (props: RenderPropsType<ReactNode> & MenuItemProps) => ReactNode;

  disabled?: boolean;

  readOnly?: boolean;

  /** Позволяет добавлять миксин для выпадающих меню, созданный с помощью styled css  */
  dropContainerCssMixin?: ReturnType<typeof css>;
  /** Позволяет добавлять класс на контейнер выпадающего меню  */
  dropContainerClassName?: string;
  /** Позволяет добавлять стили на контейнер выпадающего меню  */
  dropContainerStyle?: CSSProperties;
};

export const SuffixSelect = <T extends ReactNode>({
  alignRef,
  targetElement,
  dropAlign,
  dimension,
  menuWidth,
  dropMaxHeight,
  onChange,
  options,
  value,
  disabled,
  dropContainerCssMixin,
  dropContainerClassName,
  dropContainerStyle,
  renderValue,
  renderOption,
  ...props
}: PropsWithChildren<SuffixSelectProps<T>>) => {
  const [isOpenState, setIsOpenState] = useState<boolean>(false);
  const isOpen = props.isOpen === undefined ? isOpenState : props.isOpen;

  const containerRef = useRef<HTMLDivElement>(null);
  const alignContainerRef = targetElement || alignRef?.current || containerRef.current;

  const handleContainerClick = (e: MouseEvent<HTMLDivElement>) => {
    e.preventDefault(); // prevent focus stealing from input
    const newOpenStatus = !isOpen;
    props.onOpenChange?.(newOpenStatus);
    setIsOpenState(newOpenStatus);
  };

  const handleOnSelect = (value: ReactNode) => {
    onChange(value);
    setIsOpenState(false);
  };

  const clickOutside = (e: Event) => {
    if (e.target && containerRef.current?.contains(e.target as Node)) {
      return;
    }
    setIsOpenState(false);
  };

  return (
    <>
      <Container
        ref={containerRef}
        disabled={disabled}
        data-read-only={props.readOnly ? true : undefined}
        onMouseDown={props.readOnly || disabled ? preventDefault : handleContainerClick}
      >
        {renderValue ? renderValue({ value }) : <ValueContainer>{String(value)}</ValueContainer>}
        {!props.readOnly && <OpenStatusButton $isOpen={isOpen} aria-hidden data-disabled={disabled} />}
      </Container>
      {isOpen && (
        <StyledDropdownContainer
          role="listbox"
          alignSelf={dropAlign}
          targetElement={alignContainerRef}
          onClickOutside={clickOutside}
          dropContainerCssMixin={dropContainerCssMixin}
          className={dropContainerClassName}
          style={dropContainerStyle}
        >
          <StyledMenu
            $width={menuWidth}
            maxHeight={dropMaxHeight}
            options={options}
            selected={value}
            onSelect={handleOnSelect}
            renderOption={renderOption}
            dimension={dimension}
            preventFocusSteal
          />
        </StyledDropdownContainer>
      )}
    </>
  );
};
