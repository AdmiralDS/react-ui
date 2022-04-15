import { LocaleType } from './constants';

export {
  addDays,
  addMonths,
  addWeeks,
  addYears,
  after,
  before,
  changeTime,
  compareDates,
  dayInRange,
  differenceDays,
  differenceMonths,
  differenceYears,
  endOfWeek,
  equal,
  getFormattedValue,
  lastDayOfMonth,
  outOfBounds,
  sameDay,
  sameMonth,
  setMonth,
  setYear,
  startOfMonth,
  startOfWeek,
  startOfYear,
  subMonths,
  subYears,
  valid,
  weekInMonth,
  yearsRange,
};

const MILLISECONDS_IN_DAY = 86400000;
const locales = {
  ru: {
    code: 'ru',
    options: {
      weekStartsOn: 1 /* Monday */,
      firstWeekContainsDate: 1,
    },
  },
  enUS: {
    code: 'en-US',
    options: {
      weekStartsOn: 0 /* Sunday */,
      firstWeekContainsDate: 1,
    },
  },
  de: {
    code: 'de',
    options: {
      weekStartsOn: 1 /* Monday */,
      firstWeekContainsDate: 4,
    },
  },
};

const endOfDay = (date: Date): Date => {
  date.setHours(23, 59, 59, 999);
  return date;
};

const endOfMonth = (date: Date): Date => {
  const month = date.getMonth();
  date.setFullYear(date.getFullYear(), month + 1, 0);
  date.setHours(23, 59, 59, 999);
  return date;
};

const getDaysInMonth = (date: Date): number => {
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const lastDayOfMonth = new Date(0);
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0);
  lastDayOfMonth.setHours(0, 0, 0, 0);
  return lastDayOfMonth.getDate();
};

const getTimezoneOffsetInMilliseconds = (date: Date): number => {
  const utcDate = new Date(
    Date.UTC(
      date.getFullYear(),
      date.getMonth(),
      date.getDate(),
      date.getHours(),
      date.getMinutes(),
      date.getSeconds(),
      date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(date.getFullYear());
  return date.getTime() - utcDate.getTime();
};

const isEqual = (dateLeft: Date, dateRight: Date): boolean => {
  return dateLeft.getTime() === dateRight.getTime();
};

const isSameDay = (dateLeft: Date, dateRight: Date): boolean => {
  const dateLeftStartOfDay = startOfDay(dateLeft);
  const dateRightStartOfDay = startOfDay(dateRight);

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
};

const isSameMonth = (dateLeft: Date, dateRight: Date): boolean => {
  return dateLeft.getFullYear() === dateRight.getFullYear() && dateLeft.getMonth() === dateRight.getMonth();
};

const isWithinInterval = (date: Date, interval: { start: Date; end: Date }): boolean => {
  const time = date.getTime();
  const startTime = interval.start.getTime();
  const endTime = interval.end.getTime();

  if (!(startTime <= endTime)) {
    throw new RangeError('Invalid interval');
  }

  return time >= startTime && time <= endTime;
};

const startOfDay = (date: Date): Date => {
  date.setHours(0, 0, 0, 0);
  return date;
};

const addDays = (current: Date, amount: number): Date => {
  const date = new Date(current.getTime());
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
};

const addWeeks = (date: Date, amount: number): Date => {
  const days = amount * 7;
  return addDays(date, days);
};

const addYears = (date: Date, amount: number): Date => {
  return addMonths(date, amount * 12);
};

const addMonths = (current: Date, amount: number): Date => {
  const date = new Date(current.getTime());
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    return date;
  }
  const dayOfMonth = date.getDate();
  const endOfDesiredMonth = new Date(date.getTime());
  endOfDesiredMonth.setMonth(date.getMonth() + amount + 1, 0);
  const daysInMonth = endOfDesiredMonth.getDate();
  if (dayOfMonth >= daysInMonth) {
    return endOfDesiredMonth;
  } else {
    date.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
    return date;
  }
};

const after = (date: Date, dateToCompare: Date): boolean => date.getTime() > dateToCompare.getTime();
const before = (date: Date, dateToCompare: Date): boolean => date.getTime() < dateToCompare.getTime();

const changeTime = (dateTime: Date, newTime?: Date | null): Date => {
  if (!newTime) return dateTime;
  dateTime.setMilliseconds(newTime.getMilliseconds());
  dateTime.setSeconds(newTime.getSeconds());
  dateTime.setMinutes(newTime.getMinutes());
  dateTime.setHours(newTime.getHours());
  return dateTime;
};

const compareDates = (date1?: Date | null, date2?: Date | null): number => {
  // no dates
  if ((date1 === null && date2 === null) || (date1 === undefined && date2 === undefined)) return 0;
  // only second date exists
  if ((date1 === undefined || date1 === null) && date2 !== undefined && date2 !== null) return -1;
  // only first day exists
  if ((date2 === undefined || date2 === null) && date1 !== undefined && date1 !== null) return 1;
  // return diff in time between dates
  return date1 && date2 ? date1.getTime() - date2.getTime() : 0;
};

const dayInRange = (day: Date, startDate: Date, endDate: Date): boolean => {
  let valid = false;
  const start = startOfDay(startDate);
  const end = endOfDay(endDate);

  try {
    valid = isWithinInterval(day, { start, end });
  } catch (err) {
    valid = false;
  }
  return valid;
};

const differenceDays = (dateLeft: Date, dateRight: Date) => {
  const startOfDayLeft = startOfDay(dateLeft);
  const startOfDayRight = startOfDay(dateRight);

  const timestampLeft = startOfDayLeft.getTime() - getTimezoneOffsetInMilliseconds(startOfDayLeft);
  const timestampRight = startOfDayRight.getTime() - getTimezoneOffsetInMilliseconds(startOfDayRight);
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY);
};

const differenceMonths = (dateLeft: Date, dateRight: Date): number => {
  const yearDiff = dateLeft.getFullYear() - dateRight.getFullYear();
  const monthDiff = dateLeft.getMonth() - dateRight.getMonth();

  return yearDiff * 12 + monthDiff;
};

const differenceYears = (dateLeft: Date, dateRight: Date): number => {
  return dateLeft.getFullYear() - dateRight.getFullYear();
};

const endOfWeek = (current: Date, localeName: LocaleType): Date => {
  const locale = locales[localeName];
  const weekStartsOn = locale && locale.options && locale.options.weekStartsOn;

  const date = new Date(current.getTime());
  const day = date.getDay();
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);

  date.setDate(date.getDate() + diff);
  date.setHours(23, 59, 59, 999);
  return date;
};

const equal = (date1?: Date | null, date2?: Date | null) => {
  if (date1 && date2) {
    return isEqual(date1, date2);
  } else {
    return !date1 && !date2;
  }
};

const getFormattedValue = (date: Date | null, options: any, localeName: LocaleType) => {
  return new Intl.DateTimeFormat(locales[localeName].code, options).format(date || new Date());
};

const lastDayOfMonth = (date: Date) => {
  return endOfMonth(date).getDate();
};

const outOfBounds = (day: Date, minDate?: Date | null, maxDate?: Date | null) =>
  (minDate && differenceDays(day, minDate) < 0) || (maxDate && differenceDays(day, maxDate) > 0);

const sameDay = (date1?: Date | null, date2?: Date | null) => {
  if (date1 && date2) {
    return isSameDay(date1, date2);
  } else {
    return !date1 && !date2;
  }
};

const sameMonth = (date1?: Date | null, date2?: Date | null) => {
  if (date1 && date2) {
    return isSameMonth(date1, date2);
  } else {
    return !date1 && !date2;
  }
};

const setMonth = (date: Date, month: number): Date => {
  const year = date.getFullYear();
  const day = date.getDate();

  const dateWithDesiredMonth = new Date(0);
  dateWithDesiredMonth.setFullYear(year, month, 15);
  dateWithDesiredMonth.setHours(0, 0, 0, 0);
  const daysInMonth = getDaysInMonth(dateWithDesiredMonth);
  const d = new Date(date);
  d.setMonth(month, Math.min(day, daysInMonth));
  return d;
};

const setYear = (date: Date, year: number) => {
  if (isNaN(date as any)) {
    return new Date(NaN);
  }

  const d = new Date(date);
  d.setFullYear(year);
  return d;
};

const subYears = (date: Date, amount: number): Date => {
  return addYears(date, -amount);
};

const startOfYear = (startDate: Date): Date => {
  const date = new Date(0);
  date.setFullYear(startDate.getFullYear(), 0, 1);
  date.setHours(0, 0, 0, 0);
  return date;
};

const startOfMonth = (someDate: Date): Date => {
  const date = new Date(someDate);
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
  return date;
};

const weekInMonth = (startOfWeek: Date, day: Date) => {
  const endOfWeek = addDays(startOfWeek, 6);
  return sameMonth(startOfWeek, day) || sameMonth(endOfWeek, day);
};

const yearsRange = (date: Date, yearCount: number) => {
  const end = Math.ceil(date.getFullYear() / yearCount) * yearCount;
  const start = end - (yearCount - 1);
  return { start, end };
};

const startOfWeek = (current: Date, localeName: LocaleType): Date => {
  const locale = locales[localeName];
  const weekStartsOn = locale && locale.options && locale.options.weekStartsOn;

  const date = new Date(current.getTime());
  const day = date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
};

const subMonths = (date: Date, amount: number): Date => addMonths(date, -amount);

const valid = (date: any): boolean => !isNaN(date as any);
