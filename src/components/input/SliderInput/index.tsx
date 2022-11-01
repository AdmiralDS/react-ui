import * as React from 'react';
import styled from 'styled-components';
import { Slider as SliderComponent } from '#src/components/Slider';
import { TextInputProps } from '#src/components/input/TextInput';

import { NumberInput } from '#src/components/input/NumberInput';
import { clearValue, fitToCurrency } from '#src/components/input/NumberInput/utils';
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
  border-radius: ${(p) => (p.skeleton ? 0 : sliderBorderRadius(p.theme.shape))};
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
  /** Шаг слайдера. Это положительное число, по умолчанию 1.
   * Компонент принимает только кратные step значения, в диапазоне minValue - maxValue
   */
  step?: number;
  /** Массив отметок слайдера */
  tickMarks?: number[];
  /** Render колбек для отрисовки кастомизированных подписей к отметкам слайдера */
  renderTickMark?: (mark: string) => React.ReactNode;
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
      renderTickMark,
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
      skeleton = false,
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
      setInputValue(fitToCurrency(defaultValue, precision, decimal, thousand, true));
      setSliderValue(+clearValue(defaultValue, precision, decimal));
    }, [defaultValue]);

    const handleSliderChange = (e: any, value: number) => {
      const shortValue = fitToCurrency(value.toString(), precision, decimal, thousand, true);
      const fullValue = fitToCurrency(shortValue, precision, decimal, thousand);

      setSliderValue(value);
      setInputValue(fullValue);

      onChange?.(fullValue, shortValue);
    };
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const full = event.target.value;
      const short = clearValue(full, precision, decimal);
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
          skeleton={skeleton}
        />
        {!skeleton && (
          <Slider
            aria-hidden
            value={sliderValue}
            onChange={handleSliderChange}
            renderTickMark={renderTickMark}
            minValue={minValue}
            maxValue={maxValue}
            decimal={decimal}
            precision={precision}
            thousand={thousand}
            tickMarks={tickMarks}
            step={step}
            disabled={disabled || props.readOnly}
            dimension={sliderDimension}
          />
        )}
      </Wrapper>
    );
  },
);

SliderInput.displayName = 'SliderInput';
