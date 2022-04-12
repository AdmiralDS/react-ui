import styled from 'styled-components';

import { DEFAULT_THEME } from '../../common';

const CALENDAR_WIDTH = 284;
const YEARS_VIEW_PADDING = '20px 12px 16px';
const MONTHS_VIEW_PADDING = '20px 16px 4px';
const DAYS_VIEW_PADDING = '20px 12px 12px';

type CalendarComponentProps = {
  yearsView: boolean;
  monthsView: boolean;
};

export const CalendarComponent = styled.div<CalendarComponentProps>`
  position: relative;
  box-sizing: border-box;
  text-align: center;
  border: 0 none;
  z-index: 0; /* to fix range rounded corners fill */

  padding: ${({ yearsView, monthsView }) => {
    if (yearsView) return YEARS_VIEW_PADDING;
    if (monthsView) return MONTHS_VIEW_PADDING;
    return DAYS_VIEW_PADDING;
  }};

  width: ${CALENDAR_WIDTH}px;
  background: ${({ theme }) => theme.color.background.primary};
  font-family: 'VTB Group UI', sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
`;

CalendarComponent.defaultProps = {
  theme: DEFAULT_THEME,
};
