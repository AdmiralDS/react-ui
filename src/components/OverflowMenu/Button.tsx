import type { ButtonHTMLAttributes, ReactNode } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';

import { ReactComponent as MoreHorizontalOutline } from '@admiral-ds/icons/build/system/MoreHorizontalOutline.svg';
import { ReactComponent as MoreVerticalOutline } from '@admiral-ds/icons/build/system/MoreVerticalOutline.svg';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

export type Dimension = 'l' | 'm' | 's';

export const SIZE = {
  l: 36,
  m: 32,
  s: 24,
};

const ICON_SIZE = {
  l: 24,
  m: 20,
  s: 16,
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

  &:hover:not(:disabled) {
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
      border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
    }
  }

  &:active:not(:disabled) {
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
  width: 100%;
  height: 100%;
`;

const IconContainer = styled.div<{ dimension: Dimension }>`
  height: ${({ dimension }) => ICON_SIZE[dimension]}px;
  width: ${({ dimension }) => ICON_SIZE[dimension]}px;
  margin: auto;

  & > svg {
    height: 100%;
    width: 100%;
    flex-shrink: 0;

    & *[fill^='#'] {
      fill: ${({ theme }) => theme.color['Neutral/Neutral 50']};
    }
  }
`;

export const OverflowMenuIcon = React.forwardRef<HTMLDivElement, { dimension: Dimension; isVertical: boolean }>(
  ({ dimension = 'l', isVertical = false }, ref) => {
    const Icon = isVertical ? MoreVerticalOutline : MoreHorizontalOutline;

    return (
      <IconContainer ref={ref} dimension={dimension}>
        <Icon aria-hidden />
      </IconContainer>
    );
  },
);

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Элементы содержимого */
  children?: ReactNode;
  /** Размер кнопки */
  dimension?: Dimension;
  /** Состояние меню */
  menuOpened: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ dimension = 'l', menuOpened, type = 'button', children, ...props }, ref) => {
    return (
      <ButtonComponent ref={ref} dimension={dimension} menuOpened={menuOpened} type={type} {...props}>
        <ButtonContent>{children}</ButtonContent>
      </ButtonComponent>
    );
  },
);
