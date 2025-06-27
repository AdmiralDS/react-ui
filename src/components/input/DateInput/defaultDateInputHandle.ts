import type { InputData } from '#src/components/common/dom/changeInputData';
import { splice } from '#src/components/common/utils/splice';

export const MASK_VALUE = '__.__.____';

export const formatDate = (value: string) => {
  const DD = value.substring(0, 2).replace(/\D/g, '_').padEnd(2, '_');
  const MM = value.substring(2, 4).replace(/\D/g, '_').padEnd(2, '_');
  const YYYY = value.substring(4, 8).replace(/\D/g, '_').padEnd(4, '_');

  return `${DD}.${MM}.${YYYY}`;
};

export function defaultDateInputHandle(inputData: InputData | null): InputData {
  if (inputData === null) {
    return { value: MASK_VALUE, selectionStart: 0, selectionEnd: 0 };
  }

  const selectionStart = inputData.selectionStart || 0;
  let inputValue = inputData.value || '';

  const lengthDifference = inputValue.length - MASK_VALUE.length;

  if (inputValue.replace(/\d/g, '_') === MASK_VALUE) return inputData;

  if (lengthDifference < 0) {
    inputValue = splice(inputValue, selectionStart, 0, MASK_VALUE.substr(selectionStart, -lengthDifference));
    //при стирании символа и остановке курсора рядом с точкой двигаем курсор дальше
    const cursorPos =
      selectionStart > 0 && inputValue.charAt(selectionStart - 1) === '.' ? selectionStart - 1 : selectionStart;
    return { ...inputData, value: inputValue, selectionStart: cursorPos, selectionEnd: cursorPos };
  }

  let addCount = 0;

  if (inputValue.charAt(selectionStart - 1) === '.') {
    addCount = -1;
  }
  if (inputValue.charAt(selectionStart) === '.') {
    if (/\d/.test(inputValue.charAt(selectionStart - 1))) {
      addCount = 1;
    } else {
      addCount = -1;
    }
  }

  const clearValue = splice(inputValue, selectionStart + addCount, lengthDifference, '').replace(/[^\d_]/g, '');
  inputValue = formatDate(clearValue);

  //При добавлении символа и остановке курсора в конечном значении инпута перед точкой, двигаем курсор впред.
  //Дополнительно, если курсор после ввода символа пользователем остался перед точкой, то двигаем его дальше
  let cursorPos = inputValue.charAt(selectionStart) === '.' ? selectionStart + 1 : selectionStart;
  if (inputData.value?.charAt(inputData.selectionStart || 0) === '.') {
    cursorPos += 1;
  }

  return {
    ...inputData,
    value: inputValue,
    selectionStart: cursorPos,
    selectionEnd: cursorPos,
  };
}
