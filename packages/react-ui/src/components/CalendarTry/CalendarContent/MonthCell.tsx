import * as React from 'react';
import type { MouseEvent } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import styled from 'styled-components';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { YEAR_BORDER_RADIUS, YearCellWrapper } from '#src/components/CalendarTry/CalendarContent/YearCell';
import { capitalizeFirstLetter } from '#src/components/Calendar/constants';
import { MONTHS_IN_ROW } from '#src/components/CalendarTry/constants';

export interface MonthCellProps {
  date: Dayjs;
  activeDate?: Dayjs;
  startDate?: Dayjs;
  endDate?: Dayjs;
  selected?: Dayjs;
  onSelectMonth: (date: Dayjs, event: MouseEvent<HTMLDivElement>) => void;
  disabled?: boolean;
  highlightSpecialMonth?: (date: Dayjs) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
  onMouseEnter: (date: Dayjs, event: MouseEvent<HTMLDivElement>) => void;
}

const MONTH_WIDTH = '84px';
const MONTH_MARGIN_BOTTOM = '32px';

const MonthCellCWrapper = styled(YearCellWrapper)`
  width: ${MONTH_WIDTH};
  margin-bottom: ${MONTH_MARGIN_BOTTOM};
`;

export const MonthCell = ({
  date,
  activeDate,
  startDate,
  endDate,
  selected,
  onSelectMonth,
  disabled,
  highlightSpecialMonth,
  onMouseEnter,
}: MonthCellProps) => {
  // ранее выбранный диапазон
  const inRange = !!startDate && !!endDate && date.isBetween(startDate, endDate, 'month', '[]');
  const rangeStart = !!startDate && date.isSame(startDate, 'month');
  const rangeEnd = !!startDate && !!endDate && date.isSame(endDate, 'month');
  // диапазон в процессе выбора
  const inSelectingRange =
    !disabled &&
    !!startDate &&
    !endDate &&
    !!activeDate &&
    activeDate.isSameOrAfter(startDate, 'month') &&
    date.isBetween(startDate, activeDate, 'month', '[]');
  const rangeSelectingStart = inSelectingRange && date.isSame(startDate, 'month');
  const rangeSelectingEnd = inSelectingRange && date.isSame(activeDate, 'month');

  const rowStart = date.month() % MONTHS_IN_ROW === 0;
  const rowEnd = date.month() % MONTHS_IN_ROW === 2;

  const start = rangeStart || rangeSelectingStart;
  const end = rangeEnd || rangeSelectingEnd;

  const handleClick = (e: any) => {
    e.preventDefault();
    const day = date.startOf('month');
    !disabled && onSelectMonth && onSelectMonth(day, e);
  };

  return (
    <MonthCellCWrapper
      key={date.valueOf()}
      today={date.isSame(dayjs(), 'month')}
      isActiveDate={!!activeDate && date.isSame(activeDate, 'month')}
      selected={(!!selected && date.isSame(selected, 'month')) || rangeStart || rangeEnd}
      disabled={disabled}
      inRange={inRange}
      inSelectingRange={inSelectingRange}
      onMouseDown={handleClick}
      isRowStart={rowStart}
      isRowEnd={rowEnd}
      isRangeStart={start}
      isRangeEnd={end}
      highlightSpecialDateMixin={highlightSpecialMonth?.(date)}
      onMouseEnter={(e) => !disabled && onMouseEnter && onMouseEnter(date, e)}
      borderRadius={YEAR_BORDER_RADIUS}
    >
      {capitalizeFirstLetter(date.format('MMMM'))}
    </MonthCellCWrapper>
  );
};
