import * as React from 'react';
import styled from 'styled-components';
import { OptionGroupProvider, useDropDownSearchSelectContext } from './useSearchSelectContext';
import { OptionWrapper } from './styled';

interface IProps {
  disabled?: boolean;
  label: string;
}

const Category = styled(OptionWrapper)`
  font-weight: 500;
`;

export const OptionGroup = ({ label, disabled = false, children }: React.PropsWithChildren<IProps>) => {
  const selectContext = useDropDownSearchSelectContext();

  return (
    <OptionGroupProvider label={label} disabled={disabled}>
      <Category dimension={selectContext?.dimension}>{label}</Category>
      {children}
    </OptionGroupProvider>
  );
};
