import type { HTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

import { SpinnerIcon } from './SpinnerIcon';

type Dimension = 'xl' | 'l' | 'm' | 'ms' | 's';

export interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  /** Рзамер спиннера */
  dimension?: Dimension;
  /** Белый цвет компонента */
  inverse?: boolean;
  /** Миксин svg иконки */
  svgMixin?: ReturnType<typeof css>;
}

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

const SpinnerWrapper = styled.div<{
  $dimension: Dimension;
  $svgMixin?: ReturnType<typeof css>;
}>`
  position: relative;
  container-type: inline-size;
  ${sizes};

  & svg {
    ${(p) => p.$svgMixin || ''}
  }
`;

export const Spinner = ({ dimension = 'm', inverse = false, svgMixin, ...props }: SpinnerProps) => {
  return (
    <SpinnerWrapper $dimension={dimension} $svgMixin={svgMixin} role="alert" aria-live="assertive" {...props}>
      <SpinnerIcon $inverse={inverse} />
    </SpinnerWrapper>
  );
};

Spinner.displayName = 'Spinner';
