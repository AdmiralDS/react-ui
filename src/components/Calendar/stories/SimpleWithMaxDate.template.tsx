import * as React from 'react';

import type { CalendarPropType } from '@admiral-ds/react-ui';
import { Calendar } from '@admiral-ds/react-ui';

export const SimpleWithMaxDateTemplate = ({ range, ...props }: CalendarPropType) => {
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);
  const tomorrow = new Date();
  tomorrow.setDate(new Date().getDate() + 1);
  return range ? (
    <>
      <Calendar
        {...props}
        range
        startDate={selected}
        endDate={endDate}
        maxDate={tomorrow}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
        maxDate={tomorrow}
        selected={selected}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(value: any) => {
          setSelected(value);
        }}
      />
    </>
  );
};
