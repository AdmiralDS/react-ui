import type { FC } from 'react';
import * as React from 'react';
import { useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

import { capitalizeFirstLetter, DAY_NUMBERS } from '../constants';
import { addDays, getFormattedValue, startOfWeek } from '../date-utils';
import { DayNameComponent } from '../styled/DayNameComponent';

interface IDayNamesProps {
  date: Date;
}

export const DayNames: FC<IDayNamesProps> = ({ date }) => {
  const theme = useTheme() || LIGHT_THEME;
  const weekStart = startOfWeek(date, theme.locales[theme.currentLocale].firstDayOfWeek ?? 1);
  return (
    <div>
      {DAY_NUMBERS.map((offset) => {
        const day = addDays(weekStart, offset);
        const weekDayName = capitalizeFirstLetter(
          getFormattedValue(day, { weekday: 'short' }, theme.currentLocale || 'ru').slice(0, 2),
        );
        return <DayNameComponent key={day.valueOf()}>{weekDayName}</DayNameComponent>;
      })}
    </div>
  );
};
