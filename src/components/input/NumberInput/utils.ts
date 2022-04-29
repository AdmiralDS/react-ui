// возвращает строку из n повторений входной строки str
export const repeatStringNumTimes = (str: string, n: number) => {
  let repeatedString = '';
  while (n > 0) {
    repeatedString += str;
    n--;
  }
  return repeatedString;
};

// возвращает входную строку str, из которой удалены все символы кроме цифр, символа decimal (по умолчанию точки) и минуса
export const clearValue = (str: string, precision: number, decimal = '.') => {
  const validChars =
    precision > 0
      ? [decimal, '-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
      : ['-', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let newStr = str
    .split('')
    .filter((char) => validChars.indexOf(char) > -1)
    .join('');
  // оставляем минус, только если он стоит вначале строки
  if (newStr.indexOf('-') > -1) {
    newStr =
      newStr[0] +
      newStr
        .slice(1, newStr.length)
        .split('')
        .filter((char) => char !== '-')
        .join('');
  }
  // если введено '-.', нужно заменить на '-0.'
  if (newStr[0] === '-' && newStr[1] === decimal) {
    newStr = newStr[0] + '0' + newStr.slice(1, newStr.length);
  }
  // оставляем только самую первую из введенных точек
  if (newStr.indexOf(decimal) > -1) {
    const firstDecimalIndex = newStr.indexOf(decimal);
    newStr = newStr
      .split('')
      .filter((char, index) => char !== decimal || (char === decimal && index === firstDecimalIndex))
      .join('');
  }
  // если число начинается с нуля, то после него можно вводить только десятичный разделитель (decimal, по умолчанию точка)
  // если вторым символом введено нечто отличное от decimal, то оно заменяет собой ноль. Например 05 -> 5
  if (newStr[0] === '0' && newStr[1] !== decimal && newStr.length >= 2) {
    newStr = newStr[1];
  }
  if (newStr.slice(0, 2) === '-0' && newStr[2] !== decimal) {
    newStr = '-0';
  }
  return newStr;
};

// возвращает строку с обратным порядоком символов
const reverseString = (str: string) => {
  return str.split('').reverse().join('');
};

/**
 * Возвращает строку отформатированную в денежный формат
 * @param value введенная строка
 * @param precision точность (количество знаков после точки)
 * @param decimal десятичный разделитель
 * @param thousand разделитель между тысячами
 * @param prefix префикс (строка, которая выводится перед числовым значением)
 * @param suffix суффикс (строка, которая выводится после числового значения)
 * @param fillEmptyDecimals если строка должна быть отформатирована как десятичное число (т.е. precision > 0 и в строке есть decimal)
 * и данный флаг fillEmptyDecimals установлен в true, то утилита fitToCurrency проверит, сколько знаков в числе после разделителя decimal
 * и если таких знаков меньше, чем precision, недостающее количество будет заполнено нулями.
 * Например, при precision={3} строка '3.9' превратится '3.900'
 */
export function fitToCurrency(
  value: string | number,
  precision: number,
  decimal: string,
  thousand: string,
  prefix?: string,
  suffix?: string,
  fillEmptyDecimals?: boolean,
): string {
  if (value === '') {
    return value;
  }

  let strDecimal = clearValue(String(value), precision, decimal);
  if (strDecimal === '') {
    return '';
  }

  const decimalIndex = strDecimal.indexOf(decimal);
  const isDecimal = decimalIndex > -1;

  // обрезаем строку, если после decimal цифр больше, чем в precision
  if (isDecimal && strDecimal.length - decimalIndex - 1 > precision) {
    strDecimal = strDecimal.slice(0, decimalIndex + precision + 1);
  }

  // выделяем левую (целую) и правую (десятичную) части
  const left_side = isDecimal ? strDecimal.slice(0, decimalIndex) : strDecimal;
  const right_side = isDecimal ? strDecimal.slice(decimalIndex, strDecimal.length) : '';

  let newValue = '';

  // разбиваем левую (целую) часть на группы по три символа, разделенные thousand
  const reducer = (previousValue: string, currentValue: string, index: number, arr: Array<string>) => {
    return index === 0
      ? (previousValue += reverseString(currentValue))
      : (previousValue += reverseString(currentValue) + thousand);
  };
  newValue =
    reverseString(left_side)
      .match(/.{1,3}/g)
      ?.reduceRight(reducer, '') || '';

  if (right_side) {
    newValue += right_side;
  }

  // доставляем нули при блюре
  if (fillEmptyDecimals) {
    if (isDecimal) {
      const dot = newValue.indexOf(decimal);
      const diff = newValue.length - dot - 1;
      if (diff < precision) {
        newValue = newValue + repeatStringNumTimes('0', precision - diff);
      }
      if (dot === 0) {
        newValue = '0' + newValue;
      }
    } else if (precision) {
      // если введен только минус, то добавляем к нему ноль
      if (newValue === '-') {
        newValue = newValue + '0';
      }
      newValue += decimal + repeatStringNumTimes('0', precision);
    }
  }

  // доставляем префикс/суффикс
  if (prefix) {
    newValue = `${prefix} ${newValue}`;
  }

  if (suffix) {
    newValue = `${newValue} ${suffix}`;
  }

  return newValue;
}

export const validateThousand = (thousand: string): boolean => {
  return /[^a-zA-Z]+/.test(thousand);
};
