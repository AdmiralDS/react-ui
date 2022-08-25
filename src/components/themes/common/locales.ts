export interface Locale {
  /** Число от 0 до 6, определяющее с какого дня начинается неделя, где 0 - это воскресенье */
  weekStartsOn: number;
  badge_ariaLabel: string;
  calendar_back: string;
  calendar_forward: string;
  calendar_next_month: string;
  calendar_previous_month: string;
  calendar_return: string;
  calendar_select_year: string;
  calendar_select_month: string;
  group_actions_pane_search: string;
  hint_ariaLabel: string;
  modal_ariaLabel: string;
  numberInput_suffix: '$' | '₽';
  select_emptyMessage: string;
  table_emptyMessage: string;
  suggestInput_emptyMessage: string;
  paginationTwo_placeholder: string;
  /** Функция, возвращающая текст, поясняющий, какой диапазон записей сейчас отображается */
  paginationTwo_itemRangeText: (min: number, max: number, total: number) => string;
  /** Текст, описывающий сколько записей размещено на одной странице */
  paginationOne_itemsPerPageText: string;
  /** Функция, возвращающая текст, описывающий селект с выбором номера страницы */
  paginationOne_pageSelectLabel: (...props: any) => string;
  /** Функция, возвращающая текст, описывающий селект с выбором размера страницы */
  paginationOne_pageSizeSelectLabel: (...props: any) => string;
  /** Функция, возвращающая текст, поясняющий, какой диапазон записей сейчас отображается */
  paginationOne_itemRangeText: (...props: any) => string;
  /** Функция, возвращающая текст, поясняющий, из какого количества страниц выбрана текущая */
  paginationOne_pageRangeText: (props: any) => string;
  /** Текст, описывающий кнопку переключения назад */
  paginationOne_backwardText: string;
  /** Текст, описывающий кнопку переключения вперед */
  paginationOne_forwardText: string;
  progressStepper_then: string;
  progressStepper_stepName: [string, string];
  progressStepper_progressText: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) => string;
}

export const locales: { [localeCode: string]: Locale } = {
  ru: {
    weekStartsOn: 1 /* Monday */,
    badge_ariaLabel: 'Количество',
    calendar_back: 'Назад',
    calendar_forward: 'Вперед',
    calendar_next_month: 'Следующий месяц',
    calendar_previous_month: 'Предыдущий месяц',
    calendar_return: 'Вернуться',
    calendar_select_year: 'Выбор года',
    calendar_select_month: 'Выбор месяца',
    group_actions_pane_search: 'Искать в таблице',
    hint_ariaLabel: 'Закрыть подсказку',
    modal_ariaLabel: 'Закрыть модальное окно',
    numberInput_suffix: '₽',
    select_emptyMessage: 'Нет совпадений',
    table_emptyMessage: 'Нет совпадений',
    suggestInput_emptyMessage: 'Нет совпадений',
    paginationTwo_placeholder: '№ страницы',
    paginationTwo_itemRangeText: (min: number, max: number, total: number) => `${min}–${max} записей из ${total}`,
    paginationOne_itemsPerPageText: 'Записей на странице:',
    paginationOne_pageSelectLabel: (page: number, totalPages: number) => `Страница ${page} из ${totalPages}`,
    paginationOne_pageSizeSelectLabel: (pageSize: number, total: number) => `Записей ${pageSize} из ${total}`,
    paginationOne_itemRangeText: (min: number, max: number, total: number) => `${min}–${max} записей из ${total}`,
    paginationOne_pageRangeText: (total: number) => `из ${total} ${total === 1 ? 'страницы' : 'страниц'}`,
    paginationOne_backwardText: 'Предыдущая страница, выбрать',
    paginationOne_forwardText: 'Следующая страница, выбрать',
    progressStepper_then: 'Далее',
    progressStepper_stepName: ['шаг', 'шагов'],
    progressStepper_progressText: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) =>
      `${activeStepNumber} из ${stepsAmount} ${stepNamePlural}`,
  },
  'en-US': {
    weekStartsOn: 0 /* Sunday */,
    badge_ariaLabel: 'Amount',
    calendar_back: 'Back',
    calendar_forward: 'Forward',
    calendar_next_month: 'Next month',
    calendar_previous_month: 'Previous month',
    calendar_return: 'Go back',
    calendar_select_year: 'Months view',
    calendar_select_month: 'Years view',
    group_actions_pane_search: 'Search in table',
    hint_ariaLabel: 'Close the hint',
    modal_ariaLabel: 'Close the modal window',
    numberInput_suffix: '₽',
    select_emptyMessage: 'No matches',
    table_emptyMessage: 'No matches',
    suggestInput_emptyMessage: 'No matches',
    paginationTwo_placeholder: 'Page number',
    paginationTwo_itemRangeText: (min: number, max: number, total: number) => `${min}–${max} entries out of ${total}`,
    paginationOne_itemsPerPageText: 'Entries on the page:',
    paginationOne_pageSelectLabel: (page: number, totalPages: number) => `Page ${page} of ${totalPages}`,
    paginationOne_pageSizeSelectLabel: (pageSize: number, total: number) => `Entries ${pageSize} out of ${total}`,
    paginationOne_itemRangeText: (min: number, max: number, total: number) => `${min}–${max}  entries out of ${total}`,
    paginationOne_pageRangeText: (total: number) => `from ${total} ${total === 1 ? 'page' : 'pages'}`,
    paginationOne_backwardText: 'Previous page, select',
    paginationOne_forwardText: 'Next page, select',
    progressStepper_then: 'Then',
    progressStepper_stepName: ['step', 'steps'],
    progressStepper_progressText: (activeStepNumber: number, stepsAmount: number, stepNamePlural: string) =>
      `${activeStepNumber} from ${stepsAmount} ${stepNamePlural}`,
  },
};
