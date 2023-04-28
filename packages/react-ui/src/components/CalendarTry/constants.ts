export type CalendarViewMode = 'DATES' | 'MONTHS' | 'YEARS';
export type PickerTypeMode = 'DATE_MONTH_YEAR' | 'MONTH_YEAR' | 'YEAR';

export const DEFAULT_YEAR_COUNT = 20;

export type CornerKeys = 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
export type Corners = {
  [key in CornerKeys]?: boolean;
};
