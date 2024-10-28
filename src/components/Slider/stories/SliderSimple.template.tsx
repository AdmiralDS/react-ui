import * as React from 'react';
import { Slider } from '@admiral-ds/react-ui';

export const SliderSimpleTemplate = () => {
  const [rangeValue, setRangeValue] = React.useState(0);
  return (
    <>
      <Slider
        value={rangeValue}
        onChange={(e: any, value: number) => {
          // eslint-disable-next-line no-console
          console.log({ event: e.type, value });
          setRangeValue(value);
        }}
        minValue={10}
        maxValue={100}
      />
    </>
  );
};
