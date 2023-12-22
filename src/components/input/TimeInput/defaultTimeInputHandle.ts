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

export const MASK_VALUE = '__:__';

export function defaultTimeInputHandle(inputData: InputData | null): InputData {
  if (inputData === null) {
    return { value: MASK_VALUE, selectionStart: 0, selectionEnd: 0 };
  }
  const selectionStart = inputData.selectionStart || 0;
  let inputValue = inputData.value || '';
  let moveCursor = 0;
  const lengthDifference = inputValue.length - MASK_VALUE.length;

  // если пользователь ввел новый символ
  if (inputValue.length > 5) {
    const newChar = inputValue.charAt(selectionStart - 1);

    if (/^([0-9])?$/.test(newChar) && inputValue.charAt(selectionStart) === '_') {
      // если newChar - это цифра, после которой следует символ _, то заменяем _ на newChar
      inputValue = splice(inputValue, selectionStart, 1, '').slice(0, 5);
    } else if (
      /^([0-9])?$/.test(newChar) &&
      inputValue.charAt(selectionStart) === ':' &&
      inputValue.charAt(selectionStart + 1) === '_'
    ) {
      // если newChar - это цифра, после которой следуют символы :_, то заменяем _ на newChar, а двоеточие перепрыгиваем
      inputValue = splice(inputValue, selectionStart + 1, 1, newChar);
      inputValue = splice(inputValue, selectionStart - 1, 1, '').slice(0, 5);
      moveCursor = moveCursor + 1;
    } else if (/^([0-9])?$/.test(newChar) && /^([0-9]|:)?$/.test(inputValue.charAt(selectionStart))) {
      // если newChar - это цифра, после которой следует другая цифра или двоеточие,
      // то записываем newChar и сдвигаем все символы после неё на одну позицию

      if (inputValue.charAt(selectionStart) === ':') {
        moveCursor = moveCursor + 1;
      }
      const spliced = splice(inputValue.replace(/:/g, ''), selectionStart, 1, '');
      inputValue = `${spliced.substring(0, 2).replace(/\D/g, '_')}:${spliced.substring(2, 4).replace(/\D/g, '_')}`;
    } else {
      // в остальных случаях ввод символа блокируется (н-р, нельзя ввести букву)
      inputValue = splice(inputValue, selectionStart - 1, 1, '').slice(0, 5);
      moveCursor = moveCursor - 1;
    }
  }

  // если пользователь удалил часть значения
  if (lengthDifference < 0) {
    inputValue = splice(
      inputValue,
      selectionStart,
      0,
      MASK_VALUE.substring(selectionStart, selectionStart + Math.abs(lengthDifference)),
    );
  }

  const cursorSymbolBeforeFormat = inputValue.charAt(selectionStart);
  const spliced = inputValue.replace(/:/g, '');
  inputValue = `${spliced.substring(0, 2).replace(/\D/g, '_')}:${spliced.substring(2, 4).replace(/\D/g, '_')}`;

  if (cursorSymbolBeforeFormat !== inputValue.charAt(selectionStart)) {
    // после форматирования и добавления двоеточия, курсор должен стоят у одного и того же символа
    moveCursor = moveCursor + 1;
  }

  if (inputValue.replace(/\D+/g, '').length > 0) {
    if (!isValidDigit(inputValue[0], 0)) {
      inputValue = splice(inputValue, 0, 1, '_');
      moveCursor = moveCursor - 1;
    }
    if (inputValue[0] === '2' ? !isValidDigit(inputValue[1], 2) : !isValidDigit(inputValue[1], 1)) {
      inputValue = splice(inputValue, 1, 1, '_');
      moveCursor = moveCursor - 1;
    }
    if (!isValidDigit(inputValue[3], 3)) {
      inputValue = splice(inputValue, 3, 1, '_');
      moveCursor = moveCursor - 1;
    }
    if (!isValidDigit(inputValue[4], 4)) {
      inputValue = splice(inputValue, 4, 1, '_');
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
