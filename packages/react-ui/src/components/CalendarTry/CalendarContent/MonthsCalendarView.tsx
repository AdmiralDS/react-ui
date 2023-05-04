import * as React from 'react';
import type { Dayjs } from 'dayjs';

const MONTH_NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export interface MonthsCalendarViewProps {
  date: Dayjs;
  renderCell: (date: Dayjs) => React.ReactNode;
  onMouseLeave: () => void;
}

export const MonthsCalendarView = ({ date, renderCell, onMouseLeave }: MonthsCalendarViewProps) => {
  return (
    <div onMouseLeave={onMouseLeave}>
      {MONTH_NUMBERS.map((month) => {
        const monthStart = date.set('month', month).startOf('month');
        return renderCell(monthStart);
      })}
    </div>
  );
};
