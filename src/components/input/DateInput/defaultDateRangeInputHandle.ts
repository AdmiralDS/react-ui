import { InputData } from '#/components/common/dom/changeInputData';
import { defaultDateInputHandle, MASK_VALUE as DATE_MASK_VALUE } from './defaultDateInputHandle';

const DATE_SEPARATOR = ' - ';
const MASK_VALUE = DATE_MASK_VALUE + DATE_SEPARATOR + DATE_MASK_VALUE;

export function defaultDateRangeInputHandle(inputData: InputData): InputData {
  if (!inputData || !inputData.value) {
    return { value: MASK_VALUE, selectionStart: 0, selectionEnd: 0 };
  }

  const inputValue = inputData.value || MASK_VALUE;

  // if entered correct masked data
  if (inputValue.replace(/\d/g, '_') === MASK_VALUE) return inputData;

  const selectionStart = inputData.selectionStart || 0;
  const symbolsChanged = inputValue.length - MASK_VALUE.length;

  // Is cursor move to separator
  if (DATE_MASK_VALUE.length < selectionStart + 1 && DATE_MASK_VALUE.length + DATE_SEPARATOR.length > selectionStart) {
    const selectionPos =
      inputValue.length < MASK_VALUE.length ? DATE_MASK_VALUE.length : DATE_MASK_VALUE.length + DATE_SEPARATOR.length;

    const handledData = defaultDateInputHandle({
      ...inputData,
      value: inputValue.substr(0, 10),
    });

    return {
      value: handledData.value + DATE_SEPARATOR + inputValue.slice(-10),
      selectionStart: selectionPos,
      selectionEnd: selectionPos,
    };
  }

  // cursor on the left side
  if (selectionStart <= DATE_MASK_VALUE.length) {
    const handledData = defaultDateInputHandle({
      ...inputData,
      value: inputValue.substr(0, 10 + symbolsChanged),
    });
    return {
      value: handledData.value + DATE_SEPARATOR + inputValue.slice(-10),
      selectionStart: handledData.selectionStart,
      selectionEnd: handledData.selectionEnd,
    };
  }

  //cursor on the right side
  const handledData = defaultDateInputHandle({
    value: inputValue.slice(-10 - symbolsChanged),
    selectionStart: selectionStart - (DATE_MASK_VALUE.length + DATE_SEPARATOR.length),
    selectionEnd: selectionStart - (DATE_MASK_VALUE.length + DATE_SEPARATOR.length),
  });

  return {
    value: inputValue.substr(0, 10) + DATE_SEPARATOR + handledData.value,
    selectionStart: (handledData.selectionStart || 0) + DATE_MASK_VALUE.length + DATE_SEPARATOR.length,
    selectionEnd: (handledData.selectionEnd || 0) + DATE_MASK_VALUE.length + DATE_SEPARATOR.length,
  };
}
