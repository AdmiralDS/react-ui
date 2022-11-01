import * as React from 'react';
import styled from 'styled-components';
import { OptionGroupProvider, useDropDownSelectContext } from './useSelectContext';
import { OptionWrapper } from './styled';
import { HTMLAttributes } from 'react';
import { Option } from '#src/components/input';

interface OptionGroupProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  label: string;
}

const Category = styled(OptionWrapper)`
  font-weight: 500;
  color: ${(props) => props.theme.color['Neutral/Neutral 90']};
`;

export const OptionGroup = ({ label, disabled, children, ...props }: React.PropsWithChildren<OptionGroupProps>) => {
  const selectContext = useDropDownSelectContext();

  return (
    <OptionGroupProvider disabled={disabled}>
      <Option
        key={label}
        value={label}
        renderOption={({ isHovered }) => (
          <Category {...props} dimension={selectContext?.dimension}>
            {label}
          </Category>
        )}
      />
      {children}
    </OptionGroupProvider>
  );
};
