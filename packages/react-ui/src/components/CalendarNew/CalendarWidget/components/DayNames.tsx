import * as React from 'react';
import type { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

import { capitalizeFirstLetter, DAY_NUMBERS } from '../constants';
import {addDays, startOfWeek} from '../date-utils';
import { DayNameComponent } from '../styled/DayNameComponent';

interface IDayNamesProps {
  date: Dayjs;
  userLocale?: string;
}

export const DayNames = ({ date, userLocale }: IDayNamesProps) => {
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
  /*const [currentLocale, setCurrentLocale] = React.useState<string>('');

  const defineLocale = userLocale || theme.currentLocale || 'ru';

  if (currentLocale !== defineLocale) {
    import(`dayjs/locale/${defineLocale}.js`)
      .then(() => setCurrentLocale(defineLocale))
      .catch(() => {
        setCurrentLocale('ru');
      });
  }*/
  const currentLocale = userLocale || theme.currentLocale || 'ru';

  const renderNames = () => {
    /*const instanceLocaleData = date.locale(currentLocale).localeData();
    const weekStart = date.day(instanceLocaleData.firstDayOfWeek());*/
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

  return currentLocale ? renderNames() : null;
};
