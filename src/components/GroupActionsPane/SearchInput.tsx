import styled from 'styled-components';
import { TextInput } from '#src/components/input';
import { InputHTMLAttributes } from 'react';
import * as React from 'react';
import { typography } from '#src/components/Typography';

type InputDimension = 's' | 'l';

export interface SearchInputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Делает высоту компонента больше или меньше обычной */
  dimension?: InputDimension;
}

const InputWrapper = styled.div`
  display: flex;
  flex: 1 0 auto;
  height: 100%;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: calc(100% + 48px);
    height: 2px;
    background-color: ${(props) => props.theme.color['Primary/Primary 60 Main']};
  }
`;

const StyledInput = styled.input<{ dimension?: InputDimension }>`
  flex-grow: 1;
  outline: none;
  appearance: none;
  border: none;
  background-color: ${(props) => props.theme.color['Neutral/Neutral 00']};
  padding: ${({ dimension }) => (dimension === 's' ? '0 12px' : '0 16px')};
  color: ${(props) => props.theme.color['Neutral/Neutral 90']};
  ${(props) => (props.dimension === 's' ? typography['Body/Body 2 Long'] : typography['Body/Body 1 Long'])};

  &::placeholder {
    color: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }
`;

export const SearchInput = React.forwardRef<HTMLInputElement, SearchInputProps>(
  ({ dimension = 'l', ...props }, ref) => {
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      console.log(e);
    };

    return (
      <InputWrapper>
        <StyledInput
          ref={ref}
          {...props}
          dimension={dimension}
          placeholder={'Искать в таблице'}
          onChange={handleOnChange}
        />
      </InputWrapper>
    );
  },
);
