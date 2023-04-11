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
import { Panel } from '#src/components/CalendarTry/Panel';

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
  renderPanel?: (date: Dayjs) => React.ReactNode;
  onPanelChange?: (date: Dayjs) => void;
  userLocale?: string;
}

export const CalendarTry = React.forwardRef<HTMLDivElement, CalendarTryProps>(
  ({ selected, renderDay, disabledDate, isHiddenDate, userLocale, onSelectDate, onPanelChange, renderPanel }, ref) => {
    const getInitialViewDate = () => {
      const current = dayjs();
      if (selected) {
        return selected;
      } /*else {
        if (minDate && before(current, minDate)) {
          return minDate;
        } else if (maxDate && after(current, maxDate)) {
          return maxDate;
        }
      }*/
      return current;
    };
    const theme = React.useContext(ThemeContext) || LIGHT_THEME;
    const [currentLocale, setCurrentLocale] = React.useState<string>();
    const [viewDate, setViewDate] = React.useState(getInitialViewDate());

    const defineLocale = userLocale || theme.currentLocale;
    if (currentLocale !== defineLocale) {
      import(`dayjs/locale/${defineLocale}.js`)
        .then(() => setCurrentLocale(defineLocale))
        .catch(() => {
          setCurrentLocale('ru');
        });
    }

    const viewDateLocale = React.useMemo(() => viewDate.locale(currentLocale || 'ru'), [currentLocale]);
    React.useEffect(() => {
      onPanelChange?.(viewDateLocale);
    }, [viewDateLocale]);
    const defaultIsHidden = (date: Dayjs) => {
      return !date.isSame(viewDateLocale, 'month');
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

    const defaultRenderPanel = (date: Dayjs) => {
      return <Panel date={date} />;
    };

    return currentLocale ? (
      <CalendarWidgetWrapper ref={ref}>
        {renderPanel?.(viewDateLocale) || defaultRenderPanel(viewDateLocale)}
        <DayNames date={viewDateLocale} />
        <Month date={viewDateLocale} renderDay={renderDay || defaultRenderDay} selected={selected} />
      </CalendarWidgetWrapper>
    ) : null;
  },
);
