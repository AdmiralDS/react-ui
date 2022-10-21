import * as React from 'react';
import { throttle } from '#src/components/common/utils/throttle';

import type { NumberRange } from './utils';
import { calcValueByPos, sortNum } from './utils';
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
  /** Шаг слайдера */
  step?: number;
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
  const filledRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const trackRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const sliderRef: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);
  const slider2Ref: React.MutableRefObject<HTMLDivElement | null> = React.useRef(null);

  const test = (): NumberRange => {
    if (sliderRef.current && slider2Ref.current) {
      if (sliderRef.current.offsetLeft <= slider2Ref.current.offsetLeft) {
        return value;
      } else {
        return [value[1], value[0]];
      }
    }
    return value;
  };
  const [sliderValue, setSliderValue] = React.useState<NumberRange>([minValue, maxValue]);

  React.useLayoutEffect(() => {
    const res = sortNum(sliderValue);
    if (value[0] !== res[0] || value[1] !== res[1]) {
      setSliderValue(test());
      correctSliderPosition(test(), 'both');
    }
  }, [value]);

  React.useEffect(() => {
    correctSliderPosition(sliderValue, 'both');
  }, [sliderValue, minValue, maxValue]);

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

  const slideValue = React.useCallback(
    (trackWidth: number, e: any) => {
      const first = calcValueByPos(trackWidth, getSliderPosition('first'), minValue, maxValue, step);
      const second = calcValueByPos(trackWidth, getSliderPosition('second'), minValue, maxValue, step);
      const calcValue = isDraging ? first : second;

      const newValue: NumberRange = isDraging ? [calcValue, second] : [first, calcValue];

      sortNum(newValue) !== value && onChange?.(e, sortNum(newValue));
      setSliderValue(newValue);
    },
    [maxValue, minValue, onChange, step, isDraging],
  );

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
      const rangeLeft = trackRef.current?.getBoundingClientRect().left || 0;

      if ((isDraging || isDraging2) && rangeLeft) {
        let cursorPosition = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
        if (cursorPosition <= rangeLeft) {
          cursorPosition = rangeLeft;
        }
        if (cursorPosition >= rangeLeft + rangeWidth) {
          cursorPosition = rangeLeft + rangeWidth;
        }

        const getStyle = (cursorPosition: number, rangeLeft: number, rangeWidth: number) =>
          `${((cursorPosition - rangeLeft) / rangeWidth) * 100}%`;

        if (sliderRef.current && filledRef.current && isDraging) {
          sliderRef.current.style.left = getStyle(cursorPosition, rangeLeft, rangeWidth);
          setFilled();
        } else if (slider2Ref.current && filledRef.current && isDraging2) {
          slider2Ref.current.style.left = getStyle(cursorPosition, rangeLeft, rangeWidth);
          setFilled();
        }
      }
      slideValue(rangeWidth, e);
    },
    [slideValue, isDraging, isDraging2],
  );

  const correctSliderPosition = React.useCallback(
    (value: [number, number], slider: 'first' | 'second' | 'both') => {
      const onePxValue = rangeWidth ? rangeWidth / (maxValue - minValue) : 0;

      if (slider === 'first' || slider === 'both') {
        const correctValue1 = value[0] >= 0 ? value[0] - minValue : -minValue + value[0];

        let calcPercents1: number = ((onePxValue * correctValue1) / rangeWidth) * 100;
        calcPercents1 = calcPercents1 > 100 ? 100 : calcPercents1;
        calcPercents1 = calcPercents1 < 0 ? 0 : calcPercents1;

        const sliderCoords1 = String(value) ? calcPercents1 : 0;

        if (sliderRef.current && filledRef.current) {
          sliderRef.current.style.left = `${sliderCoords1}%`;
        }
      }

      if (slider === 'second' || slider === 'both') {
        const correctValue2 = value[1] >= 0 ? value[1] - minValue : -minValue + value[1];

        let calcPercents2: number = ((onePxValue * correctValue2) / rangeWidth) * 100;
        calcPercents2 = calcPercents2 > 100 ? 100 : calcPercents2;
        calcPercents2 = calcPercents2 < 0 ? 0 : calcPercents2;

        const sliderCoords2 = String(value) ? calcPercents2 : 0;

        if (slider2Ref.current && filledRef.current) {
          slider2Ref.current.style.left = `${sliderCoords2}%`;
        }
      }
      setFilled();

      return setSliderValue(value);
    },
    [maxValue, minValue],
  );

  const onSliderClick = React.useCallback(
    (e: any, slider: 'first' | 'second') => {
      if (e.type === 'mousedown') e.preventDefault();
      e.stopPropagation();
      slider === 'first' ? setDrag(true) : setDrag2(true);
      setAnimation(true);
    },
    [updateSlider, setDrag, setDrag2],
  );

  const handleSliderMouseUp = React.useCallback(
    (e: any) => {
      if (e.type === 'mouseup') e.preventDefault();
      e.stopPropagation();
      setAnimation(true);
      setDrag(false);
      setDrag2(false);
      onChange?.(e, sortNum(sliderValue));
    },
    [onChange, maxValue, minValue, sliderValue],
  );

  const onTrackClick = React.useCallback(
    (e: any) => {
      if (!disabled) {
        setAnimation(true);

        const correctLeft = trackRef.current?.getBoundingClientRect().left || 0;
        const cursorPosition = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
        const sliderPosition = cursorPosition - correctLeft;
        const calcValue = calcValueByPos(rangeWidth, sliderPosition, minValue, maxValue, step);

        // calc nearest slider
        const first = calcValueByPos(rangeWidth, getSliderPosition('first'), minValue, maxValue, step);
        const second = calcValueByPos(rangeWidth, getSliderPosition('second'), minValue, maxValue, step);

        if (Math.abs(second - calcValue) <= Math.abs(calcValue - first)) {
          correctSliderPosition([first, calcValue], 'second');
          onSliderClick(e, 'second');
        } else {
          correctSliderPosition([calcValue, second], 'first');
          onSliderClick(e, 'first');
        }
      }
    },
    [correctSliderPosition, disabled, onSliderClick, maxValue, minValue, step],
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
