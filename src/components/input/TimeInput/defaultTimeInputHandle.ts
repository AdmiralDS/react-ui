import { InputData } from '#src/components/common/dom/changeInputData';

function splice(oldString: string, start: number, delCount: number, newSubStr: string): string {
  return oldString.slice(0, start) + newSubStr + oldString.slice(start + Math.abs(delCount));
}

function isValidDigit(string: string, number: number) {
  const onlyDigitString = string.replace(/\D+/g, '').slice(0, 1);
  switch (number) {
    case 0:
      return /^([0-2])?$/.test(onlyDigitString);
    case 1:
      return /^([0-9])?$/.test(onlyDigitString);
    case 2:
      return /^([0-5])?$/.test(onlyDigitString);
    case 3:
      return /^([0-9])?$/.test(onlyDigitString);
  }
}

function replaceChar(string: string, index: number, replacement: string) {
  return string.substring(0, index) + replacement + string.substring(index + 1);
}

export const MASK_VALUE = '__:__';

export function defaultTimeInputHandle(inputData: InputData | null): InputData {
  if (inputData === null) {
    return { value: MASK_VALUE, selectionStart: 0, selectionEnd: 0 };
  }
  const selectionStart = inputData.selectionStart || 0;
  let inputValue = inputData.value || '';
  let moveCursor = 0;
  const lengthDifference = inputValue.length - MASK_VALUE.length;

  if (inputValue.length > 5) {
    const newChar = inputValue.charAt(selectionStart - 1);

    if (/^([0-9])?$/.test(newChar) && inputValue.charAt(selectionStart) === '_') {
      inputValue = replaceChar(inputValue, selectionStart, '').slice(0, 5);
    } else if (
      /^([0-9])?$/.test(newChar) &&
      inputValue.charAt(selectionStart) === ':' &&
      inputValue.charAt(selectionStart + 1) === '_'
    ) {
      inputValue = replaceChar(inputValue, selectionStart + 1, newChar);
      inputValue = replaceChar(inputValue, selectionStart - 1, '').slice(0, 5);
      moveCursor = moveCursor + 1;
    } else {
      inputValue = replaceChar(inputValue, selectionStart - 1, '').slice(0, 5);
      moveCursor = moveCursor - 1;
    }
  }

  if (lengthDifference < 0) {
    inputValue = splice(
      inputValue,
      selectionStart,
      0,
      MASK_VALUE.substring(selectionStart, selectionStart + Math.abs(lengthDifference)),
    );
  }

  const spliced = inputValue.replace(/:/g, '');
  inputValue = `${spliced.substring(0, 2).replace(/\D/g, '_')}:${spliced.substring(2, 4).replace(/\D/g, '_')}`;

  if (inputValue.replace(/\D+/g, '').length > 0) {
    if (!isValidDigit(inputValue[0], 0)) {
      inputValue = replaceChar(inputValue, 0, '_');
      moveCursor = moveCursor - 1;
    }
    if (!isValidDigit(inputValue[1], 1)) {
      inputValue = replaceChar(inputValue, 1, '_');
      moveCursor = moveCursor - 1;
    }
    if (!isValidDigit(inputValue[3], 2)) {
      inputValue = replaceChar(inputValue, 3, '_');
      moveCursor = moveCursor - 1;
    }
    if (!isValidDigit(inputValue[4], 3)) {
      inputValue = replaceChar(inputValue, 4, '_');
      moveCursor = moveCursor - 1;
    }
  }
  return {
    ...inputData,
    value: inputValue,
    selectionStart: selectionStart + moveCursor,
    selectionEnd: selectionStart + moveCursor,
  };
}
