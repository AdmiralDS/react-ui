import * as React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as MoreHorizontalOutline } from '@admiral-ds/icons/build/system/MoreHorizontalOutline.svg';

const activeFilter = css`
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Primary/Primary 60 Main']};
  }
`;

const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  border: 0;
  outline: none;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  padding: 0;
  margin: 2px 0;
`;

export const ButtonContent = styled.span<{ isFilterActive?: boolean; iconSize: string }>`
  position: relative;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 100%;

  & svg {
    flex-shrink: 0;
    width: ${({ iconSize }) => iconSize};
    height: ${({ iconSize }) => iconSize};
  }

  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }

  &:hover {
    *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Primary/Primary 70']};
    }
  }

  ${({ isFilterActive }) => isFilterActive && activeFilter}
`;

type Dimension = 'xl' | 'l' | 'm' | 's';

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  dimension?: Dimension;
  renderFilterIcon?: () => React.ReactNode;
  isFilterActive?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ dimension, renderFilterIcon, isFilterActive, ...props }, ref) => {
    const iconSize = dimension === 's' || dimension === 'm' ? '16px' : '20px';
    return (
      <ButtonComponent ref={ref} type="button" {...props}>
        <ButtonContent isFilterActive={isFilterActive} iconSize={iconSize}>
          {renderFilterIcon ? renderFilterIcon() : <MoreHorizontalOutline aria-hidden />}
        </ButtonContent>
      </ButtonComponent>
    );
  },
);
