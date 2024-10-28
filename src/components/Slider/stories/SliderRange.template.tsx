import * as React from 'react';
import { Slider } from '@admiral-ds/react-ui';

export const SliderRangeTemplate = () => {
  const [rangeValue, setRangeValue] = React.useState(50);
  return (
    <>
      <Slider
        tickMarks={[25, 50, 75]}
        value={rangeValue}
        maxValue={100}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onChange={(e: any, value: number) => {
          // eslint-disable-next-line no-console
          console.log({ event: e.type, value });
          setRangeValue(value);
        }}
        renderTickMark={(mark: string) => mark + ' ₽'}
      />
    </>
  );
};
