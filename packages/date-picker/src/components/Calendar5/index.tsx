import * as React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import styled from 'styled-components';

import { mediumGroupBorderRadius } from '@admiral-ds/react-ui';
import { DEFAULT_YEAR_COUNT } from './constants';
import type { Calendar5ViewMode, Picker5TypeMode } from './constants';
import type { CalendarWidgetTryProps } from './CalendarWidget';
import { CalendarWidgetTry } from './CalendarWidget';
import { yearsRange } from './utils';

dayjs.extend(isSameOrBefore);

export * from './constants';
export * from './CalendarContent/DayCell';

const CalendarWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  overflow: hidden;
  width: max-content;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(props) => props.theme.shadow['Shadow 08']}
`;

export interface Calendar5Props
  extends Omit<CalendarWidgetTryProps, 'onActiveDateChange' | 'onDateMouseEnter' | 'onDateMouseLeave'> {
  doubleView?: boolean;
}

const SingleCalendarTry = React.forwardRef<HTMLDivElement, CalendarWidgetTryProps>(({ ...props }, ref) => {
  return (
    <CalendarWrapper ref={ref}>
      <CalendarWidgetTry {...props} />
    </CalendarWrapper>
  );
});

const DoubleCalendarTry = React.forwardRef<HTMLDivElement, CalendarWidgetTryProps>(
  (
    {
      rangePicker = false,
      pickerType = 'DATE_MONTH_YEAR',
      viewMode,
      viewDate,
      activeDate,
      selected,
      minDate,
      maxDate,
      onViewModeChange,
      onActiveDateChange,
      onDateMouseEnter,
      onDateMouseLeave,
      ...props
    },
    ref,
  ) => {
    const calendarWidgetProps = {
      viewMode,
      pickerType,
      rangePicker,
      selected,
      minDate,
      maxDate,
      ...props,
    } as Record<string, any>;

    const getInitialViewDateLeft = (): Dayjs => {
      const current = dayjs();
      if (selected) {
        return selected;
      }
      if (minDate && current.isBefore(minDate)) {
        return minDate;
      }
      if (maxDate && current.isAfter(maxDate)) {
        return maxDate;
      }
      return current;
    };
    const compareYearsRange = (dateLeft: Dayjs, dateRight: Dayjs) => {
      const rangeLeft = yearsRange(dateLeft, DEFAULT_YEAR_COUNT);
      const rangeRight = yearsRange(dateRight, DEFAULT_YEAR_COUNT);
      return rangeLeft.start - rangeRight.start;
    };
    const dateLeftIsSameOrAfter = (dateLeft: Dayjs, dateRight: Dayjs) => {
      switch (pickerType) {
        case 'YEAR':
          return compareYearsRange(dateLeft, dateRight) >= 0;
        case 'MONTH_YEAR':
          return dateLeft.isSameOrAfter(dateRight, 'year');
        case 'DATE_MONTH_YEAR':
        default:
          return dateLeft.isSameOrAfter(dateRight, 'date');
      }
    };
    const dateRightIsSameOrBefore = (dateLeft: Dayjs, dateRight: Dayjs) => {
      switch (pickerType) {
        case 'YEAR':
          return compareYearsRange(dateLeft, dateRight) <= 0;
        case 'MONTH_YEAR':
          return dateRight.isSameOrBefore(dateLeft, 'year');
        case 'DATE_MONTH_YEAR':
        default:
          return dateRight.isSameOrBefore(dateLeft, 'date');
      }
    };
    const decreaseDate = (dateRight: Dayjs) => {
      switch (pickerType) {
        case 'YEAR':
          return dateRight.subtract(DEFAULT_YEAR_COUNT, 'year');
        case 'MONTH_YEAR':
          return dateRight.subtract(1, 'year');
        case 'DATE_MONTH_YEAR':
        default:
          return dateRight.subtract(1, 'month');
      }
    };
    const increaseDate = (dateLeft: Dayjs) => {
      switch (pickerType) {
        case 'YEAR':
          return dateLeft.add(DEFAULT_YEAR_COUNT, 'year');
        case 'MONTH_YEAR':
          return dateLeft.add(1, 'year');
        case 'DATE_MONTH_YEAR':
        default:
          return dateLeft.add(1, 'month');
      }
    };
    const getInitialViewDateRight = (): Dayjs => {
      return increaseDate(getInitialViewDateLeft());
    };

    const [viewDateLeft, setViewDateLeft] = React.useState<Dayjs>(getInitialViewDateLeft());
    const [viewDateRight, setViewDateRight] = React.useState<Dayjs>(getInitialViewDateRight());

    const handleViewDateLeftChange = (date: Dayjs) => setViewDateLeft(date);
    const handleViewDateRightChange = (date: Dayjs) => setViewDateRight(date);

    React.useEffect(() => {
      if (dateRightIsSameOrBefore(viewDateLeft, viewDateRight)) {
        setViewDateRight(increaseDate(viewDateLeft));
      }
    }, [viewDateLeft]);

    React.useEffect(() => {
      if (dateLeftIsSameOrAfter(viewDateLeft, viewDateRight)) {
        setViewDateLeft(decreaseDate(viewDateRight));
      }
    }, [viewDateRight]);

    const getInitialViewMode = (pickerType: Picker5TypeMode): Calendar5ViewMode => {
      switch (pickerType) {
        case 'YEAR':
          return 'YEARS';
        case 'MONTH_YEAR':
          return 'MONTHS';
        case 'DATE_MONTH_YEAR':
        default:
          return 'DATES';
      }
    };
    const [viewModeLeft, setViewModeLeft] = React.useState<Calendar5ViewMode>(getInitialViewMode(pickerType));
    const [viewModeRight, setViewModeRight] = React.useState<Calendar5ViewMode>(getInitialViewMode(pickerType));

    const handleViewModeLeftChange = (viewMode: Calendar5ViewMode) => setViewModeLeft(viewMode);
    const handleViewModeRightChange = (viewMode: Calendar5ViewMode) => setViewModeRight(viewMode);
    React.useEffect(() => {
      switch (pickerType) {
        case 'DATE_MONTH_YEAR':
          setViewModeLeft('DATES');
          setViewModeRight('DATES');
          break;
        case 'MONTH_YEAR':
          setViewModeLeft('MONTHS');
          setViewModeRight('MONTHS');
          break;
        case 'YEAR':
          setViewModeLeft('YEARS');
          setViewModeRight('YEARS');
          break;
      }
      //resetDateStates1();
    }, [pickerType]);

    return (
      <CalendarWrapper ref={ref}>
        <CalendarWidgetTry
          {...calendarWidgetProps}
          viewDate={viewDateLeft}
          activeDate={activeDate}
          onViewDateChange={handleViewDateLeftChange}
          viewMode={viewModeLeft}
          onViewModeChange={handleViewModeLeftChange}
          onDateMouseEnter={onDateMouseEnter}
          onDateMouseLeave={onDateMouseLeave}
          onActiveDateChange={onActiveDateChange}
        />
        <CalendarWidgetTry
          {...calendarWidgetProps}
          viewDate={viewDateRight}
          activeDate={activeDate}
          onViewDateChange={handleViewDateRightChange}
          viewMode={viewModeRight}
          onViewModeChange={handleViewModeRightChange}
          onDateMouseEnter={onDateMouseEnter}
          onDateMouseLeave={onDateMouseLeave}
          onActiveDateChange={onActiveDateChange}
        />
      </CalendarWrapper>
    );
  },
);

export const Calendar5 = React.forwardRef<HTMLDivElement, Calendar5Props>(
  ({ doubleView = false, rangePicker = false, ...props }, ref) => {
    // активная дата, на которой сейчас ховер
    const [activeDate, setActiveDate] = React.useState<Dayjs | undefined>(undefined);
    const handleActiveDateChange = (date: Dayjs | undefined) => setActiveDate(date);
    const clearActiveDate = () => setActiveDate(undefined);

    const handleDateMouseEnter = (date: Dayjs, _: any) => {
      setActiveDate(date);
    };
    const handleAreaMouseLeave = () => {
      clearActiveDate();
    };
    return doubleView && rangePicker ? (
      <DoubleCalendarTry
        {...props}
        activeDate={activeDate}
        onActiveDateChange={handleActiveDateChange}
        onDateMouseEnter={handleDateMouseEnter}
        onDateMouseLeave={handleAreaMouseLeave}
        rangePicker={rangePicker}
        ref={ref}
      />
    ) : (
      <SingleCalendarTry
        {...props}
        activeDate={activeDate}
        onActiveDateChange={handleActiveDateChange}
        onDateMouseEnter={handleDateMouseEnter}
        onDateMouseLeave={handleAreaMouseLeave}
        rangePicker={rangePicker}
        ref={ref}
      />
    );
  },
);
