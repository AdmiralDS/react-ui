import * as React from 'react';
import styled from 'styled-components';
import type { Dayjs } from 'dayjs';
import type { DayProps } from '#src/components/CalendarTry/Day';

export const DAY_NUMBERS = [0, 1, 2, 3, 4, 5, 6];

export interface WeekProps {
  viewDate: Dayjs;
  weekStartDate: Dayjs;
  selected?: Dayjs;
  renderDay: (props: DayProps) => React.ReactNode;
}

const WeekWrapper = styled.div`
  white-space: nowrap;
`;

export const Week = ({ viewDate, weekStartDate, selected, renderDay }: WeekProps) => {
  return (
    <WeekWrapper>{DAY_NUMBERS.map((day) => renderDay({ viewDate, date: weekStartDate.add(day, 'day'), selected }))}</WeekWrapper>
  );
};
