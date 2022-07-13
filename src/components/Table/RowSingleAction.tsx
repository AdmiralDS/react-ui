import * as React from 'react';
import styled from 'styled-components';

type Dimension = 'xl' | 'l' | 'm' | 's';

const Action = styled.div<{ dimension: Dimension }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ dimension }) => (dimension === 's' || dimension === 'm' ? 32 : 36)}px;
  height: ${({ dimension }) => (dimension === 's' || dimension === 'm' ? 32 : 36)}px;
  cursor: pointer;
  &:hover {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color['Opacity/Hover']};
  }

  &:active {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color['Opacity/Press']};
  }
`;

export interface RowSingleActionProps extends React.HTMLAttributes<HTMLDivElement> {
  dimension?: Dimension;
}

export const RowSingleAction: React.FC<RowSingleActionProps> = ({ dimension = 'm', ...props }) => {
  return (
    <Action dimension={dimension} {...props}>
      {props.children}
    </Action>
  );
};
