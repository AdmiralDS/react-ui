import type { MouseEvent, SyntheticEvent } from 'react';

import type { DateValidator } from './validator';
import type { css } from 'styled-components';

export interface IDateBaseProps {
  /** Выбранное значение даты */
  selected?: Date | null;
  /** Начальная дата диапазона */
  startDate?: Date | null;
  /** Конечная дата диапазона */
  endDate?: Date | null;
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
  /**
   * @deprecated Помечено как deprecated в версии 4.11.1, будет удалено в версии 9.х.х.
   * Взамен используйте rootRef пропсу на DropdownProvider.
   *
   * Контейнер, в котором при необходимости можно отрисовать тултип через ReactDOM.createPortal
   */
  tooltipContainer?: never;

  /** Дата, отображаемая на календаре */
  viewDate?: Date | null;

  /** Коллбэк при изменении даты, отображаемая на календаре */
  onViewDateChange?: (newDate: Date) => void;

  /** Показать экран выбора дат (месяц/год/день) */
  currentActiveView?: ViewScreenType | null;

  /** Приоритет экрана currentActiveView */
  currentActiveViewImportant?: boolean;

  /** Коллбэк срабатывает при клике на стрелках переключения дат */
  onDateIncreaseDecrease?: (date: Date | Array<Date | null> | null, event?: SyntheticEvent<Element>) => void;

  /** Коллбэк при изменении месяца */
  onMonthSelect?: (date: Date | Array<Date | null> | null) => void;

  /** Коллбэк при изменении года */
  onYearSelect?: (date: Date | Array<Date | null> | null) => void;

  /** Срабатывает при открытии экрана выбора года */
  onViewEnter?: (view: ViewScreenType) => void;

  /** Срабатывает при открытии экрана выбора месяца */
  onViewLeave?: (view: ViewScreenType) => void;

  /** Выбор вкладки - Месяц */
  onViewMonthSelect?: () => void;

  /** Выбор вкладки - Год */
  onViewYearSelect?: () => void;

  /** Позволяет добавлять стили на необходимые даты */
  highlightSpecialDay?: (date: Date) => ReturnType<typeof css> | undefined;

  /** Коллбэк выбора даты, срабатывает при клике на дне (в режиме диапазона date - это массив из двух дат) */
  onChange(date: Date | Array<Date | null> | null, event?: SyntheticEvent<Element>): void;

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
  highlightSpecialDay: (date: Date) => ReturnType<typeof css> | undefined;
}

export type IWeekCalendarProps = IDayCalendarProps;

export interface IMonthCalendarProps extends IDateCalendarBaseProps {
  day: Date;
  onMouseEnter: (date: Date, event: MouseEvent<HTMLDivElement>) => void;
  onMouseLeave: () => void;
  highlightSpecialDay: (date: Date) => ReturnType<typeof css> | undefined;
}

export interface IYearsCalendarProps extends IDateCalendarBaseProps {
  viewDate: Date;
}
