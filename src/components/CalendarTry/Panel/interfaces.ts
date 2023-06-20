import type { MouseEvent } from 'react';
import type { Dayjs } from 'dayjs';
import type { CalendarViewMode, PickerTypeMode } from '#src/components/CalendarTry/constants';

export interface BaseContentProps {
  viewMode: CalendarViewMode;
  date: Dayjs;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  locale: {
    backwardText?: string;
    forwardText?: string;
    nextMonthText?: string;
    previousMonthText?: string;
    returnText?: string;
    selectYearText?: string;
    selectMonthText?: string;
  };

  onNext(event: MouseEvent<HTMLButtonElement>): void;
  onPrevious(event: MouseEvent<HTMLButtonElement>): void;
}

interface YearsCallbacks {
  onYearsViewShow(event: MouseEvent<HTMLDivElement>): void;
  onYearsViewHide(event: MouseEvent<HTMLDivElement>): void;
}

interface MonthsCallbacks {
  onMonthsViewShow(event: MouseEvent<HTMLDivElement>): void;
  onMonthsViewHide(event: MouseEvent<HTMLDivElement>): void;
}

export interface PanelProps extends Omit<BaseContentProps, 'locale'>, YearsCallbacks, MonthsCallbacks {
  pickerType: PickerTypeMode;
  userLocale?: string;
  locale?: {
    backwardText?: string;
    forwardText?: string;
    nextMonthText?: string;
    previousMonthText?: string;
    returnText?: string;
    selectYearText?: string;
    selectMonthText?: string;
  };
}

export interface YearMonthDatePanelProps extends BaseContentProps, YearsCallbacks, MonthsCallbacks {}
export interface YearMonthPanelProps extends BaseContentProps, YearsCallbacks {}
