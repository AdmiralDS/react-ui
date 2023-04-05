import type { FC } from 'react';
import * as React from 'react';
import type { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

import { capitalizeFirstLetter, DAY_NUMBERS } from '../constants';
import { addDays } from '../date-utils';
import { DayNameComponent } from '../styled/DayNameComponent';

interface IDayNamesProps {
  date: Dayjs;
  userLocale?: string;
}

export const DayNames = ({ date, userLocale }: IDayNamesProps) => {
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
  const [currentLocale, setCurrentLocale] = React.useState<string>('');

  const defineLocale = userLocale || theme.currentLocale || 'ru';

  if (currentLocale !== defineLocale) {
    import(`dayjs/locale/${defineLocale}.js`)
      .then(() => setCurrentLocale(defineLocale))
      .catch(() => {
        setCurrentLocale('ru');
      });
  }

  const renderNames = () => {
    const instanceLocaleData = date.locale(currentLocale).localeData();
    const start = instanceLocaleData.firstDayOfWeek();
    const weekStart = date.day(start);

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

  return currentLocale ? renderNames() : null;
};
