import styled from 'styled-components';
import { typography } from '#src/components/Typography';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { parseShadow } from '#src/components/common/utils/parseShadowFromTheme';

const CALENDAR_WIDTH = 284;
const YEARS_VIEW_PADDING = '20px 12px 16px';
const MONTHS_VIEW_PADDING = '20px 16px 4px';
const DAYS_VIEW_PADDING = '20px 12px 12px';

type CalendarComponentProps = {
  $yearsView: boolean;
  $monthsView: boolean;
};

export const CalendarComponent = styled.div<CalendarComponentProps>`
  position: relative;
  box-sizing: border-box;
  text-align: center;
  border: 0 none;
  z-index: 0; /* to fix range rounded corners fill */

  padding: ${({ $yearsView, $monthsView }) => {
    if ($yearsView) return YEARS_VIEW_PADDING;
    if ($monthsView) return MONTHS_VIEW_PADDING;
    return DAYS_VIEW_PADDING;
  }};

  width: ${CALENDAR_WIDTH}px;
  background: var(--admiral-color-Special_ElevatedBG, ${(p) => p.theme.color['Special/Elevated BG']});
  ${typography['Body/Body 2 Long']}
  color: var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
  border-radius: var(--admiral-border-radius-Medium, ${(p) => mediumGroupBorderRadius(p.theme.shape)});
  box-shadow: var(--admiral-box-shadow-Shadow08, ${(p) => parseShadow(p.theme.shadow['Shadow 08'])});
`;
