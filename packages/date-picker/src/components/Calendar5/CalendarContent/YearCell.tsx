import * as React from 'react';
import type { MouseEvent } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import styled from 'styled-components';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { CellWrapper } from './CellWrapper';
import { YEARS_IN_ROW } from '../constants';

export interface YearCellProps {
  date: Dayjs;
  activeDate?: Dayjs;
  startDate?: Dayjs;
  endDate?: Dayjs;
  selected?: Dayjs;
  onSelectYear: (date: Dayjs, event: MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
  highlightSpecialYear?: (date: Dayjs) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
  onMouseEnter: (date: Dayjs, event: MouseEvent<HTMLDivElement>) => void;
}

const YEAR_HEIGHT = '36px';
const YEAR_WIDTH = '60px';
const YEAR_MARGIN_BOTTOM = '16px';
const YEAR_PADDING = '8px 0';
export const YEAR_BORDER_RADIUS = '18px';

export const YearCellWrapper = styled(CellWrapper)<{
  today?: boolean;
  isActiveDate: boolean;
  disabled?: boolean;
  selected?: boolean;
  inRange?: boolean;
  inSelectingRange?: boolean;
  isRowStart: boolean;
  isRowEnd: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  highlightSpecialDateMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  width: ${YEAR_WIDTH};
  height: ${YEAR_HEIGHT};
  padding: ${YEAR_PADDING};
  margin-bottom: ${YEAR_MARGIN_BOTTOM};
  user-select: none;
`;

export const YearCell = ({
  date,
  activeDate,
  startDate,
  endDate,
  selected,
  onSelectYear,
  disabled,
  highlightSpecialYear,
  onMouseEnter,
}: YearCellProps) => {
  // ранее выбранный диапазон
  const inRange = !!startDate && !!endDate && date.isBetween(startDate, endDate, 'year', '[]');
  const rangeStart = !!startDate && date.isSame(startDate, 'year');
  const rangeEnd = !!startDate && !!endDate && date.isSame(endDate, 'year');
  // диапазон в процессе выбора
  const inSelectingRange =
    !disabled &&
    !!startDate &&
    !endDate &&
    !!activeDate &&
    activeDate.isSameOrAfter(startDate, 'year') &&
    date.isBetween(startDate, activeDate, 'year', '[]');
  const rangeSelectingStart = inSelectingRange && date.isSame(startDate, 'year');
  const rangeSelectingEnd = inSelectingRange && date.isSame(activeDate, 'year');

  const rowStart = date.year() % YEARS_IN_ROW === 1;
  const rowEnd = date.year() % YEARS_IN_ROW === 0;
  const start = rangeStart || rangeSelectingStart;
  const end = rangeEnd || rangeSelectingEnd;

  const handleClick = (e: any) => {
    e.preventDefault();
    const day = date.startOf('year');
    !disabled && onSelectYear && onSelectYear(day, e);
  };

  return (
    <YearCellWrapper
      key={date.valueOf()}
      today={date.isSame(dayjs(), 'year')}
      selected={(!!selected && date.isSame(selected, 'year')) || rangeStart || rangeEnd}
      disabled={disabled}
      inRange={inRange}
      inSelectingRange={inSelectingRange}
      onMouseDown={handleClick}
      isActiveDate={!!activeDate && date.isSame(activeDate, 'year')}
      isRangeStart={start}
      isRangeEnd={end}
      isRowStart={rowStart}
      isRowEnd={rowEnd}
      highlightSpecialDateMixin={highlightSpecialYear?.(date)}
      onMouseEnter={(e) => !disabled && onMouseEnter && onMouseEnter(date, e)}
      borderRadius={YEAR_BORDER_RADIUS}
    >
      {date.format('YYYY')}
    </YearCellWrapper>
  );
};
