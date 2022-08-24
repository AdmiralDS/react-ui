import React, { FC } from 'react';
import { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

import { capitalizeFirstLetter, DAY_NUMBERS } from '../constants';
import { addDays, getFormattedValue, startOfWeek } from '../date-utils';
import { DayNameComponent } from '../styled/DayNameComponent';

interface IDayNamesProps {
  date: Date;
}

export const DayNames: FC<IDayNamesProps> = ({ date }) => {
  // const weekStart = startOfWeek(date, localeName);
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
  const weekStart = startOfWeek(date, theme.locales[theme.currentLocale].weekStartsOn ?? 1);
  return (
    <div>
      {DAY_NUMBERS.map((offset) => {
        const day = addDays(weekStart, offset);
        // const weekDayName = capitalizeFirstLetter(getFormattedValue(day, { weekday: 'short' }, localeName).slice(0, 2));
        const weekDayName = capitalizeFirstLetter(
          getFormattedValue(day, { weekday: 'short' }, theme.currentLocale || 'ru').slice(0, 2),
        );
        return <DayNameComponent key={day.valueOf()}>{weekDayName}</DayNameComponent>;
      })}
    </div>
  );
};
