export type Appearance = 'primary' | 'secondary';
export type Dimension = 'm' | 's';

export interface StyledButtonProps {
  appearance?: Appearance;
  dimension?: Dimension;
  displayRight?: boolean;
  $loading?: boolean;
  skeleton?: boolean;
}
