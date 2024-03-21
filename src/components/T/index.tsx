import { forwardRef } from 'react';
import styled, { css } from 'styled-components';

import type { PolymorphicComponentPropsWithRef, PolymorphicRef } from '#src/components/common/polymorphicProps';
import type { ColorName, ThemeTypographyType } from '#src/components/themes';
import { DefaultFontColorName } from '#src/components/themes';
import { skeletonAnimationMixin } from '#src/components/skeleton/animation';

export type FontName = keyof ThemeTypographyType;

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

// Единственное место, где типографика берется из темы. Это будет проблемно перевести на css variables
const Tspan = styled.span<{
  $font: FontName;
  $color?: ColorName;
  $cssMixin?: ReturnType<typeof css>;
  $skeleton?: boolean;
}>`
  color: ${({ $color, theme, $skeleton }) => {
    const cssVar = `--admiral-color-${$color?.replace('/', '_').replaceAll(' ', '')}`;
    return $skeleton
      ? 'transparent'
      : $color
        ? theme.color[$color]
          ? `var(${cssVar}, ${theme.color[$color]})`
          : $color
        : `var(--admiral-color-Neutral_Neutral90, ${theme.color[DefaultFontColorName]})`;
  }};
  ${(p) => p.theme.typography[p.$font]};
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
