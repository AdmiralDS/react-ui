import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

export type ButtonAppearance = 'primary' | 'secondary' | 'ghost' | 'white' | 'danger' | 'success';
/** @deprecated use ButtonAppearance instead */
export type Appearance = ButtonAppearance;
export type Dimension = 'xl' | 'l' | 'm' | 's';

export interface StyledButtonProps {
  appearance?: ButtonAppearance;
  dimension?: Dimension;
  displayAsDisabled?: boolean;
  $loading?: boolean;
  skeleton?: boolean;
  hasIconLeft?: boolean;
  hasIconRight?: boolean;
  buttonCssMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}
