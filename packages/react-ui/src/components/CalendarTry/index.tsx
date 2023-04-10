import * as React from 'react';
import type { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import dayjs from 'dayjs';
import { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { Day } from '#src/components/CalendarTry/Day';
import { Week } from '#src/components/CalendarTry/Week';

export interface CalendarTryProps {
  date: Dayjs;
  selected?: Dayjs;
  userLocale?: string;
}

export const CalendarTry = React.forwardRef<HTMLDivElement, CalendarTryProps>(({ date, selected, userLocale }, ref) => {
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
  const [currentLocale, setCurrentLocale] = React.useState<string>('ru');

  const defineLocale = userLocale || theme.currentLocale;
  if (currentLocale !== defineLocale) {
    import(`dayjs/locale/${defineLocale}.js`)
      .then(() => setCurrentLocale(defineLocale))
      .catch(() => {
        setCurrentLocale('ru');
      });
  }

  const viewDate = React.useMemo(() => date.locale(currentLocale), [currentLocale]);
  let start = viewDate.locale(currentLocale).startOf('month').startOf('week');
  const end = viewDate.endOf('month').endOf('week');
  const weeks: Array<Dayjs> = [];
  for (let i = 0; i < 6; i++) {
    weeks.push(start);
    start = start.add(1, 'week');
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }} ref={ref}>
      <div>{viewDate.format('MMMM YYYY')}</div>
      {/*<div>{start.format('DD MMM')}</div>*/}
      {weeks.map((weekStart) => (
        <Week key={weekStart.valueOf()} viewDate={viewDate} date={weekStart} selected={selected} />
      ))}
      {<Day viewDate={viewDate} date={viewDate} selected={selected} />}
      {/*<div>{end.format('DD MMM')}</div>*/}
    </div>
  );
});
