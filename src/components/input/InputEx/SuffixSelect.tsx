import React from 'react';
import styled from 'styled-components';
import { OpenStatusButton } from '#src/components/OpenStatusButton';
import { DropdownContainer } from '#src/components/DropdownContainer';
import { Menu } from './Menu';

const StyledMenu = styled(Menu)<{ width?: string }>`
  width: ${({ width }) => (width ? width : 'auto')};
`;

const Container = styled.div<{ iconSizeValue?: string }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  
  & > svg {
    display: block;
    width: ${(p) => p.iconSizeValue || '24px'};

    &:focus {
      outline: none;
    }

    &:focus-visible {
      outline-offset: 2px;
      outline: ${(p) => p.theme.color['Primary/Primary 60 Main']} solid 2px;
    }
`;
const ValueContainer = styled.div`
  margin-right: 4px;
`;
export type RenderPropsType<T> = {
  value: T;
};
export type ValueType = string | number | object;

export type SuffixSelectProps<T> = {
  /** ref элемента относительно которого будет выравниваться дроп контейнер */
  alignRef?: React.RefObject<HTMLElement>;

  /** задает выравнивание дроп контейнера относительно компонента */
  dropAlign?: 'auto' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'stretch';

  /** Задает максимальную высоту дроп контейнера */
  dropMaxHeight?: string | number;

  /** выбранное на данный момент значение */
  value: T;

  /** список значений для выбора */
  options: T[];

  /** обработчик события на выбор элемента */
  onChange: (value: ValueType) => void;

  /** состояние видимости контейнера с опциями */
  isOpen?: boolean;

  /** обработчик события на изменение видимости контейнера с опциями */
  onOpenChange?: (isOpen: boolean) => void;

  renderValue?: (props: RenderPropsType<T>) => React.ReactNode;
  renderOption?: (props: RenderPropsType<T>) => React.ReactNode;
};

export const SuffixSelect = <T extends ValueType>({
  dropAlign,
  dropMaxHeight,
  onChange,
  options,
  value,
  ...props
}: React.PropsWithChildren<SuffixSelectProps<T>>) => {
  const [isOpenState, setIsOpenState] = React.useState<boolean>(false);
  const isOpen = props.isOpen === undefined ? isOpenState : props.isOpen;

  const containerRef = React.useRef(null);
  const alignContainerRef = props.alignRef === undefined ? containerRef : props.alignRef;

  const handleContainerClick = () => {
    const newOpenStatus = !isOpen;
    props.onOpenChange?.(newOpenStatus);
    setIsOpenState(newOpenStatus);
  };

  const clickOutside = () => {
    setIsOpenState(false);
  };

  return (
    <>
      <Container ref={containerRef} onClick={handleContainerClick}>
        <ValueContainer>{value}</ValueContainer>
        <OpenStatusButton $isOpen={isOpen} aria-hidden />
      </Container>
      {isOpen && (
        <DropdownContainer
          role="listbox"
          alignSelf={dropAlign}
          targetRef={alignContainerRef}
          onClickOutside={clickOutside}
        >
          <StyledMenu maxHeight={dropMaxHeight} options={options} selected={value} onSelect={onChange} />
        </DropdownContainer>
      )}
    </>
  );
};
