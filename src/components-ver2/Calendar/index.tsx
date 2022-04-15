import React, { useEffect, useState } from 'react';

import { DEFAULT_LOCALE_NAME, DEFAULT_YEAR_COUNT } from './constants';
import { getDefaultDateValidator } from './validator';
import { DayNames, Month, Months, Panel, Years } from './components';
import {
  addMonths,
  addYears,
  after,
  before,
  changeTime,
  equal,
  setMonth,
  setYear,
  subMonths,
  subYears,
  valid,
} from './date-utils';
import { CalendarComponent } from './styled/CalendarComponent';
import { ViewScreenType } from './interfaces';
import type { CalendarPropType, IDateSelectionProps } from './interfaces';

export type { CalendarPropType, IDateSelectionProps, ViewScreenType };

export const Calendar = React.forwardRef<HTMLDivElement, CalendarPropType>(
  (
    {
      startDate,
      endDate,
      validator,
      minDate,
      maxDate,
      selected,
      range,
      tooltipContainer,
      localeName = DEFAULT_LOCALE_NAME,
      filterDate,
      currentActiveView,
      currentActiveViewImportant,
      onChange,
      onDateIncreaseDecrease,
      onMonthSelect,
      onYearSelect,
      onViewEnter,
      onViewLeave,
      onViewMonthSelect,
      onViewYearSelect,
      ...props
    },
    ref,
  ) => {
    const getInitialViewDate = () => {
      const current = new Date();
      if (selected) {
        return selected;
      } else {
        if (minDate && before(current, minDate)) {
          return minDate;
        } else if (maxDate && after(current, maxDate)) {
          return maxDate;
        }
      }
      return current;
    };

    // дата, которую отображаем (в том числе в верхней панели)
    const [viewDate, setViewDate] = useState(getInitialViewDate());
    // активная дата, на которой сейчас ховер
    const [activeDate, setActiveDate] = useState<Date | null>(null);
    // отображаем выбор года
    const [yearsView, setYearsView] = useState(false);
    // отображаем выбор месяца
    const [monthsView, setMonthsView] = useState(false);

    // показать экран выбора года или месяца в зависимости от внешнего параметра currentActiveView
    useEffect(() => {
      if (currentActiveView === 'MONTH') {
        setYearsView(false);
        setMonthsView(true);
      }
      if (currentActiveView === 'YEAR') {
        setMonthsView(false);
        setYearsView(true);
      }
      if (currentActiveView === 'DAY') {
        setYearsView(false);
        setMonthsView(false);
      }
    }, [currentActiveView]);

    useEffect(() => {
      setViewDate(getInitialViewDate());
    }, [selected]);

    useEffect(() => {
      if (range && startDate) {
        changeYear(startDate.getFullYear());
        changeMonth(startDate.getMonth());
      }
    }, []);

    useEffect(() => {
      yearsView ? onViewEnter && onViewEnter('YEAR') : onViewLeave && onViewLeave('YEAR');
    }, [yearsView]);

    useEffect(() => {
      monthsView ? onViewEnter && onViewEnter('MONTH') : onViewLeave && onViewLeave('MONTH');
    }, [monthsView]);

    const getValidator = () => {
      return validator || getDefaultDateValidator(minDate, maxDate);
    };

    const handleYearsViewShow = () => {
      if (!currentActiveViewImportant) {
        setYearsView(true);
        setMonthsView(false);
      }
      onViewYearSelect && onViewYearSelect();
    };
    const handleYearsViewHide = () => {
      if (!currentActiveViewImportant) {
        setYearsView(false);
      }
      onViewYearSelect && onViewYearSelect();
    };

    const handleMonthsViewShow = () => {
      if (!currentActiveViewImportant) {
        setYearsView(false);
        setMonthsView(true);
      }
      onViewMonthSelect && onViewMonthSelect();
    };
    const handleMonthsViewHide = () => {
      if (!currentActiveViewImportant) {
        setMonthsView(false);
      }
      onViewMonthSelect && onViewMonthSelect();
    };

    const changeYear = (year: number) => setViewDate((date) => setYear(date, year));
    const changeMonth = (month: number) => setViewDate((date) => setMonth(date, month));

    const increaseYear = () =>
      setViewDate((date) => {
        const increase = addYears(date, yearsView ? DEFAULT_YEAR_COUNT : 1);
        onDateIncreaseDecrease && onDateIncreaseDecrease(increase);
        return increase;
      });
    const decreaseYear = () =>
      setViewDate((date) => {
        const decrease = subYears(date, yearsView ? DEFAULT_YEAR_COUNT : 1);
        onDateIncreaseDecrease && onDateIncreaseDecrease(decrease);
        return decrease;
      });

    const increaseMonth = () =>
      setViewDate((date) => {
        const increase = addMonths(date, 1);
        onDateIncreaseDecrease && onDateIncreaseDecrease(increase);
        return increase;
      });
    const decreaseMonth = () =>
      setViewDate((date) => {
        const decrease = subMonths(date, 1);
        onDateIncreaseDecrease && onDateIncreaseDecrease(decrease);
        return decrease;
      });

    const handleDayMouseEnter = (day: Date, _: any) => setActiveDate(day);
    const handleMonthMouseLeave = () => setActiveDate(null);

    const handleDayClick = (day: Date, event: any) => {
      let date = day;
      if (range || !equal(selected, date)) {
        date = changeTime(date, selected);
        if (range) {
          if (!startDate && !endDate) {
            onChange([date, null], event);
          } else if (startDate && !endDate) {
            if (before(date, startDate)) {
              onChange([date, null], event);
            } else {
              onChange([startDate, date], event);
            }
          } else if (!startDate && endDate) {
            if (before(date, endDate)) {
              onChange([date, endDate], event);
            } else {
              onChange([date, null], event);
            }
          }
          if (startDate && endDate) {
            onChange([date, null], event);
          }
        } else {
          onChange(date, event);
        }
      }
    };

    const handleYearClick = (date: Date) => {
      changeYear(date.getFullYear());
      !currentActiveViewImportant && setYearsView(false);
      onYearSelect && onYearSelect(date);
    };

    const handleMonthClick = (date: Date) => {
      changeMonth(date.getMonth());
      !currentActiveViewImportant && setMonthsView(false);
      onMonthSelect && onMonthSelect(date);
    };

    const renderPanel = () => (
      <Panel
        viewDate={viewDate}
        minDate={minDate}
        maxDate={maxDate}
        yearsView={yearsView}
        monthsView={monthsView}
        localeName={localeName}
        onYearsViewShow={handleYearsViewShow}
        onYearsViewHide={handleYearsViewHide}
        onMonthsViewShow={handleMonthsViewShow}
        onMonthsViewHide={handleMonthsViewHide}
        onNext={yearsView ? increaseYear : increaseMonth}
        onPrevious={yearsView ? decreaseYear : decreaseMonth}
        tooltipContainer={tooltipContainer}
      />
    );

    const renderMonth = () => (
      <>
        <DayNames date={viewDate} localeName={localeName} />
        <Month
          day={viewDate}
          startDate={startDate}
          endDate={endDate}
          selected={selected}
          activeDate={activeDate}
          range={range}
          localeName={localeName}
          validator={getValidator()}
          filterDate={filterDate}
          onMouseEnter={handleDayMouseEnter}
          onMouseLeave={handleMonthMouseLeave}
          onClick={handleDayClick}
        />
      </>
    );

    const renderMonths = () => (
      <Months
        viewDate={viewDate}
        startDate={startDate}
        endDate={endDate}
        selected={selected}
        localeName={localeName}
        range={range}
        validator={getValidator()}
        onClick={handleMonthClick}
      />
    );

    const renderYears = () => (
      <Years
        viewDate={viewDate}
        startDate={startDate}
        endDate={endDate}
        selected={selected}
        localeName={localeName}
        range={range}
        validator={getValidator()}
        onClick={handleYearClick}
      />
    );
    return (
      <CalendarComponent yearsView={yearsView} monthsView={monthsView} {...props} ref={ref}>
        {renderPanel()}
        {yearsView && renderYears()}
        {monthsView && renderMonths()}
        {!yearsView && !monthsView && renderMonth()}
      </CalendarComponent>
    );
  },
);

Calendar.defaultProps = {
  localeName: DEFAULT_LOCALE_NAME,
};

Calendar.displayName = 'Calendar';
