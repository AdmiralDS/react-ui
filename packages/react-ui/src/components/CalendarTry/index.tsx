import * as React from 'react';
import type { Dayjs } from 'dayjs';
import 'dayjs/locale/ru';
import dayjs from 'dayjs';
import styled, { ThemeContext } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import type { DayProps } from '#src/components/CalendarTry/Day';
import { defaultRenderDay } from '#src/components/CalendarTry/Day';
import { Week } from '#src/components/CalendarTry/Week';
import { typography } from '#src/components/Typography';
import {Month} from "#src/components/CalendarTry/Month";

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
  date: Dayjs;
  selected?: Dayjs;
  renderDay?: (props: DayProps) => React.ReactNode;
  userLocale?: string;
}

export const CalendarTry = React.forwardRef<HTMLDivElement, CalendarTryProps>(
  ({ date, selected, renderDay, userLocale }, ref) => {
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

    const viewDate = React.useMemo(() => date.locale(currentLocale || 'ru'), [currentLocale]);

    return currentLocale ? (
      <CalendarWidgetWrapper ref={ref}>
        <div>{viewDate.format('MMMM YYYY')}</div>
        <Month viewDate={viewDate} renderDay={renderDay || defaultRenderDay} selected={selected} />
      </CalendarWidgetWrapper>
    ) : null;
  },
);
