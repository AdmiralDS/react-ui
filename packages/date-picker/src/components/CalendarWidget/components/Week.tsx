import type { FC } from 'react';
import * as React from 'react';
import type { Dayjs } from 'dayjs';
import { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '@admiral-ds/react-ui';

import { DAY_NUMBERS } from '../constants';
import { addDays, startOfWeek } from '../date-utils';
import { Day } from './Day';
import { WeekComponent } from '../styled/WeekComponent';
import type { IWeekCalendarProps } from '../../Calendar3/interfaces';

interface ICalendarWeekProps extends IWeekCalendarProps {
  userLocale?: string;
}

export const Week = ({
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
  userLocale,
}: ICalendarWeekProps) => {
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
  const handleMouseEnter = (day: Dayjs, e: any) => onMouseEnter && onMouseEnter(day, e);
  const handleDayClick = (day: Dayjs, e: any) => onClick && onClick(day, e);
  const currentLocale = userLocale || theme.currentLocale || 'ru';
  const weekStart = startOfWeek(day, currentLocale);
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
            userLocale={userLocale}
          />
        );
      })}
    </WeekComponent>
  );
};
