import * as React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as ButtonL } from '../OverflowMenu/svgs/ButtonL.svg';
import { ReactComponent as ButtonM } from '../OverflowMenu/svgs/ButtonM.svg';

export type Dimension = 'l' | 'm';

const sizes = css<{ dimension: Dimension }>`
  width: ${({ dimension }) => {
    switch (dimension) {
      case 'm':
        return '20px';
      case 'l':
      default:
        return '24px';
    }
  }};
  height: ${({ dimension }) => {
    switch (dimension) {
      case 'm':
        return '20px';
      case 'l':
      default:
        return '24px';
    }
  }};
`;

const focusStyle = css`
  & *[fill^='#'] {
    fill: ${({ theme }) => theme.color.basic.hover};
  }
  border: 2px solid ${({ theme }) => theme.color.basic.hover};
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
  background: transparent;
  -webkit-tap-highlight-color: transparent;
  margin-left: 4px;
  padding: ${({ dimension }) => (dimension === 'l' ? '10px' : '8px')};
  border: 2px solid transparent;

  & svg {
    ${sizes};
    flex-shrink: 0;
  }

  & *[fill^='#'] {
    fill: ${({ theme, isActive: isActive }) => (isActive ? theme.color.basic.press : theme.color.text.secondary)};
  }

  &:hover *[fill^='#'] {
    fill: ${({ theme }) => theme.color.basic.hover};
  }

  ${({ menuOpened }) => menuOpened && focusStyle}
  &:focus {
    ${focusStyle}
  }

  &:active *[fill^='#'] {
    fill: ${({ theme }) => theme.color.basic.press};
  }

  &:disabled {
    cursor: default;
    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color.text.tertiary};
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
        {dimension === 'l' ? <ButtonL width={18} /> : <ButtonM width={14} />}
      </ButtonComponent>
    );
  },
);
