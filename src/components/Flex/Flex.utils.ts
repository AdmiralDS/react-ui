import { round } from '../common/utils/round';
import { FLEX_CELL_MAX_SIZE } from './Flex.types';

interface CalcCellWidthParams {
  column: number;
  columnGap: number;
}

export const calcCellWidth = ({ column, columnGap = 0 }: CalcCellWidthParams): string => {
  const quotient = column / FLEX_CELL_MAX_SIZE;
  const percentWidth = round(100 * quotient, 6);
  const gap = columnGap * (1 - quotient);

  return columnGap ? `calc(${percentWidth}% - ${gap}px)` : `${percentWidth}%`;
};
