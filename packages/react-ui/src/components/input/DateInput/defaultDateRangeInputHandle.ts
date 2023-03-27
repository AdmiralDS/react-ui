import type { InputData } from '#src/components/common/dom/changeInputData';
import { defaultDateInputHandle, MASK_VALUE as DATE_MASK_VALUE } from './defaultDateInputHandle';

const DATE_SEPARATOR = ' - ';
const MASK_VALUE = DATE_MASK_VALUE + DATE_SEPARATOR + DATE_MASK_VALUE;

export function defaultDateRangeInputHandle(inputData: InputData | null): InputData {
  if (!inputData || !inputData.value) {
    const ret = { value: MASK_VALUE, selectionStart: 0, selectionEnd: 0 };
    return ret;
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
      value: inputValue.substring(0, DATE_MASK_VALUE.length),
    });

    const ret = {
      value: handledData.value + DATE_SEPARATOR + inputValue.slice(-10),
      selectionStart: selectionPos,
      selectionEnd: selectionPos,
    };

    return ret;
  }

  // cursor on the left side
  if (selectionStart <= DATE_MASK_VALUE.length) {
    const handledData = defaultDateInputHandle({
      ...inputData,
      value:
        inputValue.length > DATE_MASK_VALUE.length
          ? inputValue.substring(0, DATE_MASK_VALUE.length + Math.max(symbolsChanged, -DATE_MASK_VALUE.length))
          : inputValue,
    });
    const rightHandleData = defaultDateInputHandle({
      value:
        inputValue.length > DATE_MASK_VALUE.length
          ? inputValue.substring(inputValue.length - DATE_MASK_VALUE.length, inputValue.length)
          : '',
    });
    const ret = {
      value: handledData.value + DATE_SEPARATOR + rightHandleData.value,
      selectionStart: handledData.selectionStart,
      selectionEnd: handledData.selectionEnd,
    };
    return ret;
  }

  //cursor on the right side
  const handledData = defaultDateInputHandle({
    value: inputValue.slice(-10 - symbolsChanged),
    selectionStart: selectionStart - (DATE_MASK_VALUE.length + DATE_SEPARATOR.length),
    selectionEnd: selectionStart - (DATE_MASK_VALUE.length + DATE_SEPARATOR.length),
  });

  const ret = {
    value: inputValue.substring(0, DATE_MASK_VALUE.length) + DATE_SEPARATOR + handledData.value,
    selectionStart: (handledData.selectionStart || 0) + DATE_MASK_VALUE.length + DATE_SEPARATOR.length,
    selectionEnd: (handledData.selectionEnd || 0) + DATE_MASK_VALUE.length + DATE_SEPARATOR.length,
  };
  return ret;
}
