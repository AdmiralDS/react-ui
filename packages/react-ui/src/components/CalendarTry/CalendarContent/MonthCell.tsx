import * as React from 'react';
import type { MouseEvent } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import styled from 'styled-components';
import { YearCellWrapper } from '#src/components/CalendarTry/CalendarContent/YearCell';
import { setMonth, startOfMonth } from '#src/components/Calendar/date-utils';
import { MonthComponent } from '#src/components/Calendar/styled/MonthComponent';
import { capitalizeFirstLetter } from '#src/components/Calendar/constants';
import type { DateValidator } from '#src/components/CalendarTry/validator';

export interface MonthCellProps {
  date: Dayjs;
  selected?: Dayjs;
  validator?: DateValidator;
  onSelectMonth: (date: Dayjs, event: MouseEvent<HTMLDivElement>) => void;
}

const MONTH_WIDTH = '84px';
const MONTH_MARGIN_BOTTOM = '32px';

const MonthCellCWrapper = styled(YearCellWrapper)`
  width: ${MONTH_WIDTH};
  margin-bottom: ${MONTH_MARGIN_BOTTOM};
`;

export const MonthCell = ({ date, selected, validator, onSelectMonth }: MonthCellProps) => {
  const disabled = !!validator?.invalidMonth(date.month(), date.year());
  const handleClick = (e: any) => {
    e.preventDefault();
    const day = date.startOf('month');
    !disabled && onSelectMonth && onSelectMonth(day, e);
  };
  return (
    <MonthComponent
      key={date.valueOf()}
      today={date.isSame(dayjs(), 'month')}
      selected={!!selected && date.isSame(selected, 'month')}
      disabled={disabled}
      onMouseDown={handleClick}
    >
      {capitalizeFirstLetter(date.format('MMMM'))}
    </MonthComponent>
  );
};
