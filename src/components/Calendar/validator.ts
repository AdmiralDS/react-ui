import { compareDates, lastDayOfMonth, outOfBounds, valid } from './date-utils';

const MESSAGE_DATE_UNDEFINED = 'Неверный формат даты';
const MESSAGE_DATE_INVALID = 'Дата не валидна';
const MESSAGE_START_DATE_INVALID = 'Начальная дата не валидна';
const MESSAGE_END_DATE_INVALID = 'Конечная дата не валидна';
const MESSAGE_START_END_DATE_INVALID = 'Даты не валидны';
const MESSAGE_START_DATE_UNDEFINED = 'Неверный формат начальной даты';
const MESSAGE_END_DATE_UNDEFINED = 'Неверный формат конечной даты';
const MESSAGE_START_END_DATE_UNDEFINED = 'Неверный формат дат';
const MESSAGE_DATE_OUTOFRANGE = 'Дата вне диапазона';
const MESSAGE_START_DATE_OUTOFRANGE = 'Начальная дата вне диапазона';
const MESSAGE_END_DATE_OUTOFRANGE = 'Конечная дата вне диапазона';
const MESSAGE_DATES_INCORRECT_RANGE = 'Конечная дата меньше начальной';

/** В случае невалидности даты содержит сообщение ошибки, null - если дата валидна */
type InvalidDateMessage = string | null;

export type DateValidator = {
  invalidValue: (date?: Date | null) => InvalidDateMessage;
  invalidRange: (startDate?: Date | null, endDate?: Date | null) => InvalidDateMessage;
  invalidYear: (year: number) => InvalidDateMessage;
  invalidMonth: (month: number, year: number) => InvalidDateMessage;
};

export const getDefaultDateValidator = (minDate?: Date, maxDate?: Date): DateValidator => {
  return {
    invalidValue: (date?: Date | null): InvalidDateMessage => {
      if (!date) return MESSAGE_DATE_UNDEFINED;
      if (!valid(date)) return MESSAGE_DATE_INVALID;

      if (outOfBounds(date, minDate, maxDate)) return MESSAGE_DATE_OUTOFRANGE;

      return null;
    },
    invalidRange: (startDate?: Date | null, endDate?: Date | null): InvalidDateMessage => {
      if (!startDate && !endDate) return MESSAGE_START_END_DATE_UNDEFINED;
      if (!valid(startDate) && !valid(endDate)) return MESSAGE_START_END_DATE_INVALID;
      if (!startDate) return MESSAGE_START_DATE_UNDEFINED;
      if (!endDate) return MESSAGE_END_DATE_UNDEFINED;
      if (!valid(startDate)) return MESSAGE_START_DATE_INVALID;
      if (!valid(endDate)) return MESSAGE_END_DATE_INVALID;
      if (compareDates(startDate, endDate) >= 0) return MESSAGE_DATES_INCORRECT_RANGE;

      if (outOfBounds(startDate, minDate, maxDate)) return MESSAGE_START_DATE_OUTOFRANGE;
      if (outOfBounds(endDate, minDate, maxDate)) return MESSAGE_END_DATE_OUTOFRANGE;

      return null;
    },
    invalidYear: (year: number): InvalidDateMessage => {
      // год не входит в диапазон, если его последний день был раньше minDate или если его первый день был позже maxDate
      return !!outOfBounds(new Date(year, 11, 31), minDate) || !!outOfBounds(new Date(year, 0, 1), null, maxDate)
        ? MESSAGE_DATE_OUTOFRANGE
        : null;
    },
    invalidMonth: (month: number, year: number): InvalidDateMessage => {
      // месяц не входит в диапазон, если его последний день был раньше minDate или если его первый день был позже maxDate
      const lastDay = lastDayOfMonth(new Date(year, month, 1));
      return !!outOfBounds(new Date(year, month, lastDay), minDate) ||
        !!outOfBounds(new Date(year, month, 1), null, maxDate)
        ? MESSAGE_DATE_OUTOFRANGE
        : null;
    },
  };
};
