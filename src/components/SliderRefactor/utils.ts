import React from 'react';

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
  step: number,
) => {
  const onePixelVal = trackWidth ? (maxValue - minValue) / trackWidth : 0;

  let sliderValue = sliderPosition * onePixelVal;

  if (!step || step >= 1) {
    sliderValue = Math.round(sliderValue);
  }
  let calcValue = minValue + sliderValue;

  if (step) {
    calcValue = Math.round(calcValue / step) * step;
  }
  if (minValue + sliderValue === minValue && calcValue !== minValue) {
    return minValue;
  }
  if (minValue + sliderValue === maxValue && calcValue !== maxValue) {
    return maxValue;
  }
  return calcValue;
};

export const calcValue = (
  e: any,
  trackRef: React.RefObject<HTMLDivElement>,
  minValue: number,
  maxValue: number,
  step: number,
  tickMarks?: number[],
  sliderWidth: number = 0,
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

  // Math.round ??
  const sliderPosition = cursorPosition - trackLeft + sliderWidth;

  let newValue = calcValueByPos(trackWidth, sliderPosition, minValue, maxValue, step);
  if (tickMarks) {
    newValue = correctValueWithRanges(tickMarks, newValue, minValue, maxValue);
  }
  return newValue;
};
