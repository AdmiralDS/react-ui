import { forwardRef } from 'react';
import { CellDiv, ContainerDiv, GrowCellDiv, RowDiv } from './Flex.styled';
import type { FlexContainerProps, FlexCellProps, FlexGrowCellProps, FlexRowProps } from './Flex.types';

const Container = forwardRef<HTMLDivElement, FlexContainerProps>(({ rowGap, columnGap, ...props }, ref) => {
  return <ContainerDiv ref={ref} $rowGap={rowGap} $columnGap={columnGap} {...props} />;
});

const Row = forwardRef<HTMLDivElement, FlexRowProps>(
  ({ rowGap, columnGap, wrap, direction, alignItems, ...props }, ref) => {
    return (
      <RowDiv
        ref={ref}
        $rowGap={rowGap}
        $columnGap={columnGap}
        $wrap={wrap}
        $direction={direction}
        $alignItems={alignItems}
        {...props}
      />
    );
  },
);

const Cell = forwardRef<HTMLDivElement, FlexCellProps>(({ col, columnGap, ...props }, ref) => {
  return <CellDiv ref={ref} $col={col} $columnGap={columnGap} {...props} />;
});

const GrowCell = forwardRef<HTMLDivElement, FlexGrowCellProps>(({ grow, ...props }, ref) => {
  return <GrowCellDiv ref={ref} $grow={grow} {...props} />;
});

export const Flex = {
  Container,
  Row,
  Cell,
  GrowCell,
};

export * from './Flex.types';
