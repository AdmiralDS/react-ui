import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import type { CalendarPropType, BorderRadiusType } from '@admiral-ds/react-ui';
import { Calendar } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

export const CalendarSimpleTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: CalendarPropType & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selected, setSelected] = React.useState<Date | null>(null);
  const [endDate, setEndDate] = React.useState<Date | null>(null);

  return props.range ? (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
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
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
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
