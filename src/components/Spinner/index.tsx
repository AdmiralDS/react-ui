import type { FC } from 'react';
import React, { HTMLAttributes } from 'react';
import styled, { css, keyframes } from 'styled-components';

import { DEFAULT_THEME } from '../common';

import { ReactComponent as SpinnerXL } from './svgs/Subtract_xl.svg';
import { ReactComponent as SpinnerL } from './svgs/Subtract_l.svg';
import { ReactComponent as SpinnerM } from './svgs/Subtract_m.svg';
import { ReactComponent as SpinnerS } from './svgs/Subtract_s.svg';

type Dimension = 'xl' | 'l' | 'm' | 's';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** Рзамер спиннера */
  dimension?: Dimension;
  /** Белый цвет компонента */
  inverse?: boolean;
}

const getIcon = (dimension: Dimension) => {
  switch (dimension) {
    case 's':
      return SpinnerS;
    case 'm':
      return SpinnerM;
    case 'xl':
      return SpinnerXL;
    case 'l':
    default:
      return SpinnerL;
  }
};

const sizes = css<{ dimension: Dimension }>`
  width: ${({ dimension }) => {
    switch (dimension) {
      case 's':
        return '16px';
      case 'm':
        return '24px';
      case 'xl':
        return '64px';
      case 'l':
      default:
        return '48px';
    }
  }};
  height: ${({ dimension }) => {
    switch (dimension) {
      case 's':
        return '16px';
      case 'm':
        return '24px';
      case 'xl':
        return '64px';
      case 'l':
      default:
        return '48px';
    }
  }};
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerWrapper = styled.div<{
  inverse: boolean;
  dimension: Dimension;
}>`
  position: relative;

  ${sizes};

  & svg {
    animation: ${spin} 1s linear infinite;
    path {
      fill: ${({ inverse, theme }) => (inverse ? theme.color.background.primary : theme.color.basic.primary)};
    }
  }
`;

SpinnerWrapper.defaultProps = {
  theme: DEFAULT_THEME,
};

export const Spinner: FC<SpinnerProps> = ({ dimension = 'm', inverse = false, ...props }) => {
  const SpinnerIcon = getIcon(dimension);
  return (
    <SpinnerWrapper inverse={inverse} dimension={dimension} role="alert" aria-live="assertive" {...props}>
      <SpinnerIcon />
    </SpinnerWrapper>
  );
};

Spinner.displayName = 'Spinner';
