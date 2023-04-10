import * as React from 'react';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import styled, { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { typography } from '#src/components/Typography';
import { Month } from '#src/components/CalendarTry/Month';
import { Day } from '#src/components/CalendarTry/Day';

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
  viewDate: Dayjs;
  selected?: Dayjs;
  renderDay?: (date: Dayjs) => React.ReactNode;
  onClickHandler?: (date: Dayjs) => void;
  filterDate?: (date: Dayjs) => boolean;
  userLocale?: string;
}

export const CalendarTry = React.forwardRef<HTMLDivElement, CalendarTryProps>(
  ({ viewDate, selected, renderDay, filterDate, userLocale, onClickHandler }, ref) => {
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

    const viewDateLocale = React.useMemo(() => viewDate.locale(currentLocale || 'ru'), [currentLocale]);

    const defaultRenderDay = (date: Dayjs) => {
      return (
        <Day
          key={date.valueOf()}
          viewDate={viewDate}
          date={date}
          selected={selected}
          disabled={filterDate?.(date)}
          onClickHandler={onClickHandler}
        />
      );
    };

    return currentLocale ? (
      <CalendarWidgetWrapper ref={ref}>
        <div>{viewDateLocale.format('MMMM YYYY')}</div>
        <Month viewDate={viewDateLocale} renderDay={renderDay || defaultRenderDay} selected={selected} />
      </CalendarWidgetWrapper>
    ) : null;
  },
);
