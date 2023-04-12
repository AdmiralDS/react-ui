import * as React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import styled, { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import { DayCell } from '#src/components/CalendarTry/CalendarContent/DayCell';
import { Panel } from '#src/components/CalendarTry/Panel/Panel';
import type { DateValidator } from '#src/components/CalendarTry/validator';
import { YearCell } from '#src/components/CalendarTry/CalendarContent/YearCell';
import type { CalendarViewMode } from '#src/components/CalendarTry/constants';
import { MonthCell } from '#src/components/CalendarTry/CalendarContent/MonthCell';
import { CalendarContent } from '#src/components/CalendarTry/CalendarContent/CalendarContent';

const CALENDAR_WIDTH = 284;
const YEARS_VIEW_PADDING = '20px 12px 16px';
const MONTHS_VIEW_PADDING = '20px 16px 4px';
const DAYS_VIEW_PADDING = '20px 12px 12px';

export const CalendarWidgetWrapper = styled.div<{ viewMode: CalendarViewMode }>`
  position: relative;
  box-sizing: border-box;
  text-align: center;
  border: 0 none;
  //z-index: 0; /* to fix range rounded corners fill */

  padding: ${(p) =>
    p.viewMode === 'YEARS' ? YEARS_VIEW_PADDING : p.viewMode === 'MONTHS' ? MONTHS_VIEW_PADDING : DAYS_VIEW_PADDING};

  width: ${CALENDAR_WIDTH}px;
  background: ${({ theme }) => theme.color['Special/Elevated BG']};
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
`;

export interface CalendarTryProps {
  viewMode?: CalendarViewMode;
  selected?: Dayjs;
  minDate?: Dayjs;
  maxDate?: Dayjs;
  renderCell?: (date: Dayjs, viewMode: CalendarViewMode) => React.ReactNode;
  validator?: DateValidator;
  onSelectDate?: (date: Dayjs) => void;
  onSelectMonth?: (date: Dayjs) => void;
  onSelectYear?: (date: Dayjs) => void;
  disabledDate?: (date: Dayjs) => boolean;
  isHiddenDate?: (date: Dayjs) => boolean;
  onPanelChange?: (date: Dayjs) => void;
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
      selected,
      minDate,
      maxDate,
      renderCell,
      validator,
      disabledDate,
      isHiddenDate,
      userLocale,
      onSelectDate,
      onSelectMonth,
      onSelectYear,
      onPanelChange,
      locale,
    },
    ref,
  ) => {
    const getInitialViewDate = () => {
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

    const [viewDate, setViewDate] = React.useState(getInitialViewDate());

    React.useEffect(() => {
      if (onPanelChange) {
        onPanelChange(viewDate);
      }
    }, [viewDate]);

    React.useEffect(() => {
      if (currentLocale) {
        setViewDate((date) => {
          return date.locale(currentLocale);
        });
      }
    }, [currentLocale]);

    const defaultIsHidden = (date: Dayjs) => {
      return !date.isSame(viewDate, 'month');
    };

    const handleYearClick = (date: Dayjs) => {
      /*changeYear(date.getFullYear());
      !currentActiveViewImportant && setYearsView(false);*/
      onSelectYear && onSelectYear(date);
    };

    const handleMonthClick = (date: Dayjs) => {
      /*changeMonth(date.getMonth());
      !currentActiveViewImportant && setMonthsView(false);*/
      onSelectMonth && onSelectMonth(date);
    };

    const defaultRenderCell = (date: Dayjs, viewMode: CalendarViewMode) => {
      if (viewMode === 'DATES') {
        return (
          <DayCell
            key={date.valueOf()}
            date={date}
            selected={selected}
            disabled={disabledDate?.(date)}
            onSelectDate={onSelectDate}
            isHidden={isHiddenDate?.(date) || defaultIsHidden(date)}
          />
        );
      }
      if (viewMode === 'MONTHS') {
        return (
          <MonthCell
            key={date.valueOf()}
            date={date}
            selected={selected}
            validator={validator}
            onSelectMonth={handleMonthClick}
          />
        );
      }
      if (viewMode === 'YEARS') {
        return (
          <YearCell
            key={date.valueOf()}
            date={date}
            selected={selected}
            validator={validator}
            onSelectYear={handleYearClick}
          />
        );
      }
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

    const renderPanel = () => {
      return (
        <Panel
          viewMode={viewMode}
          date={viewDate}
          userLocale={currentLocale}
          locale={locale}
          onNext={increaseMonth}
          onPrevious={decreaseMonth}
        />
      );
    };

    return currentLocale ? (
      <CalendarWidgetWrapper ref={ref} viewMode={viewMode}>
        {renderPanel()}
        <CalendarContent viewMode={viewMode} date={viewDate} renderCell={renderCell || defaultRenderCell} />
      </CalendarWidgetWrapper>
    ) : null;
  },
);
