import React, { FC } from 'react';

import type { LocaleType } from '../constants';
import { capitalizeFirstLetter, DAY_NUMBERS } from '../constants';
import { addDays, getFormattedValue, startOfWeek } from '../date-utils';
import { DayNameComponent } from '../styled/DayNameComponent';

interface IDayNamesProps {
  date: Date;
  localeName: LocaleType;
}

export const DayNames: FC<IDayNamesProps> = ({ date, localeName }) => {
  const weekStart = startOfWeek(date, localeName);
  return (
    <div>
      {DAY_NUMBERS.map((offset) => {
        const day = addDays(weekStart, offset);
        const weekDayName = capitalizeFirstLetter(getFormattedValue(day, { weekday: 'short' }, localeName).slice(0, 2));
        return <DayNameComponent key={day.valueOf()}>{weekDayName}</DayNameComponent>;
      })}
    </div>
  );
};
