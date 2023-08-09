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

export interface FlexContainerProps {
  rowGap?: FlexGapSizes;
  columnGap?: FlexGapSizes;
}

export interface FlexRowProps extends FlexContainerProps {
  wrap?: 'wrap' | 'nowrap';
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  alignItems?: 'normal' | 'flex-end';
}

export interface FlexCellProps {
  col?: FlexCellSizes;
  columnGap?: FlexGapSizes;
}

export interface FlexGrowCellProps {
  grow?: number;
}

export const FLEX_CELL_MAX_SIZE: FlexCellSizes = 24;
