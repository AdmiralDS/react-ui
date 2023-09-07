import { forwardRef } from 'react';
import type { ReactNode, ElementType } from 'react';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled, { css } from 'styled-components';

import { typography } from '#src/components/Typography';
import type { ColorName } from '#src/components/themes';
import { DefaultFontColorName } from '#src/components/themes';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';

export type FontName = keyof typeof typography;

export interface TProps {
  children: ReactNode;
  /**  Имя шрифта из списка дизайн системы */
  font: FontName;
  /** Имя цвета шрифта из палитры темы **/
  color?: ColorName;
  /** Позволяет добавлять  миксин созданный с помощью styled css  */
  cssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
  /** Состояние skeleton */
  skeleton?: boolean;
  /**
   * Позволяет рендерить компонент, используя другой тег HTML (https://styled-components.com/docs/api#as-polymorphic-prop).
   * В storybook в качестве примера приведены несколько возможных вариантов этого параметра (кроме них можно использовать любой другой HTML тег).
   */
  forwardedAs?: ElementType;
  /** Текст ссылки при необходимости использования компонента как ссылку <a> */
  href?: string;
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

export const T = forwardRef<typeof Tspan, TProps>(({ font, color, cssMixin, skeleton, forwardedAs, ...props }, ref) => {
  return (
    <Tspan
      ref={ref}
      {...props}
      as={forwardedAs}
      $font={font}
      $color={color}
      $cssMixin={cssMixin}
      $skeleton={skeleton}
    />
  );
});

T.displayName = 'T';
