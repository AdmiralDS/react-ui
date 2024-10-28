import type React from 'react';

const correctValueWithRanges = (ranges: number[], value: number, minValue: number, maxValue: number) => {
  const fullRangePoints = [...ranges.map((elem) => elem), minValue, maxValue].sort((a, b) => a - b);

  const closestRight = Math.min(...fullRangePoints.filter((v) => v >= value));
  const closestLeft = Math.max(...fullRangePoints.filter((v) => v <= value));

  const resultValue = closestRight - value <= value - closestLeft ? closestRight : closestLeft;
  return resultValue;
};

const calcValueByPos = (
  /** Ширина всего компонента (количество пикселей) */
  trackWidth: number,
  /** На каком расстояниии от начала trackа находится слайдер (количество пикселей) */
  sliderPosition: number,
  /** Минимальное значение диапазона */
  minValue: number,
  /** Максимальное значение диапазона */
  maxValue: number,
  /** Шаг */
  step: number | 'any',
) => {
  const onePixelVal = trackWidth ? (maxValue - minValue) / trackWidth : 0;

  let sliderValue = sliderPosition * onePixelVal;

  if (typeof step === 'number' && (!step || step >= 1)) {
    sliderValue = Math.round(sliderValue);
  }
  let calcValue = minValue + sliderValue;

  if (step && typeof step === 'number') {
    calcValue = Math.round(calcValue / step) * step;
    if (step.toString().includes('.')) {
      const decimal = step.toString().match(/\.(\d+)/)?.[1].length;
      calcValue = +calcValue.toFixed(decimal);
    }
  }
  if (minValue > calcValue) {
    return minValue;
  }
  if (calcValue > maxValue) {
    return maxValue;
  }
  return calcValue;
};

export const calcValue = (
  e: any,
  trackRef: React.RefObject<HTMLDivElement>,
  minValue: number,
  maxValue: number,
  step: number | 'any',
  tickMarks?: number[],
) => {
  const trackLeft = trackRef.current?.getBoundingClientRect().left || 0;
  const trackWidth = trackRef.current?.getBoundingClientRect().width || 0;

  let cursorPosition = e.changedTouches ? e.changedTouches[0].pageX : e.pageX;
  if (cursorPosition <= trackLeft) {
    cursorPosition = trackLeft;
  }
  if (cursorPosition >= trackLeft + trackWidth) {
    cursorPosition = trackLeft + trackWidth;
  }

  const sliderPosition = Math.round(cursorPosition - trackLeft);

  let newValue = calcValueByPos(trackWidth, sliderPosition, minValue, maxValue, step);
  if (tickMarks) {
    newValue = correctValueWithRanges(tickMarks, newValue, minValue, maxValue);
  }
  return newValue;
};
