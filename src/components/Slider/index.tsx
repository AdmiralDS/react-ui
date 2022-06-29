import React, { HTMLAttributes, MutableRefObject, useCallback, useEffect, useRef, useState } from 'react';
import { keyboardKey } from '#src/components/common/keyboardKey';
import { throttle } from '#src/components/common/utils/throttle';

import { calcValueByPos, correctValueWithRanges } from './utils';
import { DefaultTrack, FilledTrack, Thumb, ThumbCircle, Track, TrackWrapper, Wrapper } from './style';
import { TickMarks } from './TickMarks';

export interface SliderProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Значение компонента */
  value: number;
  /** Коллбек на изменение состояния */
  onChange: (event: any, value: number) => void;
  /** Минимальное значение */
  minValue?: number;
  /** Максимальное значение */
  maxValue?: number;
  /** Шаг слайдера */
  step?: number;
  /** разделитель между целым и десятичным */
  decimal?: string;
  /** точность (количество знаков после точки). Если precision равно 0, то точку ввести нельзя, только целые числа */
  precision?: number;
  /** разделитель между тысячами */
  thousand?: string;
  /** Массив отметок */
  tickMarks?: number[];
  /** Render колбек для отрисовки кастомизированных подписей к отметкам слайдера */
  renderTickMark?: (mark: string) => React.ReactNode;
  /** Отключение компонента */
  disabled?: boolean;
  /** Размер компонента */
  dimension?: 'xl' | 'm';
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
  step = 1,
  dimension = 'xl',
  ...props
}: SliderProps) => {
  const tickMarks = Array.isArray(points) ? points : undefined;
  const SLIDER_WIDTH = dimension === 'xl' ? 20 : 16;

  const [isDraging, setDrag] = useState(false);
  const [animation, setAnimation] = useState(false);
  const [sliderValue, setSliderValue] = useState(value);

  const filledRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const trackRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const sliderRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    setSliderValue(value);
  }, [value]);

  useEffect(() => {
    correctSliderPosition(sliderValue);
  }, [sliderValue, minValue, maxValue]);

  const [moveListener, freeResources] = throttle((e: any) => {
    updateSlider(e);
  }, 50);

  useEffect(() => {
    if (isDraging && !disabled) {
      document.addEventListener('mousemove', moveListener);
      document.addEventListener('mouseup', handleSliderMouseUp);
      document.addEventListener('touchmove', moveListener);
      document.addEventListener('touchend', handleSliderMouseUp);
      document.addEventListener('touchcancel', handleSliderMouseUp);
    }
    return () => {
      freeResources();
      document.removeEventListener('mousemove', moveListener);
      document.removeEventListener('mouseup', handleSliderMouseUp);
      document.removeEventListener('touchmove', moveListener);
      document.removeEventListener('touchend', handleSliderMouseUp);
      document.removeEventListener('touchcancel', handleSliderMouseUp);
    };
  });
  const getRangeWidth = () => trackRef.current?.offsetWidth || 0;
  const slideValue = useCallback(
    (trackWidth: number, sliderPosition: number, e: any) => {
      const calcValue = calcValueByPos(trackWidth, sliderPosition, minValue, maxValue, step);
      calcValue !== value && onChange(e, calcValue);
      setSliderValue(calcValue);
    },
    [maxValue, minValue, onChange, step],
  );

  const updateSlider = useCallback(
    (e: any) => {
      setAnimation(false);
      const rangeWidth = getRangeWidth();
      const rangeLeft = trackRef.current?.getBoundingClientRect().left || 0;
      const sliderPosition =
        rangeLeft && sliderRef.current
          ? Math.round(sliderRef.current.getBoundingClientRect().left - rangeLeft + SLIDER_WIDTH / 2)
          : 0;
      if (isDraging && rangeLeft) {
        let cursorPosition = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
        if (cursorPosition <= rangeLeft) {
          cursorPosition = rangeLeft;
        }
        if (cursorPosition >= rangeLeft + rangeWidth) {
          cursorPosition = rangeLeft + rangeWidth;
        }

        const getStyle = (cursorPosition: number, rangeLeft: number, rangeWidth: number) =>
          `${((cursorPosition - rangeLeft) / rangeWidth) * 100}%`;
        if (sliderRef.current && filledRef.current) {
          sliderRef.current.style.left = getStyle(cursorPosition, rangeLeft, rangeWidth);
          filledRef.current.style.width = getStyle(cursorPosition, rangeLeft, rangeWidth);
        }
      }
      slideValue(rangeWidth, sliderPosition, e);
    },
    [slideValue, isDraging],
  );

  const correctSliderPosition = useCallback(
    (value: number) => {
      const rangeWidth = getRangeWidth();

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
      return setSliderValue(value);
    },
    [maxValue, minValue],
  );

  const onSliderClick = useCallback(
    (e: any) => {
      if (e.type === 'mousedown') e.preventDefault();
      e.stopPropagation();
      setDrag(true);
      setAnimation(true);
    },
    [updateSlider, setDrag],
  );

  const handleSliderMouseUp = useCallback(
    (e: any) => {
      if (e.type === 'mouseup') e.preventDefault();
      e.stopPropagation();
      setAnimation(true);
      setDrag(false);

      const numValue = sliderValue || minValue;
      if (tickMarks) {
        const newValue = correctValueWithRanges(tickMarks, numValue, minValue, maxValue);
        correctSliderPosition(newValue);
        newValue !== value && onChange(e, newValue);
      } else {
        numValue !== value && onChange(e, numValue);
      }
    },
    [onChange, maxValue, minValue, sliderValue, tickMarks],
  );

  const onPointClick = (e: any, newValue: number) => {
    e.preventDefault();
    e.stopPropagation();
    if (!disabled) {
      setAnimation(true);
      correctSliderPosition(newValue);
      newValue !== value && onChange(e, newValue);
    }
  };

  const onTrackClick = useCallback(
    (e: any) => {
      if (!disabled) {
        setAnimation(true);

        const rangeWidth = getRangeWidth();
        const correctLeft = trackRef.current?.getBoundingClientRect().left || 0;
        const cursorPosition = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
        const sliderPosition = cursorPosition - correctLeft;
        const calcValue = calcValueByPos(rangeWidth, sliderPosition, minValue, maxValue, step);
        if (tickMarks) {
          const numVal = calcValue.toString() ? calcValue : minValue;
          const newValue = correctValueWithRanges(tickMarks, numVal, minValue, maxValue);
          correctSliderPosition(newValue);
          newValue !== value && onChange(e, newValue);
        } else {
          correctSliderPosition(calcValue);
          onSliderClick(e);
        }
      }
    },
    [correctSliderPosition, disabled, onSliderClick, maxValue, minValue, tickMarks, step],
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    const code = keyboardKey.getCode(e);
    switch (code) {
      case keyboardKey.ArrowLeft:
        if (sliderValue - step >= minValue) {
          correctSliderPosition(sliderValue - step);
          sliderValue - step !== value && onChange(e, sliderValue - step);
        }
        e.preventDefault();
        break;
      case keyboardKey.ArrowRight:
        if (sliderValue + step <= maxValue) {
          correctSliderPosition(sliderValue + step);
          sliderValue + step !== value && onChange(e, sliderValue + step);
        }
        e.preventDefault();
        break;
      default:
        break;
    }
  };

  return (
    <Wrapper data-dimension={dimension} data-disabled={disabled} {...props}>
      <TrackWrapper onTouchStart={onTrackClick} onMouseDown={onTrackClick}>
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
              role="slider"
              tabIndex={disabled ? -1 : 0}
              aria-valuenow={sliderValue}
              aria-valuemin={minValue}
              aria-valuemax={maxValue}
              onKeyDown={handleKeyDown}
            >
              <ThumbCircle onTouchStart={onSliderClick} onMouseDown={onSliderClick} />
            </Thumb>
          </DefaultTrack>
        </Track>
      </TrackWrapper>
    </Wrapper>
  );
};

Slider.displayName = 'Slider';
