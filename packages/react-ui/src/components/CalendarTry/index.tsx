import * as React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import styled, { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import { Month } from '#src/components/CalendarTry/Month';
import { Day } from '#src/components/CalendarTry/Day';
import { DayNames } from '#src/components/CalendarTry/DayNames';
import { Panel } from '#src/components/CalendarTry/Panel/Panel';
import { addMonths, subMonths } from '#src/components/Calendar/date-utils';

const CALENDAR_WIDTH = 284;
/*const YEARS_VIEW_PADDING = '20px 12px 16px';
const MONTHS_VIEW_PADDING = '20px 16px 4px';*/
const DAYS_VIEW_PADDING = '20px 12px 12px';

/*type CalendarComponentProps = {
  yearsView: boolean;
  monthsView: boolean;
};*/

export const CalendarWidgetWrapper = styled.div`
  position: relative;
  box-sizing: border-box;
  text-align: center;
  border: 0 none;
  //z-index: 0; /* to fix range rounded corners fill */

  padding: ${DAYS_VIEW_PADDING};

  width: ${CALENDAR_WIDTH}px;
  background: ${({ theme }) => theme.color['Special/Elevated BG']};
  ${typography['Body/Body 2 Long']}
  color: ${({ theme }) => theme.color['Neutral/Neutral 90']};
`;

export interface CalendarTryProps {
  selected?: Dayjs;
  renderDay?: (date: Dayjs) => React.ReactNode;
  onSelectDate?: (date: Dayjs) => void;
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
  ({ selected, renderDay, disabledDate, isHiddenDate, userLocale, onSelectDate, onPanelChange, locale }, ref) => {
    const getInitialViewDate = () => {
      const current = dayjs();
      if (selected) {
        return selected.locale(currentLocale || 'ru');
      } /*else {
        if (minDate && before(current, minDate)) {
          return minDate;
        } else if (maxDate && after(current, maxDate)) {
          return maxDate;
        }
      }*/
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

    const defaultRenderDay = (date: Dayjs) => {
      return (
        <Day
          key={date.valueOf()}
          date={date}
          selected={selected}
          disabled={disabledDate?.(date)}
          onSelectDate={onSelectDate}
          isHidden={isHiddenDate?.(date) || defaultIsHidden(date)}
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

    const renderPanel = () => {
      return (
        <Panel
          date={viewDate}
          userLocale={currentLocale}
          locale={locale}
          onNext={increaseMonth}
          onPrevious={decreaseMonth}
        />
      );
    };

    return currentLocale ? (
      <CalendarWidgetWrapper ref={ref}>
        {renderPanel()}
        <DayNames date={viewDate} />
        <Month date={viewDate} renderDay={renderDay || defaultRenderDay} selected={selected} />
      </CalendarWidgetWrapper>
    ) : null;
  },
);
