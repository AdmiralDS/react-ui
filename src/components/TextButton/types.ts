export type Appearance = 'primary' | 'secondary';
export type Dimension = 'm' | 's';

export interface StyledButtonProps {
  $appearance?: Appearance;
  $dimension?: Dimension;
  $loading?: boolean;
  $skeleton?: boolean;
}
