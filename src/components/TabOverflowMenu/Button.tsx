import * as React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as MoreHorizontalOutline } from '@admiral-ds/icons/build/system/MoreHorizontalOutline.svg';

export type Dimension = 'l' | 'm';
export const SIZE = {
  l: 36,
  m: 32,
};

const focusStyle = css`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color['Opacity/Focus']};
`;

const ButtonComponent = styled.button<{ dimension: Dimension; menuOpened: boolean; isActive: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  border: 0;
  outline: none;
  padding: 0;
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  overflow: visible;
  height: ${({ dimension }) => SIZE[dimension]}px;
  width: ${({ dimension }) => SIZE[dimension]}px;

  & svg {
    flex-shrink: 0;
  }

  & *[fill^='#'] {
    fill: ${({ theme, isActive: isActive }) =>
      isActive ? theme.color['Primary/Primary 60 Main'] : theme.color['Neutral/Neutral 50']};
  }

  &:hover:not(:disabled) {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color['Opacity/Hover']};
  }

  ${({ menuOpened }) => menuOpened && focusStyle}

  &:focus {
    &:before {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      bottom: -4px;
      right: -4px;
      border: 2px solid ${({ theme }) => theme.color['Primary/Primary 60 Main']};
    }
  }

  &:active {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color['Opacity/Focus']};
  }

  &:disabled {
    cursor: default;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 30']};
    }
  }
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  dimension?: Dimension;
  menuOpened: boolean;
  isActive: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ dimension = 'l', type = 'button', ...props }, ref) => {
    return (
      <ButtonComponent ref={ref} dimension={dimension} type={type} {...props}>
        {dimension === 'l' ? <MoreHorizontalOutline width={24} /> : <MoreHorizontalOutline width={20} />}
      </ButtonComponent>
    );
  },
);
