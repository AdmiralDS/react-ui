import { parseStringToDate } from './parseStringToDate';

export function defaultParser(
  stringValue = '',
  isDateRangeValue?: boolean,
  dateRangeSeparatorSymbols = ' - ',
): Date | (Date | null)[] | null {
  const result = stringValue.split(dateRangeSeparatorSymbols).map(parseStringToDate);
  return isDateRangeValue ? result : result[0];
}
