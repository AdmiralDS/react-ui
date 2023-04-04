/** Функция проверяет входит ли число в интервал чисел */
export const fitLimit = (min: number, max: number, num: number) => num >= min && num < max;

/** Функция переводит первую буквы строки в нижний регистр */
export const setFirstLetterToLowerCase = (str = '') => str.slice(0, 1).toLowerCase() + str.slice(1);

/** Функция переводит первую буквы строки в верхний регистр */
export const setFirstLetterToUpperCase = (str = '') => str.slice(0, 1).toUpperCase() + str.slice(1);

/** Функция возвращает соотношение чисел друг к другу в процентах */
export const convertNumberToIntegerPercent = (num: number, max = 100) => Math.round((100 * num) / max);
