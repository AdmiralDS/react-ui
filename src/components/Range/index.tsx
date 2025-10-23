import type {
  HTMLAttributes,
  MouseEvent as ReactMouseEvent,
  TouchEvent as ReactTouchEvent,
} from 'react';
import { useState, useRef, useLayoutEffect, useEffect } from 'react';
import { throttle } from '#src/components/common/utils/throttle';

import type { NumberRange } from './utils';
import { sortNum, calcValue, calcSliderCoords, arraysEqual } from './utils';
import { DefaultTrack, FilledTrack, Thumb, ThumbCircle, Track, TrackWrapper, Wrapper } from './style';
import type { DataAttributes } from 'styled-components';

type RangeChangeEvent =
  | MouseEvent
  | TouchEvent
  | ReactMouseEvent<HTMLDivElement>
  | ReactTouchEvent<HTMLDivElement>;

export interface RangeProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Значение компонента */
  value: NumberRange;
  /** Коллбек на изменение состояния */
  onChange: (event: RangeChangeEvent, value: NumberRange) => void;
  /** Колбек, который срабатывает по окончании изменения значения (по окончании перетаскивания ползунка или клика на полосу диапазона) */
  onRangeMouseUp?: () => void;
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

  /** Конфиг функция пропсов для первого ползунка. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  firstThumbCirclePropsConfig?: (
    props: React.ComponentProps<typeof ThumbCircle>,
  ) => Partial<React.ComponentProps<typeof ThumbCircle>> & DataAttributes;

  /** Конфиг функция пропсов для первого ползунка. На вход получает начальный набор пропсов, на
   * выход должна отдавать объект с пропсами, которые будут внедряться после оригинальных пропсов. */
  secondThumbCirclePropsConfig?: (
    props: React.ComponentProps<typeof ThumbCircle>,
  ) => Partial<React.ComponentProps<typeof ThumbCircle>> & DataAttributes;
}

const nothing = () => ({});

export const Range = ({
  minValue = 0,
  maxValue = 20,
  value: userValue,
  onChange,
  onRangeMouseUp,
  disabled = false,
  step = 1,
  dimension = 'm',
  skeleton = false,
  firstThumbCirclePropsConfig = nothing,
  secondThumbCirclePropsConfig = nothing,
  ...props
}: RangeProps) => {
  const value: NumberRange =
    Array.isArray(userValue) &&
    userValue.length === 2 &&
    typeof userValue[0] === 'number' &&
    typeof userValue[1] === 'number'
      ? sortNum(userValue)
      : [minValue, maxValue];

  const [isDraging, setDrag] = useState(false);
  const [isDraging2, setDrag2] = useState(false);
  const [animation, setAnimation] = useState(true);
  const [rangeWidth, setRangeWidth] = useState(0);
  const filledRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const sliderRef = useRef<HTMLDivElement | null>(null);
  const slider2Ref = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
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
  }, [value, rangeWidth, minValue, maxValue, step]);

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

  const [moveListener, freeResources] = throttle((e: MouseEvent | TouchEvent) => {
    updateSlider(e);
  }, 50);

  useEffect(() => {
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

  const updateSlider = (e: MouseEvent | TouchEvent) => {
    setAnimation(false);

    if (isDraging || isDraging2) {
      const calcVal = calcValue(e, trackRef, minValue, maxValue, step);

      if (isDraging && calcVal > value[1]) {
        const newValue: NumberRange = [value[1], calcVal];
        setDrag(false);
        setDrag2(true);
        if (!arraysEqual(sortNum(newValue), value)) {
          onChange(e, sortNum(newValue));
        }
      } else if (isDraging2 && calcVal < value[0]) {
        const newValue: NumberRange = [calcVal, value[0]];
        setDrag(true);
        setDrag2(false);
        if (!arraysEqual(sortNum(newValue), value)) {
          onChange(e, sortNum(newValue));
        }
      } else {
        const newValue: NumberRange = isDraging ? [calcVal, value[1]] : [value[0], calcVal];
        if (!arraysEqual(sortNum(newValue), value)) {
          onChange(e, sortNum(newValue));
        }
      }
    }
  };

  const onSliderClick = (slider: 'first' | 'second') => {
    slider === 'first' ? setDrag(true) : setDrag2(true);
    setAnimation(true);
  };

  const handleSliderMouseUp = (e: TouchEvent | MouseEvent) => {
    const calcVal = calcValue(e, trackRef, minValue, maxValue, step);
    onRangeMouseUp?.();
    if (isDraging && calcVal > value[1]) {
      const newValue: NumberRange = [value[1], calcVal];
      if (!arraysEqual(sortNum(newValue), value)) {
        onChange(e, sortNum(newValue));
      }
    }
    if (isDraging2 && calcVal < value[0]) {
      const newValue: NumberRange = [calcVal, value[0]];
      if (!arraysEqual(sortNum(newValue), value)) {
        onChange(e, sortNum(newValue));
      }
    } else {
      const newValue: NumberRange = isDraging ? [calcVal, value[1]] : [value[0], calcVal];
      if (!arraysEqual(sortNum(newValue), value)) {
        onChange(e, sortNum(newValue));
      }
    }

    setAnimation(true);
    setDrag(false);
    setDrag2(false);
  };

  const onTrackClick = (e: ReactMouseEvent<HTMLDivElement> | ReactTouchEvent<HTMLDivElement>) => {
    const calcVal = calcValue(e.nativeEvent, trackRef, minValue, maxValue, step);

    // calc nearest slider
    if (Math.abs(value[1] - calcVal) < Math.abs(calcVal - value[0])) {
      if (!arraysEqual(sortNum([value[0], calcVal]), value)) {
        onChange(e, sortNum([value[0], calcVal]));
      }
      onSliderClick('second');
    } else if (Math.abs(value[1] - calcVal) > Math.abs(calcVal - value[0])) {
      if (!arraysEqual(sortNum([calcVal, value[1]]), value)) {
        onChange(e, sortNum([calcVal, value[1]]));
      }
      onSliderClick('first');
    } else if (Math.abs(value[1] - calcVal) === Math.abs(calcVal - value[0])) {
      const slider = value[0] === value[1] ? (calcVal < value[0] ? 'first' : 'second') : 'first';
      const newValue: NumberRange = slider === 'first' ? [calcVal, value[1]] : [value[0], calcVal];
      if (!arraysEqual(sortNum(newValue), value)) {
        onChange(e, sortNum(newValue));
      }
      onSliderClick(slider);
    }
  };

  const firstThumbCircleProps = {
    $dimension: dimension,
    onTouchStart: (e: React.TouchEvent<HTMLDivElement>) => {
      e.stopPropagation();
      props.onTouchStart?.(e);
      onSliderClick('first');
    },
    onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      props.onMouseDown?.(e);
      onSliderClick('first');
    },
    $active: isDraging,
  };

  const secondThumbCircleProps = {
    $dimension: dimension,
    onTouchStart: (e: React.TouchEvent<HTMLDivElement>) => {
      e.stopPropagation();
      props.onTouchStart?.(e);
      onSliderClick('second');
    },
    onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
      props.onMouseDown?.(e);
      onSliderClick('second');
    },
    $active: isDraging2,
  };

  return (
    <Wrapper data-disabled={disabled} $disabled={disabled} $skeleton={skeleton} {...props}>
      <TrackWrapper $dimension={dimension} $skeleton={skeleton} onTouchStart={onTrackClick} onMouseDown={onTrackClick}>
        <Track>
          <FilledTrack ref={filledRef} $animation={animation} />
          <DefaultTrack ref={trackRef}>
            <Thumb ref={sliderRef} $animation={animation} $dimension={dimension}>
              <ThumbCircle {...firstThumbCircleProps} {...firstThumbCirclePropsConfig(firstThumbCircleProps)} />
            </Thumb>
            <Thumb ref={slider2Ref} $animation={animation} $dimension={dimension}>
              <ThumbCircle {...secondThumbCircleProps} {...secondThumbCirclePropsConfig(secondThumbCircleProps)} />
            </Thumb>
          </DefaultTrack>
        </Track>
      </TrackWrapper>
    </Wrapper>
  );
};

Range.displayName = 'Range';
