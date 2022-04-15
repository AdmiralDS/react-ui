import React, { FC } from 'react';

import { after, dayInRange, endOfWeek, equal, sameDay, startOfWeek } from '../date-utils';
import { DayComponent } from '../styled/DayComponent';
import type { Corners } from '../constants';
import { DEFAULT_LOCALE_NAME } from '../constants';
import type { IDayCalendarProps } from '../interfaces';

export const Day: FC<IDayCalendarProps> = ({
  day,
  month,
  startDate,
  endDate,
  selected,
  activeDate,
  range,
  localeName = DEFAULT_LOCALE_NAME,
  validator,
  filterDate,
  onMouseEnter,
  onClick,
}) => {
  const disabled = !!validator?.invalidValue(day) || (filterDate && !filterDate(day));
  const outsideMonth = month !== undefined && month !== day.getMonth();
  const inSelectingRange =
    !disabled &&
    !!range &&
    !!startDate &&
    !!activeDate &&
    !endDate &&
    (after(activeDate, startDate) || equal(activeDate, startDate)) &&
    dayInRange(day, startDate, activeDate);
  const inRange = !!startDate && !!endDate && dayInRange(day, startDate, endDate);
  const rangeStart = !!startDate && sameDay(day, startDate);
  const rangeEnd = !!startDate && !!endDate && sameDay(day, endDate);
  const rangeSelectingStart = inSelectingRange && sameDay(day, startDate);
  const rangeSelectingEnd = inSelectingRange && sameDay(day, activeDate);

  const corners: Corners = {};
  if (startDate) {
    const weekStart = sameDay(day, startOfWeek(day, localeName));
    const weekEnd = sameDay(day, endOfWeek(day, localeName));
    const start = rangeStart || rangeSelectingStart;
    const end = rangeEnd || rangeSelectingEnd;
    // если endDate не определена, то активную дату мы не выделяем серым фоном
    corners['top-left'] = start || (weekStart && !end);
    corners['bottom-left'] = start || (weekStart && !end);
    corners['top-right'] = end || (weekEnd && !start);
    corners['bottom-right'] = end || (weekEnd && !start);
  }

  return (
    <DayComponent
      today={sameDay(day, new Date())}
      selected={sameDay(day, selected) || rangeStart || rangeEnd}
      inSelectingRange={inSelectingRange}
      isActiveDate={sameDay(day, activeDate)}
      corners={corners}
      inRange={inRange || inSelectingRange}
      disabled={disabled}
      outsideMonth={outsideMonth}
      onMouseEnter={(e) => !disabled && onMouseEnter && onMouseEnter(day, e)}
      onMouseDown={(e) => {
        e.preventDefault();
        !disabled && onClick && onClick(day, e);
      }}
      className={
        sameDay(day, selected) && !rangeStart && !rangeEnd
          ? 'ui-kit-calendar-day-component_selected'
          : 'ui-kit-calendar-day-component'
      }
    >
      {day.getDate()}
    </DayComponent>
  );
};
