import styled, { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { typography } from '#/components/Typography';

export type FontName = keyof typeof typography;

export interface TProps {
  /**  Имя шрифта из списка диайн системы */
  font: FontName;

  /** Позволяет добавлять  миксин созданный с помощью styled css  */
  cssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}

export const T = styled.span<TProps>`
  ${(p) => typography[p.font]};
  ${(p) => (p.cssMixin ? p.cssMixin : '')}
`;
