import * as React from 'react';
import { throttle } from '#src/components/common/utils/throttle';

import type { NumberRange } from './utils';
import { calcValueByPos, sortNum, calcValue, arraysEqual } from './utils';
import { DefaultTrack, FilledTrack, Thumb, ThumbCircle, Track, TrackWrapper, Wrapper } from './style';

export interface RangeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Значение компонента */
  value: NumberRange;
  /** Коллбек на изменение состояния */
  onChange?: (event: any, value: NumberRange) => void;
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
  value = [minValue, maxValue],
  onChange,
  disabled = false,
  step = 1,
  dimension = 'm',
  skeleton = false,
  ...props
}: RangeProps) => {
  const SLIDER_WIDTH = dimension === 'm' ? 20 : 16;

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
      const onePxValue = rangeWidth ? rangeWidth / (maxValue - minValue) : 0;

      // if (slider === 'first' || slider === 'both') {
      const correctValue1 = value[0] >= 0 ? value[0] - minValue : -minValue + value[0];

      let calcPercents1: number = ((onePxValue * correctValue1) / rangeWidth) * 100;
      calcPercents1 = calcPercents1 > 100 ? 100 : calcPercents1;
      calcPercents1 = calcPercents1 < 0 ? 0 : calcPercents1;

      const sliderCoords1 = String(value) ? calcPercents1 : 0;

      if (sliderRef.current && filledRef.current) {
        sliderRef.current.style.left = `${sliderCoords1}%`;
      }
      // }

      // if (slider === 'second' || slider === 'both') {
      const correctValue2 = value[1] >= 0 ? value[1] - minValue : -minValue + value[1];

      let calcPercents2: number = ((onePxValue * correctValue2) / rangeWidth) * 100;
      calcPercents2 = calcPercents2 > 100 ? 100 : calcPercents2;
      calcPercents2 = calcPercents2 < 0 ? 0 : calcPercents2;

      const sliderCoords2 = String(value) ? calcPercents2 : 0;

      if (slider2Ref.current && filledRef.current) {
        slider2Ref.current.style.left = `${sliderCoords2}%`;
      }
      // }
      setFilled();
    }
    correctSliderPosition(value);
  }, [value, rangeWidth, minValue, maxValue, step, sliderRef.current, slider2Ref.current, isDraging, isDraging2]);

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

  const getSliderPosition = (type: 'first' | 'second') => {
    const rangeLeft = trackRef.current?.getBoundingClientRect().left || 0;
    const sliderPosition =
      rangeLeft && sliderRef.current
        ? Math.round(sliderRef.current.getBoundingClientRect().left - rangeLeft + SLIDER_WIDTH / 2)
        : 0;
    const slider2Position =
      rangeLeft && slider2Ref.current
        ? Math.round(slider2Ref.current.getBoundingClientRect().left - rangeLeft + SLIDER_WIDTH / 2)
        : 0;
    return type === 'first' ? sliderPosition : slider2Position;
  };

  const setFilled = () => {
    if (slider2Ref.current && sliderRef.current && filledRef.current) {
      if (sliderRef.current.offsetLeft <= slider2Ref.current.offsetLeft) {
        filledRef.current.style.left = sliderRef.current.style.left;
        filledRef.current.style.right = `${100 - parseInt(slider2Ref.current.style.left)}%`;
      } else {
        filledRef.current.style.left = slider2Ref.current.style.left;
        filledRef.current.style.right = `${100 - parseInt(sliderRef.current.style.left)}%`;
      }
    }
  };

  const updateSlider = React.useCallback(
    (e: any) => {
      setAnimation(false);

      if (isDraging || isDraging2) {
        const calcVal = calcValue(e, trackRef, minValue, maxValue, step);
        if (isDraging && calcVal > value[1]) {
          const newValue: NumberRange = [value[0], calcVal];
          if (!arraysEqual(sortNum(newValue), value)) {
            console.log('1', { newValue, value });
            onChange?.(e, sortNum(newValue));
          }
          setDrag(false);
          setDrag2(true);
        }
        if (isDraging2 && calcVal < value[0]) {
          const newValue: NumberRange = [calcVal, value[1]];
          if (!arraysEqual(sortNum(newValue), value)) {
            console.log(2);
            onChange?.(e, sortNum(newValue));
          }
          setDrag(true);
          setDrag2(false);
        } else {
          const newValue: NumberRange = isDraging ? [calcVal, value[1]] : [value[0], calcVal];
          if (!arraysEqual(sortNum(newValue), value)) {
            console.log('3', { newValue, value });
            onChange?.(e, sortNum(newValue));
          }
        }
        // const newValue: NumberRange = isDraging ? [calcVal, value[1]] : [value[0], calcVal];
        // if (!arraysEqual(sortNum(newValue), value)) {
        //   console.log({ calcVal, newValue: sortNum(newValue) });
        //   onChange?.(e, sortNum(newValue));
        // }
      }
    },
    [setAnimation, isDraging, isDraging2, value, trackRef.current, minValue, maxValue, step, setDrag, setDrag2],
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
        const newValue: NumberRange = [value[0], calcVal];
        if (!arraysEqual(sortNum(newValue), value)) {
          console.log(4);
          onChange?.(e, sortNum(newValue));
        }
      }
      if (isDraging2 && calcVal < value[0]) {
        const newValue: NumberRange = [calcVal, value[1]];
        if (!arraysEqual(sortNum(newValue), value)) {
          console.log(5);
          onChange?.(e, sortNum(newValue));
        }
      } else {
        const newValue: NumberRange = isDraging ? [calcVal, value[1]] : [value[0], calcVal];
        if (!arraysEqual(sortNum(newValue), value)) {
          console.log(6);
          onChange?.(e, sortNum(newValue));
        }
      }

      setAnimation(true);
      setDrag(false);
      setDrag2(false);
    },
    [value, trackRef.current, maxValue, minValue, step, isDraging, setAnimation, setDrag, setDrag2],
  );

  const onTrackClick = React.useCallback(
    (e: any) => {
      const calcVal = calcValue(e, trackRef, minValue, maxValue, step);

      // calc nearest slider
      const first = calcValueByPos(rangeWidth, getSliderPosition('first'), minValue, maxValue, step);
      const second = calcValueByPos(rangeWidth, getSliderPosition('second'), minValue, maxValue, step);

      if (Math.abs(second - calcVal) <= Math.abs(calcVal - first)) {
        if (!arraysEqual(sortNum([first, calcVal]), value)) {
          console.log(7);
          onChange?.(e, sortNum([first, calcVal]));
        }
        onSliderClick(e, 'second');
      } else {
        if (!arraysEqual(sortNum([calcVal, second]), value)) {
          console.log(8);
          onChange?.(e, sortNum([calcVal, second]));
        }
        onSliderClick(e, 'first');
      }
    },
    [value, trackRef.current, rangeWidth, maxValue, minValue, step],
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
                // style={{ background: 'red' }}
              />
            </Thumb>
            <Thumb ref={slider2Ref} animation={animation} dimension={dimension}>
              <ThumbCircle
                dimension={dimension}
                onTouchStart={(e) => onSliderClick(e, 'second')}
                onMouseDown={(e) => onSliderClick(e, 'second')}
              />
            </Thumb>
          </DefaultTrack>
        </Track>
      </TrackWrapper>
    </Wrapper>
  );
};

Range.displayName = 'Range';
