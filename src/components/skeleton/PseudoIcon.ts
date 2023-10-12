import styled from 'styled-components';
import type { ButtonAppearance, Dimension } from '#src/components/Button/types';
import { backGroundColorMixin } from '#src/components/skeleton/PseudoText';

export const PseudoIcon = styled.div<{ $dimension: Dimension; $appearance: ButtonAppearance }>`
  border-radius: 50%;
  width: ${({ $dimension }) => ($dimension === 's' ? 20 : 24)}px;
  height: ${({ $dimension }) => ($dimension === 's' ? 20 : 24)}px;
  ${backGroundColorMixin}
`;
