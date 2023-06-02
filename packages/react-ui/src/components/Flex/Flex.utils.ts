import { round } from 'lodash';
import type { FlexCellSizes, FlexGapSizes } from './Flex.types';
import { CELL_MAX_SIZE } from './Flex.constants';

interface CalcCellWidthParams {
  column: FlexCellSizes;
  columnGap: FlexGapSizes;
}

export const calcCellWidth = ({ column, columnGap = 0 }: CalcCellWidthParams): string => {
  const quotient = column / CELL_MAX_SIZE;
  const percentWidth = round(100 * quotient, 6);
  const gap = columnGap * (1 - quotient);

  return columnGap ? `calc(${percentWidth}% - ${gap}px)` : `${percentWidth}%`;
};
