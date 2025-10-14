/** Функция проверяет входит ли число в интервал чисел */
export const fitLimit = (min: number, max: number, num: number) => num >= min && num < max;

/** Функция переводит первую буквы строки в нижний регистр */
export const setFirstLetterToLowerCase = (str = '') => str.slice(0, 1).toLowerCase() + str.slice(1).toLocaleLowerCase();

/** Функция переводит первую буквы строки в верхний регистр */
export const setFirstLetterToUpperCase = (str = '') => str.slice(0, 1).toUpperCase() + str.slice(1).toLocaleLowerCase();

/** Функция возвращает соотношение чисел друг к другу в процентах */
export const convertNumberToIntegerPercent = (num: number, max = 100) => Math.round((100 * num) / max);

/** Функция для получения правильной формы слова в зависимости от числа */
export const getPluralForm = (num: number, forms: [string, string] | [string, string, string]): string => {
  // Нормализуем к трём формам: [one, few, many]
  const normalized: [string, string, string] =
    (forms as [string, string, string])[2] !== undefined
      ? (forms as [string, string, string])
      : ([forms[0], forms[1], forms[1]] as [string, string, string]);
  const n = Math.abs(num) % 100;
  const n1 = n % 10;

  if (n > 10 && n < 20) {
    return normalized[2];
  }
  if (n1 > 1 && n1 < 5) {
    return normalized[1];
  }
  if (n1 === 1) {
    return normalized[0];
  }
  return normalized[2];
};

/** Функция для получения правильной формы слова для общего количества шагов */
export const getStepsPluralForm = (totalSteps: number, forms: [string, string] | [string, string, string]): string => {
  return getPluralForm(totalSteps, forms);
};
