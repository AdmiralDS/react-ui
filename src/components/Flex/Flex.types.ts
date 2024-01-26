export type FlexCellSizes =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;
export type FlexGapSizes = 0 | 2 | 4 | 6 | 8 | 10 | 12 | 14 | 16 | 18 | 20 | 24 | 32;
export type FlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';
export type FlexWrap = 'wrap' | 'nowrap';
export type FlexAlignItems = 'normal' | 'flex-end';

export interface FlexContainerBaseProps {
  rowGap?: FlexGapSizes;
  columnGap?: FlexGapSizes;
}
export type FlexContainerProps = FlexContainerBaseProps & React.HTMLAttributes<HTMLDivElement>;

export interface FlexRowBaseProps extends FlexContainerBaseProps {
  wrap?: FlexWrap;
  direction?: FlexDirection;
  alignItems?: FlexAlignItems;
}
export type FlexRowProps = FlexRowBaseProps & React.HTMLAttributes<HTMLDivElement>;

export interface FlexCellBaseProps {
  col?: FlexCellSizes;
  columnGap?: FlexGapSizes;
}
export type FlexCellProps = FlexCellBaseProps & React.HTMLAttributes<HTMLDivElement>;

export interface FlexGrowCellBaseProps {
  grow?: number;
}
export type FlexGrowCellProps = FlexGrowCellBaseProps & React.HTMLAttributes<HTMLDivElement>;

export const FLEX_CELL_MAX_SIZE: FlexCellSizes = 24;
