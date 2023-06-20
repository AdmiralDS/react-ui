import * as React from 'react';
import type { Dayjs } from 'dayjs';
import { DayNames } from '#src/components/CalendarTry/CalendarContent/DayNames';
import { Month } from '#src/components/CalendarTry/CalendarContent/Month';
import type { CalendarViewMode } from '#src/components/CalendarTry/constants';

export interface DateCalendarProps {
  date: Dayjs;
  renderCell: (date: Dayjs, viewMode: CalendarViewMode) => React.ReactNode;
  onMouseLeave: () => void;
}

export const DateCalendarView = ({ date, renderCell, onMouseLeave }: DateCalendarProps) => {
  return (
    <>
      <DayNames date={date} />
      <Month onMouseLeave={onMouseLeave} date={date} renderCell={renderCell} />
    </>
  );
};
