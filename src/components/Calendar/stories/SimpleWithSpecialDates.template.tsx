import * as React from 'react';
import { css, ThemeProvider } from 'styled-components';

import { Calendar, weekendMixin, T } from '@admiral-ds/react-ui';
import type { CalendarPropType, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

const startOfDay = (date: Date): Date => {
  date.setHours(0, 0, 0, 0);
  return date;
};

const HOLIDAY = 'holidays';
const PRE_HOLIDAY = 'preholidays';
const WEEKEND = 'weekend';
const holidayCalendar: Array<{ date: string; type: string }> = [
  { date: '2022-01-01', type: HOLIDAY },
  { date: '2022-01-02', type: HOLIDAY },
  { date: '2022-01-03', type: HOLIDAY },
  { date: '2022-01-04', type: HOLIDAY },
  { date: '2022-01-05', type: HOLIDAY },
  { date: '2022-01-06', type: HOLIDAY },
  { date: '2022-01-07', type: HOLIDAY },
  { date: '2022-01-08', type: HOLIDAY },
  { date: '2022-01-09', type: WEEKEND },
  { date: '2022-01-15', type: WEEKEND },
  { date: '2022-01-16', type: WEEKEND },
  { date: '2022-01-22', type: WEEKEND },
  { date: '2022-01-23', type: WEEKEND },
  { date: '2022-01-29', type: WEEKEND },
  { date: '2022-01-30', type: WEEKEND },
  { date: '2022-02-05', type: WEEKEND },
  { date: '2022-02-06', type: WEEKEND },
  { date: '2022-02-12', type: WEEKEND },
  { date: '2022-02-13', type: WEEKEND },
  { date: '2022-02-19', type: WEEKEND },
  { date: '2022-02-20', type: WEEKEND },
  { date: '2022-02-23', type: HOLIDAY },
  { date: '2022-02-26', type: WEEKEND },
  { date: '2022-02-27', type: WEEKEND },
  { date: '2022-03-06', type: WEEKEND },
  { date: '2022-03-07', type: WEEKEND },
  { date: '2022-03-08', type: HOLIDAY },
  { date: '2022-03-12', type: WEEKEND },
  { date: '2022-03-13', type: WEEKEND },
  { date: '2022-03-19', type: WEEKEND },
  { date: '2022-03-20', type: WEEKEND },
  { date: '2022-03-26', type: WEEKEND },
  { date: '2022-03-27', type: WEEKEND },
  { date: '2022-04-02', type: WEEKEND },
  { date: '2022-04-03', type: WEEKEND },
  { date: '2022-04-09', type: WEEKEND },
  { date: '2022-04-10', type: WEEKEND },
  { date: '2022-04-16', type: WEEKEND },
  { date: '2022-04-17', type: WEEKEND },
  { date: '2022-04-23', type: WEEKEND },
  { date: '2022-04-24', type: WEEKEND },
  { date: '2022-04-30', type: WEEKEND },
  { date: '2022-05-01', type: HOLIDAY },
  { date: '2022-05-02', type: WEEKEND },
  { date: '2022-05-03', type: WEEKEND },
  { date: '2022-05-07', type: WEEKEND },
  { date: '2022-05-08', type: WEEKEND },
  { date: '2022-05-09', type: HOLIDAY },
  { date: '2022-05-10', type: WEEKEND },
  { date: '2022-05-14', type: WEEKEND },
  { date: '2022-05-15', type: WEEKEND },
  { date: '2022-05-21', type: WEEKEND },
  { date: '2022-05-22', type: WEEKEND },
  { date: '2022-05-28', type: WEEKEND },
  { date: '2022-05-29', type: WEEKEND },
  { date: '2022-06-04', type: WEEKEND },
  { date: '2022-06-05', type: WEEKEND },
  { date: '2022-06-11', type: WEEKEND },
  { date: '2022-06-12', type: HOLIDAY },
  { date: '2022-06-13', type: WEEKEND },
  { date: '2022-06-18', type: WEEKEND },
  { date: '2022-06-19', type: WEEKEND },
  { date: '2022-06-25', type: WEEKEND },
  { date: '2022-06-26', type: WEEKEND },
  { date: '2022-07-02', type: WEEKEND },
  { date: '2022-07-03', type: WEEKEND },
  { date: '2022-07-09', type: WEEKEND },
  { date: '2022-07-10', type: WEEKEND },
  { date: '2022-07-16', type: WEEKEND },
  { date: '2022-07-17', type: WEEKEND },
  { date: '2022-07-23', type: WEEKEND },
  { date: '2022-07-24', type: WEEKEND },
  { date: '2022-07-30', type: WEEKEND },
  { date: '2022-07-31', type: WEEKEND },
  { date: '2022-08-06', type: WEEKEND },
  { date: '2022-08-07', type: WEEKEND },
  { date: '2022-08-13', type: WEEKEND },
  { date: '2022-08-14', type: WEEKEND },
  { date: '2022-08-20', type: WEEKEND },
  { date: '2022-08-21', type: WEEKEND },
  { date: '2022-08-27', type: WEEKEND },
  { date: '2022-08-28', type: WEEKEND },
  { date: '2022-09-03', type: WEEKEND },
  { date: '2022-09-04', type: WEEKEND },
  { date: '2022-09-10', type: WEEKEND },
  { date: '2022-09-11', type: WEEKEND },
  { date: '2022-09-17', type: WEEKEND },
  { date: '2022-09-18', type: WEEKEND },
  { date: '2022-09-24', type: WEEKEND },
  { date: '2022-09-25', type: WEEKEND },
  { date: '2022-10-01', type: WEEKEND },
  { date: '2022-10-02', type: WEEKEND },
  { date: '2022-10-08', type: WEEKEND },
  { date: '2022-10-09', type: WEEKEND },
  { date: '2022-10-15', type: WEEKEND },
  { date: '2022-10-16', type: WEEKEND },
  { date: '2022-10-22', type: WEEKEND },
  { date: '2022-10-23', type: WEEKEND },
  { date: '2022-10-29', type: WEEKEND },
  { date: '2022-10-30', type: WEEKEND },
  { date: '2022-11-04', type: HOLIDAY },
  { date: '2022-11-05', type: WEEKEND },
  { date: '2022-11-06', type: WEEKEND },
  { date: '2022-11-12', type: WEEKEND },
  { date: '2022-11-13', type: WEEKEND },
  { date: '2022-11-19', type: WEEKEND },
  { date: '2022-11-20', type: WEEKEND },
  { date: '2022-11-26', type: WEEKEND },
  { date: '2022-11-27', type: WEEKEND },
  { date: '2022-12-03', type: WEEKEND },
  { date: '2022-12-04', type: WEEKEND },
  { date: '2022-12-10', type: WEEKEND },
  { date: '2022-12-11', type: WEEKEND },
  { date: '2022-12-17', type: WEEKEND },
  { date: '2022-12-18', type: WEEKEND },
  { date: '2022-12-24', type: WEEKEND },
  { date: '2022-12-25', type: WEEKEND },
  { date: '2022-12-31', type: WEEKEND },
  { date: '2022-02-22', type: PRE_HOLIDAY },
  { date: '2022-03-05', type: PRE_HOLIDAY },
  { date: '2022-11-03', type: PRE_HOLIDAY },
  { date: '2023-01-01', type: HOLIDAY },
  { date: '2023-01-02', type: HOLIDAY },
  { date: '2023-01-03', type: HOLIDAY },
  { date: '2023-01-04', type: HOLIDAY },
  { date: '2023-01-05', type: HOLIDAY },
  { date: '2023-01-06', type: HOLIDAY },
  { date: '2023-01-07', type: HOLIDAY },
  { date: '2023-01-08', type: HOLIDAY },
  { date: '2023-01-14', type: WEEKEND },
  { date: '2023-01-15', type: WEEKEND },
  { date: '2023-01-21', type: WEEKEND },
  { date: '2023-01-22', type: WEEKEND },
  { date: '2023-01-28', type: WEEKEND },
  { date: '2023-01-29', type: WEEKEND },
  { date: '2023-02-04', type: WEEKEND },
  { date: '2023-02-05', type: WEEKEND },
  { date: '2023-02-11', type: WEEKEND },
  { date: '2023-02-12', type: WEEKEND },
  { date: '2023-02-18', type: WEEKEND },
  { date: '2023-02-19', type: WEEKEND },
  { date: '2023-02-23', type: HOLIDAY },
  { date: '2023-02-24', type: WEEKEND },
  { date: '2023-02-25', type: WEEKEND },
  { date: '2023-02-26', type: WEEKEND },
  { date: '2023-03-04', type: WEEKEND },
  { date: '2023-03-05', type: WEEKEND },
  { date: '2023-03-08', type: HOLIDAY },
  { date: '2023-03-11', type: WEEKEND },
  { date: '2023-03-12', type: WEEKEND },
  { date: '2023-03-18', type: WEEKEND },
  { date: '2023-03-19', type: WEEKEND },
  { date: '2023-03-25', type: WEEKEND },
  { date: '2023-03-26', type: WEEKEND },
  { date: '2023-04-01', type: WEEKEND },
  { date: '2023-04-02', type: WEEKEND },
  { date: '2023-04-08', type: WEEKEND },
  { date: '2023-04-09', type: WEEKEND },
  { date: '2023-04-15', type: WEEKEND },
  { date: '2023-04-16', type: WEEKEND },
  { date: '2023-04-22', type: WEEKEND },
  { date: '2023-04-23', type: WEEKEND },
  { date: '2023-04-29', type: WEEKEND },
  { date: '2023-04-30', type: WEEKEND },
  { date: '2023-05-01', type: HOLIDAY },
  { date: '2023-05-06', type: WEEKEND },
  { date: '2023-05-07', type: WEEKEND },
  { date: '2023-05-08', type: WEEKEND },
  { date: '2023-05-09', type: HOLIDAY },
  { date: '2023-05-13', type: WEEKEND },
  { date: '2023-05-14', type: WEEKEND },
  { date: '2023-05-20', type: WEEKEND },
  { date: '2023-05-21', type: WEEKEND },
  { date: '2023-05-27', type: WEEKEND },
  { date: '2023-05-28', type: WEEKEND },
  { date: '2023-06-03', type: WEEKEND },
  { date: '2023-06-04', type: WEEKEND },
  { date: '2023-06-10', type: WEEKEND },
  { date: '2023-06-11', type: WEEKEND },
  { date: '2023-06-12', type: HOLIDAY },
  { date: '2023-06-17', type: WEEKEND },
  { date: '2023-06-18', type: WEEKEND },
  { date: '2023-06-24', type: WEEKEND },
  { date: '2023-06-25', type: WEEKEND },
  { date: '2023-07-01', type: WEEKEND },
  { date: '2023-07-02', type: WEEKEND },
  { date: '2023-07-08', type: WEEKEND },
  { date: '2023-07-09', type: WEEKEND },
  { date: '2023-07-15', type: WEEKEND },
  { date: '2023-07-16', type: WEEKEND },
  { date: '2023-07-22', type: WEEKEND },
  { date: '2023-07-23', type: WEEKEND },
  { date: '2023-07-29', type: WEEKEND },
  { date: '2023-07-30', type: WEEKEND },
  { date: '2023-08-05', type: WEEKEND },
  { date: '2023-08-06', type: WEEKEND },
  { date: '2023-08-12', type: WEEKEND },
  { date: '2023-08-13', type: WEEKEND },
  { date: '2023-08-19', type: WEEKEND },
  { date: '2023-08-20', type: WEEKEND },
  { date: '2023-08-26', type: WEEKEND },
  { date: '2023-08-27', type: WEEKEND },
  { date: '2023-09-02', type: WEEKEND },
  { date: '2023-09-03', type: WEEKEND },
  { date: '2023-09-09', type: WEEKEND },
  { date: '2023-09-10', type: WEEKEND },
  { date: '2023-09-16', type: WEEKEND },
  { date: '2023-09-17', type: WEEKEND },
  { date: '2023-09-23', type: WEEKEND },
  { date: '2023-09-24', type: WEEKEND },
  { date: '2023-09-30', type: WEEKEND },
  { date: '2023-10-01', type: WEEKEND },
  { date: '2023-10-07', type: WEEKEND },
  { date: '2023-10-08', type: WEEKEND },
  { date: '2023-10-14', type: WEEKEND },
  { date: '2023-10-15', type: WEEKEND },
  { date: '2023-10-21', type: WEEKEND },
  { date: '2023-10-22', type: WEEKEND },
  { date: '2023-10-28', type: WEEKEND },
  { date: '2023-10-29', type: WEEKEND },
  { date: '2023-11-04', type: HOLIDAY },
  { date: '2023-11-05', type: WEEKEND },
  { date: '2023-11-06', type: WEEKEND },
  { date: '2023-11-11', type: WEEKEND },
  { date: '2023-11-12', type: WEEKEND },
  { date: '2023-11-18', type: WEEKEND },
  { date: '2023-11-19', type: WEEKEND },
  { date: '2023-11-25', type: WEEKEND },
  { date: '2023-11-26', type: WEEKEND },
  { date: '2023-12-02', type: WEEKEND },
  { date: '2023-12-03', type: WEEKEND },
  { date: '2023-12-09', type: WEEKEND },
  { date: '2023-12-10', type: WEEKEND },
  { date: '2023-12-16', type: WEEKEND },
  { date: '2023-12-17', type: WEEKEND },
  { date: '2023-12-23', type: WEEKEND },
  { date: '2023-12-24', type: WEEKEND },
  { date: '2023-12-30', type: WEEKEND },
  { date: '2023-12-31', type: WEEKEND },
  { date: '2023-02-22', type: PRE_HOLIDAY },
  { date: '2023-03-07', type: PRE_HOLIDAY },
  { date: '2023-11-03', type: PRE_HOLIDAY },
];

const holidayMixin = css<{ disabled?: boolean }>`
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Success_Success30, ${p.theme.color['Success/Success 30']})`
      : `var(--admiral-color-Success_Success50Main, ${p.theme.color['Success/Success 50 Main']})`};
`;

const preHolidayMixin = css<{ disabled?: boolean }>`
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Attention_Attention30, ${p.theme.color['Attention/Attention 30']})`
      : `var(--admiral-color-Attention_Attention50Main, ${p.theme.color['Attention/Attention 50 Main']})`};
`;

const holidayDates = new Map(
  holidayCalendar.map((day) => {
    const date = new Date(day.date);
    const keyDate = startOfDay(date);
    return [keyDate.getTime(), day.type];
  }),
);

export const SimpleWithSpecialDatesTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: CalendarPropType & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const handleChange = (value: Date | (Date | null)[] | null) => {
    if (value === null || value instanceof Date) {
      setSelected(value);
    } else {
      setSelected(value[0]);
      setEndDate(value[1]);
    }
  };

  const highlightHolidays = (day: Date) => {
    const key = startOfDay(day).getTime();
    const check = holidayDates.get(key);
    switch (check) {
      case HOLIDAY:
        return holidayMixin;
      case PRE_HOLIDAY:
        return preHolidayMixin;
      case WEEKEND:
        return weekendMixin;
      default:
        return undefined;
    }
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с подсветкой выходных, праздничный и специальных дат.
      </T>
      {props.range ? (
        <Calendar
          {...props}
          range
          startDate={selected}
          endDate={endDate}
          onChange={handleChange}
          highlightSpecialDay={highlightHolidays}
        />
      ) : (
        <Calendar {...props} selected={selected} onChange={handleChange} highlightSpecialDay={highlightHolidays} />
      )}
    </ThemeProvider>
  );
};
