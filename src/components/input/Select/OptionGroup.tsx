import * as React from 'react';
import styled from 'styled-components';
import { OptionGroupProvider } from './useSelectContext';
import { OptionWrapper } from './styled';
import type { HTMLAttributes } from 'react';
import { Option } from './Option';
import { useDropDownContext } from '#src/components/input/Select/DropDownContext';

export interface OptionGroupProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  label: string;
}

const Category = styled(OptionWrapper)`
  font-weight: 500;
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  user-select: none;
`;

export const OptionGroup = ({ label, disabled, children, ...props }: React.PropsWithChildren<OptionGroupProps>) => {
  const selectContext = useDropDownContext();

  return (
    <OptionGroupProvider disabled={disabled}>
      <Option
        key={label}
        value={label}
        readOnly={true}
        renderOption={() => (
          <Category {...props} $dimension={selectContext?.dimension} key={label}>
            {label}
          </Category>
        )}
      />
      {children}
    </OptionGroupProvider>
  );
};
