import type { FC } from 'react';
import * as React from 'react';
import { useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

import { DAY_NUMBERS } from '../constants';
import { addDays, startOfWeek } from '../date-utils';
import { Day } from './Day';
import { WeekComponent } from '../styled/WeekComponent';
import type { IWeekCalendarProps } from '../interfaces';

export const Week: FC<IWeekCalendarProps> = ({
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
  highlightSpecialDay,
}) => {
  const theme = useTheme() || LIGHT_THEME;
  const handleMouseEnter = (day: Date, e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
    onMouseEnter && onMouseEnter(day, e);
  const handleDayClick = (day: Date, e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onClick && onClick(day, e);
  const weekStart = startOfWeek(day, theme.locales[theme.currentLocale].firstDayOfWeek ?? 1);
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
            validator={validator}
            filterDate={filterDate}
            onMouseEnter={(_, e) => handleMouseEnter(nextDay, e)}
            onClick={(_, e) => handleDayClick(nextDay, e)}
            highlightSpecialDay={highlightSpecialDay}
          />
        );
      })}
    </WeekComponent>
  );
};
