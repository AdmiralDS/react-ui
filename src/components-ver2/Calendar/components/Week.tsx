import React, { FC } from 'react';

import { DAY_NUMBERS, DEFAULT_LOCALE_NAME } from '../constants';
import { addDays, startOfWeek } from '../date-utils';
import { Day } from './Day';
import { WeekComponent } from '../styled/WeekComponent';
import type { IWeekCalendarProps } from '../interfaces';

export const Week: FC<IWeekCalendarProps> = ({
  localeName = DEFAULT_LOCALE_NAME,
  day,
  month,
  startDate,
  endDate,
  selected,
  activeDate,
  range,
  validator,
  filterDate,
  onMouseEnter,
  onClick,
}) => {
  const handleMouseEnter = (day: Date, e: any) => onMouseEnter && onMouseEnter(day, e);
  const handleDayClick = (day: Date, e: any) => onClick && onClick(day, e);
  const weekStart = startOfWeek(day, localeName);
  return (
    <WeekComponent>
      {DAY_NUMBERS.map((offset) => {
        const nextDay = addDays(weekStart, offset);
        return (
          <Day
            key={nextDay.valueOf()}
            day={nextDay}
            month={month}
            startDate={startDate}
            endDate={endDate}
            selected={selected}
            activeDate={activeDate}
            range={range}
            localeName={localeName}
            validator={validator}
            filterDate={filterDate}
            onMouseEnter={(_, e) => handleMouseEnter(nextDay, e)}
            onClick={(_, e) => handleDayClick(nextDay, e)}
          />
        );
      })}
    </WeekComponent>
  );
};
