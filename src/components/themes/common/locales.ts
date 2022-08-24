export interface Locale {
  /** Число от 0 до 6, определяющее с какого дня начинается неделя, где 0 - это воскресенье */
  weekStartsOn: number;
  calendar_back: string;
  calendar_forward: string;
  calendar_next_month: string;
  calendar_previous_month: string;
  calendar_return: string;
  calendar_select_year: string;
  calendar_select_month: string;
}

export const locales: { [localeCode: string]: Locale } = {
  ru: {
    weekStartsOn: 1 /* Monday */,
    calendar_back: 'Назад',
    calendar_forward: 'Вперед',
    calendar_next_month: 'Следующий месяц',
    calendar_previous_month: 'Предыдущий месяц',
    calendar_return: 'Вернуться',
    calendar_select_year: 'Выбор года',
    calendar_select_month: 'Выбор месяца',
  },
  'en-US': {
    weekStartsOn: 0 /* Sunday */,
    calendar_back: 'Back',
    calendar_forward: 'Forward',
    calendar_next_month: 'Next month',
    calendar_previous_month: 'Previous month',
    calendar_return: 'Go back',
    calendar_select_year: 'Months view',
    calendar_select_month: 'Years view',
  },
};
