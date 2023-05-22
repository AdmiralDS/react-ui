import type { MouseEvent, SyntheticEvent } from 'react';

import type { DateValidator } from './validator';
import type { DefaultTheme, FlattenInterpolation, ThemeProps } from 'styled-components';

export interface IDateBaseProps {
  /** Выбранное значение даты */
  selected?: Date | null;
  /** Начальная дата диапазона */
  startDate?: Date | null;
  /** Конечная дата диапазона */
  endDate?: Date | null;
  /** Режим выбора диапазона дат */
  range?: boolean;
  // TODO: нужно ли отслеживать по второй панели отдельно?
  /** Предоставляет функции проверки корректности даты, возможности её выбора в календаре.
   *  Если возвращаемое значение не 'null', то дата считается некорректной, а возвращаемое
   *  функцией значение является текстом ошибки
   */
  validator?: DateValidator;
  // TODO: нужно ли отслеживать по второй панели отдельно?
  /** Функция фильтрации даты. Если функция возвращает false для конкретного дня, то этот день будет задизейблен и его нельзя будет выбрать
   * Пример функции https://reactdatepicker.com/#example-filter-dates
   */
  filterDate?: (date: Date) => boolean;
}

export type ViewScreenType = 'YEAR' | 'MONTH' | 'DAY';

export interface IDateSelectionProps extends IDateBaseProps {
  /** Минимально возможная для выбора дата */
  minDate?: Date;
  /** Максимально возможная для выбора дата */
  maxDate?: Date;
}

export interface CalendarPropType extends IDateSelectionProps {
  // TODO: нужно ли отслеживать по второй панели отдельно?
  /** Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal */
  tooltipContainer?: Element | null;

  /** Режим сдвоенного календаря для выбора диапазона дат  */
  doubleViewRange?: boolean;

  // TODO: нужно ли отслеживать по второй панели отдельно?
  /** Показать экран выбора дат (месяц/год/день) */
  currentActiveView?: ViewScreenType | null;

  // TODO: нужно ли отслеживать по второй панели отдельно?
  /** Приоритет экрана currentActiveView */
  currentActiveViewImportant?: boolean;

  // TODO: нужно ли отслеживать по второй панели отдельно?
  /** Коллбэк срабатывает при клике на стрелках переключения дат */
  onDateIncreaseDecrease?: (date: Date | Array<Date | null> | null, event?: SyntheticEvent<any>) => void;

  // TODO: нужно ли отслеживать по второй панели отдельно?
  /** Коллбэк при изменении месяца */
  onMonthSelect?: (date: Date | Array<Date | null> | null) => void;

  // TODO: нужно ли отслеживать по второй панели отдельно?
  /** Коллбэк при изменении года */
  onYearSelect?: (date: Date | Array<Date | null> | null) => void;

  // TODO: нужно ли отслеживать по второй панели отдельно?
  /** Срабатывает при открытии экрана выбора года */
  onViewEnter?: (view: ViewScreenType) => void;

  // TODO: нужно ли отслеживать по второй панели отдельно?
  /** Срабатывает при открытии экрана выбора месяца */
  onViewLeave?: (view: ViewScreenType) => void;

  // TODO: нужно ли отслеживать по второй панели отдельно?
  /** Выбор вкладки - Месяц */
  onViewMonthSelect?: () => void;

  // TODO: нужно ли отслеживать по второй панели отдельно?
  /** Выбор вкладки - Год */
  onViewYearSelect?: () => void;

  /** Позволяет добавлять стили на необходимые даты */
  highlightSpecialDay?: (date: Date) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;

  /** Коллбэк выбора даты, срабатывает при клике на дне (в режиме диапазона date - это массив из двух дат) */
  onChange(date: Date | Array<Date | null> | null, event?: SyntheticEvent<any>): void;

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

export interface IDateCalendarBaseProps extends IDateBaseProps {
  activeDate?: Date | null;
  onClick: (date: Date, event: MouseEvent<HTMLDivElement>) => void;
}

export interface IDayCalendarProps extends IDateCalendarBaseProps {
  day: Date;
  month: number;
  onMouseEnter: (date: Date, event: MouseEvent<HTMLDivElement>) => void;
  highlightSpecialDay: (date: Date) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
}

export type IWeekCalendarProps = IDayCalendarProps;

export interface IMonthCalendarProps extends IDateCalendarBaseProps {
  day: Date;
  onMouseEnter: (date: Date, event: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
  highlightSpecialDay: (date: Date) => FlattenInterpolation<ThemeProps<DefaultTheme>> | undefined;
}

export interface IYearsCalendarProps extends IDateCalendarBaseProps {
  viewDate: Date;
}
