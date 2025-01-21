import styled, { css } from 'styled-components';
import { forwardRef } from 'react';
import type { HTMLAttributes } from 'react';

const getBackground = css<{ $appearance: BadgeDotAppearance }>`
  ${({ theme, $appearance }) => {
    switch ($appearance) {
      case 'info':
        return `var(--admiral-color-Primary_Primary60Main, ${theme.color['Primary/Primary 60 Main']})`;
      case 'error':
        return `var(--admiral-color-Error_Error60Main, ${theme.color['Error/Error 60 Main']})`;
      case 'success':
        return `var(--admiral-color-Success_Success50Main, ${theme.color['Success/Success 50 Main']})`;
      case 'warning':
        return `var(--admiral-color-Warning_Warning50Main, ${theme.color['Warning/Warning 50 Main']})`;
      case 'attention':
        return `var(--admiral-color-Attention_Attention50Main, ${theme.color['Attention/Attention 50 Main']})`;
      case 'neutral':
      default:
        return `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`;
    }
  }}
`;

const getSize = css<{ $dimension: BadgeDotDimension }>`
  ${({ $dimension }) => {
    switch ($dimension) {
      case 'l':
        return '12px';
      case 's':
        return '8px';
      case 'xs':
        return '6px';
      case 'm':
      default:
        return '10px';
    }
  }}
`;

const Dot = styled.div<{ $dimension: BadgeDotDimension; $appearance: BadgeDotAppearance }>`
  position: relative;
  box-sizing: border-box;
  width: ${getSize};
  height: ${getSize};
  background: ${getBackground};
  border-radius: 50%;
`;

export type BadgeDotDimension = 'l' | 'm' | 's' | 'xs';
export type BadgeDotAppearance = 'neutral' | 'info' | 'error' | 'success' | 'warning' | 'attention';

export interface BadgeDotProps extends HTMLAttributes<HTMLDivElement> {
  /** Размер компонента */
  dimension?: BadgeDotDimension;
  /** Внешний вид компонента */
  appearance?: BadgeDotAppearance;
}

export const BadgeDot = forwardRef<HTMLDivElement, BadgeDotProps>(
  ({ dimension = 'm', appearance = 'neutral', ...props }: BadgeDotProps, ref) => {
    return <Dot ref={ref} $dimension={dimension} $appearance={appearance} {...props} />;
  },
);

BadgeDot.displayName = 'BadgeDot';
