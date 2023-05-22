import type { FC } from 'react';
import * as React from 'react';
import type { Dayjs } from 'dayjs';
import { ThemeContext } from 'styled-components';
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
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
  const handleMouseEnter = (day: Dayjs, e: any) => onMouseEnter && onMouseEnter(day, e);
  const handleDayClick = (day: Dayjs, e: any) => onClick && onClick(day, e);
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
