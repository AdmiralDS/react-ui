import { forwardRef, useRef, useState, useEffect } from 'react';
import type { ReactNode, ChangeEvent, HTMLAttributes, FocusEvent } from 'react';
import styled from 'styled-components';
import { Slider as SliderComponent } from '#src/components/Slider';
import type { TextInputProps } from '#src/components/input/TextInput';

import { NumberInput } from '#src/components/input/NumberInput';
import { clearValue, fitToCurrency } from '#src/components/input/NumberInput/utils';
import type { Shape } from '#src/components/themes/common';
import { mediumGroupBorderRadius } from '#src/components/themes/borderRadius';
import { changeInputData } from '#src/components/common/dom/changeInputData';
import { refSetter } from '#src/components/common/utils/refSetter';

function sliderBorderRadius(shape: Shape): string {
  const value = mediumGroupBorderRadius(shape);

  return `${value} ${value} 0 0`;
}

const Wrapper = styled.div<{ $dimension: 'xl' | 'm' | 's' }>`
  position: relative;
  padding-bottom: ${({ $dimension }) => ($dimension === 'xl' ? 30 : 28)}px;
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

// TODO: in next major version rename onChange to OLD_onChange deprecated method,
// and create new native input onChange with event

export interface SliderInputProps extends Omit<TextInputProps, 'onChange'> {
  /** Колбек на изменение значения компонента
   * (fullStr - строка вместе с префиксом/суффиксом/разделителями,
   * shortStr - строка только с числом без символа разделителя тысяч)
   * */
  onChange?: (fullStr: string, shortStr: string, event: ChangeEvent<HTMLInputElement>) => void;
  /** Минимальное значение слайдера */
  minValue?: number;
  /** Максимальное значение слайдера */
  maxValue?: number;
  /** Шаг слайдера. Это положительное число, по умолчанию 1.
   * Если шаг - это дробное число, то количество знаков в десятичной части step должно быть равно precision
   */
  step?: number;
  /** Массив отметок слайдера */
  tickMarks?: number[];
  /** Render колбек для отрисовки кастомизированных подписей к отметкам слайдера */
  renderTickMark?: (mark: string) => ReactNode;
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
  wrapperProps?: HTMLAttributes<HTMLDivElement>;
}

export const SliderInput = forwardRef<HTMLInputElement, SliderInputProps>(
  (
    {
      defaultValue = '',
      value,
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
    const inputRef = useRef<HTMLInputElement>(null);

    const [sliderValue, setSliderValue] = useState<number>(minValue);
    const [innerValueState, setInnerValueState] = useState(defaultValue || '');
    const innerValue = value ?? innerValueState;

    useEffect(() => {
      setSliderValue(+clearValue(String(innerValue), precision, decimal));
    }, [innerValue]);

    const handleSliderChange = (e: any, value: number) => {
      const newValue = fitToCurrency(value, precision, decimal, thousand, true);

      if (inputRef.current) {
        changeInputData(inputRef.current, { value: newValue });
      }
    };
    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
      const prefixPart = prefix ? prefix + ' ' : '';
      const suffixPart = suffix ? ' ' + suffix : '';
      const full = prefixPart + event.target.value + suffixPart;
      const short = clearValue(event.target.value, precision, decimal, minValue);

      setInnerValueState(event.target.value);
      onChange?.(full, short, event);
    };
    const handleInputBlur = (event: FocusEvent<HTMLInputElement>) => {
      const numValue = Number(clearValue(event.target.value, precision, decimal));

      if (inputRef.current) {
        // если введеное значение меньше minValue
        if (typeof minValue === 'number' && numValue < minValue) {
          const fullValue = fitToCurrency(String(minValue), precision, decimal, thousand, true);

          changeInputData(inputRef.current, { value: fullValue });
        }
        // если введеное значение больше maxValue
        else if (typeof maxValue === 'number' && numValue > maxValue) {
          const fullValue = fitToCurrency(String(maxValue), precision, decimal, thousand, true);

          changeInputData(inputRef.current, { value: fullValue });
        }
      }
      props.onBlur?.(event);
    };
    return (
      <Wrapper data-dimension={dimension} $dimension={dimension} {...wrapperProps}>
        <Input
          {...props}
          ref={refSetter(ref, inputRef)}
          value={innerValue}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
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
            onMouseDown={(e) => {
              // prevent inputs blur
              e.preventDefault();
            }}
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
