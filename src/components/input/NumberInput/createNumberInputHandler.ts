import type { InputData } from '#src/components/common/dom/changeInputData';
import { fitToCurrency } from './utils';

export type NumberInputHandlerCreatorParams = {
  precision: number;
  decimal: string;
  thousand: string;
  minValue?: number;
  maxValue?: number;
};

export function createNumberInputHandler({ precision, decimal, thousand, minValue }: NumberInputHandlerCreatorParams) {
  return function (inputData: InputData | null): InputData {
    const { value, selectionStart } = inputData || {};
    const cursor = selectionStart || 0;
    const init_value = value || '';
    const newValue = fitToCurrency(init_value, precision, decimal, thousand, undefined, minValue);

    if (thousand && init_value.charAt(cursor - 1) === thousand && newValue.length === init_value.length) {
      // если пытаемся стереть разделитель thousand, то курсор перескакивает через него
      return {
        ...inputData,
        value: newValue,
        selectionStart: cursor - 1,
        selectionEnd: cursor - 1,
      };
    }
    if (precision && init_value.length > newValue.length && init_value.indexOf(newValue) == 0) {
      // если пытаемся в уже заполненную десятичную часть (кол-во знаков в десятичной части равно precision) ввести новую цифру,
      // то эта цифра должна заменить собой соседнюю цифру

      const start = newValue.slice(0, cursor);
      const diff = newValue.length - start.length;
      const end = diff > 0 ? init_value.slice(-diff) : '';

      const updValue = start + end;

      return {
        ...inputData,
        value: updValue,
        selectionStart: cursor,
        selectionEnd: cursor,
      };
    } else {
      return {
        ...inputData,
        value: newValue,
        selectionStart: newValue.length - init_value.length + cursor,
        selectionEnd: newValue.length - init_value.length + cursor,
      };
    }
  };
}
