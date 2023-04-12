import dayjs from 'dayjs';
import type { Dayjs, ManipulateType } from 'dayjs';
import localeData from 'dayjs/plugin/localeData';
import CustomParseFormat from 'dayjs/plugin/customParseFormat';
//import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(localeData);
dayjs.extend(CustomParseFormat);
//dayjs.extend(isBetween);

export const capitalizeFirstLetter = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();

export const getDayNamesList = (locale: string): string[] => {
  const instanceLocaleData = dayjs().locale(locale).localeData();
  const nameList = instanceLocaleData.weekdaysMin();
  const firstDay = instanceLocaleData.firstDayOfWeek();
  return nameList.map((name, index, arr) => {
    return arr[(firstDay + index) % 7];
  });
};

export const getMonthNamesList = (locale: string, format: 'long' | 'short' = 'long'): string[] => {
  const globalLocaleData = dayjs.localeData();
  return format === 'short' ? globalLocaleData.monthsShort() : globalLocaleData.months();
};

export const valid = (date: Dayjs | null): boolean => {
  return dayjs(date, 'DD.MM.YYYY', true).isValid();
};

/*export const isWithinInterval = (date: Dayjs, interval: { start: Dayjs; end: Dayjs }): boolean => {
  if (interval.start.isAfter(interval.end)) {
    throw new RangeError('Invalid interval');
  }

  return date.isBetween(interval.start, interval.end, null, '[]');
};*/

const unitDifference = (dateLeft: Dayjs, dateRight: Dayjs, unit: ManipulateType | undefined): number => {
  return dateLeft.diff(dateRight, unit);
};

const differenceDays = (dateLeft: Dayjs, dateRight: Dayjs) => {
  return unitDifference(dateLeft, dateRight, 'day');
};

export const outOfBounds = (day: Dayjs, minDate?: Dayjs | null, maxDate?: Dayjs | null) =>
  (minDate && differenceDays(day, minDate) < 0) || (maxDate && differenceDays(day, maxDate) > 0);

export const compareDates = (date1?: Dayjs | null, date2?: Dayjs | null): number => {
  // no dates
  if ((date1 === null && date2 === null) || (date1 === undefined && date2 === undefined)) return 0;
  // only second date exists
  if ((date1 === undefined || date1 === null) && date2 !== undefined && date2 !== null) return -1;
  // only first day exists
  if ((date2 === undefined || date2 === null) && date1 !== undefined && date1 !== null) return 1;
  // return diff in time between dates
  return date1 && date2 ? date1.diff(date2) : 0;
};

export const yearsRange = (date: Dayjs, yearCount: number) => {
  const end = Math.ceil(date.year() / yearCount) * yearCount;
  const start = end - (yearCount - 1);
  return { start, end };
};
