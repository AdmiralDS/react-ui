import { isValidDate } from './isValidDate';

export function parseStringToDate(str = ''): Date | null {
  const [ddStr, mmStr, yyyyStr] = str.split('.');
  const date = new Date(`${yyyyStr}-${mmStr}-${ddStr}`);
  return isValidDate(date) ? date : null;
}
