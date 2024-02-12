import { isValidDate } from './isValidDate';

export function parseStringToDate(str = ''): Date | null {
  const [ddStr, mmStr, yyyyStr] = str.split('.');
  const date = new Date(`${yyyyStr}-${mmStr}-${ddStr}`);
  date.setDate(date.getUTCDate());
  date.setHours(0, 0, 0, 0);
  return isValidDate(date) ? date : null;
}
