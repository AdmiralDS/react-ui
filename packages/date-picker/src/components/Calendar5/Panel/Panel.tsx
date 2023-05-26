import { useTheme } from 'styled-components';
import { LIGHT_THEME, type Theme } from '@admiral-ds/react-ui';
import { PanelWrapper } from './PanelWrapper';
import { YearMonthDatePanel } from './YearMonthDatePanel';
import { YearMonthPanel } from './YearMonthPanel';
import { YearPanel } from './YearPanel';
import type { PanelProps } from './interfaces';

export const Panel = ({
  viewMode,
  pickerType,
  date,
  userLocale,
  locale,
  onNext,
  onPrevious,
  onMonthsViewShow,
  onMonthsViewHide,
  onYearsViewShow,
  onYearsViewHide,
}: PanelProps) => {
  const theme: Theme = useTheme() || LIGHT_THEME;
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
          onMonthsViewShow={onMonthsViewShow}
          onMonthsViewHide={onMonthsViewHide}
          onYearsViewShow={onYearsViewShow}
          onYearsViewHide={onYearsViewHide}
        />
      )}
      {pickerType === 'MONTH_YEAR' && (
        <YearMonthPanel
          viewMode={viewMode}
          date={date}
          locale={currentLocale}
          onNext={onNext}
          onPrevious={onPrevious}
          onYearsViewShow={onYearsViewShow}
          onYearsViewHide={onYearsViewHide}
        />
      )}
      {pickerType === 'YEAR' && (
        <YearPanel viewMode={viewMode} date={date} locale={currentLocale} onNext={onNext} onPrevious={onPrevious} />
      )}
    </PanelWrapper>
  );
};
