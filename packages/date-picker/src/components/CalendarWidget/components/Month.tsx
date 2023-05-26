import * as React from 'react';
import type { Dayjs } from 'dayjs';
import { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '@admiral-ds/react-ui';

import { addWeeks, startOfMonth, startOfWeek } from '../date-utils';
import { Week } from './Week';
import type { IMonthCalendarProps } from '../../Calendar3/interfaces';

const FIXED_WEEK_COUNT = 6;

interface ICalendarMonthProps extends IMonthCalendarProps {
  userLocale?: string;
}

export const Month = ({
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
  highlightSpecialDay,
  userLocale,
}: ICalendarMonthProps) => {
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
  const weeks: Array<Dayjs> = [];
  const handleMouseEnter = (day: Dayjs, event: any) => onMouseEnter && onMouseEnter(day, event);
  const handleMouseLeave = () => onMouseLeave && onMouseLeave();
  const handleDayClick = (day: Dayjs, event: any) => onClick && onClick(day, event);
  const currentLocale = userLocale || theme.currentLocale || 'ru';

  let weekIndex = 0;
  let weekStart = startOfWeek(startOfMonth(day), currentLocale);
  do {
    weekIndex++;
    weeks.push(weekStart);
    weekStart = addWeeks(weekStart, 1);
  } while (weekIndex < FIXED_WEEK_COUNT);

  return (
    <div onMouseLeave={handleMouseLeave}>
      {weeks.map((week) => (
        <Week
          key={week.valueOf()}
          day={week}
          month={day.month()}
          startDate={startDate}
          endDate={endDate}
          selected={selected}
          activeDate={activeDate}
          range={range}
          validator={validator}
          filterDate={filterDate}
          onMouseEnter={handleMouseEnter}
          onClick={handleDayClick}
          highlightSpecialDay={highlightSpecialDay}
          userLocale={userLocale}
        />
      ))}
    </div>
  );
};
