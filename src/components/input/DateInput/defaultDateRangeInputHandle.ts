import { InputData } from '#src/components/common/dom/changeInputData';
import { formatDate, MASK_VALUE as DATE_MASK_VALUE } from './defaultDateInputHandle';

const DATE_SEPARATOR = ' - ';
const MASK_VALUE = DATE_MASK_VALUE + DATE_SEPARATOR + DATE_MASK_VALUE;

const calcCursorPosition = (inputValue: string, selectionStart: number) => {
  const underlinePos = inputValue.indexOf('_');
  // selectionStart должен быть не менее 1, иначе маска не будет отображаться
  const valueLength = underlinePos === -1 ? inputValue.length : underlinePos || 1;

  if (selectionStart < valueLength) {
    if (selectionStart > 10 && selectionStart < 14) return 14;
    return inputValue.charAt(selectionStart - 1) === '.' ? selectionStart + 1 : selectionStart;
  }

  return valueLength;
};

export function defaultDateRangeInputHandle(inputData: InputData | null): InputData {
  if (!inputData || !inputData.value) {
    const ret = { value: MASK_VALUE, selectionStart: 0, selectionEnd: 0 };
    return ret;
  }

  const inputValue = inputData.value || MASK_VALUE;

  // if entered correct masked data
  if (inputValue.replace(/\d/g, '_') === MASK_VALUE) return inputData;

  const clearValue = inputValue.replace(/\D/g, '');

  const leftPart = formatDate(clearValue.substring(0, 8));
  const rightPart = formatDate(clearValue.substring(8, 16));

  const selectionStart = inputData.selectionStart || 0;
  const formattedValue = leftPart + DATE_SEPARATOR + rightPart;

  const cursorPos = calcCursorPosition(formattedValue, selectionStart);

  return {
    value: formattedValue,
    selectionStart: cursorPos,
    selectionEnd: cursorPos,
  };
}
