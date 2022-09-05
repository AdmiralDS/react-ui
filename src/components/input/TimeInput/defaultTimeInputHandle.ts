import { InputData } from '#src/components/common/dom/changeInputData';

function splice(oldString: string, start: number, delCount: number, newSubStr: string): string {
  return oldString.slice(0, start) + newSubStr + oldString.slice(start + Math.abs(delCount));
}

// не учитывает, что время можно ввести не начиная с самого начала, пользователь может поставить курсор в любое место и попытаться ввести цифру
// function isValidTime(string: string): boolean {
//   const onlyDigitsString = string.replace(/\D+/g, '');
//   if (onlyDigitsString.length === 1) {
//     return /^([0-2])?$/.test(onlyDigitsString);
//   }
//   if (onlyDigitsString.length === 2) {
//     return /^([0-1]?[0-9]|2[0-3])?$/.test(onlyDigitsString);
//   }
//   if (onlyDigitsString.length === 3) {
//     return /^([0-1]?[0-9]|2[0-3]):([0-5])?$/.test(string.slice(0, -1));
//   }
//   if (onlyDigitsString.length === 4) {
//     return /^([0-1]?[0-9]|2[0-3]):([0-5][0-9])?$/.test(string);
//   }
//   return true;
// }

function isValidTime(string: string): boolean {
  return isFirstValid(string[0]) && isSecondValid(string[1]) && isThirdValid(string[3]) && isForthValid(string[4]);
}

function isFirstValid(string: string): boolean {
  const onlyDigitsString = string.replace(/\D+/g, '').slice(0, 1);
  return /^([0-2]|_)?$/.test(onlyDigitsString);
}

function isSecondValid(string: string): boolean {
  const onlyDigitsString = string.replace(/\D+/g, '').slice(0, 1);
  return /^([0-9]|_)?$/.test(onlyDigitsString);
}

function isThirdValid(string: string): boolean {
  const onlyDigitsString = string.replace(/\D+/g, '').slice(0, 1);
  return /^([0-5]|_)?$/.test(onlyDigitsString);
}

function isForthValid(string: string): boolean {
  const onlyDigitsString = string.replace(/\D+/g, '').slice(0, 1);
  return /^([0-9]|_)?$/.test(onlyDigitsString);
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

  // когда добавляешь символы, они не должны сдвигать нижнее подчеркивание, они должны его заменять
  if (inputValue.length > 5) {
    console.log('add smth');
    const newChar = inputValue.charAt(selectionStart - 1);

    if (/^([0-9]| |_)?$/.test(newChar) && inputValue.charAt(selectionStart) === '_') {
      inputValue = replaceChar(inputValue, selectionStart, '').slice(0, 5);
      console.log(inputValue);
    } else if (
      /^([0-9])?$/.test(newChar) &&
      inputValue.charAt(selectionStart) === ':' &&
      inputValue.charAt(selectionStart + 1) === '_'
    ) {
      inputValue = replaceChar(inputValue, selectionStart + 1, newChar);
      inputValue = replaceChar(inputValue, selectionStart - 1, '').slice(0, 5);
      console.log(inputValue);
    } else {
      inputValue = replaceChar(inputValue, selectionStart - 1, '').slice(0, 5);
      console.log(inputValue);
      moveCursor = moveCursor - 1;
    }
  }

  // если пользователь выделит и удалит символ двоеточия и что-то ещё, то результат будет странным
  if (!inputValue.includes(':')) {
    console.log('no delimiter');
    inputValue = `${inputValue.substring(0, 2)}:${inputValue.substring(2, 4)}`;
    return { ...inputData, value: inputValue };
  }

  // плохо, нет валидации, можно скопировать и вставить, н-р, значение 19:99 и всё будет ок
  // if (inputValue.replace(/\d/g, '_') === MASK_VALUE) return inputData;
  if (inputValue.replace(/\d/g, '_') === MASK_VALUE && isValidTime(inputValue)) {
    return {
      ...inputData,
      value: inputValue,
      selectionStart: selectionStart + moveCursor,
      selectionEnd: selectionStart + moveCursor,
    };
  }

  if (lengthDifference < 0) {
    console.log('delete smth');
    inputValue = splice(inputValue, selectionStart, 0, MASK_VALUE.substring(0, -lengthDifference));
    // если удалили что-то сразу после двоеточия, нужно ли чтобы курсор скакал
    // причем курсор может перескачить назад на 1 или 2 символа
    // а нужно, чтобы курсор просто вставал перед двоеточием, то есть сдвигался на 1 символ
    if (inputValue.charAt(selectionStart - 1) === ':') {
      // moveCursor = lengthDifference;
      moveCursor = -1;
    }
    return {
      ...inputData,
      value: inputValue,
      selectionStart: selectionStart + moveCursor,
      selectionEnd: selectionStart + moveCursor,
    };
  }

  // если дошли до двоеточия, то перепрыгиваем его
  if (inputValue.charAt(selectionStart) === ':') {
    // moveCursor = 1;
    moveCursor = moveCursor + 1;
  }
  const spliced = inputValue.replace(/:/g, '');
  inputValue = `${spliced.substring(0, 2).replace(/\D/g, '_')}:${spliced.substring(2, 4).replace(/\D/g, '_')}`;
  const firstDigit = inputValue[0];
  const secondDigit = inputValue[1];
  const thirdDigit = inputValue[3];
  const forthDigit = inputValue[4];
  const validValue =
    isFirstValid(firstDigit) && isSecondValid(secondDigit) && isThirdValid(thirdDigit) && isForthValid(forthDigit);
  console.log(inputValue);
  if (inputValue.replace(/\D+/g, '').length > 0 && !validValue) {
    console.log('not valid');
    if (!isFirstValid(firstDigit)) {
      console.log(1);
      inputValue = replaceChar(inputValue, 0, '_');
    }
    if (!isSecondValid(secondDigit)) {
      console.log(2);
      inputValue = replaceChar(inputValue, 1, '_');
    }
    if (!isThirdValid(thirdDigit)) {
      console.log(3);
      inputValue = replaceChar(inputValue, 3, '_');
    }
    if (!isForthValid(forthDigit)) {
      console.log(4);
      inputValue = replaceChar(inputValue, 4, '_');
    }
    moveCursor = -1;
  }

  // if (inputValue.replace(/\D+/g, '').length > 0 && !isValidTime(inputValue)) {
  //   if (inputValue.charAt(selectionStart - 1) === ':') {
  //     inputValue = inputValue.replace(inputValue.charAt(selectionStart), '_');
  //     moveCursor = 0;
  //   } else {
  //     inputValue = inputValue.replace(inputValue.charAt(selectionStart - 1), '_');
  //     moveCursor = -1;
  //   }
  // }

  return {
    ...inputData,
    value: inputValue,
    selectionStart: selectionStart + moveCursor,
    selectionEnd: selectionStart + moveCursor,
  };
}
