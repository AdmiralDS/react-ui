import type { MouseEvent, SyntheticEvent } from 'react';
import type { Dayjs } from 'dayjs';

import type { DateValidator } from './validator';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

export interface DateBase3Props {
  /** Выбранное значение даты */
  selected?: Dayjs | null;
  /** Начальная дата диапазона */
  startDate?: Dayjs | null;
  /** Конечная дата диапазона */
  endDate?: Dayjs | null;
  /** Режим выбора диапазона дат */
  range?: boolean;
  /** Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
   *  Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
   *  функцией значение является текстом ошибки
   */
  validator?: DateValidator;
  /** Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
   * Пример функции https://reactdatepicker.com/#example-filter-dates
   */
  filterDate?: (date: Dayjs) => boolean;
}

export type ViewScreen3 = 'YEAR' | 'MONTH' | 'DAY';

export interface DateSelection3Props extends DateBase3Props {
  /** Минимально возможная для выбора дата */
  minDate?: Dayjs;
  /** Максимально возможная для выбора дата */
  maxDate?: Dayjs;
}

export interface Calendar3Props extends DateSelection3Props {
  /** Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal */
  tooltipContainer?: Element | null;

  /** Показать экран выбора дат (месяц/год/день) */
  currentActiveView?: ViewScreen3 | null;

  /** Приоритет экрана currentActiveView */
  currentActiveViewImportant?: boolean;

  /** Коллбэк срабатывает при клике на стрелках переключения дат */
  onDateIncreaseDecrease?: (date: Dayjs | Array<Dayjs | null> | null, event?: SyntheticEvent<any>) => void;

  /** Коллбэк при изменении месяца */
  onMonthSelect?: (date: Dayjs | Array<Dayjs | null> | null) => void;

  /** Коллбэк при изменении года */
  onYearSelect?: (date: Dayjs | Array<Dayjs | null> | null) => void;

  /** Срабатывает при открытии экрана выбора года */
  onViewEnter?: (view: ViewScreen3) => void;

  /** Срабатывает при открытии экрана выбора месяца */
  onViewLeave?: (view: ViewScreen3) => void;

  /** Выбор вкладки - Месяц */
  onViewMonthSelect?: () => void;

  /** Выбор вкладки - Год */
  onViewYearSelect?: () => void;

  /** Позволяет добавлять стили на необходимые даты */
  highlightSpecialDay?: (date: Dayjs) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;

  /** Коллбэк выбора даты, срабатывает при клике на дне (в режиме диапазона date - это массив из двух дат) */
  onChange(date: Dayjs | Array<Dayjs | null> | null, event?: SyntheticEvent<any>): void;

  /** Объект локализации - позволяет перезадать текстовые константы используемые в компоненте,
   * по умолчанию значения констант берутся из темы в соответствии с параметром currentLocale, заданном в теме
   **/
  locale?: {
    /** Надпись (тултип) для кнопки со стрелкой, ведущей вперед */
    backwardText?: string;
    /** Надпись (тултип) для кнопки со стрелкой, ведущей назад */
    forwardText?: string;
    /** Надпись (тултип) для кнопки со стрелкой, ведущей к следующему месяцу */
    nextMonthText?: string;
    /** Надпись (тултип) для кнопки со стрелкой ведущей, к предыдущему месяцу */
    previousMonthText?: string;
    /** Надпись (тултип) для кнопки возврата  */
    returnText?: string;
    /** Надпись (тултип) для кнопки, открывающей панель выбора года */
    selectYearText?: string;
    /** Надпись (тултип) для кнопки, открывающей панель выбора месяца */
    selectMonthText?: string;
  };
}

export interface IDateCalendarBaseProps extends DateBase3Props {
  activeDate?: Dayjs | null;
  onClick: (date: Dayjs, event: MouseEvent<HTMLDivElement>) => void;
}

export interface IDayCalendarProps extends IDateCalendarBaseProps {
  day: Dayjs;
  month: number;
  onMouseEnter: (date: Dayjs, event: MouseEvent<HTMLDivElement>) => void;
  highlightSpecialDay: (date: Dayjs) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
}

export type IWeekCalendarProps = IDayCalendarProps;

export interface IMonthCalendarProps extends IDateCalendarBaseProps {
  day: Dayjs;
  onMouseEnter: (date: Dayjs, event: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
  highlightSpecialDay: (date: Dayjs) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
}

export interface IYearsCalendarProps extends IDateCalendarBaseProps {
  viewDate: Dayjs;
}
