import * as React from "react";
import type { SyntheticEvent } from "react";
import dayjs from "dayjs";
import type { Dayjs } from "dayjs";
import "dayjs/locale/ru";
import { CalendarComponent } from "#src/components/CalendarNew/CalendarWidget/styled/CalendarComponent";
import { renderDefaultPanel } from "#src/components/CalendarNew/CalendarWidget/components/Panel";
import { DayNames } from "#src/components/CalendarNew/CalendarWidget/components/DayNames";
import { Month } from "#src/components/CalendarNew/CalendarWidget/components/Month";
import {
  changeTime,
  equal,
} from "#src/components/CalendarNew/CalendarWidget/date-utils";
import { ThemeContext } from "styled-components";
import { LIGHT_THEME } from "#src/components/themes";

export type CalendarViewScreenType = "YEAR" | "MONTH" | "DAY";

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
  /** Коллбэк выбора даты, срабатывает при клике на дне (в режиме диапазона date - это массив из двух дат) */
  onChange(
    date: Dayjs | Array<Dayjs | null> | null,
    event?: SyntheticEvent<any>
  ): void;
  /** Выбранное значение даты */
  selected?: Dayjs | null;
  /** Начальная дата диапазона */
  startDate?: Dayjs | null;
  /** Конечная дата диапазона */
  endDate?: Dayjs | null;
  /** Режим выбора диапазона дат */
  range?: boolean;
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
  userLocale?: string;
}

export const Calendar4 = React.forwardRef<HTMLDivElement, CalendarWidgetProps>(
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
      userLocale,
      startDate,
      endDate,
      selected,
      onChange,
      range,
    },
    ref
  ) => {
    const monthView = mode === "MONTH";
    const yearView = mode === "YEAR";
    // активная дата, на которой сейчас ховер
    const [activeDate, setActiveDate] = React.useState<Dayjs | null>(null);

    const calendarPanelProps = {
      viewDate,
      minDate,
      maxDate,
      yearsView: yearView,
      monthsView: monthView,
      locale,
      userLocale,
    };

    const theme = React.useContext(ThemeContext) || LIGHT_THEME;
    const [currentLocale, setCurrentLocale] = React.useState<string>();

    const defineLocale = userLocale || theme.currentLocale || "ru";
    if (currentLocale !== defineLocale) {
      import(`dayjs/locale/${defineLocale}.js`)
        .then(() => setCurrentLocale(defineLocale))
        .catch(() => {
          setCurrentLocale("ru");
        });
    }

    const handleDayMouseEnter = (day: Dayjs, _: any) => setActiveDate(day);
    const handleMonthMouseLeave = () => setActiveDate(null);

    const handleDayClick = (day: Dayjs, event: any) => {
      if (range || !equal(selected, day)) {
        const date = changeTime(day, selected);
        if (range) {
          if (!startDate && !endDate) {
            onChange([date, null], event);
          } else if (startDate && !endDate) {
            if (date.isBefore(startDate)) {
              onChange([date, null], event);
            } else {
              onChange([startDate, date], event);
            }
          } else if (!startDate && endDate) {
            if (date.isBefore(endDate)) {
              onChange([date, endDate], event);
            } else {
              onChange([date, null], event);
            }
          }
          if (startDate && endDate) {
            onChange([date, null], event);
          }
        } else {
          onChange(date, event);
        }
      }
    };
    const weekDayNames = dayjs.weekdaysShort();

    const renderMonth = () => (
      <>
        <DayNames date={viewDate} userLocale={userLocale} />
        <Month
          day={viewDate}
          startDate={startDate}
          endDate={endDate}
          selected={selected}
          activeDate={activeDate}
          range={range}
          //validator={getValidator()}
          //filterDate={filterDate}
          onMouseEnter={handleDayMouseEnter}
          onMouseLeave={handleMonthMouseLeave}
          onClick={handleDayClick}
          highlightSpecialDay={(date: Dayjs) => undefined}
          userLocale={userLocale}
        />
      </>
    );

    return currentLocale ? (
      <CalendarComponent ref={ref} monthsView={monthView} yearsView={yearView}>
        {(headerRender && headerRender(viewDate)) ||
          renderDefaultPanel(calendarPanelProps)}
        {renderMonth()}
      </CalendarComponent>
    ) : null;
  }
);
