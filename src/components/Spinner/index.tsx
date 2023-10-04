import type { HTMLAttributes } from 'react';
import * as React from 'react';
import type { RuleSet } from 'styled-components';
import styled, { css, keyframes } from 'styled-components';

import { ReactComponent as SpinnerXL } from './svgs/Subtract_xl.svg';
import { ReactComponent as SpinnerL } from './svgs/Subtract_l.svg';
import { ReactComponent as SpinnerM } from './svgs/Subtract_m.svg';
import { ReactComponent as SpinnerMS } from './svgs/Subtract_ms.svg';
import { ReactComponent as SpinnerS } from './svgs/Subtract_s.svg';

type Dimension = 'xl' | 'l' | 'm' | 'ms' | 's';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** Рзамер спиннера */
  dimension?: Dimension;
  /** Белый цвет компонента */
  inverse?: boolean;
  /** Миксин svg иконки */
  svgMixin?: RuleSet<object>;
}

const getIcon = (dimension: Dimension) => {
  switch (dimension) {
    case 's':
      return SpinnerS;
    case 'ms':
      return SpinnerMS;
    case 'm':
      return SpinnerM;
    case 'xl':
      return SpinnerXL;
    case 'l':
    default:
      return SpinnerL;
  }
};

const sizes = css<{ $dimension: Dimension }>`
  width: ${({ $dimension }) => {
    switch ($dimension) {
      case 's':
        return '16px';
      case 'ms':
        return '20px';
      case 'm':
        return '24px';
      case 'xl':
        return '64px';
      case 'l':
      default:
        return '48px';
    }
  }};
  height: ${({ $dimension }) => {
    switch ($dimension) {
      case 's':
        return '16px';
      case 'ms':
        return '20px';
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
  $inverse: boolean;
  $dimension: Dimension;
  $svgMixin?: RuleSet<object>;
}>`
  position: relative;

  ${sizes};

  & svg {
    ${(p) => p.$svgMixin || ''}
    animation: ${spin} 1s linear infinite;
    path {
      fill: ${({ $inverse, theme }) =>
        $inverse ? theme.color['Special/Static White'] : theme.color['Primary/Primary 60 Main']};
    }
  }
`;

export const Spinner = ({ dimension = 'm', inverse = false, svgMixin, ...props }: SpinnerProps) => {
  const SpinnerIcon = getIcon(dimension);
  return (
    <SpinnerWrapper
      $inverse={inverse}
      $dimension={dimension}
      $svgMixin={svgMixin}
      role="alert"
      aria-live="assertive"
      {...props}
    >
      <SpinnerIcon />
    </SpinnerWrapper>
  );
};

Spinner.displayName = 'Spinner';
