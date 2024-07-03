import type { css } from 'styled-components';

export type ButtonAppearance = 'primary' | 'secondary' | 'tertiary' | 'ghost' | 'white' | 'danger' | 'success';
/** @deprecated use ButtonAppearance instead */
export type Appearance = ButtonAppearance;
export type Dimension = 'xl' | 'l' | 'm' | 's';

export interface StyledButtonProps {
  $appearance?: ButtonAppearance;
  $dimension?: Dimension;
  $displayAsDisabled?: boolean;
  $displayAsSquare?: boolean;
  $loading?: boolean;
  $skeleton?: boolean;
  $buttonCssMixin?: ReturnType<typeof css>;
}
