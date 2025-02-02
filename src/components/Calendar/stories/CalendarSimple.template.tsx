import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import type { CalendarPropType, BorderRadiusType } from '@admiral-ds/react-ui';
import { Calendar, T } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const CalendarSimpleTemplate = ({
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

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        Пример календаря с выбором даты.
      </T>
      {props.range ? (
        <Calendar {...props} range startDate={selected} endDate={endDate} onChange={handleChange} />
      ) : (
        <Calendar {...props} selected={selected} onChange={handleChange} />
      )}
    </ThemeProvider>
  );
};
