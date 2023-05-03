import * as React from 'react';
import type { MouseEvent } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import styled from 'styled-components';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { CellWrapper } from '#src/components/CalendarTry/CalendarContent/CellWrapper';

const DAY_SIZE = 36;
const DAY_PADDING = '8px 0';
const DAY_MARGIN_BOTTOM = '4px';

export interface DayCellProps {
  date: Dayjs;
  activeDate?: Dayjs;
  startDate?: Dayjs;
  endDate?: Dayjs;
  selected?: Dayjs;
  onSelectDate?: (date: Dayjs) => void;
  disabled?: boolean;
  isHidden: boolean;
  highlightSpecialDay?: (date: Dayjs) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
  onMouseEnter: (date: Dayjs, event: MouseEvent<HTMLDivElement>) => void;
}

export const DayCellWrapper = styled(CellWrapper)<{
  today?: boolean;
  isActiveDate: boolean;
  disabled?: boolean;
  outsideMonth?: boolean;
  selected?: boolean;
  inRange?: boolean;
  inSelectingRange?: boolean;
  isRowStart: boolean;
  isRowEnd: boolean;
  isRangeStart: boolean;
  isRangeEnd: boolean;
  highlightSpecialDateMixin?: FlattenInterpolation<ThemeProps<DefaultTheme>>;
}>`
  width: ${DAY_SIZE}px;
  height: ${DAY_SIZE}px;
  padding: ${DAY_PADDING};
  margin-bottom: ${DAY_MARGIN_BOTTOM};
  text-align: center;

  ${(p) => p.highlightSpecialDayMixin}

  // дата, не входящая в отображаемый месяц
  ${(p) =>
    p.outsideMonth &&
    `
      color: ${p.theme.color['Neutral/Neutral 30']};
      opacity: 0;
      pointer-events: none;
    `}
`;

export const DayCell = ({
  date,
  startDate,
  endDate,
  selected,
  activeDate,
  disabled,
  onSelectDate,
  isHidden,
  highlightSpecialDay,
  onMouseEnter,
}: DayCellProps) => {
  // ранее выбранный диапазон
  const inRange = !!startDate && !!endDate && date.isBetween(startDate, endDate, 'date', '[]');
  const rangeStart = !!startDate && date.isSame(startDate, 'date');
  const rangeEnd = !!startDate && !!endDate && date.isSame(endDate, 'date');
  // диапазон в процессе выбора
  const inSelectingRange =
    !disabled &&
    !!startDate &&
    !endDate &&
    !!activeDate &&
    activeDate.isSameOrAfter(startDate, 'date') &&
    date.isBetween(startDate, activeDate, 'date', '[]');
  const rangeSelectingStart = inSelectingRange && date.isSame(startDate, 'date');
  const rangeSelectingEnd = inSelectingRange && date.isSame(activeDate, 'date');

  const weekStart = date.isSame(date.startOf('week'), 'date');
  const weekEnd = date.isSame(date.endOf('week'), 'date');
  const start = rangeStart || rangeSelectingStart;
  const end = rangeEnd || rangeSelectingEnd;

  const handleClick = () => {
    if (!disabled) {
      onSelectDate?.(date);
    }
  };

  return (
    <DayCellWrapper
      key={date.valueOf()}
      today={date.isSame(dayjs(), 'day')}
      isActiveDate={!!activeDate && date.isSame(activeDate, 'date')}
      outsideMonth={isHidden}
      selected={(!!selected && date.isSame(selected, 'date')) || rangeStart || rangeEnd}
      disabled={disabled}
      inRange={inRange}
      inSelectingRange={inSelectingRange}
      isRowStart={weekStart}
      isRowEnd={weekEnd}
      isRangeStart={start}
      isRangeEnd={end}
      onClick={handleClick}
      highlightSpecialDateMixin={highlightSpecialDay?.(date)}
      onMouseEnter={(e) => !disabled && onMouseEnter && onMouseEnter(date, e)}
    >
      {date.date()}
    </DayCellWrapper>
  );
};
