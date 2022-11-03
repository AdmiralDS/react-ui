import * as React from 'react';
import styled from 'styled-components';
import { OptionGroupProvider, useDropDownSelectContext } from './useSelectContext';
import { OptionWrapper } from './styled';
import { HTMLAttributes } from 'react';
import { Option } from './Option';

interface OptionGroupProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  label: string;
}

const Category = styled(OptionWrapper)`
  font-weight: 500;
  color: ${(props) => props.theme.color['Neutral/Neutral 90']};
  user-select: none;
`;

export const OptionGroup = ({ label, disabled, children, ...props }: React.PropsWithChildren<OptionGroupProps>) => {
  const selectContext = useDropDownSelectContext();

  return (
    <OptionGroupProvider disabled={disabled}>
      <Option
        key={label}
        value={label}
        readOnly={true}
        renderOption={() => (
          <Category {...props} dimension={selectContext?.dimension} key={label}>
            {label}
          </Category>
        )}
      />
      {children}
    </OptionGroupProvider>
  );
};
