import * as React from 'react';
import type { Dayjs } from 'dayjs';
import { Week } from '#src/components/CalendarTry/Week';
import type { DayProps } from '#src/components/CalendarTry/Day';
import { defaultRenderDay } from '#src/components/CalendarTry/Day';

export interface MonthProps {
  viewDate: Dayjs;
  selected?: Dayjs;
  renderDay: (props: DayProps) => React.ReactNode;
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

export const Month = ({ viewDate, selected, renderDay }: MonthProps) => {
  const weeks = getWeeksStartDates(viewDate, FIXED_WEEK_COUNT);
  return (
    <>
      {weeks.map((weekStart) => (
        <Week
          key={weekStart.valueOf()}
          viewDate={viewDate}
          weekStartDate={weekStart}
          selected={selected}
          renderDay={renderDay || defaultRenderDay}
        />
      ))}
    </>
  );
};
