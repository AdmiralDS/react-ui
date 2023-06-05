import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import type { CalendarPropType, Theme } from '@admiral-ds/react-ui';
import { Calendar } from '@admiral-ds/react-ui';

export const CalendarSimpleTemplate = (props: CalendarPropType) => {
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return props.range ? (
    <ThemeProvider theme={swapBorder}>
      <Calendar
        {...props}
        range
        startDate={selected}
        endDate={endDate}
        onChange={(value: any) => {
          setSelected(value[0]);
          setEndDate(value[1]);
        }}
      />
    </ThemeProvider>
  ) : (
    <ThemeProvider theme={swapBorder}>
      <Calendar
        {...props}
        selected={selected}
        onChange={(value: any) => {
          setSelected(value);
        }}
      />
    </ThemeProvider>
  );
};
