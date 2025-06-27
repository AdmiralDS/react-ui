import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { keyboardKey } from '../common/keyboardKey';
import { throttle } from '#src/components/common/utils/throttle';

import { calcValue } from './utils';
import { DefaultTrack, FilledTrack, Thumb, ThumbCircle, Track, TrackWrapper, Wrapper } from './style';
import { TickMarks } from './TickMarks';
import { ThumbTooltip } from './ThumbTooltip';

export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Значение компонента */
  value: number;
  /** Коллбек на изменение состояния */
  onChange: (event: React.SyntheticEvent, value: number) => void;
  /** Минимальное значение */
  minValue?: number;
  /** Максимальное значение */
  maxValue?: number;
  /** Шаг слайдера. Это либо строка any, либо положительное число, по умолчанию 1.
   * Если этот параметр не установлен в any, компонент принимает только кратные step значения, в диапазоне minValue - maxValue
   */
  step?: number | 'any';
  /** Символ разделителя между целым и десятичным числом, используется при форматировании надписей к отметкам слайдера.
   * Если значение не задано, то оно определяется согласно локали, в русской локали decimal - это запятая
   */
  decimal?: string;
  /** Символ разделителя между тысячами, используется при форматировании надписей к отметкам слайдера
   * Если значение не задано, то оно определяется согласно локали, в русской локали thousand - это пробел
   */
  thousand?: string;
  /** Точность (количество знаков в десятичной части числа), используется при форматировании надписей к отметкам слайдера */
  precision?: number;
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
  /** Отобразить подсказку (Tooltip) текущего значения */
  showTooltip?: boolean;
}

export const Slider = ({
  minValue = 0,
  maxValue = 20,
  decimal,
  thousand,
  precision = 2,
  value = 0,
  onChange,
  renderTickMark,
  tickMarks: points,
  disabled = false,
  step: userStep = 1,
  dimension = 'xl',
  skeleton = false,
  showTooltip = false,
  ...props
}: SliderProps) => {
  const tickMarks = Array.isArray(points) ? points : undefined;
  const step = (typeof userStep === 'number' && userStep > 0) || userStep === 'any' ? userStep : 1;

  const [isDraging, setDrag] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [rangeWidth, setRangeWidth] = useState(0);

  const trackRef = useRef<HTMLDivElement | null>(null);
  const [filledTrack, setFilledTrack] = useState<HTMLDivElement | null>(null);
  const [thumb, setThumb] = useState<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    function correctSliderPosition(value: number) {
      const onePxValue = rangeWidth ? rangeWidth / (maxValue - minValue) : 0;
      const correctValue = value >= 0 ? value - minValue : -minValue + value;
      let calcPercents: number = ((onePxValue * correctValue) / rangeWidth) * 100;
      calcPercents = calcPercents > 100 ? 100 : calcPercents;
      calcPercents = calcPercents < 0 ? 0 : calcPercents;

      const sliderCoords = String(value) ? calcPercents : 0;
      if (thumb && filledTrack) {
        thumb.style.left = `${sliderCoords}%`;
        filledTrack.style.width = `${sliderCoords}%`;
      }
    }

    let newValue = value;
    // value должно быть кратно step
    if (step && step !== 'any') {
      newValue = Math.round(newValue / step) * step;
      if (step.toString().includes('.')) {
        const decimal = step.toString().match(/\.(\d+)/)?.[1].length;
        newValue = +newValue.toFixed(decimal);
      }
    }

    // value должно быть больше или равно minValue
    if (newValue < minValue) {
      newValue = minValue;
    }
    // value должно быть меньше или равно maxValue
    if (newValue > maxValue) {
      newValue = maxValue;
    }

    correctSliderPosition(newValue);
  }, [value, minValue, maxValue, step, rangeWidth, thumb, filledTrack]);

  useLayoutEffect(() => {
    if (trackRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        entries.forEach((entry) => setRangeWidth(entry.contentRect.width || 0));
      });
      resizeObserver.observe(trackRef.current);
      return () => {
        resizeObserver.disconnect();
      };
    }
  }, [setRangeWidth]);

  const updateSlider = (e: any) => {
    const newValue = calcValue(e, trackRef, minValue, maxValue, step, undefined);
    if (newValue !== value) {
      onChange(e, newValue);
      setAnimation(false);
    }
  };

  const [handleMouseMove, freeResources] = throttle(updateSlider, 50);

  useEffect(() => {
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

  const onSliderClick = (e: any) => {
    e.stopPropagation();
    e.type === 'mousedown' ? props.onMouseDown?.(e) : props.onTouchStart?.(e);
    setDrag(true);
    setAnimation(true);
  };

  const onPointClick = (e: any, newValue: number) => {
    e.stopPropagation();
    props.onMouseDown?.(e);
    setAnimation(true);
    if (newValue !== value) {
      onChange(e, newValue);
    }
  };

  const onTrackClick = (e: any) => {
    setAnimation(true);
    if (!tickMarks) setDrag(true);
    const newValue = calcValue(e, trackRef, minValue, maxValue, step, tickMarks);
    if (newValue !== value) {
      onChange(e, newValue);
    }
  };

  const handleMouseUp = (e: any) => {
    setDrag(false);
    setAnimation(true);
    const newValue = calcValue(e, trackRef, minValue, maxValue, step, tickMarks);
    if (newValue !== value) {
      onChange(e, newValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
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
  };

  return (
    <Wrapper data-disabled={disabled} $disabled={disabled} $skeleton={skeleton} {...props}>
      <TrackWrapper $dimension={dimension} $skeleton={skeleton} onTouchStart={onTrackClick} onMouseDown={onTrackClick}>
        <Track>
          <FilledTrack ref={(node) => setFilledTrack(node)} $animation={animation} />
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
              ref={(node) => setThumb(node)}
              $animation={animation}
              $dimension={dimension}
              role="slider"
              tabIndex={disabled ? -1 : 0}
              aria-valuenow={value}
              aria-valuemin={minValue}
              aria-valuemax={maxValue}
              onKeyDown={handleKeyDown}
            >
              <ThumbCircle $dimension={dimension} onTouchStart={onSliderClick} onMouseDown={onSliderClick} />
            </Thumb>
            {showTooltip && <ThumbTooltip targetElement={thumb} value={value} isDraging={isDraging} />}
          </DefaultTrack>
        </Track>
      </TrackWrapper>
    </Wrapper>
  );
};

Slider.displayName = 'Slider';
