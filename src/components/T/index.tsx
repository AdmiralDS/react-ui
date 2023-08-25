import type { FC } from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled, { css } from 'styled-components';

import { typography } from '#src/components/Typography';
import type { ColorName } from '#src/components/themes';
import { DefaultFontColorName } from '#src/components/themes';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';

export type FontName = keyof typeof typography;

export interface TProps {
  /**  Имя шрифта из списка дизайн системы */
  font: FontName;
  /** Имя цвета шрифта из палитры темы **/
  color?: ColorName;
  /** Позволяет добавлять  миксин созданный с помощью styled css  */
  cssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Состояние skeleton */
  skeleton?: boolean;
}

const skeletonMixin = css`
  ${skeletonAnimationMixin};
  pointer-events: none;
`;

const Tspan = styled.span<{
  $font: FontName;
  $color?: ColorName;
  $cssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  $skeleton?: boolean;
}>`
  color: ${({ $color, theme, $skeleton }) =>
    $skeleton
      ? 'transparent'
      : $color
      ? theme.color[$color]
        ? theme.color[$color]
        : $color
      : theme.color[DefaultFontColorName]};
  ${(p) => typography[p.$font]};
  ${(p) => (p.$cssMixin ? p.$cssMixin : '')}
  ${(p) => p.$skeleton && skeletonMixin}
`;

export const T: FC<TProps> = ({ font, color, cssMixin, skeleton, ...props }) => {
  return <Tspan {...props} $font={font} $color={color} $cssMixin={cssMixin} $skeleton={skeleton} />;
};

T.displayName = 'T';
