import styled, { css } from 'styled-components';

import type { FlexAlignItems, FlexDirection, FlexWrap } from './Flex.types';
import { calcCellWidth } from './Flex.utils';
import { FLEX_CELL_MAX_SIZE } from './Flex.types';

export const withBoxSize = css`
  box-sizing: border-box;
`;

export const ContainerDiv = styled.div<{ $rowGap?: number; $columnGap?: number }>`
  ${withBoxSize};

  display: flex;
  flex-wrap: wrap;
  width: 100%;
  position: relative;
  row-gap: ${({ $rowGap }) => ($rowGap ? `${$rowGap}px` : 'none')};
  column-gap: ${({ $columnGap }) => ($columnGap ? `${$columnGap}px` : 'none')};
`;

export const RowDiv = styled.div<{
  $rowGap?: number;
  $columnGap?: number;
  $wrap?: FlexWrap;
  $direction?: FlexDirection;
  $alignItems?: FlexAlignItems;
}>`
  ${withBoxSize};

  display: flex;
  width: 100%;
  flex-wrap: ${({ $wrap = 'wrap' }) => $wrap};
  flex-direction: ${({ $direction = 'row' }) => $direction};
  row-gap: ${({ $rowGap }) => ($rowGap ? `${$rowGap}px` : 'none')};
  column-gap: ${({ $columnGap }) => ($columnGap ? `${$columnGap}px` : 'none')};
  align-items: ${({ $alignItems = 'normal' }) => $alignItems};
`;

export const CellDiv = styled.div<{
  $col?: number;
  $columnGap?: number;
}>`
  ${withBoxSize};

  width: ${({ $col = FLEX_CELL_MAX_SIZE, $columnGap = 0 }) => calcCellWidth({ column: $col, columnGap: $columnGap })};
  overflow: hidden;
`;

export const GrowCellDiv = styled.div<{
  $grow?: number;
}>`
  ${withBoxSize};
  flex-grow: ${({ $grow }) => $grow || 1};
  overflow: hidden;
`;
