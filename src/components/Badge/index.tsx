import type { FC } from 'react';
import React, { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import { typography } from '../Typography';

type Dimension = 'm' | 's';
type Appearance =
  | 'light'
  | 'info'
  | 'warning'
  | 'success'
  | 'error'
  | 'grey'
  | 'dark'
  | 'lightInactive'
  | 'lightDisable'
  | 'white'
  | 'whiteInactive'
  | 'whiteDisable';

const background = css<{ appearance: Appearance }>`
  background: ${({ appearance, theme }) => {
    switch (appearance) {
      case 'info':
        return theme.color.basic.primary;
      case 'warning':
        return theme.color.status.warn;
      case 'success':
        return theme.color.status.success;
      case 'error':
        return theme.color.status.danger;
      case 'grey':
        return theme.color.background.shadow;
      case 'dark':
        return theme.color.basic.secondary;
      case 'white':
      case 'whiteInactive':
      case 'whiteDisable':
        return theme.color.background.primary;
      case 'light':
      case 'lightInactive':
      case 'lightDisable':
      default:
        return theme.color.background.tertiary;
    }
  }};
`;

const color = css<{ appearance: Appearance }>`
  color: ${({ appearance, theme }) => {
    switch (appearance) {
      case 'info':
      case 'warning':
      case 'success':
      case 'error':
      case 'grey':
        return theme.color.text.staticWhite;
      case 'dark':
        return theme.color.text.inversion;
      case 'lightInactive':
      case 'lightDisable':
      case 'whiteInactive':
        return theme.color.text.secondary;
      case 'whiteDisable':
        return theme.color.text.tertiary;
      case 'white':
      case 'light':
      default:
        return theme.color.text.primary;
    }
  }};
`;

export const BadgeComponent = styled.div<{ dimension: Dimension; appearance: Appearance }>`
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: ${({ dimension }) => (dimension === 's' ? '0 5px' : '0 7px')};
  height: ${({ dimension }) => (dimension === 's' ? '16px' : '20px')};
  border-radius: ${({ dimension }) => (dimension === 's' ? '8px' : '10px')};
  ${({ dimension }) => (dimension === 's' ? typography['Caption/XS'] : typography['Additional/S'])}
  ${background}
  ${color}
  user-select: none;
`;

export interface BadgeProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: Dimension;
  /** Внешний вид компонента */
  appearance?: Appearance;
}

export const Badge: FC<BadgeProps> = ({ children, dimension = 'm', appearance = 'light', ...props }) => {
  const ariaLabel = `Количество ${children}`;
  return (
    <BadgeComponent dimension={dimension} appearance={appearance} aria-label={ariaLabel} {...props}>
      {children}
    </BadgeComponent>
  );
};
