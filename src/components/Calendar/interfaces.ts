import type { MouseEvent, SyntheticEvent } from 'react';

import type { LocaleType } from './constants';
import type { DateValidator } from './validator';

export interface IDateBaseProps {
  /** Выбранное значение даты */
  selected?: Date | null;
  /** Начальная дата диапазона */
  startDate?: Date | null;
  /** Конечная дата диапазона */
  endDate?: Date | null;
  /** Режим выбора диапазона дат */
  range?: boolean;
  /** Локаль отображения дат */
  localeName?: LocaleType;
  /** Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
   *  Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
   *  функцией значение является текстом ошибки и выводится в InputField
   */
  validator?: DateValidator;
  /** Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
   * Пример функции https://reactdatepicker.com/#example-filter-dates
   */
  filterDate?: (date: Date) => boolean;
}

export interface IDateSelectionProps extends IDateBaseProps {
  /** Минимально возможная для выбора дата */
  minDate?: Date;
  /** Максимально возможная для выбора дата */
  maxDate?: Date;
}

export interface CalendarPropType extends IDateSelectionProps {
  /** Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal */
  tooltipContainer?: Element | null;

  /** Коллбэк выбора даты, срабатывает при клике на дне (в режиме диапазона date - это массив из двух дат) */
  onChange(date: Date | Array<Date | null> | null, event?: SyntheticEvent<any>): void;
}

export interface IDateCalendarBaseProps extends IDateBaseProps {
  activeDate?: Date | null;
  onClick: (date: Date, event: MouseEvent<HTMLDivElement>) => void;
}

export interface IDayCalendarProps extends IDateCalendarBaseProps {
  day: Date;
  month: number;
  onMouseEnter: (date: Date, event: MouseEvent<HTMLDivElement>) => void;
}

export type IWeekCalendarProps = IDayCalendarProps;

export interface IMonthCalendarProps extends IDateCalendarBaseProps {
  day: Date;
  onMouseEnter: (date: Date, event: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
}

export interface IYearsCalendarProps extends IDateCalendarBaseProps {
  viewDate: Date;
}
