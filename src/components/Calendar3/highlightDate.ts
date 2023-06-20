import type { Dayjs } from 'dayjs';
import { css } from 'styled-components';
import { endOfWeek, sameDay } from '#src/components/Calendar3/date-utils';

export const workDayMixin = css<{ disabled?: boolean }>`
  color: ${(p) => (p.disabled ? p.theme.color['Neutral/Neutral 90'] : p.theme.color['Neutral/Neutral 30'])};
`;

export const weekendMixin = css<{ disabled?: boolean }>`
  color: ${(p) => (p.disabled ? p.theme.color['Error/Error 30'] : p.theme.color['Error/Error 60 Main'])};
`;

export const highlightWeekends = (date: Dayjs) => {
  if (sameDay(date, endOfWeek(date, 1)) || sameDay(date, endOfWeek(date, 0))) {
    return weekendMixin;
  }
  return undefined;
};
