import * as React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled, { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '@admiral-ds/react-ui';
import { typography } from '@admiral-ds/react-ui';
import { DayCell } from './CalendarContent/DayCell';
import { Panel } from './Panel/Panel';
import type { DateValidator } from './validator';
import { YearCell } from './CalendarContent/YearCell';
import type { Calendar5ViewMode, Picker5TypeMode } from './constants';
import { MonthCell } from './CalendarContent/MonthCell';
import { DEFAULT_YEAR_COUNT } from './constants';
import { YearsCalendarView } from './CalendarContent/YearsCalendarView';
import { MonthsCalendarView } from './CalendarContent/MonthsCalendarView';
import { DateCalendarView } from './CalendarContent/DateCalendarView';

const CALENDAR_WIDTH = 284;
const YEARS_VIEW_PADDING = '20px 12px 16px';
const MONTHS_VIEW_PADDING = '20px 12px 4px';
const DAYS_VIEW_PADDING = '20px 12px 12px';

export const CalendarWidgetWrapper = styled.div<{
  viewMode: Calendar5ViewMode;
}>`
  position: relative;
  box-sizing: border-box;
  text-align: center;
  border: 0 none;
  z-index: 0; /* для отрисовки белого кружка с синей рамочкой при ховере над датой в выбранном диапазоне */

  padding: ${(p) =>
    p.viewMode === 'YEARS' ? YEARS_VIEW_PADDING : p.viewMode === 'MONTHS' ? MONTHS_VIEW_PADDING : DAYS_VIEW_PADDING};

  flex: 0 0 auto;
  width: ${CALENDAR_WIDTH}px;
  background: ${({ theme }) => theme.color['Special/Elevated BG']};
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
`;

export interface CalendarWidgetTryProps {
  viewMode?: Calendar5ViewMode;
  onViewModeChange: (viewMode: Calendar5ViewMode) => void;
  pickerType?: Picker5TypeMode;
  rangePicker?: boolean;
  viewDate?: Dayjs;
  activeDate?: Dayjs;
  selected?: Dayjs;
  startDate?: Dayjs;
  endDate?: Dayjs;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  renderDateCell?: (date: Dayjs) => React.ReactNode;
  renderMonthCell?: (date: Dayjs) => React.ReactNode;
  renderYearCell?: (date: Dayjs) => React.ReactNode;
  validator?: DateValidator;
  onViewDateChange?: (date: Dayjs) => void;
  onActiveDateChange: (date: Dayjs | undefined) => void;
  onDateMouseEnter: (date: Dayjs, _: any) => void;
  onDateMouseLeave: () => void;
  onSelectDate?: (date: Dayjs) => void;
  onSelectMonth?: (date: Dayjs) => void;
  onSelectYear?: (date: Dayjs) => void;
  disabledDate?: (date: Dayjs) => boolean;
  isHiddenDate?: (date: Dayjs) => boolean;
  highlightSpecialDay?: (date: Dayjs) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
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

export const CalendarWidgetTry = React.forwardRef<HTMLDivElement, CalendarWidgetTryProps>(
  (
    {
      viewMode = 'DATES',
      onViewModeChange,
      pickerType = 'DATE_MONTH_YEAR',
      rangePicker = false,
      viewDate,
      activeDate,
      selected,
      startDate,
      endDate,
      minDate,
      maxDate,
      renderDateCell,
      renderMonthCell,
      renderYearCell,
      validator,
      disabledDate,
      isHiddenDate,
      highlightSpecialDay,
      userLocale,
      onSelectDate,
      onSelectMonth,
      onSelectYear,
      onViewDateChange,
      onActiveDateChange,
      onDateMouseEnter,
      onDateMouseLeave,
      locale,
    },
    ref,
  ) => {
    const getInitialViewDate = (): Dayjs => {
      const current = dayjs();
      if (viewDate) {
        return viewDate.locale(currentLocale || 'ru');
      }
      if (selected) {
        return selected.locale(currentLocale || 'ru');
      }
      if (minDate && current.isBefore(minDate)) {
        return minDate;
      }
      if (maxDate && current.isAfter(maxDate)) {
        return maxDate;
      }
      return current.locale(currentLocale || 'ru');
    };
    const theme = React.useContext(ThemeContext) || LIGHT_THEME;
    const [currentLocale, setCurrentLocale] = React.useState<string>();

    const defineLocale = userLocale || theme.currentLocale;
    if (currentLocale !== defineLocale) {
      import(`dayjs/locale/${defineLocale}.js`)
        .then(() => setCurrentLocale(defineLocale))
        .catch(() => {
          setCurrentLocale('ru');
        });
    }

    const [innerViewDate, setInnerViewDate] = React.useState<Dayjs>(getInitialViewDate());
    const finalViewDate = viewDate ?? innerViewDate;

    const clearActiveDate = () => onActiveDateChange(undefined);

    React.useEffect(() => {
      if (onViewDateChange) {
        onViewDateChange(innerViewDate);
      }
    }, [innerViewDate]);

    React.useEffect(() => {
      if (currentLocale) {
        setInnerViewDate(finalViewDate.locale(currentLocale));
      }
    }, [currentLocale]);

    const handleAreaMouseLeave = () => {
      clearActiveDate();
      onDateMouseLeave();
    };

    const defaultIsHidden = (date: Dayjs) => {
      return !date.isSame(finalViewDate, 'month');
    };

    const changeYear = (year: number) => setInnerViewDate(finalViewDate.year(year));
    const changeMonth = (month: number) => setInnerViewDate(finalViewDate.month(month));

    const handleYearClick = (date: Dayjs) => {
      changeYear(date.year());
      /*!currentActiveViewImportant && setYearsView(false);*/
      switch (pickerType) {
        case 'YEAR':
          setInnerViewDate(date);
          break;
        case 'MONTH_YEAR':
          clearActiveDate();
          onViewModeChange?.('MONTHS');
          break;
        default:
        case 'DATE_MONTH_YEAR':
          clearActiveDate();
          onViewModeChange?.('DATES');
          break;
      }
      onSelectYear && onSelectYear(date);
    };

    const handleMonthClick = (date: Dayjs) => {
      changeMonth(date.month());
      /*!currentActiveViewImportant && setMonthsView(false);*/
      switch (pickerType) {
        case 'YEAR':
          break;
        case 'MONTH_YEAR':
          setInnerViewDate(date);
          onViewModeChange?.('MONTHS');
          break;
        default:
        case 'DATE_MONTH_YEAR':
          clearActiveDate();
          onViewModeChange?.('DATES');
          break;
      }
      onSelectMonth && onSelectMonth(date);
    };

    const defaultRenderDateCell = (date: Dayjs) => {
      return (
        <DayCell
          key={date.valueOf()}
          date={date}
          startDate={rangePicker ? startDate : undefined}
          endDate={rangePicker ? endDate : undefined}
          selected={!rangePicker ? selected : undefined}
          activeDate={activeDate}
          disabled={disabledDate?.(date)}
          onSelectDate={onSelectDate}
          isHidden={isHiddenDate?.(date) || defaultIsHidden(date)}
          highlightSpecialDate={highlightSpecialDay}
          onMouseEnter={onDateMouseEnter}
        />
      );
    };
    const defaultRenderMonthCell = (date: Dayjs) => {
      return (
        <MonthCell
          key={date.valueOf()}
          date={date}
          activeDate={activeDate}
          startDate={rangePicker && pickerType === 'MONTH_YEAR' ? startDate : undefined}
          endDate={rangePicker && pickerType === 'MONTH_YEAR' ? endDate : undefined}
          selected={!rangePicker ? selected : undefined}
          onSelectMonth={handleMonthClick}
          disabled={!!validator?.invalidMonth(date.month(), date.year())}
          onMouseEnter={onDateMouseEnter}
        />
      );
    };
    const defaultRenderYearCell = (date: Dayjs) => {
      return (
        <YearCell
          key={date.valueOf()}
          date={date}
          activeDate={activeDate}
          startDate={rangePicker && pickerType === 'YEAR' ? startDate : undefined}
          endDate={rangePicker && pickerType === 'YEAR' ? endDate : undefined}
          selected={!rangePicker ? selected : undefined}
          onSelectYear={handleYearClick}
          disabled={!!validator?.invalidYear(date.year())}
          onMouseEnter={onDateMouseEnter}
        />
      );
    };

    const increaseMonth = () => setInnerViewDate(finalViewDate.add(1, 'month'));
    const decreaseMonth = () => setInnerViewDate(finalViewDate.subtract(1, 'month'));

    const increaseYear = () =>
      setInnerViewDate(finalViewDate.add(viewMode === 'YEARS' ? DEFAULT_YEAR_COUNT : 1, 'year'));
    const decreaseYear = () =>
      setInnerViewDate(finalViewDate.subtract(viewMode === 'YEARS' ? DEFAULT_YEAR_COUNT : 1, 'year'));

    const handleYearsViewShow = () => {
      onViewModeChange('YEARS');
      //onViewYearSelect && onViewYearSelect();
    };
    const handleYearsViewHide = () => {
      if (pickerType === 'DATE_MONTH_YEAR') {
        onViewModeChange('DATES');
        clearActiveDate();
      } else if (pickerType === 'MONTH_YEAR') {
        onViewModeChange('MONTHS');
        clearActiveDate();
      }
      //onViewYearSelect && onViewYearSelect();
    };

    const handleMonthsViewShow = () => {
      onViewModeChange('MONTHS');
      //onViewMonthSelect && onViewMonthSelect();
    };
    const handleMonthsViewHide = () => {
      if (pickerType === 'DATE_MONTH_YEAR') {
        onViewModeChange('DATES');
        clearActiveDate();
      }
      //onViewMonthSelect && onViewMonthSelect();
    };

    const renderPanel = () => {
      return (
        <Panel
          viewMode={viewMode}
          pickerType={pickerType}
          date={finalViewDate}
          userLocale={currentLocale}
          locale={locale}
          onNext={viewMode === 'DATES' ? increaseMonth : increaseYear}
          onPrevious={viewMode === 'DATES' ? decreaseMonth : decreaseYear}
          onMonthsViewShow={handleMonthsViewShow}
          onMonthsViewHide={handleMonthsViewHide}
          onYearsViewShow={handleYearsViewShow}
          onYearsViewHide={handleYearsViewHide}
        />
      );
    };
    const renderContent = () => {
      switch (viewMode) {
        case 'YEARS':
          return (
            <YearsCalendarView
              date={finalViewDate}
              renderCell={renderYearCell || defaultRenderYearCell}
              onMouseLeave={handleAreaMouseLeave}
            />
          );
        case 'MONTHS':
          return (
            <MonthsCalendarView
              date={finalViewDate}
              renderCell={renderMonthCell || defaultRenderMonthCell}
              onMouseLeave={handleAreaMouseLeave}
            />
          );
        case 'DATES':
        default:
          return (
            <DateCalendarView
              date={finalViewDate}
              renderCell={renderDateCell || defaultRenderDateCell}
              onMouseLeave={handleAreaMouseLeave}
            />
          );
      }
    };

    return currentLocale ? (
      <CalendarWidgetWrapper ref={ref} viewMode={viewMode}>
        {renderPanel()}
        {renderContent()}
      </CalendarWidgetWrapper>
    ) : null;
  },
);
