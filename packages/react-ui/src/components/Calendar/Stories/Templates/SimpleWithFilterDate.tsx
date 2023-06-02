import * as React from 'react';

import type { CalendarPropType } from '@admiral-ds/react-ui';
import { Calendar } from '@admiral-ds/react-ui';

export const SimpleWithFilterDateTemplate = ({ range, ...props }: CalendarPropType) => {
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  return range ? (
    <>
      <Calendar
        {...props}
        range
        startDate={selected}
        endDate={endDate}
        filterDate={isWeekday}
        onChange={(value: any) => {
          setSelected(value[0]);
          setEndDate(value[1]);
        }}
      />
    </>
  ) : (
    <>
      <Calendar
        {...props}
        filterDate={isWeekday}
        selected={selected}
        onChange={(value: any) => {
          setSelected(value);
        }}
      />
    </>
  );
};