import type { FC } from 'react';
import * as React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';

import { DEFAULT_YEAR_COUNT } from '../constants';
import { setYear, startOfYear, yearsRange } from '../date-utils';
import { YearComponent } from '../styled/YearComponent';
import type { IYearsCalendarProps } from '../interfaces';

export const Years: FC<IYearsCalendarProps> = ({ viewDate, startDate, selected, validator, onClick }) => {
  const { start, end } = yearsRange(viewDate, DEFAULT_YEAR_COUNT);
  const years = Array(end - start + 1)
    .fill(0)
    .map((_, index) => start + index);
  return (
    <>
      {years.map((year) => {
        const disabled = !!validator?.invalidYear(year);
        const handleClick = (e: any) => {
          e.preventDefault();
          const day = startOfYear(setYear(viewDate, year));
          !disabled && onClick && onClick(day, e);
        };
        return (
          <YearComponent
            key={year}
            today={year === dayjs().year()}
            selected={!!(selected || startDate) && year === ((selected || startDate) as Dayjs).year()}
            disabled={disabled}
            onMouseDown={handleClick}
          >
            {year}
          </YearComponent>
        );
      })}
    </>
  );
};
