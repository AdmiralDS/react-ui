import * as React from 'react';

import type { CalendarPropType } from '@admiral-ds/react-ui';
import { Calendar } from '@admiral-ds/react-ui';

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
      <Calendar {...props} range startDate={startDate} endDate={endDate} onChange={handleChange} />
    </>
  );
};
