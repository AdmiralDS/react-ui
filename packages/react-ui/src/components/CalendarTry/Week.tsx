import * as React from 'react';
import type { Dayjs } from 'dayjs';
import { Day } from '#src/components/CalendarTry/Day';

export const DAY_NUMBERS = [0, 1, 2, 3, 4, 5, 6];

export interface WeekProps {
  viewDate: Dayjs;
  date: Dayjs;
  selected?: Dayjs;
}

export const Week = ({ viewDate, date, selected }: WeekProps) => {
  return (
    <div>
      {DAY_NUMBERS.map((day) => (
        <Day key={date.add(day, 'day').valueOf()} viewDate={viewDate} date={date.add(day, 'day')} selected={selected} />
      ))}
    </div>
  );
};
