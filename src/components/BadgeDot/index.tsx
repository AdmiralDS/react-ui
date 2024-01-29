import styled, { css } from 'styled-components';
import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

const getBackground = css<{ $appearance: Appearance }>`
  ${({ theme, $appearance }) => {
    switch ($appearance) {
      case 'info':
        return theme.color['Primary/Primary 60 Main'];
      case 'error':
        return theme.color['Error/Error 60 Main'];
      case 'success':
        return theme.color['Success/Success 50 Main'];
      case 'warning':
        return theme.color['Warning/Warning 50 Main'];
      case 'attention':
        return theme.color['Attention/Attention 50 Main'];
      case 'neutral':
      default:
        return theme.color['Neutral/Neutral 50'];
    }
  }}
`;

const getSize = css<{ $dimension: Dimension }>`
  ${({ $dimension }) => {
    switch ($dimension) {
      case 'l':
        return 12;
      case 's':
        return 8;
      case 'xs':
        return 6;
      case 'm':
      default:
        return 10;
    }
  }}
`;

const Dot = styled.div<{ $dimension: Dimension; $appearance: Appearance }>`
  position: relative;
  box-sizing: border-box;
  width: ${getSize}px;
  height: ${getSize}px;
  background: ${getBackground};
  border: 1px solid ${getBackground};
  border-radius: 50%;
`;

type Dimension = 'l' | 'm' | 's' | 'xs';
type Appearance = 'neutral' | 'info' | 'error' | 'success' | 'warning' | 'attention';

export interface BadgeDotProps extends HTMLAttributes<HTMLDivElement> {
  dimension?: Dimension;
  appearance?: Appearance;
}

export const BadgeDot = forwardRef<HTMLDivElement, BadgeDotProps>(
  ({ dimension = 'm', appearance = 'neutral', ...props }: BadgeDotProps, ref) => {
    return <Dot ref={ref} $dimension={dimension} $appearance={appearance} {...props} />;
  },
);

BadgeDot.displayName = 'BadgeDot';
