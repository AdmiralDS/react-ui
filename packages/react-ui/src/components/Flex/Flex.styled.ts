import styled, { css } from 'styled-components';
import type { FlexRowProps, FlexCellProps, FlexGrowCellProps, FlexContainerProps } from './Flex.types';
import { calcCellWidth } from './Flex.utils';
import { FLEX_CELL_MAX_SIZE } from './Flex.types';

export const withBoxSize = css`
  box-sizing: border-box;
`;

const Container = styled.div<FlexContainerProps>`
  ${withBoxSize};

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  row-gap: ${({ rowGap }: FlexContainerProps) => (rowGap ? `${rowGap}px` : 'none')};
  column-gap: ${({ columnGap }: FlexContainerProps) => (columnGap ? `${columnGap}px` : 'none')};
`;

const Row = styled.div<FlexRowProps>`
  ${withBoxSize};

  display: flex;
  width: 100%;
  flex-wrap: ${({ wrap = 'wrap' }: FlexRowProps) => wrap};
  flex-direction: ${({ direction = 'row' }: FlexRowProps) => direction};
  row-gap: ${({ rowGap }: FlexRowProps) => (rowGap ? `${rowGap}px` : 'none')};
  column-gap: ${({ columnGap }: FlexRowProps) => (columnGap ? `${columnGap}px` : 'none')};
  align-items: ${({ alignItems = 'normal' }: FlexRowProps) => alignItems};
`;

const Cell = styled.div<FlexCellProps>`
  ${withBoxSize};

  width: ${({ col = FLEX_CELL_MAX_SIZE, columnGap = 0 }: FlexCellProps) => calcCellWidth({ column: col, columnGap })};
  overflow: hidden;
`;

const GrowCell = styled.div<FlexGrowCellProps>`
  ${withBoxSize};
  flex-grow: ${({ grow }: FlexGrowCellProps) => grow || 1};
  overflow: hidden;
`;

export const Flex = {
  Container,
  Row,
  Cell,
  GrowCell,
};
