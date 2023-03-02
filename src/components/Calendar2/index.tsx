import * as React from 'react';

import { DEFAULT_YEAR_COUNT } from '#src/components/Calendar2/constants';
import { getDefaultDateValidator } from '#src/components/Calendar2/validator';
import { DayNames, Month, Months, Panel, Years } from '#src/components/Calendar2/components';
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
} from '#src/components/Calendar2/date-utils';
import { CalendarComponent, CalendarWrapper } from '#src/components/Calendar2/styled/CalendarComponent';
import type { CalendarPropType, IDateSelectionProps, ViewScreenType } from '#src/components/Calendar2/interfaces';

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
      doubleViewRange,
      tooltipContainer,
      filterDate,
      currentActiveView,
      currentActiveViewImportant,
      locale,
      onChange,
      onDateIncreaseDecrease,
      onMonthSelect,
      onYearSelect,
      onViewEnter,
      onViewLeave,
      onViewMonthSelect,
      onViewYearSelect,
      highlightSpecialDay = (date: Date) => undefined,
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

    // активная дата, на которой сейчас ховер
    const [activeDate, setActiveDate] = React.useState<Date | null>(null);
    // дата, которую отображаем (в том числе в верхней панели)
    const [viewDate, setViewDate] = React.useState(getInitialViewDate());
    const [viewDateRight, setViewDateRight] = React.useState(getInitialViewDate());
    // отображаем выбор года
    const [yearsView, setYearsView] = React.useState(false);
    const [yearsViewRight, setYearsViewRight] = React.useState(false);
    // отображаем выбор месяца
    const [monthsView, setMonthsView] = React.useState(false);
    const [monthsViewRight, setMonthsViewRight] = React.useState(false);

    // показать экран выбора года или месяца в зависимости от внешнего параметра currentActiveView
    React.useEffect(() => {
      if (currentActiveView === 'MONTH') {
        setYearsView(false);
        setYearsViewRight(false);
        setMonthsView(true);
        setMonthsViewRight(true);
      }
      if (currentActiveView === 'YEAR') {
        setMonthsView(false);
        setMonthsViewRight(false);
        setYearsView(true);
        setYearsViewRight(true);
      }
      if (currentActiveView === 'DAY') {
        setYearsView(false);
        setYearsViewRight(false);
        setMonthsView(false);
        setMonthsViewRight(false);
      }
    }, [currentActiveView]);

    React.useEffect(() => {
      setViewDate(getInitialViewDate());
    }, [selected]);

    React.useEffect(() => {
      if (range && startDate) {
        changeYear(startDate.getFullYear());
        changeMonth(startDate.getMonth());
      }
    }, []);

    React.useEffect(() => {
      yearsView || yearsViewRight ? onViewEnter && onViewEnter('YEAR') : onViewLeave && onViewLeave('YEAR');
    }, [yearsView, yearsViewRight]);

    React.useEffect(() => {
      monthsView || monthsViewRight ? onViewEnter && onViewEnter('MONTH') : onViewLeave && onViewLeave('MONTH');
    }, [monthsView, monthsViewRight]);

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
    const handleYearsViewShowRight = () => {
      if (!currentActiveViewImportant) {
        setYearsViewRight(true);
        setMonthsViewRight(false);
      }
      onViewYearSelect && onViewYearSelect();
    };
    const handleYearsViewHide = () => {
      if (!currentActiveViewImportant) {
        setYearsView(false);
      }
      onViewYearSelect && onViewYearSelect();
    };
    const handleYearsViewHideRight = () => {
      if (!currentActiveViewImportant) {
        setYearsViewRight(false);
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
    const handleMonthsViewShowRight = () => {
      if (!currentActiveViewImportant) {
        setYearsViewRight(false);
        setMonthsViewRight(true);
      }
      onViewMonthSelect && onViewMonthSelect();
    };
    const handleMonthsViewHide = () => {
      if (!currentActiveViewImportant) {
        setMonthsView(false);
      }
      onViewMonthSelect && onViewMonthSelect();
    };
    const handleMonthsViewHideRight = () => {
      if (!currentActiveViewImportant) {
        setMonthsViewRight(false);
      }
      onViewMonthSelect && onViewMonthSelect();
    };

    const changeYear = (year: number) => setViewDate((date) => setYear(date, year));
    const changeYearRight = (year: number) => setViewDateRight((date) => setYear(date, year));
    const changeMonth = (month: number) => setViewDate((date) => setMonth(date, month));
    const changeMonthRight = (month: number) => setViewDateRight((date) => setMonth(date, month));

    const increaseYear = (date: Date, yearsView: boolean) => {
      const increase = addYears(date, yearsView ? DEFAULT_YEAR_COUNT : 1);
      onDateIncreaseDecrease && onDateIncreaseDecrease(increase);
      return increase;
    };
    const handleIncreaseYear = () => {
      setViewDate((date) => increaseYear(date, yearsView));
    };
    const handleIncreaseYearRight = () => {
      setViewDateRight((date) => increaseYear(date, yearsViewRight));
    };

    const decreaseYear = (date: Date, yearsView: boolean) => {
      const decrease = subYears(date, yearsView ? DEFAULT_YEAR_COUNT : 1);
      onDateIncreaseDecrease && onDateIncreaseDecrease(decrease);
      return decrease;
    };
    const handleDecreaseYear = () => {
      setViewDate((date) => decreaseYear(date, yearsView));
    };
    const handleDecreaseYearRight = () => {
      setViewDateRight((date) => decreaseYear(date, yearsViewRight));
    };

    const increaseMonth = (date: Date) => {
      const increase = addMonths(date, 1);
      onDateIncreaseDecrease && onDateIncreaseDecrease(increase);
      return increase;
    };
    const handleIncreaseMonth = () => {
      setViewDate((date) => increaseMonth(date));
    };
    const handleIncreaseMonthRight = () => {
      setViewDateRight((date) => increaseMonth(date));
    };

    const decreaseMonth = (date: Date) => {
      const decrease = subMonths(date, 1);
      onDateIncreaseDecrease && onDateIncreaseDecrease(decrease);
      return decrease;
    };
    const handleDecreaseMonth = () => {
      setViewDate((date) => decreaseMonth(date));
    };
    const handleDecreaseMonthRight = () => {
      setViewDateRight((date) => decreaseMonth(date));
    };

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
    const handleYearClickRight = (date: Date) => {
      changeYearRight(date.getFullYear());
      !currentActiveViewImportant && setYearsViewRight(false);
      onYearSelect && onYearSelect(date);
    };

    const handleMonthClick = (date: Date) => {
      changeMonth(date.getMonth());
      !currentActiveViewImportant && setMonthsView(false);
      onMonthSelect && onMonthSelect(date);
    };
    const handleMonthClickRight = (date: Date) => {
      changeMonthRight(date.getMonth());
      !currentActiveViewImportant && setMonthsViewRight(false);
      onMonthSelect && onMonthSelect(date);
    };

    const renderPanel = () => (
      <Panel
        viewDate={viewDate}
        minDate={minDate}
        maxDate={maxDate}
        yearsView={yearsView}
        monthsView={monthsView}
        locale={locale}
        onYearsViewShow={handleYearsViewShow}
        onYearsViewHide={handleYearsViewHide}
        onMonthsViewShow={handleMonthsViewShow}
        onMonthsViewHide={handleMonthsViewHide}
        onNext={yearsView ? handleIncreaseYear : handleIncreaseMonth}
        onPrevious={yearsView ? handleDecreaseYear : handleDecreaseMonth}
        tooltipContainer={tooltipContainer}
      />
    );

    const renderPanelRight = () => (
      <Panel
        viewDate={viewDateRight}
        minDate={minDate}
        maxDate={maxDate}
        yearsView={yearsViewRight}
        monthsView={monthsViewRight}
        locale={locale}
        onYearsViewShow={handleYearsViewShowRight}
        onYearsViewHide={handleYearsViewHideRight}
        onMonthsViewShow={handleMonthsViewShowRight}
        onMonthsViewHide={handleMonthsViewHideRight}
        onNext={yearsViewRight ? handleIncreaseYearRight : handleIncreaseMonthRight}
        onPrevious={yearsViewRight ? handleDecreaseYearRight : handleDecreaseMonthRight}
        tooltipContainer={tooltipContainer}
      />
    );

    const renderMonth = () => (
      <>
        <DayNames date={viewDate} />
        <Month
          day={viewDate}
          startDate={startDate}
          endDate={endDate}
          selected={selected}
          activeDate={activeDate}
          range={range}
          validator={getValidator()}
          filterDate={filterDate}
          onMouseEnter={handleDayMouseEnter}
          onMouseLeave={handleMonthMouseLeave}
          onClick={handleDayClick}
          highlightSpecialDay={highlightSpecialDay}
        />
      </>
    );

    const renderMonthRight = () => (
      <>
        <DayNames date={viewDateRight} />
        <Month
          day={viewDateRight}
          startDate={startDate}
          endDate={endDate}
          selected={selected}
          activeDate={activeDate}
          range={range}
          validator={getValidator()}
          filterDate={filterDate}
          onMouseEnter={handleDayMouseEnter}
          onMouseLeave={handleMonthMouseLeave}
          onClick={handleDayClick}
          highlightSpecialDay={highlightSpecialDay}
        />
      </>
    );

    const renderMonths = () => (
      <Months
        viewDate={viewDate}
        startDate={startDate}
        endDate={endDate}
        selected={selected}
        range={range}
        validator={getValidator()}
        onClick={handleMonthClick}
      />
    );
    const renderMonthsRight = () => (
      <Months
        viewDate={viewDateRight}
        startDate={startDate}
        endDate={endDate}
        selected={selected}
        range={range}
        validator={getValidator()}
        onClick={handleMonthClickRight}
      />
    );

    const renderYears = () => (
      <Years
        viewDate={viewDate}
        startDate={startDate}
        endDate={endDate}
        selected={selected}
        range={range}
        validator={getValidator()}
        onClick={handleYearClick}
      />
    );
    const renderYearsRight = () => (
      <Years
        viewDate={viewDateRight}
        startDate={startDate}
        endDate={endDate}
        selected={selected}
        range={range}
        validator={getValidator()}
        onClick={handleYearClickRight}
      />
    );
    return (
      <CalendarWrapper ref={ref}>
        {!doubleViewRange ? (
          <CalendarComponent yearsView={yearsView} monthsView={monthsView} {...props}>
            {renderPanel()}
            {yearsView && renderYears()}
            {monthsView && renderMonths()}
            {!yearsView && !monthsView && renderMonth()}
          </CalendarComponent>
        ) : (
          <>
            <CalendarComponent yearsView={yearsView} monthsView={monthsView} {...props}>
              {renderPanel()}
              {yearsView && renderYears()}
              {monthsView && renderMonths()}
              {!yearsView && !monthsView && renderMonth()}
            </CalendarComponent>
            <CalendarComponent yearsView={yearsViewRight} monthsView={monthsViewRight} {...props}>
              {renderPanelRight()}
              {yearsViewRight && renderYearsRight()}
              {monthsViewRight && renderMonthsRight()}
              {!yearsViewRight && !monthsViewRight && renderMonthRight()}
            </CalendarComponent>
          </>
        )}
      </CalendarWrapper>
    );
  },
);

Calendar.displayName = 'Calendar';
