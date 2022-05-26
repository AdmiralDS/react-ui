import * as React from 'react';
import { changeInputData, isInputDataDifferent, InputData } from '#src/components/common/dom/changeInputData';
import { typography } from '#src/components/Typography';
import styled from 'styled-components';

import { fitToCurrency, validateThousand, clearValue } from './utils';

const Container = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  width: fit-content;

  ${typography['Body/Body 2 Long']}
`;

const Input = styled.input`
  outline: none;
  appearance: none;
  border: none;
  padding: 0;
  ${typography['Body/Body 2 Long']}

  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ::-ms-clear,
  ::-ms-reveal {
    display: none;
  }
`;

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
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

  onChange?: (
    event: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>,
    fullStr?: string,
    shortStr?: string,
  ) => void;
}

export const AutoSizeInput: React.FC<InputProps> = ({
  placeholder,
  type,
  precision = 2,
  prefix = '',
  suffix = '₽',
  thousand: userThousand = ' ',
  decimal: userDecimal = '.',
  onChange,
  ...props
}) => {
  const containerRef = React.useRef<any>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);

  // thousand, decimal - не более одного символа
  const thousand = validateThousand(userThousand) ? userThousand.slice(0, 1) : ' ';
  const decimal = userDecimal.slice(0, 1);

  const handleInput = (inputData: InputData | null): InputData => {
    const { value, selectionStart } = inputData || {};
    const cursor = selectionStart || 0;
    const init_value = value || '';
    const newValue = fitToCurrency(init_value, precision, decimal, thousand, prefix, suffix);
    console.log(newValue);

    const cursorInPrefix = cursor >= 0 && cursor <= prefix.length + 1 && prefix;
    const cursorInSuffix = cursor >= init_value.length - suffix.length && cursor <= init_value.length + 1 && suffix;

    if (containerRef.current && inputRef.current) {
      //   containerRef.current.style.width = inputRef.current.style.width;
      containerRef.current.innerHTML = newValue || '';
    }

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

  React.useLayoutEffect(() => {
    const nullHandledValue = handleInput(null);
    function oninput(this: HTMLInputElement) {
      const { value, selectionStart, selectionEnd } = this;
      const currentInputData = { value, selectionStart, selectionEnd };

      const inputData = handleInput(currentInputData);

      if (placeholder && !isInputDataDifferent(nullHandledValue, inputData)) {
        changeInputData(this, { ...inputData, value: '' });
      } else {
        changeInputData(this, inputData);
      }
    }

    // Чтение selectionStart в Safari при type='date' вызывает ошибку
    if (type !== 'date' && inputRef.current) {
      const node = inputRef.current;
      node.addEventListener('input', oninput);

      const { value, selectionStart, selectionEnd } = node;
      const currentInputData = { value, selectionStart, selectionEnd };
      const inputData = handleInput(currentInputData);

      if (placeholder && !isInputDataDifferent(nullHandledValue, inputData)) {
        changeInputData(node, { ...inputData, value: '' });
      } else {
        changeInputData(node, inputData);
      }

      return () => {
        node.removeEventListener('input', oninput);
      };
    }
  }, [inputRef.current, placeholder]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = event.currentTarget.value;

    // if (typeof minValue === 'number' && newVal) {
    //   const minusDsb = Number(clearValue(newVal, precision, decimal)) - step < minValue;
    //   minusDisabled !== minusDsb && setMinusDisabled(minusDsb);
    // }
    // if (typeof maxValue === 'number' && newVal) {
    //   const plusDsb = Number(clearValue(newVal, precision, decimal)) + step > maxValue;
    //   plusDisabled !== plusDsb && setPlusDisabled(plusDsb);
    // }
    // if (newVal === '') {
    //   // когда в инпут ничего не введено, кнопки +/- не должны быть задизейблены
    //   minusDisabled && setMinusDisabled(false);
    //   plusDisabled && setPlusDisabled(false);
    // }

    const fullValue = newVal;
    const shortValue = clearValue(newVal, precision, decimal);

    onChange?.(event, fullValue, shortValue);
  };

  return (
    <Container id="test">
      <span ref={containerRef} />
      <Input ref={inputRef} placeholder={placeholder} type={type} onChange={handleChange} {...props} />
    </Container>
  );
};
