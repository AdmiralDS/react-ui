import * as React from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { throttle } from '#src/components/common/utils/throttle';

import { calcValue } from './utils';
import { DefaultTrack, FilledTrack, Thumb, ThumbCircle, Track, TrackWrapper, Wrapper } from './style';
import { TickMarks } from './TickMarks';

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Значение компонента */
  value: number;
  /** Коллбек на изменение состояния */
  onChange: (event: any, value: number) => void;
  /** Минимальное значение */
  minValue?: number;
  /** Максимальное значение */
  maxValue?: number;
  /** Шаг слайдера. Это либо строка any, либо положительное число, по умолчанию 1.
   * Если этот параметр не установлен в any, компонент принимает только кратные step значения, в диапазоне minValue - maxValue
   */
  step?: number | 'any';
  /** Символ разделителя между целым и десятичным числом, используется при форматировании надписей к отметкам слайдера */
  decimal?: string;
  /** Точность (количество знаков в десятичной части числа), используется при форматировании надписей к отметкам слайдера */
  precision?: number;
  /** Символ разделителя между тысячами, используется при форматировании надписей к отметкам слайдера */
  thousand?: string;
  /** Массив отметок */
  tickMarks?: number[];
  /** Render колбек для отрисовки кастомизированных подписей к отметкам слайдера */
  renderTickMark?: (mark: string) => React.ReactNode;
  /** Отключение компонента */
  disabled?: boolean;
  /** Размер компонента */
  dimension?: 'xl' | 'm';
  /** Состояние skeleton */
  skeleton?: boolean;
}

export const Slider = ({
  minValue = 0,
  maxValue = 20,
  decimal = '.',
  precision = 2,
  thousand = ' ',
  value = 0,
  onChange,
  renderTickMark,
  tickMarks: points,
  disabled = false,
  step: userStep = 1,
  dimension = 'xl',
  skeleton = false,
  ...props
}: SliderProps) => {
  const tickMarks = Array.isArray(points) ? points : undefined;
  const step = userStep > 0 ? userStep : 1;

  const [isDraging, setDrag] = React.useState(false);
  const [animation, setAnimation] = React.useState(false);
  const [rangeWidth, setRangeWidth] = React.useState(0);

  const filledRef = React.useRef<HTMLDivElement | null>(null);
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const sliderRef = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    function correctSliderPosition(value: number) {
      const onePxValue = rangeWidth ? rangeWidth / (maxValue - minValue) : 0;
      const correctValue = value >= 0 ? value - minValue : -minValue + value;
      let calcPercents: number = ((onePxValue * correctValue) / rangeWidth) * 100;
      calcPercents = calcPercents > 100 ? 100 : calcPercents;
      calcPercents = calcPercents < 0 ? 0 : calcPercents;

      const sliderCoords = String(value) ? calcPercents : 0;
      if (sliderRef.current && filledRef.current) {
        sliderRef.current.style.left = `${sliderCoords}%`;
        filledRef.current.style.width = `${sliderCoords}%`;
      }
    }

    let newValue = value;
    // value должно быть больше или равно minValue
    if (newValue < minValue) {
      newValue = minValue;
    }
    // value должно быть меньше или равно maxValue
    if (newValue > maxValue) {
      newValue = maxValue;
    }
    // value должно быть кратно step
    if (step && step !== 'any') {
      newValue = Math.round(newValue / step) * step;
      if (step.toString().includes('.')) {
        const decimal = step.toString().match(/\.(\d+)/)?.[1].length;
        newValue = +newValue.toFixed(decimal);
      }
    }

    correctSliderPosition(newValue);
  }, [value, minValue, maxValue, step, rangeWidth, sliderRef.current, filledRef.current]);

  React.useLayoutEffect(() => {
    if (trackRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => setRangeWidth(entry.contentRect.width || 0));
      });
      resizeObserver.observe(trackRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [trackRef.current, setRangeWidth]);

  const updateSlider = React.useCallback(
    (e: any) => {
      setAnimation(false);
      const newValue = calcValue(e, trackRef, minValue, maxValue, step, undefined);
      if (newValue !== value) {
        onChange(e, newValue);
      }
    },
    [setAnimation, value, trackRef.current, minValue, maxValue, step],
  );

  const [handleMouseMove, freeResources] = throttle(updateSlider, 50);

  React.useEffect(() => {
    if (isDraging && !disabled) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleMouseMove);
      document.addEventListener('touchend', handleMouseUp);
      document.addEventListener('touchcancel', handleMouseUp);
    }
    return () => {
      freeResources();
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
      document.removeEventListener('touchcancel', handleMouseUp);
    };
  });

  const onSliderClick = React.useCallback(
    (e: any) => {
      if (e.type === 'mousedown') e.preventDefault();
      e.stopPropagation();
      setDrag(true);
      setAnimation(true);
    },
    [setAnimation, setDrag],
  );

  const onPointClick = React.useCallback(
    (e: any, newValue: number) => {
      e.preventDefault();
      e.stopPropagation();
      setAnimation(true);
      if (newValue !== value) {
        onChange(e, newValue);
      }
    },
    [setAnimation, value],
  );

  const onTrackClick = React.useCallback(
    (e: any) => {
      if (e.type === 'mousedown') e.preventDefault();
      setAnimation(true);
      if (!tickMarks) setDrag(true);
      const newValue = calcValue(e, trackRef, minValue, maxValue, step, tickMarks);
      if (newValue !== value) {
        onChange(e, newValue);
      }
    },
    [setAnimation, setDrag, value, trackRef.current, minValue, maxValue, step, points],
  );

  const handleMouseUp = React.useCallback(
    (e: any) => {
      if (e.type === 'mouseup') e.preventDefault();
      e.stopPropagation();
      setDrag(false);
      setAnimation(true);
      const newValue = calcValue(e, trackRef, minValue, maxValue, step, tickMarks);
      if (newValue !== value) {
        onChange(e, newValue);
      }
    },
    [setAnimation, setDrag, value, trackRef.current, minValue, maxValue, step, points],
  );

  const handleKeyDown = React.useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      const code = keyboardKey.getCode(e);
      switch (code) {
        case keyboardKey.ArrowLeft:
          setAnimation(true);
          if (step !== 'any' && value - step >= minValue) {
            value - step !== value && onChange(e, value - step);
          }
          e.preventDefault();
          break;
        case keyboardKey.ArrowRight:
          setAnimation(true);
          if (step !== 'any' && value + step <= maxValue) {
            value + step !== value && onChange(e, value + step);
          }
          e.preventDefault();
          break;
        default:
          break;
      }
    },
    [setAnimation, value, step, minValue, maxValue],
  );

  return (
    <Wrapper data-disabled={disabled} {...props}>
      <TrackWrapper dimension={dimension} skeleton={skeleton} onTouchStart={onTrackClick} onMouseDown={onTrackClick}>
        <Track>
          <FilledTrack ref={filledRef} animation={animation} />
          <DefaultTrack ref={trackRef}>
            {
              <TickMarks
                tickMarks={tickMarks ? [minValue, ...tickMarks, maxValue] : [minValue, maxValue]}
                minValue={minValue}
                maxValue={maxValue}
                decimal={decimal}
                precision={precision}
                thousand={thousand}
                onPointClick={onPointClick}
                renderTickMark={renderTickMark}
              />
            }
            <Thumb
              ref={sliderRef}
              animation={animation}
              dimension={dimension}
              role="slider"
              tabIndex={disabled ? -1 : 0}
              aria-valuenow={value}
              aria-valuemin={minValue}
              aria-valuemax={maxValue}
              onKeyDown={handleKeyDown}
            >
              <ThumbCircle dimension={dimension} onTouchStart={onSliderClick} onMouseDown={onSliderClick} />
            </Thumb>
          </DefaultTrack>
        </Track>
      </TrackWrapper>
    </Wrapper>
  );
};

Slider.displayName = 'Slider';
