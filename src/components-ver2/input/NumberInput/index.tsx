import * as React from 'react';
import { TextInput, TextInputProps } from '#src/components-ver2/input/TextInput';
import { InputData, changeInputData } from '#src/components/common/dom/changeInputData';
import { refSetter } from '#src/components/common/utils/refSetter';
import { ReactComponent as MinusOutline } from '@admiral-ds/icons/build/service/MinusOutline.svg';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';
import styled, { css } from 'styled-components';

import { fitToCurrency, clearValue, validateThousand } from './utils';
export { fitToCurrency, clearValue } from './utils';

const Icon = css`
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color['Neutral/Neutral 50']};
  }
  &:hover {
    cursor: pointer;
  }
  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color['Primary/Primary 70']};
  }
`;

const IconDisabled = css`
  cursor: default;
  pointer-events: none;
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color['Neutral/Neutral 30']};
  }
`;

const Minus = styled(MinusOutline)<{ disabled: boolean }>`
  ${Icon}
  ${({ disabled }) => disabled && IconDisabled}
`;
const Plus = styled(PlusOutline)<{ disabled: boolean }>`
  ${Icon}
  ${({ disabled }) => disabled && IconDisabled}
`;

export interface NumberInputProps extends Omit<TextInputProps, 'onChange'> {
  /** точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа */
  precision?: number;
  /** префикс (строка, которая выводится перед числовым значением) */
  prefix?: string;
  /** суффикс (строка, которая выводится после числового значения) */
  suffix?: string;
  /** разделитель между тысячами */
  thousand?: string;
  /** разделитель между целым и десятичным */
  decimal?: string;
  /** Шаг инпута */
  step?: number;
  /** Минимальное значение слайдера */
  minValue?: number;
  /** Максимальное значение слайдера */
  maxValue?: number;
  /** Отображать иконки плюса минуса */
  displayPlusMinusIcons?: boolean;
  /** Колбек на изменение значения компонента (fullStr - строка вместе с префиксом/суффиксом/разделителями, shortStr - строка только с числом)
   * Примечание: в качестве value компонента необходимо использовать fullStr (строку вместе с префиксом/суффиксом/разделителями).
   */
  onChange?: (fullStr: string, shortStr: string) => void;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      precision = 2,
      prefix = '',
      suffix = '₽',
      thousand: userThousand = ' ',
      decimal: userDecimal = '.',
      onBlur,
      onChange,
      placeholder = '0 ₽',
      step = 1,
      minValue,
      maxValue,
      displayPlusMinusIcons = true,
      ...rest
    },
    ref,
  ) => {
    const inputRef = React.useRef<HTMLInputElement>(null);
    const [plusDisabled, setPlusDisabled] = React.useState(false);
    const [minusDisabled, setMinusDisabled] = React.useState(false);

    // thousand, decimal - не более одного символа
    const thousand = validateThousand(userThousand) ? userThousand.slice(0, 1) : ' ';
    const decimal = userDecimal.slice(0, 1);

    React.useEffect(() => {
      // проверка на undefined и пустую строку
      const valueExist = rest.value !== undefined && !!String(rest.value);
      const defaultValueExist = rest.defaultValue !== undefined && !!String(rest.defaultValue);
      const value = valueExist ? String(rest.value) : String(rest.defaultValue);
      if (valueExist || defaultValueExist) {
        if (typeof minValue === 'number') {
          const minusDsb = Number(clearValue(value, precision, decimal)) - step < minValue;
          minusDisabled !== minusDsb && setMinusDisabled(minusDsb);
        }
        if (typeof maxValue === 'number') {
          const plusDsb = Number(clearValue(value, precision, decimal)) + step > maxValue;
          plusDisabled !== plusDsb && setPlusDisabled(plusDsb);
        }
      } else {
        // Если параметры value, defaultValue не заданы или являются пустыми строками, тогда кнопки +/- не могут быть задизейблены
        minusDisabled && setMinusDisabled(false);
        plusDisabled && setPlusDisabled(false);
      }
    }, [rest.value, rest.defaultValue]);

    const handleInputChange = (inputData: InputData | null): InputData => {
      const { value, selectionStart } = inputData || {};
      const cursor = selectionStart || 0;
      const init_value = value || '';
      const newValue = fitToCurrency(init_value, precision, decimal, thousand, prefix, suffix);

      const cursorInPrefix = cursor >= 0 && cursor <= prefix.length + 1 && prefix;
      const cursorInSuffix = cursor >= init_value.length - suffix.length && cursor <= init_value.length + 1 && suffix;

      if (cursor && (cursorInPrefix || cursorInSuffix)) {
        // если пытаемся печатать/стирать, находясь в префиксе/суффиксе, то курсор просто встает после всех цифр
        return {
          ...inputData,
          value: newValue,
          selectionStart: suffix ? newValue.length - suffix.length - 1 : newValue.length,
          selectionEnd: suffix ? newValue.length - suffix.length - 1 : newValue.length,
        };
      } else if (thousand && init_value.charAt(cursor - 1) === thousand && newValue.length === init_value.length) {
        // если пытаемся стереть разделитель thousand, то курсор перескакивает через него
        return {
          ...inputData,
          value: newValue,
          selectionStart: cursor - 1,
          selectionEnd: cursor - 1,
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

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      const newValue = fitToCurrency(event.currentTarget.value, precision, decimal, thousand, prefix, suffix, true);
      if (inputRef.current) {
        if (typeof minValue === 'number') {
          if (Number(clearValue(newValue, precision, decimal)) < minValue) {
            const fullValue = fitToCurrency(String(minValue), precision, decimal, thousand, prefix, suffix, true);
            const shortValue = clearValue(fullValue, precision, decimal);

            onChange?.(fullValue, shortValue);
            inputRef.current.value = fullValue;
            return;
          }
        }
        if (typeof maxValue === 'number') {
          if (Number(clearValue(newValue, precision, decimal)) > maxValue) {
            const fullValue = fitToCurrency(String(maxValue), precision, decimal, thousand, prefix, suffix, true);
            const shortValue = clearValue(fullValue, precision, decimal);

            onChange?.(fullValue, shortValue);
            inputRef.current.value = fullValue;
            return;
          }
        }
      }
      onBlur?.(event);
    };
    const handleMinus = () => {
      const current = inputRef.current?.value || '';
      const newValue = Number(clearValue(current, precision, decimal)) - step;
      const newValueStr = fitToCurrency(String(newValue), precision, decimal, thousand, prefix, suffix, true);
      if (inputRef.current) {
        if (typeof minValue === 'number') {
          if (newValue >= minValue) {
            changeInputData(inputRef.current, { value: newValueStr });
          }
        } else {
          changeInputData(inputRef.current, { value: newValueStr });
        }
      }
    };
    const handlePlus = () => {
      const current = inputRef.current?.value || '';
      const newValue = Number(clearValue(current, precision, decimal)) + step;
      const newValueStr = fitToCurrency(String(newValue), precision, decimal, thousand, prefix, suffix, true);

      if (inputRef.current) {
        if (typeof maxValue === 'number') {
          if (newValue <= maxValue) {
            changeInputData(inputRef.current, { value: newValueStr });
          }
        } else {
          changeInputData(inputRef.current, { value: newValueStr });
        }
      }
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const newVal = event.currentTarget.value;

      if (typeof minValue === 'number' && newVal) {
        const minusDsb = Number(clearValue(newVal, precision, decimal)) - step < minValue;
        minusDisabled !== minusDsb && setMinusDisabled(minusDsb);
      }
      if (typeof maxValue === 'number' && newVal) {
        const plusDsb = Number(clearValue(newVal, precision, decimal)) + step > maxValue;
        plusDisabled !== plusDsb && setPlusDisabled(plusDsb);
      }
      if (newVal === '') {
        // когда в инпут ничего не введено, кнопки +/- не должны быть задизейблены
        minusDisabled && setMinusDisabled(false);
        plusDisabled && setPlusDisabled(false);
      }

      const fullValue = newVal;
      const shortValue = clearValue(newVal, precision, decimal);

      onChange?.(fullValue, shortValue);
    };

    return (
      <TextInput
        {...rest}
        onChange={handleChange}
        placeholder={placeholder}
        ref={refSetter(ref, inputRef)}
        onBlur={handleBlur}
        handleInput={handleInputChange}
        type="text"
        icons={
          displayPlusMinusIcons
            ? [
                rest.icons,
                <Minus onClick={handleMinus} disabled={rest.disabled || minusDisabled} />,
                <Plus onClick={handlePlus} disabled={rest.disabled || plusDisabled} />,
              ]
            : [rest.icons]
        }
      />
    );
  },
);

NumberInput.displayName = 'NumberInput';
