import * as React from 'react';
import type { Dayjs } from 'dayjs';
import type { CalendarViewMode } from '#src/components/CalendarTry/constants';
import { YearsCalendarView } from '#src/components/CalendarTry/CalendarContent/YearsCalendarView';
import { MonthsCalendarView } from '#src/components/CalendarTry/CalendarContent/MonthsCalendarView';
import { DateCalendarView } from '#src/components/CalendarTry/CalendarContent/DateCalendarView';

export interface CalendarContentProps {
  viewMode: CalendarViewMode;
  date: Dayjs;
  renderCell: (date: Dayjs, viewMode: CalendarViewMode) => React.ReactNode;
  onMouseLeave: () => void;
}
export const CalendarContent = ({ viewMode, date, renderCell, onMouseLeave }: CalendarContentProps) => {
  switch (viewMode) {
    case 'YEARS':
      return <YearsCalendarView date={date} renderCell={renderCell} />;
    case 'MONTHS':
      return <MonthsCalendarView date={date} renderCell={renderCell} />;
    case 'DATES':
    default:
      return <DateCalendarView onMouseLeave={onMouseLeave} date={date} renderCell={renderCell} />;
  }
};
