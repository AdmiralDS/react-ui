import * as React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';
import styled, { ThemeContext } from 'styled-components';
import { LIGHT_THEME, mediumGroupBorderRadius } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import { DayCell } from '#src/components/CalendarTry/CalendarContent/DayCell';
import { Panel } from '#src/components/CalendarTry/Panel/Panel';
import type { DateValidator } from '#src/components/CalendarTry/validator';
import { YearCell } from '#src/components/CalendarTry/CalendarContent/YearCell';
import type { CalendarViewMode, PickerTypeMode } from '#src/components/CalendarTry/constants';
import { MonthCell } from '#src/components/CalendarTry/CalendarContent/MonthCell';
import { DEFAULT_YEAR_COUNT } from '#src/components/CalendarTry/constants';
import { YearsCalendarView } from '#src/components/CalendarTry/CalendarContent/YearsCalendarView';
import { MonthsCalendarView } from '#src/components/CalendarTry/CalendarContent/MonthsCalendarView';
import { DateCalendarView } from '#src/components/CalendarTry/CalendarContent/DateCalendarView';

const CALENDAR_WIDTH = 284;
const YEARS_VIEW_PADDING = '20px 12px 16px';
const MONTHS_VIEW_PADDING = '20px 16px 4px';
const DAYS_VIEW_PADDING = '20px 12px 12px';

export const CalendarWidgetWrapper = styled.div<{ viewMode: CalendarViewMode }>`
  position: relative;
  box-sizing: border-box;
  text-align: center;
  border: 0 none;
  z-index: 0; /* для отрисовки белого кружка с синей рамочкой при ховере над датой в выбранном диапазоне */

  padding: ${(p) =>
    p.viewMode === 'YEARS' ? YEARS_VIEW_PADDING : p.viewMode === 'MONTHS' ? MONTHS_VIEW_PADDING : DAYS_VIEW_PADDING};

  flex: 0 0 auto;
  width: ${CALENDAR_WIDTH}px;
  //min-width: ${CALENDAR_WIDTH}px;
  background: ${({ theme }) => theme.color['Special/Elevated BG']};
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
  border-radius: ${(p) => mediumGroupBorderRadius(p.theme.shape)};
  ${(props) => props.theme.shadow['Shadow 08']}
`;

export interface CalendarTryProps {
  viewMode?: CalendarViewMode;
  onViewModeChange: (viewMode: CalendarViewMode) => void;
  pickerType?: PickerTypeMode;
  rangePicker?: boolean;
  selected?: Dayjs;
  startDate?: Dayjs;
  endDate?: Dayjs;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  renderDateCell?: (date: Dayjs) => React.ReactNode;
  renderMonthCell?: (date: Dayjs) => React.ReactNode;
  renderYearCell?: (date: Dayjs) => React.ReactNode;
  validator?: DateValidator;
  onSelectDate?: (date: Dayjs) => void;
  onSelectMonth?: (date: Dayjs) => void;
  onSelectYear?: (date: Dayjs) => void;
  disabledDate?: (date: Dayjs) => boolean;
  isHiddenDate?: (date: Dayjs) => boolean;
  highlightSpecialDay?: (date: Dayjs) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
  onViewDateChange?: (date: Dayjs) => void;
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

export const CalendarTry = React.forwardRef<HTMLDivElement, CalendarTryProps>(
  (
    {
      viewMode = 'DATES',
      onViewModeChange,
      pickerType = 'DATE_MONTH_YEAR',
      rangePicker = false,
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
      locale,
    },
    ref,
  ) => {
    const getInitialViewDate = (): Dayjs => {
      const current = dayjs();
      if (selected) {
        return selected.locale(currentLocale || 'ru');
      } else {
        if (minDate && current.isBefore(minDate)) {
          return minDate;
        } else if (maxDate && current.isAfter(maxDate)) {
          return maxDate;
        }
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

    const [viewDate, setViewDate] = React.useState<Dayjs>(getInitialViewDate());
    // активная дата, на которой сейчас ховер
    const [activeDate, setActiveDate] = React.useState<Dayjs | undefined>(undefined);

    React.useEffect(() => {
      if (onViewDateChange) {
        onViewDateChange(viewDate);
      }
    }, [viewDate]);

    React.useEffect(() => {
      if (currentLocale) {
        setViewDate((date) => {
          return date.locale(currentLocale);
        });
      }
    }, [currentLocale]);

    const handleDayMouseEnter = (date: Dayjs, _: any) => {
      setActiveDate(date);
    };
    const handleMonthMouseLeave = () => {
      setActiveDate(undefined);
    };

    const defaultIsHidden = (date: Dayjs) => {
      return !date.isSame(viewDate, 'month');
    };

    const changeYear = (year: number) => setViewDate((date) => date.year(year));
    const changeMonth = (month: number) => setViewDate((date) => date.month(month));

    const handleYearClick = (date: Dayjs) => {
      changeYear(date.year());
      /*!currentActiveViewImportant && setYearsView(false);*/
      switch (pickerType) {
        case 'YEAR':
          setViewDate(date);
          break;
        case 'MONTH_YEAR':
          onViewModeChange?.('MONTHS');
          break;
        default:
        case 'DATE_MONTH_YEAR':
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
          setViewDate(date);
          onViewModeChange?.('MONTHS');
          break;
        default:
        case 'DATE_MONTH_YEAR':
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
          startDate={startDate}
          endDate={endDate}
          selected={selected}
          activeDate={activeDate}
          disabled={disabledDate?.(date)}
          onSelectDate={onSelectDate}
          isHidden={isHiddenDate?.(date) || defaultIsHidden(date)}
          highlightSpecialDay={highlightSpecialDay}
          onMouseEnter={handleDayMouseEnter}
        />
      );
    };
    const defaultRenderMonthCell = (date: Dayjs) => {
      return (
        <MonthCell
          key={date.valueOf()}
          date={date}
          selected={selected}
          validator={validator}
          onSelectMonth={handleMonthClick}
        />
      );
    };
    const defaultRenderYearCell = (date: Dayjs) => {
      return (
        <YearCell
          key={date.valueOf()}
          date={date}
          selected={selected}
          validator={validator}
          onSelectYear={handleYearClick}
        />
      );
    };

    const increaseMonth = () =>
      setViewDate((date) => {
        const increase = date.add(1, 'month');
        //onDateIncreaseDecrease && onDateIncreaseDecrease(increase);
        return increase;
      });
    const decreaseMonth = () =>
      setViewDate((date) => {
        const decrease = date.subtract(1, 'month');
        //onDateIncreaseDecrease && onDateIncreaseDecrease(decrease);
        return decrease;
      });

    const increaseYear = () =>
      setViewDate((date) => {
        const increase = date.add(viewMode === 'YEARS' ? DEFAULT_YEAR_COUNT : 1, 'year');
        console.log(increase.format('DD-MM-YYYY'));
        /*onDateIncreaseDecrease && onDateIncreaseDecrease(increase);*/
        return increase;
      });
    const decreaseYear = () =>
      setViewDate((date) => {
        const decrease = date.subtract(viewMode === 'YEARS' ? DEFAULT_YEAR_COUNT : 1, 'year');
        console.log(decrease.format('DD-MM-YYYY'));
        /*onDateIncreaseDecrease && onDateIncreaseDecrease(decrease);*/
        return decrease;
      });

    const handleYearsViewShow = () => {
      onViewModeChange('YEARS');
      //onViewYearSelect && onViewYearSelect();
    };
    const handleYearsViewHide = () => {
      if (pickerType === 'DATE_MONTH_YEAR') {
        onViewModeChange('DATES');
      } else if (pickerType === 'MONTH_YEAR') {
        onViewModeChange('MONTHS');
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
      }
      //onViewMonthSelect && onViewMonthSelect();
    };

    const renderPanel = () => {
      return (
        <Panel
          viewMode={viewMode}
          pickerType={pickerType}
          date={viewDate}
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
      /*console.log(`selected: ${selected?.format('DD-MM-YYYY')}`);
      console.log(`startDate: ${startDate?.format('DD-MM-YYYY')}`);
      console.log(`endDate: ${endDate?.format('DD-MM-YYYY')}`);*/
      switch (viewMode) {
        case 'YEARS':
          return <YearsCalendarView date={viewDate} renderCell={renderYearCell || defaultRenderYearCell} />;
        case 'MONTHS':
          return <MonthsCalendarView date={viewDate} renderCell={renderMonthCell || defaultRenderMonthCell} />;
        case 'DATES':
        default:
          return (
            <DateCalendarView
              date={viewDate}
              renderCell={renderDateCell || defaultRenderDateCell}
              onMouseLeave={handleMonthMouseLeave}
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
