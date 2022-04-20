import styled, { css } from 'styled-components';
import type { Appearance, Dimension } from '#src/components/Button/types';

export const backGroundColorMixin = css<{ appearance: Appearance }>`
  background: ${({ theme, appearance }) =>
    appearance === 'secondary' || appearance === 'ghost'
      ? theme.color['Neutral/Neutral 10']
      : appearance === 'white'
      ? theme.color['Neutral/Neutral 50']
      : theme.color['Neutral/Neutral 05']};
`;

export const PseudoText = styled.div<{ dimension: Dimension; appearance: Appearance }>`
  border-radius: 4px;
  width: ${({ dimension }) => (dimension === 's' ? 65 : 74)}px;
  height: ${({ dimension }) => (dimension === 's' ? 8 : 12)}px;
  ${backGroundColorMixin}
`;
