import type { Dayjs } from 'dayjs';
import { compareDates, outOfBounds, valid } from './utils';
import dayjs from 'dayjs';

const MESSAGE_DATE_UNDEFINED = 'Неверный формат даты';
const MESSAGE_DATE_INVALID = 'Дата не валидна';
const MESSAGE_START_DATE_INVALID = 'Начальная дата не валидна';
const MESSAGE_END_DATE_INVALID = 'Конечная дата не валидна';
const MESSAGE_START_END_DATE_INVALID = 'Даты не валидны';
const MESSAGE_START_DATE_UNDEFINED = 'Неверный формат начальной даты';
const MESSAGE_END_DATE_UNDEFINED = 'Неверный формат конечной даты';
const MESSAGE_START_END_DATE_UNDEFINED = 'Неверный формат дат';
const MESSAGE_DATE_OUT_OF_RANGE = 'Дата вне диапазона';
const MESSAGE_START_DATE_OUT_OF_RANGE = 'Начальная дата вне диапазона';
const MESSAGE_END_DATE_OUT_OF_RANGE = 'Конечная дата вне диапазона';
const MESSAGE_DATES_INCORRECT_RANGE = 'Конечная дата меньше начальной';

/** В случае невалидности даты содержит сообщение ошибки, null - если дата валидна */
type InvalidDateMessage = string | null;

export type DateValidator = {
  invalidValue: (date?: Dayjs | null) => InvalidDateMessage;
  invalidRange: (startDate?: Dayjs | null, endDate?: Dayjs | null) => InvalidDateMessage;
  invalidYear: (year: number) => InvalidDateMessage;
  invalidMonth: (month: number, year: number) => InvalidDateMessage;
};

export const getDefaultDateValidator = (minDate?: Dayjs, maxDate?: Dayjs): DateValidator => {
  return {
    invalidValue: (date?: Dayjs | null): InvalidDateMessage => {
      if (!date) return MESSAGE_DATE_UNDEFINED;
      if (!valid(date)) return MESSAGE_DATE_INVALID;

      if (outOfBounds(date, minDate, maxDate)) return MESSAGE_DATE_OUT_OF_RANGE;

      return null;
    },
    invalidRange: (startDate?: Dayjs | null, endDate?: Dayjs | null): InvalidDateMessage => {
      if (!startDate && !endDate) return MESSAGE_START_END_DATE_UNDEFINED;
      if (!startDate) return MESSAGE_START_DATE_UNDEFINED;
      if (!endDate) return MESSAGE_END_DATE_UNDEFINED;
      if (!valid(startDate) && !valid(endDate)) return MESSAGE_START_END_DATE_INVALID;
      if (!valid(startDate)) return MESSAGE_START_DATE_INVALID;
      if (!valid(endDate)) return MESSAGE_END_DATE_INVALID;
      if (compareDates(startDate, endDate) >= 0) return MESSAGE_DATES_INCORRECT_RANGE;

      if (outOfBounds(startDate, minDate, maxDate)) return MESSAGE_START_DATE_OUT_OF_RANGE;
      if (outOfBounds(endDate, minDate, maxDate)) return MESSAGE_END_DATE_OUT_OF_RANGE;

      return null;
    },
    invalidYear: (year: number): InvalidDateMessage => {
      // год не входит в диапазон, если его последний день был раньше minDate или если его первый день был позже maxDate
      return !!outOfBounds(dayjs(`${year}-11-31`, 'YYYY-MM-DD'), minDate) ||
        !!outOfBounds(dayjs(`${year}-00-01`, 'YYYY-MM-DD'), null, maxDate)
        ? MESSAGE_DATE_OUT_OF_RANGE
        : null;
    },
    invalidMonth: (month: number, year: number): InvalidDateMessage => {
      // месяц не входит в диапазон, если его последний день был раньше minDate или если его первый день был позже maxDate
      const firstDay = dayjs(`${year}-${month}-01`, 'YYYY-MM-DD');
      const lastDay = firstDay.endOf('month');
      return !!outOfBounds(lastDay, minDate) || !!outOfBounds(firstDay, null, maxDate)
        ? MESSAGE_DATE_OUT_OF_RANGE
        : null;
    },
  };
};
