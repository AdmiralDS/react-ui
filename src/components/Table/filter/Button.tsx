import * as React from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as MoreHorizontalOutline } from '@admiral-ds/icons/build/system/MoreHorizontalOutline.svg';

const activeFilter = css<{ isFilterOpen?: boolean }>`
  & *[fill^='#'] {
    fill: ${({ theme, isFilterOpen }) => (isFilterOpen ? theme.color.basic.press : theme.color.basic.primary)};
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

export const ButtonContent = styled.span<{ isFilterActive?: boolean; isFilterOpen?: boolean; iconSize: string }>`
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
    fill: ${({ theme }) => theme.color.text.secondary};
  }

  &:hover {
    *[fill^='#'] {
      fill: ${({ theme }) => theme.color.basic.hover};
    }
  }

  ${({ isFilterActive }) => isFilterActive && activeFilter}
`;

type Dimension = 'xl' | 'l' | 'm' | 's';
interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  dimension?: Dimension;
  renderFilterIcon?: () => React.ReactNode;
  isFilterActive?: boolean;
  isFilterOpen?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ dimension, renderFilterIcon, isFilterActive, isFilterOpen, ...props }, ref) => {
    const iconSize = dimension === 's' || dimension === 'm' ? '16px' : '20px';
    return (
      <ButtonComponent ref={ref} type="button" {...props}>
        <ButtonContent isFilterActive={isFilterActive} isFilterOpen={isFilterOpen} iconSize={iconSize}>
          {renderFilterIcon ? renderFilterIcon() : <MoreHorizontalOutline aria-hidden />}
        </ButtonContent>
      </ButtonComponent>
    );
  },
);
