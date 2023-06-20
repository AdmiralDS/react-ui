import type { FC } from 'react';
import * as React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

import { setMonth, startOfMonth, getMonthList } from '../date-utils';
import { MonthComponent } from '../styled/MonthComponent';
import type { IYearsCalendarProps } from '../interfaces';
import { capitalizeFirstLetter } from '../constants';

export const Months: FC<IYearsCalendarProps> = ({ viewDate, startDate, selected, validator, onClick }) => {
  const theme = useTheme() || LIGHT_THEME;
  const months = getMonthList(theme.currentLocale || 'ru');
  return (
    <>
      {months.map((month, index) => {
        const disabled = !!validator?.invalidMonth(index, viewDate.year());
        const handleClick = (e: any) => {
          e.preventDefault();
          const day = startOfMonth(setMonth(viewDate, index));
          !disabled && onClick && onClick(day, e);
        };
        return (
          <MonthComponent
            key={month}
            today={index === dayjs().month()}
            selected={!!(selected || startDate) && index === ((selected || startDate) as Dayjs).month()}
            disabled={disabled}
            onMouseDown={handleClick}
          >
            {capitalizeFirstLetter(month)}
          </MonthComponent>
        );
      })}
    </>
  );
};
