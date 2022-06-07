import * as React from 'react';
import styled from 'styled-components';
import { Slider as SliderComponent } from '#src/components/Slider';
import { TextInputProps } from '#src/components/input/TextInput';

import { NumberInput } from '#src/components/input/NumberInput';
import { clearValue, fitToCurrency, repeatStringNumTimes } from '#src/components/input/NumberInput/utils';
import { Shape } from '#src/components/themes/common';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';

function sliderBorderRadius(shape: Shape): string {
  const value = mediumGroupBorderRadius(shape);

  return `${value} ${value} 0 0`;
}

const Wrapper = styled.div<{ dimension: 'xl' | 'm' | 's' }>`
  position: relative;
  padding-bottom: ${({ dimension }) => (dimension === 'xl' ? 30 : 28)}px;
`;

const Slider = styled(SliderComponent)`
  & > div {
    position: absolute;
    top: -11px;
    [data-dimension='m'] & {
      top: -9px;
    }
    [data-dimension='s'] & {
      top: -9px;
    }
  }
`;

const Input = styled(NumberInput)`
  border-radius: ${(p) => sliderBorderRadius(p.theme.shape)};
`;

export interface SliderInputProps extends Omit<TextInputProps, 'onChange' | 'value'> {
  /** Дефолтное значение компонента */
  defaultValue?: string;
  /** Колбек на изменение значения компонента (fullStr - строка вместе с префиксом/суффиксом/разделителями, shortStr - строка только с числом) */
  onChange?: (fullStr: string, shortStr: string) => void;
  /** Минимальное значение слайдера */
  minValue?: number;
  /** Максимальное значение слайдера */
  maxValue?: number;
  /** Шаг слайдера */
  step?: number;
  /** Массив отметок слайдера */
  tickMarks?: number[];
  /** точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа */
  precision?: number;
  /** разделитель между тысячами */
  thousand?: string;
  /** префикс (строка, которая выводится перед числовым значением) */
  prefix?: string;
  /** суффикс (строка, которая выводится после числового значения) */
  suffix?: string;
  /** плейсхолдер */
  placeholder?: string;
  /** Стандартные html-атрибуты, которые будут переданы wrapper-контейнеру компонента */
  wrapperProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const SliderInput = React.forwardRef<HTMLInputElement, SliderInputProps>(
  (
    {
      defaultValue = '',
      onChange,
      minValue = 0,
      maxValue = 20,
      step = 1,
      tickMarks,
      dimension = 'xl',
      precision = 0,
      thousand = ' ',
      prefix = '',
      suffix = '₽',
      placeholder = '0 ₽',
      disabled,
      wrapperProps,
      ...props
    },
    ref,
  ) => {
    const sliderDimension = dimension === 'xl' ? dimension : 'm';
    // десятичный разделитель
    const decimal = '.';
    const [inputValue, setInputValue] = React.useState<string>('');
    const [sliderValue, setSliderValue] = React.useState<number>(minValue);

    React.useEffect(() => {
      setInputValue(fitToCurrency(defaultValue, precision, decimal, thousand, prefix, suffix, true));
      setSliderValue(+clearValue(defaultValue, precision, decimal));
    }, [defaultValue]);

    const handleSliderChange = (e: any, value: number) => {
      const shortValue = value.toString() + '.' + repeatStringNumTimes('0', precision);
      const fullValue = fitToCurrency(shortValue, precision, decimal, thousand, prefix, suffix);

      setSliderValue(value);
      setInputValue(fullValue);

      onChange?.(fullValue, shortValue);
    };
    const handleInputChange = (
      event: React.ChangeEvent<HTMLInputElement> | React.FocusEvent<HTMLInputElement>,
      fullStr?: string,
      shortStr?: string,
    ) => {
      const full = fullStr || '';
      const short = shortStr || '';
      setInputValue(full);
      setSliderValue(+short);

      onChange?.(full, short);
    };
    return (
      <Wrapper data-dimension={dimension} dimension={dimension} {...wrapperProps}>
        <Input
          {...props}
          ref={ref}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={props.onBlur}
          dimension={dimension}
          disabled={disabled}
          precision={precision}
          decimal={decimal}
          thousand={thousand}
          prefix={prefix}
          suffix={suffix}
          placeholder={placeholder}
          step={step}
          displayPlusMinusIcons={false}
          minValue={minValue}
          maxValue={maxValue}
        />
        <Slider
          aria-hidden
          value={sliderValue}
          onChange={handleSliderChange}
          minValue={minValue}
          maxValue={maxValue}
          decimal={decimal}
          precision={precision}
          thousand={thousand}
          tickMarks={tickMarks}
          step={step}
          disabled={disabled}
          dimension={sliderDimension}
        />
      </Wrapper>
    );
  },
);

SliderInput.displayName = 'SliderInput';
