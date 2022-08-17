import React from 'react';
import styled from 'styled-components';
import { OpenStatusButton } from '#src/components/OpenStatusButton';

const Container = styled.div<{ iconSizeValue?: string }>`
  display: flex;
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

  /** выбранное на данный момент значение */
  value: T;

  /** список значений для выбора */
  options: T[];

  /** обработчик события на выбор элемента */
  onChange: (value: T) => void;

  /** состояние видимости контейнера с опциями */
  isOpen?: boolean;

  /** обработчик события на изменение видимости контейнера с опциями */
  onOpenChange?: (isOpen: boolean) => void;

  renderValue?: (props: RenderPropsType<T>) => React.ReactNode;
  renderOption?: (props: RenderPropsType<T>) => React.ReactNode;
};

export const SuffixSelect = <T extends ValueType>(props: React.PropsWithChildren<SuffixSelectProps<T>>) => {
  const [isOpenState, setIsOpenState] = React.useState<boolean>(false);
  const isOpen = props.isOpen === undefined ? isOpenState : props.isOpen;

  const containerRef = React.useRef(null);
  const alignContainerRef = props.alignRef === undefined ? containerRef : props.alignRef;

  const handleContainerClick = () => {
    const newOpenStatus = !isOpen;
    props.onOpenChange?.(newOpenStatus);
    setIsOpenState(newOpenStatus);
  };

  return (
    <Container ref={containerRef} onClick={handleContainerClick}>
      <ValueContainer>{props.value}</ValueContainer>
      <OpenStatusButton $isOpen={isOpen} aria-hidden />
    </Container>
  );
};
