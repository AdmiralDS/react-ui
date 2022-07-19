import styled, { css } from 'styled-components';
import { InputHTMLAttributes, useEffect, useRef } from 'react';
import * as React from 'react';
import { typography } from '#src/components/Typography';
import { refSetter } from '#src/components/common/utils/refSetter';

type InputDimension = 's' | 'l';

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Делает высоту компонента больше или меньше обычной */
  dimension?: InputDimension;
  collapsed?: boolean;
}

const collapsedMixin = css<{ dimension?: InputDimension; collapsed?: boolean }>`
  max-width: ${({ dimension }) => (dimension === 's' ? '100px' : '164px')};
  &::after {
    background-color: ${(props) => props.theme.color['Neutral/Neutral 20']};
  }
`;

const InputWrapper = styled.div<{ dimension?: InputDimension; collapsed?: boolean }>`
  display: flex;
  flex: 1 0 auto;
  height: 100%;
  position: relative;
  background-color: transparent;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ dimension }) => (dimension === 's' ? 'calc(100% + 32px)' : 'calc(100% + 48px)')};
    height: 2px;
    background-color: ${(props) => props.theme.color['Primary/Primary 60 Main']};
  }

  ${({ collapsed }) => collapsed && collapsedMixin}
`;

const StyledInput = styled.input<{ dimension?: InputDimension }>`
  flex-grow: 1;
  outline: none;
  appearance: none;
  border: none;
  background-color: transparent;
  padding: ${({ dimension }) => (dimension === 's' ? '0 12px' : '0 16px')};
  color: ${(props) => props.theme.color['Neutral/Neutral 90']};
  box-sizing: border-box;
  width: 100%;
  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])};

  &::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }
`;

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ dimension = 'l', collapsed = false, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
      if (!collapsed) inputRef?.current?.focus();
    }, [collapsed]);

    return (
      <InputWrapper collapsed={collapsed} dimension={dimension}>
        <StyledInput ref={refSetter(ref, inputRef)} {...props} dimension={dimension} placeholder={'Искать в таблице'} />
      </InputWrapper>
    );
  },
);
