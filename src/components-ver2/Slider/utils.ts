export const correctValueWithRanges = (ranges: number[], value: number, minValue: number, maxValue: number) => {
  const fullRangePoints = [...ranges.map((elem) => elem), minValue, maxValue].sort((a, b) => a - b);

  const closestRight = Math.min(...fullRangePoints.filter((v) => v >= value));
  const closestLeft = Math.max(...fullRangePoints.filter((v) => v <= value));

  const resultValue = closestRight - value <= value - closestLeft ? closestRight : closestLeft;
  return resultValue;
};

export const calcValueByPos = (
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
