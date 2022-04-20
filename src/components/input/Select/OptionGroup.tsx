import * as React from 'react';
import styled from 'styled-components';
import { OptionGroupProvider, useDropDownSelectContext } from './useSelectContext';
import { OptionWrapper } from './styled';

interface IProps {
  disabled?: boolean;
  label: string;
}

const Category = styled(OptionWrapper)`
  font-weight: 500;
  color: ${(props) => props.theme.color['Neutral/Neutral 90']};
`;

export const OptionGroup = ({ label, disabled = false, children }: React.PropsWithChildren<IProps>) => {
  const selectContext = useDropDownSelectContext();

  return (
    <OptionGroupProvider label={label} disabled={disabled}>
      <Category dimension={selectContext?.dimension}>{label}</Category>
      {children}
    </OptionGroupProvider>
  );
};
