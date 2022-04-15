export type LocaleType = 'ru' | 'enUS' | 'de';

export type CornerKeys = 'top-left' | 'bottom-left' | 'top-right' | 'bottom-right';
export type Corners = {
  [key in CornerKeys]?: boolean;
};

export const DAY_NUMBERS = [0, 1, 2, 3, 4, 5, 6];
export const DEFAULT_YEAR_COUNT = 20;
export const DEFAULT_LOCALE_NAME = 'ru';

export const BACK = 'Назад';
export const FORWARD = 'Вперед';
export const NEXT_MONTH = 'Следующий месяц';
export const PREVIOUS_MONTH = 'Предыдущий месяц';
export const RETURN = 'Вернуться';
export const SELECT_YEAR = 'Выбор года';
export const SELECT_MONTH = 'Выбор месяца';
export const capitalizeFirstLetter = (s: string) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
