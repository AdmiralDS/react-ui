export const TIMEOUTS = {
  // Задержки для waitForTimeout
  /** Короткая задержка для анимаций и UI обновлений */
  WAIT_SHORT: 50,
  /** Средняя задержка для анимаций */
  WAIT_MEDIUM: 200,
  /** Стандартная задержка для анимаций (по умолчанию в clickAndWait) */
  WAIT_DEFAULT: 400,
  /** Длинная задержка для сложных анимаций */
  WAIT_LONG: 500,

  // Задержки для timeout в expect
  /** Быстрая проверка видимости/невидимости */
  EXPECT_FAST: 50,
  /** Стандартная проверка видимости */
  EXPECT_STANDARD: 100,
  /** Проверка закрытия дропдауна */
  EXPECT_DROPDOWN_CLOSE: 300,
  /** Проверка видимости элементов */
  EXPECT_VISIBILITY: 400,
  /** Проверка закрытия дропдауна (длинная) */
  EXPECT_DROPDOWN_CLOSE_LONG: 500,
  /** Проверка видимости календаря */
  EXPECT_CALENDAR_VISIBILITY: 500,
  /** Проверка загрузки элементов */
  EXPECT_LOADING: 1000,
  /** Проверка загрузки элементов (стандартная) */
  EXPECT_LOADING_STANDARD: 3000,
  /** Проверка загрузки элементов (длинная) */
  EXPECT_LOADING_LONG: 5000,
  /** Проверка загрузки элементов для webkit */
  EXPECT_LOADING_WEBKIT: 10000,

  // Задержки для type delay (между символами при вводе)
  /** Стандартная задержка между символами при вводе */
  TYPE_STANDARD: 50,

  // Задержки для poll timeout
  /** Быстрая проверка изменений */
  POLL_FAST: 50,
  /** Стандартная проверка изменений */
  POLL_STANDARD: 1000,

  // Задержки для браузер-специфичных тестов
  /** waitTime для Chrome */
  BROWSER_CHROME_WAIT: 100,
  /** waitTime для Firefox */
  BROWSER_FIREFOX_WAIT: 200,
  /** waitTime для Webkit */
  BROWSER_WEBKIT_WAIT: 300,
  /** visibilityTimeout для Chrome/Firefox */
  BROWSER_CHROME_FIREFOX_VISIBILITY: 500,
  /** visibilityTimeout для Webkit */
  BROWSER_WEBKIT_VISIBILITY: 1000,
} as const;

// Горячие клавиши
export const UNDO_SHORTCUT = process.platform === 'darwin' ? 'Meta+KeyZ' : 'Control+KeyZ';

// Русские названия месяцев
export const RU_MONTHS = [
  'Январь',
  'Февраль',
  'Март',
  'Апрель',
  'Май',
  'Июнь',
  'Июль',
  'Август',
  'Сентябрь',
  'Октябрь',
  'Ноябрь',
  'Декабрь',
] as const;
