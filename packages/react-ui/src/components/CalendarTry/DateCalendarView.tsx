import * as React from 'react';
import type { Dayjs } from 'dayjs';
import { DayNames } from '#src/components/CalendarTry/DayNames';
import { Month } from '#src/components/CalendarTry/Month';
import type { CalendarViewMode } from '#src/components/CalendarTry/constants';

export interface DateCalendarProps {
  date: Dayjs;
  selected?: Dayjs;
  renderCell: (date: Dayjs, viewMode: CalendarViewMode) => React.ReactNode;
}

export const DateCalendarView = ({ date, selected, renderCell }: DateCalendarProps) => {
  return (
    <>
      <DayNames date={date} />
      <Month date={date} renderCell={renderCell} selected={selected} />
    </>
  );
};
