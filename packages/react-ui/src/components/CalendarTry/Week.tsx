import * as React from 'react';
import type { Dayjs } from 'dayjs';
import styled from 'styled-components';

export const DAY_NUMBERS = [0, 1, 2, 3, 4, 5, 6];

export interface WeekProps {
  weekStartDate: Dayjs;
  renderDay: (date: Dayjs) => React.ReactNode;
}

const WeekWrapper = styled.div`
  white-space: nowrap;
`;

export const Week = ({ weekStartDate, renderDay }: WeekProps) => {
  return <WeekWrapper>{DAY_NUMBERS.map((day) => renderDay(weekStartDate.add(day, 'day')))}</WeekWrapper>;
};
