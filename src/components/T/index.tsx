import { forwardRef } from 'react';
import type { PolymorphicComponentProps, RuleSet, WebTarget } from 'styled-components';
import styled, { css } from 'styled-components';

import { typography } from '#src/components/Typography';
import type { ColorName } from '#src/components/themes';
import { DefaultFontColorName } from '#src/components/themes';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';

export type FontName = keyof typeof typography;

export type TBaseProps = {
  /**  Имя шрифта из списка дизайн системы */
  font: FontName;
  /** Имя цвета шрифта из палитры темы **/
  color?: ColorName;
  /** Позволяет добавлять  миксин созданный с помощью styled css  */
  cssMixin?: RuleSet<object>;
  /** Состояние skeleton */
  skeleton?: boolean;
};

export type TProps = PolymorphicComponentProps<'web', TBaseProps, WebTarget, WebTarget>;

const skeletonMixin = css`
  ${skeletonAnimationMixin};
  pointer-events: none;
`;

const Tspan = styled.span<{
  $font: FontName;
  $color?: ColorName;
  $cssMixin?: RuleSet<object>;
  $skeleton?: boolean;
}>`
  color: ${({ $color, theme, $skeleton }) => {
    return $skeleton
      ? 'transparent'
      : $color
      ? theme.color[$color]
        ? theme.color[$color]
        : $color
      : theme.color[DefaultFontColorName];
  }};
  ${(p) => typography[p.$font]};
  ${(p) => (p.$cssMixin ? p.$cssMixin : '')}
  ${(p) => p.$skeleton && skeletonMixin}
`;

export const T = forwardRef<typeof Tspan, TProps>(({ font, color, cssMixin, skeleton, ...props }, ref) => {
  return <Tspan ref={ref} {...props} $font={font} $color={color} $cssMixin={cssMixin} $skeleton={skeleton} />;
});

T.displayName = 'T';
