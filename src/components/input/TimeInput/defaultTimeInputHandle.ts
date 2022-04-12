import { InputData } from '#/components/common/dom/changeInputData';

function splice(oldString: string, start: number, delCount: number, newSubStr: string): string {
  return oldString.slice(0, start) + newSubStr + oldString.slice(start + Math.abs(delCount));
}

export const MASK_VALUE = '__:__';

export function defaultTimeInputHandle(inputData: InputData): InputData {
  if (inputData === null) {
    return { value: MASK_VALUE, selectionStart: 0, selectionEnd: 0 };
  }

  const selectionStart = inputData.selectionStart || 0;
  let inputValue = inputData.value || '';

  const lengthDifference = inputValue.length - MASK_VALUE.length;

  if (inputValue.replace(/\d/g, '_') === MASK_VALUE) return inputData;

  if (lengthDifference < 0) {
    inputValue = splice(inputValue, selectionStart, 0, MASK_VALUE.substr(selectionStart, -lengthDifference));
    return { ...inputData, value: inputValue };
  }

  let addCount = 0;
  let moveCursor = 0;

  if (inputValue.charAt(selectionStart - 1) === ':') {
    addCount = -1;
    moveCursor = 0;
  }
  if (inputValue.charAt(selectionStart) === ':') {
    moveCursor = 1;
    if (/\d/.test(inputValue.charAt(selectionStart - 1))) {
      addCount = 1;
    } else {
      addCount = -1;
      moveCursor = 0;
    }
  }

  const spliced = splice(inputValue, selectionStart + addCount, lengthDifference, '').replace(/:/g, '');

  inputValue = `${spliced.substr(0, 2).replace(/\D/g, '_')}:${spliced.substr(2, 2).replace(/\D/g, '_')}`;

  return {
    ...inputData,
    value: inputValue,
    selectionStart: selectionStart + moveCursor,
    selectionEnd: selectionStart + moveCursor,
  };
}
