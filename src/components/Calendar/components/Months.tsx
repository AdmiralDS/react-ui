import type { FC } from 'react';
import React from 'react';

import { setMonth, startOfMonth } from '../date-utils';
import { MonthComponent } from '../styled/MonthComponent';
import type { IYearsCalendarProps } from '../interfaces';

const months = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
];

export const Months: FC<IYearsCalendarProps> = ({ viewDate, startDate, selected, validator, onClick }) => (
  <>
    {months.map((month, index) => {
      const disabled = !!validator?.invalidMonth(index, viewDate.getFullYear());
      const handleClick = (e: any) => {
        e.preventDefault();
        const day = startOfMonth(setMonth(viewDate, index));
        !disabled && onClick && onClick(day, e);
      };
      return (
        <MonthComponent
          key={month}
          today={index === new Date().getMonth()}
          selected={!!(selected || startDate) && index === ((selected || startDate) as Date).getMonth()}
          disabled={disabled}
          onMouseDown={handleClick}
        >
          {month}
        </MonthComponent>
      );
    })}
  </>
);
