import * as React from 'react';
import type { Dayjs } from 'dayjs';
import { Week } from '#src/components/CalendarTry/Week';

export interface MonthProps {
  date: Dayjs;
  selected?: Dayjs;
  renderDay: (date: Dayjs) => React.ReactNode;
}

const FIXED_WEEK_COUNT = 6;

function getWeeksStartDates(viewDate: Dayjs, weeksNum: number) {
  let start = viewDate.startOf('month').startOf('week');
  const weeks: Array<Dayjs> = [];
  for (let i = 0; i < weeksNum; i++) {
    weeks.push(start);
    start = start.add(1, 'week');
  }
  return weeks;
}

export const Month = ({ date, renderDay }: MonthProps) => {
  const weeks = getWeeksStartDates(date, FIXED_WEEK_COUNT);
  return (
    <>
      {weeks.map((weekStart) => (
        <Week key={weekStart.valueOf()} weekStartDate={weekStart} renderDay={renderDay} />
      ))}
    </>
  );
};
