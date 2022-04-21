import type { ButtonHTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as ButtonL } from '#src/components/OverflowMenu/svgs/ButtonL.svg';
import { ReactComponent as ButtonM } from '#src/components/OverflowMenu/svgs/ButtonM.svg';
import { ReactComponent as ButtonS } from '#src/components/OverflowMenu/svgs/ButtonS.svg';

export type Dimension = 'l' | 'm' | 's';

export const SIZE = {
  l: 36,
  m: 32,
  s: 24,
};

const focusStyle = css`
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color['Opacity/Focus']};
`;

const ButtonComponent = styled.button<{ dimension: Dimension; menuOpened: boolean }>`
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
    fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
  }

  &:hover {
    border-radius: 50%;
    background-color: ${({ theme }) => theme.color['Opacity/Hover']};
  }

  ${({ menuOpened }) => menuOpened && focusStyle}

  &:focus-visible {
    &:before {
      content: '';
      position: absolute;
      top: -4px;
      left: -4px;
      bottom: -4px;
      right: -4px;
      border: 2px solid ${({ theme }) => theme.color['Primary/Primary 60 Main']};
      border-radius: 4px;
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

export const ButtonContent = styled.span`
  position: relative;
  display: inline-flex;
  align-items: center;
  height: 100%;
`;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Элементы содержимого */
  children?: ReactNode;
  /** Размер кнопки */
  dimension?: Dimension;
  /** Состояние меню */
  menuOpened: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ dimension = 'l', menuOpened, type = 'button', ...props }, ref) => {
    return (
      <ButtonComponent ref={ref} dimension={dimension} menuOpened={menuOpened} type={type} {...props}>
        <ButtonContent>
          {dimension === 'l' ? (
            <ButtonL width={24} height={24} aria-hidden />
          ) : dimension === 'm' ? (
            <ButtonM width={20} height={20} aria-hidden />
          ) : (
            <ButtonS width={16} height={16} aria-hidden />
          )}
        </ButtonContent>
      </ButtonComponent>
    );
  },
);
