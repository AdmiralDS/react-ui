import * as React from 'react';
import styled from 'styled-components';

type Dimension = 'xl' | 'l' | 'm' | 's';

const Action = styled.div<{ dimension: Dimension }>`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
  width: ${({ dimension }) => (dimension === 's' || dimension === 'm' ? 32 : 36)}px;
  height: ${({ dimension }) => (dimension === 's' || dimension === 'm' ? 32 : 36)}px;
  padding: 6px;
  cursor: pointer;
  border-radius: 50%;

  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }
  &:hover {
    background-color: ${({ theme }) => theme.color['Opacity/Hover']};
  }

  &:active {
    background-color: ${({ theme }) => theme.color['Opacity/Press']};
  }
`;

export interface RowActionProps extends React.HTMLAttributes<HTMLDivElement> {
  dimension?: Dimension;
}

export const RowAction = React.forwardRef<HTMLDivElement, RowActionProps>(({ dimension = 'm', ...props }, ref) => {
  return (
    <Action ref={ref} dimension={dimension} {...props}>
      {props.children}
    </Action>
  );
});
