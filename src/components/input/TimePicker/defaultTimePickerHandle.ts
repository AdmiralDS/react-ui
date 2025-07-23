import type { InputData } from '#src/components/common/dom/changeInputData';
import { splice } from '#src/components/common/utils/splice';

function isValidDigit(string: string, number: number) {
  const onlyDigitString = string.replace(/\D+/g, '').slice(0, 1);
  switch (number) {
    case 0:
      return /^([0-2])?$/.test(onlyDigitString);
    case 1:
    case 4:
      return /^([0-9])?$/.test(onlyDigitString);
    case 2:
      return /^([0-3])?$/.test(onlyDigitString);
    case 3:
      return /^([0-5])?$/.test(onlyDigitString);
  }
}

export function defaultTimePickerHandle(inputData: InputData | null): InputData {
  if (inputData === null) {
    return { value: '', selectionStart: 0, selectionEnd: 0 };
  }

  let value: string = inputData.value || '';
  const selectionStart: number = inputData.selectionStart || 0;
  let moveCursor: number = 0;
  const lengthDifference: number = value.length - 5;

  if (lengthDifference < 0) {
    const newChar = value.charAt(selectionStart - 1);

    if (
      selectionStart - 1 === 1 &&
      ((value[0] === '2' && isValidDigit(newChar, 2)) || (value[0] !== '2' && isValidDigit(newChar, 1)))
    ) {
      value = splice(value, selectionStart, 1, '');
    } else if (selectionStart - 1 !== 2 && selectionStart - 1 !== 1 && isValidDigit(newChar, selectionStart - 1)) {
      value = splice(value, selectionStart, 1, '');
    } else if (selectionStart - 1 === 0 || selectionStart - 1 === 3) {
      value = splice(value, selectionStart - 1, 1, '0' + newChar);
      moveCursor += 1;
    } else if (selectionStart - 1 !== 2) {
      value = splice(value, selectionStart - 1, 1, '');
      moveCursor -= 1;
    }
  }

  if (lengthDifference > 0) {
    value = splice(value, selectionStart, 0, '');

    if (selectionStart > 0 && value.charAt(selectionStart - 1) === ':') {
      value = splice(value, selectionStart - 1, 1, '');
      moveCursor -= 1;
    }
  }

  value = value.replace(/[^0-9]/g, '');
  if (value.length >= 3) {
    value = `${value.substring(0, 2)}:${value.substring(2, 4)}`;
    if (selectionStart > 2) {
      moveCursor += 1;
    }
  }

  return {
    ...inputData,
    value,
    selectionStart: selectionStart + moveCursor,
    selectionEnd: selectionStart + moveCursor,
  };
}
