export type Appearance = 'primary' | 'secondary' | 'ghost' | 'white' | 'danger' | 'success';
export type Dimension = 'xl' | 'l' | 'm' | 's';

export interface StyledButtonProps {
  appearance?: Appearance;
  dimension?: Dimension;
  displayAsDisabled?: boolean;
  $loading?: boolean;
  skeleton?: boolean;
}
