import * as React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
import styled from 'styled-components';

import { mediumGroupBorderRadius } from '#src/components/themes';
import { DEFAULT_YEAR_COUNT } from '#src/components/CalendarTry/constants';
import type { CalendarViewMode, PickerTypeMode } from '#src/components/CalendarTry/constants';
import type { CalendarWidgetTryProps } from '#src/components/CalendarTry/CalendarWidget';
import { CalendarWidgetTry } from '#src/components/CalendarTry/CalendarWidget';

dayjs.extend(isSameOrBefore);

const CalendarWrapper = styled.div`
  flex: 0 0 auto;
  display: flex;
  overflow: hidden;
  width: max-content;
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(props) => props.theme.shadow['Shadow 08']}
`;

export interface CalendarTryProps extends CalendarWidgetTryProps {
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
      selected,
      minDate,
      maxDate,
      onViewModeChange,
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
    const getViewDateLeft = (dateRight: Dayjs) => {
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
    const getViewDateRight = (dateLeft: Dayjs) => {
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
      return getViewDateRight(getInitialViewDateLeft());
    };
    const [viewDateLeft, setViewDateLeft] = React.useState<Dayjs>(getInitialViewDateLeft());
    const [viewDateRight, setViewDateRight] = React.useState<Dayjs>(getInitialViewDateRight());

    const handleViewDateLeftChange = (date: Dayjs) => setViewDateLeft(date);
    const handleViewDateRightChange = (date: Dayjs) => setViewDateRight(date);

    React.useEffect(() => {
      if (viewDateRight.isSameOrBefore(viewDateLeft, 'date')) {
        setViewDateRight(getViewDateRight(viewDateLeft));
      }
    }, [viewDateLeft]);

    React.useEffect(() => {
      if (viewDateLeft.isSameOrBefore(viewDateRight, 'date')) {
        setViewDateLeft(getViewDateLeft(viewDateRight));
      }
    }, [viewDateRight]);

    const getInitialViewMode = (pickerType: PickerTypeMode): CalendarViewMode => {
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
    const [viewModeLeft, setViewModeLeft] = React.useState<CalendarViewMode>(getInitialViewMode(pickerType));
    const [viewModeRight, setViewModeRight] = React.useState<CalendarViewMode>(getInitialViewMode(pickerType));

    const handleViewModeLeftChange = (viewMode: CalendarViewMode) => setViewModeLeft(viewMode);
    const handleViewModeRightChange = (viewMode: CalendarViewMode) => setViewModeRight(viewMode);

    return (
      <CalendarWrapper ref={ref}>
        <CalendarWidgetTry
          {...calendarWidgetProps}
          viewDate={viewDateLeft}
          onViewDateChange={handleViewDateLeftChange}
          viewMode={viewModeLeft}
          onViewModeChange={handleViewModeLeftChange}
        />
        <CalendarWidgetTry
          {...calendarWidgetProps}
          ref={ref}
          viewDate={viewDateRight}
          onViewDateChange={handleViewDateRightChange}
          viewMode={viewModeRight}
          onViewModeChange={handleViewModeRightChange}
        />
      </CalendarWrapper>
    );
  },
);

export const CalendarTry = React.forwardRef<HTMLDivElement, CalendarTryProps>(
  ({ doubleView = false, rangePicker = false, ...props }, ref) => {
    return doubleView && rangePicker ? (
      <DoubleCalendarTry {...props} rangePicker={rangePicker} ref={ref} />
    ) : (
      <SingleCalendarTry {...props} rangePicker={rangePicker} ref={ref} />
    );
  },
);
