import * as React from 'react';
import { TextInput } from '#/components/input/TextInput';
import { InputData } from '#/components/common/dom/changeInputData';
import { refSetter } from '#/components/common/utils/refSetter';
import { TextInputProps } from '#/components/input/TextInput';
import { ReactComponent as MinusOutline } from '@admiral-ds/icons/build/service/MinusOutline.svg';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';
import { changeInputData } from '#/components/common/dom/changeInputData';
import styled, { css } from 'styled-components';

import { fitToCurrency, clearValue } from './utils';

const Icon = css`
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color.text.secondary};
  }
  &:hover {
    cursor: pointer;
  }
  &:hover *[fill^='#'] {
    fill: ${(props) => props.theme.color.basic.hover};
  }
`;

const IconDisabled = css`
  cursor: default;
  pointer-events: none;
  & *[fill^='#'] {
    fill: ${(props) => props.theme.color.text.tertiary};
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
  /** Колбек на изменение значения компонента (fullStr - строка вместе с префиксом/суффиксом/разделителями, shortStr - строка только с числом) */
  onChange?: (fullStr: string, shortStr: string) => void;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  (
    {
      precision = 2,
      prefix = '',
      suffix = '₽',
      thousand: userThousand = ' ',
      decimal = '.',
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

    // thousand - не более одного символа
    const thousand = userThousand.slice(0, 1);

    React.useEffect(() => {
      if (inputRef.current && inputRef.current.value) {
        if (typeof minValue === 'number') {
          const minusDsb = Number(clearValue(inputRef.current.value, precision)) - step < minValue;
          setMinusDisabled(minusDsb);
        }
        if (typeof maxValue === 'number') {
          const plusDsb = Number(clearValue(inputRef.current.value, precision)) + step > maxValue;
          setPlusDisabled(plusDsb);
        }
      }
    }, [inputRef.current?.value]);

    const handleInputChange = (inputData: InputData): InputData => {
      const { value, selectionStart } = inputData;
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
          selectionStart: newValue.length - suffix.length - 1,
          selectionEnd: newValue.length - suffix.length - 1,
        };
      } else if (init_value.charAt(cursor - 1) === thousand && newValue.length === init_value.length) {
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
          if (Number(clearValue(newValue, precision)) < minValue) {
            inputRef.current.value = fitToCurrency(
              String(minValue),
              precision,
              decimal,
              thousand,
              prefix,
              suffix,
              true,
            );
            return;
          }
        }
        if (typeof maxValue === 'number') {
          if (Number(clearValue(newValue, precision)) > maxValue) {
            inputRef.current.value = fitToCurrency(
              String(maxValue),
              precision,
              decimal,
              thousand,
              prefix,
              suffix,
              true,
            );
            return;
          }
        }
        inputRef.current.value = newValue;
      }
      onBlur?.(event);
    };
    const handleMinus = () => {
      const current = inputRef.current?.value || '';
      const newValue = Number(clearValue(current, precision)) - step;
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
      const newValue = Number(clearValue(current, precision)) + step;
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

      const fullValue = newVal;
      const shortValue = clearValue(newVal, precision);

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
