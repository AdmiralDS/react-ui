import * as React from 'react';
import { throttle } from '#src/components/common/utils/throttle';

import type { NumberRange } from './utils';
import { sortNum, calcValue, calcSliderCoords, arraysEqual } from './utils';
import { DefaultTrack, FilledTrack, Thumb, ThumbCircle, Track, TrackWrapper, Wrapper } from './style';

export interface RangeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Значение компонента */
  value: NumberRange;
  /** Коллбек на изменение состояния */
  onChange: (event: any, value: NumberRange) => void;
  /** Минимальное значение */
  minValue?: number;
  /** Максимальное значение */
  maxValue?: number;
  /** Шаг слайдера. Это либо строка any, либо положительное число, по умолчанию 1.
   * Если этот параметр не установлен в any, компонент принимает только кратные step значения, в диапазоне minValue - maxValue
   */
  step?: number | 'any';
  /** Отключение компонента */
  disabled?: boolean;
  /** Размер компонента */
  dimension?: 'm' | 's';
  /** Состояние skeleton */
  skeleton?: boolean;
}

export const Range = ({
  minValue = 0,
  maxValue = 20,
  value: userValue,
  onChange,
  disabled = false,
  step = 1,
  dimension = 'm',
  skeleton = false,
  ...props
}: RangeProps) => {
  const value: NumberRange =
    Array.isArray(userValue) &&
    userValue.length === 2 &&
    typeof userValue[0] === 'number' &&
    typeof userValue[1] === 'number'
      ? sortNum(userValue, minValue, maxValue)
      : [minValue, maxValue];

  const [isDraging, setDrag] = React.useState(false);
  const [isDraging2, setDrag2] = React.useState(false);
  const [animation, setAnimation] = React.useState(true);
  const [rangeWidth, setRangeWidth] = React.useState(0);
  const filledRef = React.useRef<HTMLDivElement | null>(null);
  const trackRef = React.useRef<HTMLDivElement | null>(null);
  const sliderRef = React.useRef<HTMLDivElement | null>(null);
  const slider2Ref = React.useRef<HTMLDivElement | null>(null);

  React.useLayoutEffect(() => {
    function correctSliderPosition(value: NumberRange) {
      const slider1Coords = calcSliderCoords(value[0], minValue, maxValue, rangeWidth);
      const slider2Coords = calcSliderCoords(value[1], minValue, maxValue, rangeWidth);

      if (sliderRef.current && slider2Ref.current && filledRef.current) {
        sliderRef.current.style.left = `${slider1Coords}%`;
        slider2Ref.current.style.left = `${slider2Coords}%`;
        filledRef.current.style.left = `${slider1Coords}%`;
        filledRef.current.style.right = `${100 - slider2Coords}%`;
      }
    }

    let newValue = value;

    // value должно быть кратно step
    if (step && step !== 'any') {
      const val1 = Math.round(newValue[0] / step) * step;
      const val2 = Math.round(newValue[1] / step) * step;
      newValue = [val1, val2];
      if (step.toString().includes('.')) {
        const decimal = step.toString().match(/\.(\d+)/)?.[1].length;
        newValue = [+newValue[0].toFixed(decimal), +newValue[1].toFixed(decimal)];
      }
    }

    correctSliderPosition(value);
  }, [value, rangeWidth, minValue, maxValue, step, sliderRef.current, slider2Ref.current, filledRef.current]);

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

  const [moveListener, freeResources] = throttle((e: any) => {
    updateSlider(e);
  }, 50);

  React.useEffect(() => {
    if ((isDraging || isDraging2) && !disabled) {
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

  const updateSlider = React.useCallback(
    (e: any) => {
      setAnimation(false);

      if (isDraging || isDraging2) {
        const calcVal = calcValue(e, trackRef, minValue, maxValue, step);

        if (isDraging && calcVal > value[1]) {
          const newValue: NumberRange = [value[1], calcVal];
          setDrag(false);
          setDrag2(true);
          if (!arraysEqual(sortNum(newValue, minValue, maxValue), value)) {
            onChange(e, sortNum(newValue, minValue, maxValue));
          }
        } else if (isDraging2 && calcVal < value[0]) {
          const newValue: NumberRange = [calcVal, value[0]];
          setDrag(true);
          setDrag2(false);
          if (!arraysEqual(sortNum(newValue, minValue, maxValue), value)) {
            onChange(e, sortNum(newValue, minValue, maxValue));
          }
        } else {
          const newValue: NumberRange = isDraging ? [calcVal, value[1]] : [value[0], calcVal];
          if (!arraysEqual(sortNum(newValue, minValue, maxValue), value)) {
            onChange(e, sortNum(newValue, minValue, maxValue));
          }
        }
      }
    },
    [setAnimation, setDrag, setDrag2, isDraging, isDraging2, value, trackRef.current, minValue, maxValue, step],
  );

  const onSliderClick = React.useCallback(
    (e: any, slider: 'first' | 'second') => {
      if (e.type === 'mousedown') e.preventDefault();
      e.stopPropagation();
      slider === 'first' ? setDrag(true) : setDrag2(true);
      setAnimation(true);
    },
    [setAnimation, setDrag, setDrag2],
  );

  const handleSliderMouseUp = React.useCallback(
    (e: any) => {
      if (e.type === 'mouseup') e.preventDefault();
      e.stopPropagation();
      const calcVal = calcValue(e, trackRef, minValue, maxValue, step);

      if (isDraging && calcVal > value[1]) {
        const newValue: NumberRange = [value[1], calcVal];
        if (!arraysEqual(sortNum(newValue, minValue, maxValue), value)) {
          onChange(e, sortNum(newValue, minValue, maxValue));
        }
      }
      if (isDraging2 && calcVal < value[0]) {
        const newValue: NumberRange = [calcVal, value[0]];
        if (!arraysEqual(sortNum(newValue, minValue, maxValue), value)) {
          onChange(e, sortNum(newValue, minValue, maxValue));
        }
      } else {
        const newValue: NumberRange = isDraging ? [calcVal, value[1]] : [value[0], calcVal];
        if (!arraysEqual(sortNum(newValue, minValue, maxValue), value)) {
          onChange(e, sortNum(newValue, minValue, maxValue));
        }
      }

      setAnimation(true);
      setDrag(false);
      setDrag2(false);
    },
    [value, trackRef.current, maxValue, minValue, step, isDraging, isDraging2, setAnimation, setDrag, setDrag2],
  );

  const onTrackClick = React.useCallback(
    (e: any) => {
      const calcVal = calcValue(e, trackRef, minValue, maxValue, step);

      // calc nearest slider
      if (Math.abs(value[1] - calcVal) <= Math.abs(calcVal - value[0])) {
        if (!arraysEqual(sortNum([value[0], calcVal], minValue, maxValue), value)) {
          onChange(e, sortNum([value[0], calcVal], minValue, maxValue));
        }
        onSliderClick(e, 'second');
      } else {
        if (!arraysEqual(sortNum([calcVal, value[1]], minValue, maxValue), value)) {
          onChange(e, sortNum([calcVal, value[1]], minValue, maxValue));
        }
        onSliderClick(e, 'first');
      }
    },
    [value, trackRef.current, maxValue, minValue, step],
  );

  return (
    <Wrapper data-disabled={disabled} {...props}>
      <TrackWrapper dimension={dimension} skeleton={skeleton} onTouchStart={onTrackClick} onMouseDown={onTrackClick}>
        <Track>
          <FilledTrack ref={filledRef} animation={animation} />
          <DefaultTrack ref={trackRef}>
            <Thumb ref={sliderRef} animation={animation} dimension={dimension}>
              <ThumbCircle
                dimension={dimension}
                onTouchStart={(e) => onSliderClick(e, 'first')}
                onMouseDown={(e) => onSliderClick(e, 'first')}
                active={isDraging}
              />
            </Thumb>
            <Thumb ref={slider2Ref} animation={animation} dimension={dimension}>
              <ThumbCircle
                dimension={dimension}
                onTouchStart={(e) => onSliderClick(e, 'second')}
                onMouseDown={(e) => onSliderClick(e, 'second')}
                active={isDraging2}
              />
            </Thumb>
          </DefaultTrack>
        </Track>
      </TrackWrapper>
    </Wrapper>
  );
};

Range.displayName = 'Range';
