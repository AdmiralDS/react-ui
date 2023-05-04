import * as React from 'react';
import type { MouseEvent } from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import styled from 'styled-components';
import { YEAR_BORDER_RADIUS, YearCellWrapper } from '#src/components/CalendarTry/CalendarContent/YearCell';
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
    <MonthCellCWrapper
      key={date.valueOf()}
      today={date.isSame(dayjs(), 'month')}
      selected={!!selected && date.isSame(selected, 'month')}
      disabled={disabled}
      onMouseDown={handleClick}
      borderRadius={YEAR_BORDER_RADIUS}
      isRangeStart={false}
      isRangeEnd={false}
      isRowStart={false}
      isRowEnd={false}
      isActiveDate={false}
    >
      {capitalizeFirstLetter(date.format('MMMM'))}
    </MonthCellCWrapper>
  );
};
