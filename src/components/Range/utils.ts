export type NumberRange = [number, number];

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
  if (minValue + sliderValue === minValue && calcValue !== minValue) {
    return minValue;
  }
  if (minValue + sliderValue === maxValue && calcValue !== maxValue) {
    return maxValue;
  }
  return calcValue;
};

export const calcValue = (
  e: TouchEvent | MouseEvent,
  trackRef: React.RefObject<HTMLDivElement>,
  minValue: number,
  maxValue: number,
  step: number | 'any',
) => {
  const trackLeft = trackRef.current?.getBoundingClientRect().left || 0;
  const trackWidth = trackRef.current?.getBoundingClientRect().width || 0;

  let cursorPosition = (e as TouchEvent).changedTouches
    ? (e as TouchEvent).changedTouches[0].pageX
    : (e as MouseEvent).pageX;
  if (cursorPosition <= trackLeft) {
    cursorPosition = trackLeft;
  }
  if (cursorPosition >= trackLeft + trackWidth) {
    cursorPosition = trackLeft + trackWidth;
  }

  const sliderPosition = Math.round(cursorPosition - trackLeft);

  const newValue = calcValueByPos(trackWidth, sliderPosition, minValue, maxValue, step);
  return newValue;
};

export const sortNum = (arr: NumberRange): NumberRange => {
  return arr[0] > arr[1] ? [arr[1], arr[0]] : [arr[0], arr[1]];
};

export const arraysEqual = (arr1: NumberRange, arr2: NumberRange) => {
  return arr1.length === arr2.length && arr1.every((value, index) => value === arr2[index]);
};

export const calcSliderCoords = (value: number, minValue: number, maxValue: number, rangeWidth: number) => {
  const onePxValue = rangeWidth ? rangeWidth / (maxValue - minValue) : 0;

  const correctValue = value >= 0 ? value - minValue : -minValue + value;

  let percents: number = ((onePxValue * correctValue) / rangeWidth) * 100;
  percents = percents > 100 ? 100 : percents;
  percents = percents < 0 ? 0 : percents;

  return percents;
};
