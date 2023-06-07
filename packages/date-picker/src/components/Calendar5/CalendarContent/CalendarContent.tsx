import * as React from 'react';
import type { Dayjs } from 'dayjs';
import type { Calendar5ViewMode } from '../constants';
import { YearsCalendarView } from './YearsCalendarView';
import { MonthsCalendarView } from './MonthsCalendarView';
import { DateCalendarView } from './DateCalendarView';

export interface CalendarContentProps {
  viewMode: Calendar5ViewMode;
  date: Dayjs;
  renderCell: (date: Dayjs) => React.ReactNode;
  onMouseLeave: () => void;
}
export const CalendarContent = ({ viewMode, date, renderCell, onMouseLeave }: CalendarContentProps) => {
  switch (viewMode) {
    case 'YEARS':
      return <YearsCalendarView date={date} renderCell={renderCell} onMouseLeave={onMouseLeave} />;
    case 'MONTHS':
      return <MonthsCalendarView date={date} renderCell={renderCell} onMouseLeave={onMouseLeave} />;
    case 'DATES':
    default:
      return <DateCalendarView onMouseLeave={onMouseLeave} date={date} renderCell={renderCell} />;
  }
};
