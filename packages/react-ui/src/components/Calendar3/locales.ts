import type { Dayjs } from 'dayjs';

const res_enUS = {
  MMMM: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  MMM: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dddd: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  ddd: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  dd: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
  A: ['AM', 'PM'],
};

const res_ru = {
  MMMM: [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ],
  MMM: ['янв', 'фев', 'мар', 'апр', 'мая', 'июня', 'июля', 'авг', 'сен', 'окт', 'ноя', 'дек'],
  dddd: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  ddd: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  dd: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  A: ['ночи', 'утра', 'дня', 'вечера'],
};

const res_de = {
  MMMM: [
    'Januar',
    'Februar',
    'März',
    'April',
    'Mai',
    'Juni',
    'Juli',
    'August',
    'September',
    'Oktober',
    'November',
    'Dezember',
  ],
  MMM: ['Jan.', 'Febr.', 'Mrz.', 'Apr.', 'Mai', 'Jun.', 'Jul.', 'Aug.', 'Sept.', 'Okt.', 'Nov.', 'Dez.'],
  dddd: ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'],
  ddd: ['So.', 'Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.'],
  dd: ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'],
  A: ['Uhr nachmittags', 'Uhr morgens'],
};

const A_enUS = (d: Dayjs) => res_enUS.A[((d.hour() > 11) as any) | 0];
const A_ru = (d: Dayjs) => {
  const h = d.hour();
  if (h < 4) {
    return res_ru.A[0]; // ночи
  } else if (h < 12) {
    return res_ru.A[1]; // утра
  } else if (h < 17) {
    return res_ru.A[2]; // дня
  }
  return res_ru.A[3]; // вечера
};

const formatter = (res: any) => ({
  YYYY: (d: Dayjs) => ('000' + d.year()).slice(-4),
  YY: (d: Dayjs) => ('0' + d.year()).slice(-2),
  Y: (d: Dayjs) => '' + d.year(),
  MMMM: (d: Dayjs) => res.MMMM[d.month()],
  MMM: (d: Dayjs) => res.MMM[d.month()],
  MM: (d: Dayjs) => ('0' + (d.month() + 1)).slice(-2),
  M: (d: Dayjs) => '' + (d.month() + 1),
  DD: (d: Dayjs) => ('0' + d.date()).slice(-2),
  D: (d: Dayjs) => '' + d.date(),
  HH: (d: Dayjs) => ('0' + d.hour()).slice(-2),
  H: (d: Dayjs) => '' + d.hour(),
  hh: (d: Dayjs) => ('0' + (d.hour() % 12 || 12)).slice(-2),
  h: (d: Dayjs) => '' + (d.hour() % 12 || 12),
  mm: (d: Dayjs) => ('0' + d.minute()).slice(-2),
  m: (d: Dayjs) => '' + d.minute(),
  ss: (d: Dayjs) => ('0' + d.second()).slice(-2),
  s: (d: Dayjs) => '' + d.second(),
  SSS: (d: Dayjs) => ('00' + d.millisecond()).slice(-3),
  SS: (d: Dayjs) => ('0' + ((d.millisecond() / 10) | 0)).slice(-2),
  S: (d: Dayjs) => '' + ((d.millisecond() / 100) | 0),
  dddd: (d: Dayjs) => res.dddd[d.day()],
  ddd: (d: Dayjs) => res.ddd[d.day()],
  dd: (d: Dayjs) => res.dd[d.day()],
  Z: (d: any) => (d.utc ? '+0000' : /[+-]\d{4}/.exec(d.toTimeString())?.[0]),
  post: (str: any) => str,
});

const parser = (res: any) => ({
  YYYY: function (str: string) {
    return this.exec(/^\d{4}/, str);
  },
  Y: function (str: string) {
    return this.exec(/^\d{1,4}/, str);
  },
  MMMM: function (str: string) {
    const result = this.find(res.MMMM, str);
    result.value++;
    return result;
  },
  MMM: function (str: string) {
    const result = this.find(res.MMM, str);
    result.value++;
    return result;
  },
  MM: function (str: string) {
    return this.exec(/^\d\d/, str);
  },
  M: function (str: string) {
    return this.exec(/^\d\d?/, str);
  },
  DD: function (str: string) {
    return this.exec(/^\d\d/, str);
  },
  D: function (str: string) {
    return this.exec(/^\d\d?/, str);
  },
  HH: function (str: string) {
    return this.exec(/^\d\d/, str);
  },
  H: function (str: string) {
    return this.exec(/^\d\d?/, str);
  },
  A: function (str: string) {
    return this.find(res.A, str);
  },
  hh: function (str: string) {
    return this.exec(/^\d\d/, str);
  },
  h: function (str: string) {
    return this.exec(/^\d\d?/, str);
  },
  mm: function (str: string) {
    return this.exec(/^\d\d/, str);
  },
  m: function (str: string) {
    return this.exec(/^\d\d?/, str);
  },
  ss: function (str: string) {
    return this.exec(/^\d\d/, str);
  },
  s: function (str: string) {
    return this.exec(/^\d\d?/, str);
  },
  SSS: function (str: string) {
    return this.exec(/^\d{1,3}/, str);
  },
  SS: function (str: string) {
    const result = this.exec(/^\d\d?/, str);
    result.value *= 10;
    return result;
  },
  S: function (str: string) {
    const result = this.exec(/^\d/, str);
    result.value *= 100;
    return result;
  },
  Z: function (str: string) {
    const result = this.exec(/^[+-]\d{2}[0-5]\d/, str);
    result.value = ((result.value / 100) | 0) * -60 - (result.value % 100);
    return result;
  },
  h12: function (h: any, a: any) {
    return (h === 12 ? 0 : h) + a * 12;
  },
  exec: function (re: any, str: any) {
    const result = (re.exec(str) || [''])[0];
    return { value: result | 0, length: result.length };
  },
  find: function (array: any, str: any) {
    let index = -1,
      length = 0;

    for (let i = 0, len = array.length, item; i < len; i++) {
      item = array[i];
      if (!str.indexOf(item) && item.length > length) {
        index = i;
        length = item.length;
      }
    }
    return { value: index, length: length };
  },
  pre: (str: any) => str,
});

export const locales: any = {
  enUS: {
    res: res_enUS,
    formatter: { ...formatter(res_enUS), A: A_enUS },
    parser: { ...parser(res_enUS) },
  },
  ru: {
    res: res_ru,
    formatter: { ...formatter(res_ru), A: A_ru },
    parser: { ...parser(res_ru) },
  },
  de: {
    res: res_de,
    formatter: { ...formatter(res_de), A: A_enUS },
    parser: { ...parser(res_de) },
  },
};
