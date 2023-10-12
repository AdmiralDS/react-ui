import { forwardRef } from 'react';
import type { PolymorphicComponentProps, WebTarget } from 'styled-components';
import styled from 'styled-components';

import type { ButtonAppearance, Dimension } from '#src/components/Button/types';
import { backGroundColorMixin } from '#src/components/skeleton/PseudoText';

export type PseudoIconBaseProps = { $dimension: Dimension; $appearance: ButtonAppearance };
export type PseudoIconProps = PolymorphicComponentProps<'web', PseudoIconBaseProps, WebTarget, WebTarget>;

const PseudoIconDiv = styled.div<{ $dimension: Dimension; $appearance: ButtonAppearance }>`
  border-radius: 50%;
  width: ${({ $dimension }) => ($dimension === 's' ? 20 : 24)}px;
  height: ${({ $dimension }) => ($dimension === 's' ? 20 : 24)}px;
  ${backGroundColorMixin}
`;

export const PseudoIcon = forwardRef<typeof PseudoIconDiv, PseudoIconProps>(
  ({ dimension, appearance, ...props }, ref) => {
    return <PseudoIconDiv ref={ref} $dimension={dimension} $appearance={appearance} {...props} />;
  },
);
