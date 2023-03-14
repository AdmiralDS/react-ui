import * as React from 'react';
import * as dayjs from 'dayjs';
import 'dayjs/locale/ru';
import type { Dayjs } from 'dayjs';
import { CalendarComponent } from '#src/components/CalendarNew/CalendarWidget/styled/CalendarComponent';
import { Panel } from '#src/components/CalendarNew/CalendarWidget/components/Panel';

//require('dayjs/locale/ru');
dayjs.locale('ru');

export type CalendarViewScreenType = 'YEAR' | 'MONTH' | 'DAY';

export interface CalendarWidgetProps {
  /** Выбранное значение даты */
  viewDate: Dayjs;
  /** Режим отображения */
  mode?: CalendarViewScreenType;
  /** Позволяет кастомизировать отображение ячейки даты */
  dateCellRender?: (date: Dayjs) => React.ReactNode;
  /** Позволяет кастомизировать отображение ячейки месяца */
  monthCellRender?: (date: Dayjs) => React.ReactNode;
  /** Позволяет кастомизировать отображение ячейки года */
  yearCellRender?: (date: Dayjs) => React.ReactNode;
  /** Позволяет кастомизировать отображение панели заголовка */
  headerRender?: (date: Dayjs) => React.ReactNode;
  /** Функция фильтрации даты. Если функция возвращает false для конкретного дня,
   * то этот день будет задизейблен и его нельзя будет выбрать
   * Пример функции https://reactdatepicker.com/#example-filter-dates
   */
  disabledDate?: (date: Dayjs) => boolean;
  /**  */
  minDate?: Dayjs;
  maxDate?: Dayjs;
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

export const CalendarWidget = React.forwardRef<HTMLDivElement, CalendarWidgetProps>(
  (
    {
      viewDate,
      mode,
      dateCellRender,
      monthCellRender,
      yearCellRender,
      headerRender,
      disabledDate,
      minDate,
      maxDate,
      locale,
    },
    ref,
  ) => {
    const monthView = mode === 'MONTH';
    const yearView = mode === 'YEAR';

    const renderPanel = () => (
      <Panel
        viewDate={viewDate}
        minDate={minDate}
        maxDate={maxDate}
        yearsView={yearView}
        monthsView={monthView}
        locale={locale}
        /*onYearsViewShow={handleYearsViewShow}
        onYearsViewHide={handleYearsViewHide}
        onMonthsViewShow={handleMonthsViewShow}
        onMonthsViewHide={handleMonthsViewHide}
        onNext={yearsView ? increaseYear : increaseMonth}
        onPrevious={yearsView ? decreaseYear : decreaseMonth}
        tooltipContainer={tooltipContainer}*/
      />
    );

    return (
      <CalendarComponent ref={ref} monthsView={monthView} yearsView={yearView}>
        {(headerRender && headerRender(viewDate)) || renderPanel()}
        Test
      </CalendarComponent>
    );
  },
);
