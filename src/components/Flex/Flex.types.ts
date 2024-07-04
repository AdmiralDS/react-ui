import type { HTMLAttributes } from 'react';

export type FlexDirection = 'column' | 'column-reverse' | 'row' | 'row-reverse';
export type FlexWrap = 'wrap' | 'nowrap';
export type FlexAlignItems = 'normal' | 'flex-end';

export interface FlexContainerBaseProps {
  rowGap?: number;
  columnGap?: number;
}
export type FlexContainerProps = FlexContainerBaseProps & HTMLAttributes<HTMLDivElement>;

export interface FlexRowBaseProps extends FlexContainerBaseProps {
  wrap?: FlexWrap;
  direction?: FlexDirection;
  alignItems?: FlexAlignItems;
}
export type FlexRowProps = FlexRowBaseProps & HTMLAttributes<HTMLDivElement>;

export interface FlexCellBaseProps {
  col?: number;
  columnGap?: number;
}
export type FlexCellProps = FlexCellBaseProps & HTMLAttributes<HTMLDivElement>;

export interface FlexGrowCellBaseProps {
  grow?: number;
}
export type FlexGrowCellProps = FlexGrowCellBaseProps & HTMLAttributes<HTMLDivElement>;

export const FLEX_CELL_MAX_SIZE: number = 24;
