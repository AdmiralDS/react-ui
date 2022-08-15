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
export type ValueType = string | number | object;
export type SuffixSelectProps<T> = {
  alignContainerRef?: React.RefObject<HTMLElement>;
  value: T;
  isOpen?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  renderValue?: (value: T) => React.ReactNode;
  renderOption?: (value: string | number) => React.ReactNode;
  onChange: (value: T) => void;
  options: T[];
};

export const SuffixSelect = <T extends ValueType>(props: React.PropsWithChildren<SuffixSelectProps<T>>) => {
  const [isOpenState, setIsOpenState] = React.useState<boolean>(false);
  const isOpen = props.isOpen === undefined ? isOpenState : props.isOpen;

  const containerRef = React.useRef(null);
  const alignContainerRef = props.alignContainerRef === undefined ? containerRef : props.alignContainerRef;

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
