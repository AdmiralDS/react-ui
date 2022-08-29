import * as React from 'react';
import styled from 'styled-components';
import { NumberInput } from '#src/components/input/NumberInput';
import { Range } from '#src/components/Range';
import { clearValue, fitToCurrency } from '#src/components/input/NumberInput/utils';
import type { TextInputProps } from '#src/components/input/TextInput';
import { skeletonMixin } from '#src/components/input/Container';

const Wrapper = styled.div<{ skeleton?: boolean }>`
  position: relative;
  

  pointer-events: ${(p) => (p.skeleton ? 'none' : 'all')};
  ${({ skeleton }) => skeleton && skeletonMixin}};
`;

const InputsWrapper = styled.div`
  display: flex;
  margin-bottom: 16px;
  [data-dimension='s'] & {
    margin-bottom: 12px;
  }
  & > div:first-child {
    margin-right: 8px;
  }
  & > div {
    width: 100%;
  }
`;

type Dimension = 'xl' | 'm' | 's';

export interface SliderRangeProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'placeholder' | 'prefix' | 'onChange'> {
  /** Дефолтное значение компонента - массив из двух строк (значений первого и второго инпутов) */
  defaultValue?: [string, string];
  /** Колбек на изменение значений */
  onChange?: (value: [{ str: string; num: number }, { str: string; num: number }]) => void;
  /** Размер компонента */
  dimension?: Dimension;
  /** Минимальное значение слайдера */
  minValue?: number;
  /** Максимальное значение слайдера */
  maxValue?: number;
  /** Шаг слайдера */
  step?: number;
  /** точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа */
  precision?: number;
  /** разделитель между тысячами */
  thousand?: string;
  /** префикс (строка, которая выводится перед числовым значением) */
  prefix?: [string, string];
  /** суффикс (строка, которая выводится после числового значения) */
  suffix?: string;
  /** плейсхолдеры инпутов */
  placeholder?: [string, string];
  /** Опции, которые можно передать в первый инпут */
  input1?: Omit<TextInputProps, 'onChange' | 'readOnly'>;
  /** Опции, которые можно передать во второй инпут */
  input2?: Omit<TextInputProps, 'onChange' | 'readOnly'>;
  /** Отключение компонента */
  disabled?: boolean;
  /** Состояние skeleton */
  skeleton?: boolean;
  /** Режим readOnly компонента */
  readOnly?: boolean;
}

export const SliderRange: React.FC<SliderRangeProps> = ({
  dimension,
  minValue = 0,
  maxValue = 20,
  step = 1,
  precision = 0,
  thousand = ' ',
  prefix = ['От', 'До'],
  suffix = '₽',
  placeholder = [
    prefix[0] + ' ' + fitToCurrency(String(minValue), precision, '.', thousand) + ' ' + suffix,
    prefix[1] + ' ' + fitToCurrency(String(maxValue), precision, '.', thousand) + ' ' + suffix,
  ],
  defaultValue,
  onChange,
  input1: input1Props,
  input2: input2Props,
  disabled,
  skeleton = false,
  readOnly,
  ...props
}) => {
  const rangeDimension = dimension === 's' ? dimension : 'm';

  const input1Ref = React.useRef<HTMLInputElement>(null);
  const input2Ref = React.useRef<HTMLInputElement>(null);

  const [input1, setInput1] = React.useState('');
  const [input2, setInput2] = React.useState('');
  const [slider1, setSlider1] = React.useState(minValue);
  const [slider2, setSlider2] = React.useState(maxValue);

  const input1Value = input1;
  const input2Value = input2;

  const getFull = (str: string | number) => fitToCurrency(String(str), precision, '.', thousand, true);

  React.useEffect(() => {
    if (defaultValue) {
      const [defaultInput1, defaultInput2] = defaultValue;
      const newInput1 = getFull(defaultInput1);
      const newInput2 = getFull(defaultInput2);
      const newSlider1 = Number(clearValue(newInput1, precision));
      const newSlider2 = Number(clearValue(newInput2, precision));
      const diff = newSlider2 - newSlider1;
      if (defaultValue.indexOf('') > -1) {
        // Если значения инпутов не переданы (value = ['',''] || ['', str] || [str, '']),
        // то бегунки занимают крайние положения диапазона [minValue, maxValue]
        setInput1(newInput1);
        setInput2(newInput2);
        setSlider1(newInput1 === '' ? minValue : newSlider1);
        setSlider2(newInput2 === '' ? maxValue : newSlider2);
      }
      // проверяем, что соблюдено условие: минимальная разница между значениями равна одной единице (step)
      else if (diff < step) {
        // если условие не соблюдено, раздвигаем значения
        const delta = step - diff;
        if (newSlider1 - delta > minValue) {
          const newInput1 = newSlider1 - delta;
          setInput1(getFull(newInput1));
          setInput2(newInput2);
          setSlider1(newInput1);
          setSlider2(newSlider2);
          onChange?.([
            { str: getFull(newInput1), num: newInput1 },
            { str: getFull(newInput2), num: newSlider2 },
          ]);
        } else {
          const newInput2 = newSlider2 + delta;
          setInput1(newInput1);
          setInput2(getFull(newInput2));
          setSlider1(newSlider1);
          setSlider2(newInput2);
          onChange?.([
            { str: getFull(newInput1), num: newSlider1 },
            { str: getFull(newInput2), num: newInput2 },
          ]);
        }
      } else {
        setInput1(newInput1);
        setInput2(newInput2);
        setSlider1(newSlider1);
        setSlider2(newSlider2);
      }
    }
  }, [defaultValue]);

  const handleRangeChange = (event: any, value: [number, number]) => {
    const [newSlider1, newSlider2] = value;
    const newInput1 = getFull(newSlider1);
    const newInput2 = getFull(newSlider2);

    const slider1Changed = newSlider1 !== slider1;
    const slider2Changed = newSlider2 !== slider2;

    const diff = newSlider2 - newSlider1;

    if (event.type !== 'mousemove' && event.type !== 'touchmove') {
      if (diff < step) {
        const delta = step - diff;
        if (newSlider1 - delta > minValue) {
          setInput1(getFull(newSlider1 - delta));
          setSlider1(newSlider1 - delta);
          slider2Changed && setInput2(newInput2);
          slider2Changed && setSlider2(newSlider2);

          onChange?.([
            { str: getFull(newSlider1 - delta), num: newSlider1 - delta },
            { str: slider2Changed ? newInput2 : input2Value, num: slider2Changed ? newSlider2 : slider2 },
          ]);
        } else {
          setInput2(getFull(newSlider2 + delta));
          setSlider2(newSlider2 + delta);
          slider1Changed && setInput1(newInput1);
          slider1Changed && setSlider1(newSlider1);

          onChange?.([
            { str: slider1Changed ? newInput1 : input1Value, num: slider1Changed ? newSlider1 : slider1 },
            { str: getFull(newSlider2 + delta), num: newSlider2 + delta },
          ]);
        }
      } else {
        slider1Changed && setInput1(newInput1);
        slider2Changed && setInput2(newInput2);
        slider1Changed && setSlider1(newSlider1);
        slider2Changed && setSlider2(newSlider2);

        onChange?.([
          { str: slider1Changed ? newInput1 : input1Value, num: slider1Changed ? newSlider1 : slider1 },
          { str: slider2Changed ? newInput2 : input2Value, num: slider2Changed ? newSlider2 : slider2 },
        ]);
      }
    } else {
      slider1Changed && setInput1(newInput1);
      slider2Changed && setInput2(newInput2);
      slider1Changed && setSlider1(newSlider1);
      slider2Changed && setSlider2(newSlider2);
    }
  };

  const handleInput1Blur = () => {
    const value1Num = Number(clearValue(input1Value, precision) || minValue);
    const value2Num = Number(clearValue(input2Value, precision) || maxValue);
    if (value1Num < minValue) {
      setInput1(getFull(minValue));
      setSlider1(minValue);
      onChange?.([
        { str: getFull(minValue), num: minValue },
        { str: input2Value, num: slider2 },
      ]);
    } else if (value1Num > value2Num - step) {
      setInput1(getFull(value2Num - step));
      setSlider1(value2Num - step);
      onChange?.([
        { str: getFull(value2Num - step), num: value2Num - step },
        { str: input2Value, num: slider2 },
      ]);
    } else {
      setSlider1(value1Num);
      onChange?.([
        { str: input1Value, num: value1Num },
        { str: input2Value, num: slider2 },
      ]);
    }
  };
  const handleInput2Blur = () => {
    const value1Num = Number(clearValue(input1Value, precision) || minValue);
    const value2Num = Number(clearValue(input2Value, precision) || maxValue);
    if (value2Num > maxValue) {
      setInput2(getFull(maxValue));
      setSlider2(maxValue);
      onChange?.([
        { str: input1Value, num: slider1 },
        { str: getFull(maxValue), num: maxValue },
      ]);
    } else if (value2Num < value1Num + step) {
      setInput2(getFull(value1Num + step));
      setSlider2(value1Num + step);
      onChange?.([
        { str: input1Value, num: slider1 },
        { str: getFull(value1Num + step), num: value1Num + step },
      ]);
    } else {
      setSlider2(value2Num);
      onChange?.([
        { str: input1Value, num: slider1 },
        { str: input2Value, num: value2Num },
      ]);
    }
  };
  const handleInput1Change = (event: React.ChangeEvent<HTMLInputElement>) => setInput1(event.target.value);
  const handleInput2Change = (event: React.ChangeEvent<HTMLInputElement>) => setInput2(event.target.value);

  const inputProps = {
    dimension,
    precision,
    thousand,
    suffix,
    disabled,
    readOnly,
    displayPlusMinusIcons: false,
    step,
    minValue,
    maxValue,
  };

  return (
    <Wrapper data-dimension={dimension} {...props}>
      <InputsWrapper>
        <NumberInput
          ref={input1Ref}
          value={input1}
          prefix={prefix[0]}
          placeholder={placeholder[0]}
          skeleton={skeleton}
          onChange={handleInput1Change}
          onBlur={handleInput1Blur}
          {...input1Props}
          {...inputProps}
        />
        <NumberInput
          ref={input2Ref}
          value={input2}
          prefix={prefix[1]}
          placeholder={placeholder[1]}
          skeleton={skeleton}
          onChange={handleInput2Change}
          onBlur={handleInput2Blur}
          {...input2Props}
          {...inputProps}
        />
      </InputsWrapper>
      <Range
        value={[slider1, slider2]}
        skeleton={skeleton}
        onChange={handleRangeChange}
        minValue={minValue}
        maxValue={maxValue}
        step={step}
        dimension={rangeDimension}
        disabled={disabled || readOnly}
      />
    </Wrapper>
  );
};

SliderRange.displayName = 'SliderRange';
