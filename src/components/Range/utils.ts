export type NumberRange = [number, number];

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
  return calcValue;
};

export const sortNum = (arr: NumberRange): NumberRange => (arr[0] > arr[1] ? [arr[1], arr[0]] : arr);
