import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '#src/components/common/polymorphicProps';
import { typography } from '#src/components/Typography';
import type { ColorName } from '#src/components/themes';
import { DefaultFontColorName } from '#src/components/themes';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';

export type FontName = keyof typeof typography;

export type TOwnProps = {
  /**  Имя шрифта из списка дизайн системы */
  font: FontName;
  /** Имя цвета шрифта из палитры темы **/
  color?: ColorName;
  /** Позволяет добавлять  миксин созданный с помощью styled css  */
  cssMixin?: ReturnType<typeof css>;
  /** Состояние skeleton */
  skeleton?: boolean;
};

const skeletonMixin = css`
  ${skeletonAnimationMixin};
  pointer-events: none;
`;

const Tspan = styled.span<{
  $font: FontName;
  $color?: ColorName;
  $cssMixin?: ReturnType<typeof css>;
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

export type TProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<C, TOwnProps>;
export type TextComponentType = (<C extends React.ElementType = 'span'>(
  props: TProps<C>,
) => ReturnType<typeof Tspan>) & {
  displayName?: string | undefined;
};
export const T: TextComponentType = forwardRef(
  <P extends React.ElementType = 'span'>(
    { font, color, cssMixin, skeleton, ...props }: TProps<P>,
    ref: PolymorphicRef<P>,
  ) => {
    return <Tspan ref={ref} {...props} $font={font} $color={color} $cssMixin={cssMixin} $skeleton={skeleton} />;
  },
);

T.displayName = 'T';
