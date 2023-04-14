import * as React from 'react';
import { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { PanelWrapper } from '#src/components/CalendarTry/Panel/PanelWrapper';
import { YearMonthDatePanel } from '#src/components/CalendarTry/Panel/YearMonthDatePanel';
import { YearMonthPanel } from '#src/components/CalendarTry/Panel/YearMonthPanel';
import { YearPanel } from '#src/components/CalendarTry/Panel/YearPanel';
import type { PanelProps } from '#src/components/CalendarTry/Panel/interfaces';

export const Panel = ({ viewMode, pickerType, date, userLocale, locale, onNext, onPrevious }: PanelProps) => {
  const theme = React.useContext(ThemeContext) || LIGHT_THEME;
  const defineLocale = userLocale || theme.currentLocale;
  const currentLocale = locale || theme.locales[defineLocale].calendar;
  const monthsView = viewMode === 'MONTHS';
  const yearsView = viewMode === 'YEARS';

  return (
    <PanelWrapper monthsView={monthsView} yearsView={yearsView}>
      {pickerType === 'DATE_MONTH_YEAR' && (
        <YearMonthDatePanel
          viewMode={viewMode}
          date={date}
          locale={currentLocale}
          onNext={onNext}
          onPrevious={onPrevious}
        />
      )}
      {pickerType === 'MONTH_YEAR' && (
        <YearMonthPanel
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
