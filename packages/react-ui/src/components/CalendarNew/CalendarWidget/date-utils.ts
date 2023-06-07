import type { Dayjs, ManipulateType } from 'dayjs';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';
import objectSupport from 'dayjs/plugin/objectSupport';
import localeData from 'dayjs/plugin/localeData';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import isoWeek from 'dayjs/plugin/isoWeek';

dayjs.extend(isBetween);
dayjs.extend(objectSupport);
dayjs.extend(localeData);
dayjs.extend(localizedFormat);
dayjs.extend(isoWeek);

export {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  changeTime,
  compareDates,
  dayInRange,
  differenceDays,
  differenceMonths,
  differenceYears,
  endOfWeek,
  equal,
  getDayNamesList,
  getFormattedValue,
  getMonthList,
  lastDayOfMonth,
  outOfBounds,
  sameDay,
  sameMonth,
  setMonth,
  setYear,
  startOfMonth,
  startOfWeek,
  startOfDay,
  startOfYear,
  subMonths,
  subYears,
  valid,
  weekInMonth,
  yearsRange,
};

const MILLISECONDS_IN_DAY = 86400000;

//TODO: test
const isWithinInterval = (date: Dayjs, interval: { start: Dayjs; end: Dayjs }): boolean => {
  if (interval.start.isAfter(interval.end)) {
    throw new RangeError('Invalid interval');
  }

  return date.isBetween(interval.start, interval.end, null, '[]');
};

//TODO: test
const addWithAmountCheck = (date: Dayjs, amount: number, unit: ManipulateType | undefined): Dayjs => {
  if (isNaN(amount)) {
    return dayjs(NaN);
  }
  if (!amount) {
    return date;
  }
  return date.add(amount, unit);
};

//TODO: test
const addDays = (date: Dayjs, amount: number): Dayjs => {
  return addWithAmountCheck(date, amount, 'day');
};

//TODO: test
const addWeeks = (date: Dayjs, amount: number): Dayjs => {
  return addWithAmountCheck(date, amount * 7, 'day');
};

//TODO: test
const addMonths = (date: Dayjs, amount: number): Dayjs => {
  return addWithAmountCheck(date, amount, 'month');
};

//TODO: test
const addYears = (date: Dayjs, amount: number): Dayjs => {
  return addWithAmountCheck(date, amount, 'year');
};

//TODO: test
const changeTime = (dateTime: Dayjs, newTime?: Dayjs | null): Dayjs => {
  if (!newTime) return dateTime;

  return dateTime.set({
    hour: newTime.hour(),
    minute: newTime.minute(),
    second: newTime.second(),
    millisecond: newTime.millisecond(),
  });
};

//TODO: test
const compareDates = (date1?: Dayjs | null, date2?: Dayjs | null): number => {
  // no dates
  if ((date1 === null && date2 === null) || (date1 === undefined && date2 === undefined)) return 0;
  // only second date exists
  if ((date1 === undefined || date1 === null) && date2 !== undefined && date2 !== null) return -1;
  // only first day exists
  if ((date2 === undefined || date2 === null) && date1 !== undefined && date1 !== null) return 1;
  // return diff in time between dates
  return date1 && date2 ? date1.diff(date2) : 0;
};

const dayInRange = (day: Dayjs, startDate: Dayjs, endDate: Dayjs): boolean => {
  let valid = false;
  const start = startDate.startOf('day');
  const end = endDate.endOf('day');

  try {
    valid = isWithinInterval(day, { start, end });
  } catch (err) {
    valid = false;
  }
  return valid;
};

const unitDifference = (dateLeft: Dayjs, dateRight: Dayjs, unit: ManipulateType | undefined): number => {
  return dateLeft.diff(dateRight, unit);
};

//TODO: test
const differenceDays = (dateLeft: Dayjs, dateRight: Dayjs) => {
  /*const startOfDayLeft = dateLeft.startOf('day');
  const startOfDayRight = dateRight.startOf('day');

  const timestampLeft = startOfDayLeft.valueOf() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  const timestampRight = startOfDayRight.valueOf() - getTimezoneOffsetInMilliseconds(startOfDayRight);
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);*/
  return unitDifference(dateLeft, dateRight, 'day');
};

//TODO: test
const differenceMonths = (dateLeft: Dayjs, dateRight: Dayjs): number => {
  return unitDifference(dateLeft, dateRight, 'month');
};

//TODO: test
const differenceYears = (dateLeft: Dayjs, dateRight: Dayjs): number => {
  return unitDifference(dateLeft, dateRight, 'year');
};

//TODO: test
const endOfWeek = (date: Dayjs, locale: string): Dayjs => {
  const instanceLocaleData = date.locale(locale).localeData();
  return date.day(instanceLocaleData.firstDayOfWeek() + 6);
  //return date.endOf('week');
};

const equal = (date1?: Dayjs | null, date2?: Dayjs | null) => {
  if (date1 && date2) {
    return date1.isSame(date2);
  } else {
    return !date1 && !date2;
  }
};

const lastDayOfMonth = (date: Dayjs) => {
  return date.endOf('month').date();
};

// TODO: check
const outOfBounds = (day: Dayjs, minDate?: Dayjs | null, maxDate?: Dayjs | null) =>
  (minDate && differenceDays(day, minDate) < 0) || (maxDate && differenceDays(day, maxDate) > 0);

const sameDay = (date1?: Dayjs | null, date2?: Dayjs | null) => {
  if (date1 && date2) {
    return date1.isSame(date2, 'day');
  } else {
    return !date1 && !date2;
  }
};

const sameMonth = (date1?: Dayjs | null, date2?: Dayjs | null) => {
  if (date1 && date2) {
    return date1.isSame(date2, 'month');
  } else {
    return !date1 && !date2;
  }
};

// TODO: check
const setMonth = (date: Dayjs, month: number): Dayjs => {
  return date.month(month);
};

// TODO: check
const setYear = (date: Dayjs, year: number) => {
  if (isNaN(date as any)) {
    return dayjs(NaN);
  }

  return date.year(year);
};

const subYears = (date: Dayjs, amount: number): Dayjs => {
  return addYears(date, -amount);
};

// TODO: check
const startOfYear = (startDate: Dayjs): Dayjs => {
  return startDate.startOf('year');
};

// TODO: check
const startOfMonth = (someDate: Dayjs): Dayjs => {
  return someDate.startOf('month');
};

// TODO: check
const weekInMonth = (startOfWeek: Dayjs, day: Dayjs) => {
  const endOfWeek = addDays(startOfWeek, 6);
  return sameMonth(startOfWeek, day) || sameMonth(endOfWeek, day);
};

// TODO: check
const yearsRange = (date: Dayjs, yearCount: number) => {
  const end = Math.ceil(date.year() / yearCount) * yearCount;
  const start = end - (yearCount - 1);
  return { start, end };
};

// TODO: check
const startOfWeek = (date: Dayjs, locale: string): Dayjs => {
  const instanceLocaleData = date.locale(locale).localeData();
  return date.day(instanceLocaleData.firstDayOfWeek());
};

// TODO: check
const startOfDay = (current: Dayjs): Dayjs => {
  return current.startOf('day');
};

const subMonths = (date: Dayjs, amount: number): Dayjs => addMonths(date, -amount);

const valid = (date: any): boolean => !isNaN(date as any);

// TODO: check
const getMonthList = (locale: string, format: 'long' | 'short' = 'long'): string[] => {
  const instanceLocaleData = dayjs().locale(locale).localeData();
  return format === 'short' ? instanceLocaleData.monthsShort() : instanceLocaleData.months();
};

const getDayNamesList = (locale: string): string[] => {
  const instanceLocaleData = dayjs().locale(locale).localeData();
  const nameList = instanceLocaleData.weekdaysMin();
  const firstDay = instanceLocaleData.firstDayOfWeek();
  return nameList.map((name, index, arr) => {
    return arr[(firstDay + index) % 7];
  });
};

function getFormattedValue(date: Dayjs, locale: string, format: string) {
  return date.locale(locale).format(format);
}
