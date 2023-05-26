import * as React from 'react';
import type { Dayjs } from 'dayjs';
import { Week } from './Week';
import type { Calendar5ViewMode } from '../constants';

export interface MonthProps {
  date: Dayjs;
  renderCell: (date: Dayjs, viewMode: Calendar5ViewMode) => React.ReactNode;
  onMouseLeave: () => void;
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

export const Month = ({ date, renderCell, onMouseLeave }: MonthProps) => {
  const handleMouseLeave = () => onMouseLeave();

  const weeks = getWeeksStartDates(date, FIXED_WEEK_COUNT);
  return (
    <div onMouseLeave={handleMouseLeave}>
      {weeks.map((weekStart) => (
        <Week key={weekStart.valueOf()} weekStartDate={weekStart} renderCell={renderCell} />
      ))}
    </div>
  );
};
