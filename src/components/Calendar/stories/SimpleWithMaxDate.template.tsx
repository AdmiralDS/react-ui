import * as React from 'react';

import type { CalendarPropType } from '@admiral-ds/react-ui';
import { Calendar, T } from '@admiral-ds/react-ui';

export const SimpleWithMaxDateTemplate = ({ range, ...props }: CalendarPropType) => {
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

  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример с ограничением максимальной даты.
      </T>
      {range ? (
        <Calendar {...props} range startDate={selected} endDate={endDate} maxDate={tomorrow} onChange={handleChange} />
      ) : (
        <Calendar {...props} maxDate={tomorrow} selected={selected} onChange={handleChange} />
      )}
    </>
  );
};
