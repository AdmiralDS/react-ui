import { useEffect, useRef, useState } from 'react';
import styled, { useTheme } from 'styled-components';
import { LIGHT_THEME } from '#src/components/themes';
import { NumberInput } from '#src/components/input/NumberInput';
import { Range } from '#src/components/Range';
import {
  clearValue,
  fitToCurrency,
  getDecimalSeparator,
  getThousandSeparator,
  validateThousand,
} from '#src/components/input/NumberInput/utils';
import type { TextInputProps } from '#src/components/input/TextInput';
import { skeletonMixin } from '#src/components/input/Container';
import { changeInputData } from '#src/components/common/dom/changeInputData';

const Wrapper = styled.div<{ skeleton?: boolean }>`
  position: relative;

  pointer-events: ${(p) => (p.skeleton ? 'none' : 'all')};
  ${({ skeleton }) => skeleton && skeletonMixin};
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
  /** Значение компонента - массив из двух строк (значений первого и второго инпутов) */
  value?: [string, string];
  /** Дефолтное значение компонента - массив из двух строк (значений первого и второго инпутов) */
  defaultValue?: [string, string];
  /** Колбек на изменение значений */
  onChange?: (value: [{ str: string; num: number }, { str: string; num: number }], event: React.ChangeEvent<HTMLInputElement>) => void;
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
  /** разделитель между тысячами. Если значение не задано,
   * то оно определяется согласно локали, в русской локали thousand - это пробел */
  thousand?: string;
  /** разделитель между целым и десятичным. Если значение не задано,
   * то оно определяется согласно локали, в русской локали decimal - это запятая */
  decimal?: string;
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
  thousand: userThousand,
  decimal: userDecimal,
  prefix,
  suffix,
  placeholder,
  value,
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

  const theme = useTheme() || LIGHT_THEME;
  const decimal = userDecimal?.slice(0, 1) ?? getDecimalSeparator(theme.currentLocale);
  const thousand =
    typeof userThousand !== 'undefined' && validateThousand(userThousand)
      ? userThousand.slice(0, 1)
      : getThousandSeparator(theme.currentLocale);

  const input1Ref = useRef<HTMLInputElement>(null);
  const input2Ref = useRef<HTMLInputElement>(null);

  const [slider1, setSlider1] = useState(minValue);
  const [slider2, setSlider2] = useState(maxValue);
  const [innerInput1State, setInnerInput1State] = useState(defaultValue?.[0] || '');
  const [innerInput2State, setInnerInput2State] = useState(defaultValue?.[1] || '');
  const input1 = value?.[0] || innerInput1State;
  const input2 = value?.[1] || innerInput2State;

  const getFull = (str: string | number) => fitToCurrency(String(str), precision, decimal, thousand, true);

  useEffect(() => {
    if (input1 === '') {
      setSlider1(minValue);
    } else {
      const newSlider1 = Number(clearValue(input1, precision, decimal).replace(decimal, '.'));
      setSlider1(newSlider1);
    }
  }, [input1, minValue, precision, decimal]);

  useEffect(() => {
    if (input2 === '') {
      setSlider2(maxValue);
    } else {
      const newSlider2 = Number(clearValue(input2, precision, decimal).replace(decimal, '.'));
      setSlider2(newSlider2);
    }
  }, [input2, maxValue, precision, decimal]);

  const handleRangeChange = (_event: TouchEvent | MouseEvent, value: [number, number]) => {
    const [newSld1, newSld2] = value;
    const newSlider1 = newSld1 < minValue ? minValue : newSld1;
    const newSlider2 = newSld2 > maxValue ? maxValue : newSld2;

    if (input1Ref.current) {
      changeInputData(input1Ref.current, { value: getFull(newSlider1) });
    }
    if (input2Ref.current) {
      changeInputData(input2Ref.current, { value: getFull(newSlider2) });
    }
  };

  const handleRangeMouseUp = () => {
    if (slider1 == slider2 && slider1 + step <= maxValue) {
      if (input2Ref.current) {
        changeInputData(input2Ref.current, { value: getFull(slider2 + step) });
      }
    } else if (slider1 == slider2 && slider1 + step > maxValue) {
      if (input1Ref.current) {
        changeInputData(input1Ref.current, { value: getFull(slider1 - step) });
      }
    }
  };

  const handleInput1Blur = () => {
    const value1Num = Number(clearValue(input1, precision, decimal).replace(decimal, '.') || minValue);
    const value2Num = Number(clearValue(input2, precision, decimal).replace(decimal, '.') || maxValue);
    if (value1Num < minValue) {
      if (input1Ref.current) {
        changeInputData(input1Ref.current, { value: getFull(minValue) });
      }
    } else if (value1Num > value2Num - step) {
      if (input1Ref.current) {
        changeInputData(input1Ref.current, { value: getFull(value2Num - step) });
      }
    }
  };
  const handleInput2Blur = () => {
    const value1Num = Number(clearValue(input1, precision, decimal).replace(decimal, '.') || minValue);
    const value2Num = Number(clearValue(input2, precision, decimal).replace(decimal, '.') || maxValue);
    if (value2Num > maxValue) {
      if (input2Ref.current) {
        changeInputData(input2Ref.current, { value: getFull(maxValue) });
      }
    } else if (value2Num < value1Num + step) {
      if (input2Ref.current) {
        changeInputData(input2Ref.current, { value: getFull(value1Num + step) });
      }
    }
  };
  const handleInput1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSlider1 = Number(clearValue(event.target.value, precision, decimal).replace(decimal, '.') || minValue);
    setInnerInput1State(event.target.value);
    onChange?.([
      { str: event.target.value, num: newSlider1 },
      { str: input2, num: slider2 },
    ], event);
  };
  const handleInput2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSlider2 = Number(clearValue(event.target.value, precision, decimal).replace(decimal, '.') || maxValue);
    setInnerInput2State(event.target.value);
    onChange?.([
      { str: input1, num: slider1 },
      { str: event.target.value, num: newSlider2 },
    ], event);
  };

  const inputProps = {
    dimension,
    precision,
    thousand,
    decimal,
    suffix,
    disabled,
    readOnly,
    displayPlusMinusIcons: false,
    step,
  };

  return (
    <Wrapper data-dimension={dimension} {...props}>
      <InputsWrapper>
        <NumberInput
          ref={input1Ref}
          value={input1}
          prefix={prefix?.[0]}
          placeholder={placeholder?.[0]}
          skeleton={skeleton}
          onChange={handleInput1Change}
          onBlur={handleInput1Blur}
          {...input1Props}
          {...inputProps}
        />
        <NumberInput
          ref={input2Ref}
          value={input2}
          prefix={prefix?.[1]}
          placeholder={placeholder?.[1]}
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
        onMouseDown={(e) => {
          // prevent inputs blur
          e.preventDefault();
        }}
        onRangeMouseUp={handleRangeMouseUp}
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
