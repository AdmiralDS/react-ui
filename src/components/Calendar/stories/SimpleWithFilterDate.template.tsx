import * as React from 'react';

import type { CalendarPropType } from '@admiral-ds/react-ui';
import { Calendar, T } from '@admiral-ds/react-ui';

export const SimpleWithFilterDateTemplate = ({ range, ...props }: CalendarPropType) => {
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

  const isWeekday = (date: Date) => {
    const day = date.getDay();
    return day !== 0 && day !== 6;
  };
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с недоступными для выбора датами.
      </T>
      {range ? (
        <Calendar
          {...props}
          range
          startDate={selected}
          endDate={endDate}
          filterDate={isWeekday}
          onChange={handleChange}
        />
      ) : (
        <Calendar {...props} filterDate={isWeekday} selected={selected} onChange={handleChange} />
      )}
    </>
  );
};
