import * as React from 'react';
import type { Dayjs } from 'dayjs';
import { useTheme } from 'styled-components';
import { LIGHT_THEME } from '@admiral-ds/react-ui';

import { capitalizeFirstLetter, DAY_NUMBERS } from '../constants';
import { addDays, startOfWeek } from '../date-utils';
import { DayNameComponent } from '../styled/DayNameComponent';

interface IDayNamesProps {
  date: Dayjs;
  userLocale?: string;
}

export const DayNames = ({ date, userLocale }: IDayNamesProps) => {
  const theme = useTheme() || LIGHT_THEME;
  const currentLocale = userLocale || theme.currentLocale || 'ru';

  const weekStart = startOfWeek(date, currentLocale);

  return (
    <div>
      {DAY_NUMBERS.map((offset) => {
        const day = addDays(weekStart, offset);
        const weekDayName = capitalizeFirstLetter(day.locale(currentLocale).format('dd'));

        return <DayNameComponent key={weekDayName}>{weekDayName}</DayNameComponent>;
      })}
    </div>
  );
};
