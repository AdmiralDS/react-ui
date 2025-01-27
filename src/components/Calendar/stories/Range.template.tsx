import * as React from 'react';

import type { CalendarPropType } from '@admiral-ds/react-ui';
import { Calendar, T } from '@admiral-ds/react-ui';

export const RangeTemplate = (props: CalendarPropType) => {
  const [startDate, setStartDate] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  const handleChange = (value: Date | (Date | null)[] | null) => {
    if (value === null || value instanceof Date) {
      setStartDate(value);
    } else {
      setStartDate(value[0]);
      setEndDate(value[1]);
    }
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с выбором диапазона.
      </T>
      <Calendar {...props} range startDate={startDate} endDate={endDate} onChange={handleChange} />
    </>
  );
};
