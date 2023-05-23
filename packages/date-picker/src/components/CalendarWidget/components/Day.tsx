import * as React from "react";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import { ThemeContext } from "styled-components";
import { LIGHT_THEME } from "@admiral-ds/react-ui";

import { dayInRange, endOfWeek, sameDay, startOfWeek } from "../date-utils";
import { DayComponent } from "../styled/DayComponent";
import type { Corners } from "../constants";
import type { IDayCalendarProps } from "../../Calendar3/interfaces";

dayjs.extend(isSameOrAfter);

interface ICalendarDayProps extends IDayCalendarProps {
  userLocale?: string;
}

export const Day = ({
  day,
  month,
  startDate,
  endDate,
  selected,
  activeDate,
  range,
  validator,
  filterDate,
  onMouseEnter,
  onClick,
  highlightSpecialDay,
  userLocale,
}: ICalendarDayProps) => {
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
  const disabled =
    !!validator?.invalidValue(day) || (filterDate && !filterDate(day));
  const outsideMonth = month !== undefined && month !== day.month();
  const inSelectingRange =
    !disabled &&
    !!range &&
    !!startDate &&
    !!activeDate &&
    !endDate &&
    activeDate.isSameOrAfter(startDate) &&
    dayInRange(day, startDate, activeDate);
  const inRange =
    !!startDate && !!endDate && dayInRange(day, startDate, endDate);
  const rangeStart = !!startDate && sameDay(day, startDate);
  const rangeEnd = !!startDate && !!endDate && sameDay(day, endDate);
  const rangeSelectingStart = inSelectingRange && sameDay(day, startDate);
  const rangeSelectingEnd = inSelectingRange && sameDay(day, activeDate);
  const currentLocale = userLocale || theme.currentLocale || "ru";

  const corners: Corners = {};
  if (startDate) {
    const weekStart = sameDay(day, startOfWeek(day, currentLocale));
    const weekEnd = sameDay(day, endOfWeek(day, currentLocale));
    const start = rangeStart || rangeSelectingStart;
    const end = rangeEnd || rangeSelectingEnd;
    // если endDate не определена, то активную дату мы не выделяем серым фоном
    corners["top-left"] = start || (weekStart && !end);
    corners["bottom-left"] = start || (weekStart && !end);
    corners["top-right"] = end || (weekEnd && !start);
    corners["bottom-right"] = end || (weekEnd && !start);
  }

  return (
    <DayComponent
      today={sameDay(day, dayjs())}
      selected={sameDay(day, selected) || rangeStart || rangeEnd}
      inSelectingRange={inSelectingRange}
      isActiveDate={sameDay(day, activeDate)}
      corners={corners}
      inRange={inRange || inSelectingRange}
      disabled={disabled}
      outsideMonth={outsideMonth}
      highlightSpecialDayMixin={highlightSpecialDay(day)}
      onMouseEnter={(e) => !disabled && onMouseEnter && onMouseEnter(day, e)}
      onMouseDown={(e) => {
        e.preventDefault();
        !disabled && onClick && onClick(day, e);
      }}
      className={
        sameDay(day, selected) && !rangeStart && !rangeEnd
          ? "ui-kit-calendar-day-component_selected"
          : "ui-kit-calendar-day-component"
      }
    >
      {day.date()}
    </DayComponent>
  );
};
