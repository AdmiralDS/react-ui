import * as React from 'react';
import type { Dayjs } from 'dayjs';
import { yearsRange } from '#src/components/CalendarTry/utils';
import { DEFAULT_YEAR_COUNT } from '#src/components/CalendarTry/constants';

export interface YearsCalendarViewProps {
  date: Dayjs;
  renderCell: (date: Dayjs) => React.ReactNode;
}

export const YearsCalendarView = ({ date, renderCell }: YearsCalendarViewProps) => {
  const { start, end } = yearsRange(date, DEFAULT_YEAR_COUNT);
  const years = Array(end - start + 1)
    .fill(0)
    .map((_, index) => start + index);

  return (
    <>
      {years.map((year) => {
        const yearStart = date.set('year', year).startOf('year');
        return renderCell(yearStart);
      })}
    </>
  );
};
