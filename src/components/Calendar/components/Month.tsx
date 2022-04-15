import React, { FC } from 'react';

import { addWeeks, startOfMonth, startOfWeek, weekInMonth } from '../date-utils';
import { Week } from './Week';
import type { IMonthCalendarProps } from '../interfaces';
import { DEFAULT_LOCALE_NAME } from '#src/components/Calendar/constants';

const FIXED_WEEK_COUNT = 6;

export const Month: FC<IMonthCalendarProps> = ({
  localeName = DEFAULT_LOCALE_NAME,
  day,
  startDate,
  endDate,
  selected,
  activeDate,
  range,
  validator,
  filterDate,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  const weeks: Array<Date> = [];
  const fixCount = false; // to make days matrix size fixed
  const handleMouseEnter = (day: Date, event: any) => onMouseEnter && onMouseEnter(day, event);
  const handleMouseLeave = () => onMouseLeave && onMouseLeave();
  const handleDayClick = (day: Date, event: any) => onClick && onClick(day, event);

  let weekIndex = 0;
  let weekStart = startOfWeek(startOfMonth(day), localeName);
  do {
    weekIndex++;
    weeks.push(weekStart);
    weekStart = addWeeks(weekStart, 1);
  } while ((!fixCount && weekInMonth(weekStart, day)) || (fixCount && weekIndex < FIXED_WEEK_COUNT));

  return (
    <div onMouseLeave={handleMouseLeave}>
      {weeks.map((week) => (
        <Week
          key={week.valueOf()}
          day={week}
          month={day.getMonth()}
          startDate={startDate}
          endDate={endDate}
          selected={selected}
          activeDate={activeDate}
          range={range}
          localeName={localeName}
          validator={validator}
          filterDate={filterDate}
          onMouseEnter={handleMouseEnter}
          onClick={handleDayClick}
        />
      ))}
    </div>
  );
};
