import { css } from 'styled-components';
import { endOfWeek, sameDay } from '#src/components/Calendar/date-utils';

export const workDayMixin = css<{ disabled?: boolean }>`
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Neutral_Neutral90, ${p.theme.color['Neutral/Neutral 90']})`
      : `var(--admiral-color-Neutral_Neutral30, ${p.theme.color['Neutral/Neutral 30']})`};
`;

export const weekendMixin = css<{ disabled?: boolean }>`
  color: ${(p) =>
    p.disabled
      ? `var(--admiral-color-Error_Error30, ${p.theme.color['Error/Error 30']})`
      : `var(--admiral-color-Error_Error60Main, ${p.theme.color['Error/Error 60 Main']})`};
`;

export const highlightWeekends = (date: Date) => {
  if (sameDay(date, endOfWeek(date, 1)) || sameDay(date, endOfWeek(date, 0))) {
    return weekendMixin;
  }
  return undefined;
};
