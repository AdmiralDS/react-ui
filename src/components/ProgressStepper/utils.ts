/**
 * Функция возвращает существительное во множественном числе
 * param  number - Число на основе которого нужно сформировать окончание
 * param  words - Массив слов во множественном числе для чисел (1, 4, 5),
 * например ['яблоко', 'яблока', 'яблок']
 * return String
 */
export const getPlural = (words: string[]) => (number: number) => {
  let value = Math.abs(number);
  value %= 100;
  if (value >= 5 && value <= 20) {
    return words[2];
  }
  value %= 10;
  if (value === 1) {
    return words[0];
  }
  if (value >= 2 && value <= 4) {
    return words[1];
  }
  return words[2];
};

/** Функция проверяет входит ли число в интервал чисел */
export const fitLimit = (min: number, max: number, num: number) => num >= min && num < max;

/** Функция переводит первую буквы строки в нижний регистр */
export const setFirstLetterToLowerCase = (str = '') => str.slice(0, 1).toLowerCase() + str.slice(1);

/** Функция переводит первую буквы строки в верхний регистр */
export const setFirstLetterToUpperCase = (str = '') => str.slice(0, 1).toUpperCase() + str.slice(1);

/** Функция возвращает соотношение чисел друг к другу в процентах */
export const convertNumberToIntegerPercent = (num: number, max = 100) => Math.round((100 * num) / max);
