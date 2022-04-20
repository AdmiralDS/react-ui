import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { typography } from '#src/components/Typography';
import { ColorName, DefaultFontColorName } from '#src/components/themes';

export type FontName = keyof typeof typography;

export interface TProps {
  /**  Имя шрифта из списка дизайн системы */
  font: FontName;
  /** Имя цвета шрифта из палитры темы **/
  color?: ColorName;
  /** Позволяет добавлять  миксин созданный с помощью styled css  */
  cssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const T = styled.span<TProps>`
  color: ${({ color, theme }) =>
    color ? (theme.color[color] ? theme.color[color] : color) : theme.color[DefaultFontColorName]};
  ${(p) => typography[p.font]};
  ${(p) => (p.cssMixin ? p.cssMixin : '')}
`;

T.displayName = 'T';
