import { locales } from './locales';
import type { LocaleType } from './constants';

export { format, parse };

/**
 *  token      meaning                                  examples of output
 YYYY      four-digit year                          0999, 2015
 YY        two-digit year                          99, 01, 15
 Y          four-digit year without zero-padding    2, 44, 888, 2015
 MMMM      month name (long)                        January, December
 MMM        month name (short)                      Jan, Dec
 MM        month with zero-padding                  01, 12
 M          month                                    1, 12
 DD        date with zero-padding                  02, 31
 D          date                                    2, 31
 dddd      day of week (long)                      Friday, Sunday
 ddd        day of week (short)                      Fri, Sun
 dd        day of week (very short)                Fr, Su
 HH        24-hour with zero-padding                23, 08
 H          24-hour                                  23, 8
 hh        12-hour with zero-padding                11, 08
 h          12-hour                                  11, 8
 A          meridiem (uppercase)                    AM, PM
 mm        minute with zero-padding                14, 07
 m          minute                                  14, 7
 ss        second with zero-padding                05, 10
 s          second                                  5, 10
 SSS        millisecond (high accuracy)              753, 022
 SS        millisecond (middle accuracy)            75, 02
 S          millisecond (low accuracy)              7, 0
 Z          timezone offset                          +0100, -0800
 */

const compile = (formatString: string): string[] => {
  const re = /\[([^[\]]|\[[^[\]]*])*]|([A-Za-z])\2+|\.{3}|./g,
    pattern = [formatString];
  let keys;

  while ((keys = re.exec(formatString))) {
    pattern[pattern.length] = keys[0];
  }
  return pattern;
};

const format = (dateObj: Date, arg: string | string[], locale: LocaleType, utc?: boolean): string => {
  const pattern = typeof arg === 'string' ? compile(arg) : arg;
  const d: any = addMinutes(dateObj, utc ? dateObj.getTimezoneOffset() : 0);
  const formatter = locales[locale].formatter;
  let str = '';
  d.utc = utc || false;

  for (let i = 1, len = pattern.length, token; i < len; i++) {
    token = pattern[i];
    str += formatter[token] ? formatter.post(formatter[token](d, pattern[0])) : token.replace(/\[(.*)]/, '$1');
  }
  return str;
};

const addMinutes = (dateObj: Date, minutes: number): Date => {
  return addSeconds(dateObj, minutes * 60);
};

const addSeconds = (dateObj: Date, seconds: number): Date => {
  return addMilliseconds(dateObj, seconds * 1000);
};

const addMilliseconds = (dateObj: Date, milliseconds: number): Date => {
  return new Date(dateObj.getTime() + milliseconds);
};

const preparse = (dateString: string, arg: string | string[], locale: LocaleType) => {
  let offset = 0;
  const pattern = typeof arg === 'string' ? compile(arg) : arg,
    dt: any = { Y: 1970, M: 1, D: 1, H: 0, A: 0, h: 0, m: 0, s: 0, S: 0, Z: 0, _index: 0, _length: 0, _match: 0 },
    comment: any = /\[(.*)]/,
    parser = locales[locale].parser;

  dateString = parser.pre(dateString);
  for (let i = 1, len = pattern.length, token, result; i < len; i++) {
    token = pattern[i];
    if (parser[token]) {
      result = parser[token](dateString.slice(offset), pattern[0]);
      if (!result.length) {
        break;
      }
      offset += result.length;
      dt[token.charAt(0)] = result.value;
      dt._match++;
    } else if (token === dateString.charAt(offset) || token === ' ') {
      offset++;
    } else if (comment.test(token) && !dateString.slice(offset).indexOf(comment.exec(token)[1])) {
      offset += token.length - 2;
    } else if (token === '...') {
      offset = dateString.length;
      break;
    } else {
      break;
    }
  }
  dt.H = dt.H || parser.h12(dt.h, dt.A);
  dt._index = offset;
  dt._length = dateString.length;
  return dt;
};

const isValid = (arg1: any, arg2: string | string[], locale: LocaleType): boolean => {
  const dt: any = typeof arg1 === 'string' ? preparse(arg1, arg2, locale) : arg1,
    last = [31, (28 + Number(isLeapYear(dt.Y))) | 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][dt.M - 1];

  return !(
    dt._index < 1 ||
    dt._length < 1 ||
    dt._index - dt._length ||
    dt._match < 1 ||
    dt.Y < 1 ||
    dt.Y > 9999 ||
    dt.M < 1 ||
    dt.M > 12 ||
    dt.D < 1 ||
    dt.D > last ||
    dt.H < 0 ||
    dt.H > 23 ||
    dt.m < 0 ||
    dt.m > 59 ||
    dt.s < 0 ||
    dt.s > 59 ||
    dt.S < 0 ||
    dt.S > 999 ||
    dt.Z < -720 ||
    dt.Z > 840
  );
};

const parse = (dateString: string, arg: string | string[], locale: LocaleType, utc?: boolean): Date => {
  const dt = preparse(dateString, arg, locale);

  if (isValid(dt, '', locale)) {
    dt.M -= dt.Y < 100 ? 22801 : 1; // 22801 = 1900 * 12 + 1
    if (utc || dt.Z) {
      return new Date(Date.UTC(dt.Y, dt.M, dt.D, dt.H, dt.m + dt.Z, dt.s, dt.S));
    }
    return new Date(dt.Y, dt.M, dt.D, dt.H, dt.m, dt.s, dt.S);
  }
  return new Date(NaN);
};

const isLeapYear = (y: number) => {
  return (!(y % 4) && !!(y % 100)) || !(y % 400);
};
