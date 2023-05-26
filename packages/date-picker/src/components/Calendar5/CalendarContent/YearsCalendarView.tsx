import * as React from 'react';
import type { Dayjs } from 'dayjs';
import { yearsRange } from '../utils';
import { DEFAULT_YEAR_COUNT } from '../constants';

export interface YearsCalendarViewProps {
  date: Dayjs;
  renderCell: (date: Dayjs) => React.ReactNode;
  onMouseLeave: () => void;
}

export const YearsCalendarView = ({ date, renderCell, onMouseLeave }: YearsCalendarViewProps) => {
  const { start, end } = yearsRange(date, DEFAULT_YEAR_COUNT);
  const years = Array(end - start + 1)
    .fill(0)
    .map((_, index) => start + index);

  return (
    <div onMouseLeave={onMouseLeave}>
      {years.map((year) => {
        const yearStart = date.set('year', year).startOf('year');
        return renderCell(yearStart);
      })}
    </div>
  );
};
