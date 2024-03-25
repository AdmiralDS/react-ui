import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import type { ButtonAppearance, Dimension } from '#src/components/Button/types';

export type PseudoTextBaseProps = { dimension: Dimension; appearance: ButtonAppearance };
export type PseudoTextProps = PseudoTextBaseProps & React.HTMLAttributes<HTMLDivElement>;

export const backGroundColorMixin = css<{ $appearance: ButtonAppearance }>`
  background: ${({ theme, $appearance }) =>
    $appearance === 'secondary' || $appearance === 'ghost'
      ? `var(--admiral-color-Neutral_Neutral10, ${theme.color['Neutral/Neutral 10']})`
      : $appearance === 'white'
        ? `var(--admiral-color-Neutral_Neutral50, ${theme.color['Neutral/Neutral 50']})`
        : `var(--admiral-color-Neutral_Neutral05, ${theme.color['Neutral/Neutral 05']})`};
`;

const PseudoTextDiv = styled.div<{ $dimension: Dimension; $appearance: ButtonAppearance }>`
  border-radius: 4px;
  width: ${({ $dimension }) => ($dimension === 's' ? 65 : 74)}px;
  height: ${({ $dimension }) => ($dimension === 's' ? 8 : 12)}px;
  ${backGroundColorMixin}
`;

export const PseudoText = forwardRef<HTMLDivElement, PseudoTextProps>(({ dimension, appearance, ...props }, ref) => {
  return <PseudoTextDiv ref={ref} $dimension={dimension} $appearance={appearance} {...props} />;
});
