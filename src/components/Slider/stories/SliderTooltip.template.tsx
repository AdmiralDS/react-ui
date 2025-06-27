import * as React from 'react';
import { Slider, T } from '@admiral-ds/react-ui';

export const SliderTooltipTemplate = () => {
  const [rangeValue, setRangeValue] = React.useState(0);
  return (
    <>
      <T font="Body/Body 1 Long" as="div" style={{ marginBottom: '24px' }}>
        При использовании компонента Slider опционально можно включать отображение подсказки (showTooltip) текущего
        значения.
      </T>
      <Slider
        value={rangeValue}
        onChange={(e: any, value: number) => {
          // eslint-disable-next-line no-console
          console.log({ event: e.type, value });
          setRangeValue(value);
        }}
        minValue={10}
        maxValue={100}
        showTooltip
      />
    </>
  );
};
