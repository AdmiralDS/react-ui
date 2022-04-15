import { InputData } from '#src/components/common/dom/changeInputData';

function splice(oldString: string, start: number, delCount: number, newSubStr: string): string {
  return oldString.slice(0, start) + newSubStr + oldString.slice(start + Math.abs(delCount));
}

function isValidTime(string: string): boolean {
  const onlyDigitsString = string.replace(/\D+/g, '');
  if (onlyDigitsString.length === 1) {
    return /^([0-2])?$/.test(onlyDigitsString);
  }
  if (onlyDigitsString.length === 2) {
    return /^([0-1]?[0-9]|2[0-3])?$/.test(onlyDigitsString);
  }
  if (onlyDigitsString.length === 3) {
    return /^([0-1]?[0-9]|2[0-3]):([0-5])?$/.test(string.slice(0, -1));
  }
  if (onlyDigitsString.length === 4) {
    return /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])?$/.test(string);
  }
  return true;
}

export const MASK_VALUE = '__:__';

export function defaultTimeInputHandle(inputData: InputData | null): InputData {
  if (inputData === null) {
    return { value: MASK_VALUE, selectionStart: 0, selectionEnd: 0 };
  }
  const selectionStart = inputData.selectionStart || 0;
  let inputValue = inputData.value || '';
  let moveCursor = 0;

  if (!inputValue.includes(':')) {
    inputValue = `${inputValue.substring(0, 2)}:${inputValue.substring(2, 4)}`;
    return { ...inputData, value: inputValue };
  }

  const lengthDifference = inputValue.length - MASK_VALUE.length;

  if (inputValue.replace(/\d/g, '_') === MASK_VALUE) return inputData;

  if (lengthDifference < 0) {
    inputValue = splice(inputValue, selectionStart, 0, MASK_VALUE.substring(0, -lengthDifference));
    if (inputValue.charAt(selectionStart - 1) === ':') {
      moveCursor = lengthDifference;
    }
    return {
      ...inputData,
      value: inputValue,
      selectionStart: selectionStart + moveCursor,
      selectionEnd: selectionStart + moveCursor,
    };
  }

  if (inputValue.charAt(selectionStart) === ':') {
    moveCursor = 1;
  }
  const spliced = inputValue.replace(/:/g, '');
  inputValue = `${spliced.substring(0, 2).replace(/\D/g, '_')}:${spliced.substring(2, 4).replace(/\D/g, '_')}`;
  if (inputValue.replace(/\D+/g, '').length > 0 && !isValidTime(inputValue)) {
    if (inputValue.charAt(selectionStart - 1) === ':') {
      inputValue = inputValue.replace(inputValue.charAt(selectionStart), '_');
      moveCursor = 0;
    } else {
      inputValue = inputValue.replace(inputValue.charAt(selectionStart - 1), '_');
      moveCursor = -1;
    }
  }

  return {
    ...inputData,
    value: inputValue,
    selectionStart: selectionStart + moveCursor,
    selectionEnd: selectionStart + moveCursor,
  };
}
