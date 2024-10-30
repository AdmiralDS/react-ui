import { useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';

import { setMonth, startOfMonth, getMonthList } from '../date-utils';
import { MonthComponent } from '../styled/MonthComponent';
import type { IYearsCalendarProps } from '../interfaces';
import { capitalizeFirstLetter } from '../constants';

export const Months: React.FC<IYearsCalendarProps> = ({ viewDate, startDate, selected, validator, onClick }) => {
  const theme = useTheme() || LIGHT_THEME;
  const months = getMonthList(theme.currentLocale || 'ru');
  return (
    <>
      {months.map((month, index) => {
        const disabled = !!validator?.invalidMonth(index, viewDate.getFullYear());
        const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
          e.preventDefault();
          const day = startOfMonth(setMonth(viewDate, index));
          !disabled && onClick && onClick(day, e);
        };
        return (
          <MonthComponent
            key={month}
            $today={index === new Date().getMonth()}
            $selected={!!(selected || startDate) && index === ((selected || startDate) as Date).getMonth()}
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
