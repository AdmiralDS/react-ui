import type { MouseEvent } from 'react';
import type { Dayjs } from 'dayjs';
import type { CalendarViewMode, PickerTypeMode } from '#src/components/CalendarTry/constants';

export interface PanelProps {
  viewMode: CalendarViewMode;
  pickerType: PickerTypeMode;
  date: Dayjs;
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

  onNext(event: MouseEvent<HTMLButtonElement>): void;
  onPrevious(event: MouseEvent<HTMLButtonElement>): void;
}

export interface PanelTypesProps {
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
