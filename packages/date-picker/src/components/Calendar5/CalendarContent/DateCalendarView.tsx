import * as React from "react";
import type { Dayjs } from "dayjs";
import { DayNames } from "./DayNames";
import { Month } from "./Month";
import type { Calendar5ViewMode } from "../constants";

export interface DateCalendarProps {
  date: Dayjs;
  renderCell: (date: Dayjs, viewMode: Calendar5ViewMode) => React.ReactNode;
  onMouseLeave: () => void;
}

export const DateCalendarView = ({
  date,
  renderCell,
  onMouseLeave,
}: DateCalendarProps) => {
  return (
    <>
      <DayNames date={date} />
      <Month onMouseLeave={onMouseLeave} date={date} renderCell={renderCell} />
    </>
  );
};
