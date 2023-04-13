import * as React from 'react';
import type { MouseEvent } from 'react';
import type { Dayjs } from 'dayjs';
import { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { PanelWrapper } from '#src/components/CalendarTry/Panel/PanelWrapper';
import type { CalendarViewMode, PickerTypeMode } from '#src/components/CalendarTry/constants';
import { DateMonthYearPanel, MonthYearPanel, YearPanel } from '#src/components/CalendarTry/Panel/PanelTypes';

interface PanelProps {
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

export const Panel = ({ viewMode, pickerType, date, userLocale, locale, onNext, onPrevious }: PanelProps) => {
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
  const defineLocale = userLocale || theme.currentLocale;
  const currentLocale = locale || theme.locales[defineLocale].calendar;
  const monthsView = viewMode === 'MONTHS';
  const yearsView = viewMode === 'YEARS';

  return (
    <PanelWrapper monthsView={monthsView} yearsView={yearsView}>
      {pickerType === 'DATE_MONTH_YEAR' && (
        <DateMonthYearPanel
          viewMode={viewMode}
          date={date}
          locale={currentLocale}
          onNext={onNext}
          onPrevious={onPrevious}
        />
      )}
      {pickerType === 'MONTH_YEAR' && (
        <MonthYearPanel
          viewMode={viewMode}
          date={date}
          locale={currentLocale}
          onNext={onNext}
          onPrevious={onPrevious}
        />
      )}
      {pickerType === 'YEAR' && (
        <YearPanel viewMode={viewMode} date={date} locale={currentLocale} onNext={onNext} onPrevious={onPrevious} />
      )}
    </PanelWrapper>
  );
};
