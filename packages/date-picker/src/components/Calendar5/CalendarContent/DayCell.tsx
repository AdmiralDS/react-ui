import * as React from 'react';
import type { MouseEvent } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import styled from 'styled-components';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import { CellWrapper } from './CellWrapper';

const DAY_SIZE = 36;
const DAY_PADDING = '8px 0';
const DAY_MARGIN_BOTTOM = '4px';
export const DAY_BORDER_RADIUS = '50%';

export interface DayCellProps {
  date: Dayjs;
  activeDate?: Dayjs;
  startDate?: Dayjs;
  endDate?: Dayjs;
  selected?: Dayjs;
  onSelectDate?: (date: Dayjs) => void;
  disabled?: boolean;
  isHidden: boolean;
  highlightSpecialDate?: (date: Dayjs) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
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

  ${(p) => p.highlightSpecialDateMixin}

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
  highlightSpecialDate,
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

  const rowStart = date.isSame(date.startOf('week'), 'date') || date.isSame(date.startOf('month'), 'date');
  const rowEnd = date.isSame(date.endOf('week'), 'date') || date.isSame(date.endOf('month'), 'date');
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
      isRowStart={rowStart}
      isRowEnd={rowEnd}
      isRangeStart={start}
      isRangeEnd={end}
      onClick={handleClick}
      highlightSpecialDateMixin={highlightSpecialDate?.(date)}
      onMouseEnter={(e) => !disabled && onMouseEnter && onMouseEnter(date, e)}
      borderRadius={DAY_BORDER_RADIUS}
    >
      {date.date()}
    </DayCellWrapper>
  );
};
