import * as React from 'react';
import type { Dayjs } from 'dayjs';
import styled from 'styled-components';
import type { Calendar5ViewMode } from '../constants';

export const DAY_NUMBERS = [0, 1, 2, 3, 4, 5, 6];

export interface WeekProps {
  weekStartDate: Dayjs;
  renderCell: (date: Dayjs, viewMode: Calendar5ViewMode) => React.ReactNode;
}

const WeekWrapper = styled.div`
  white-space: nowrap;
`;

export const Week = ({ weekStartDate, renderCell }: WeekProps) => {
  return <WeekWrapper>{DAY_NUMBERS.map((day) => renderCell(weekStartDate.add(day, 'day'), 'DATES'))}</WeekWrapper>;
};
