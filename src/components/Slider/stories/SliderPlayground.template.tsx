import * as React from 'react';
import { Slider } from '@admiral-ds/react-ui';
import type { SliderProps } from '@admiral-ds/react-ui';

export const SliderPlaygroundTemplate = (args: SliderProps) => {
  const [rangeValue, setRangeValue] = React.useState(args.value);
  React.useEffect(() => {
    setRangeValue(args.value);
  }, [args.value]);
  return (
    <>
      <Slider
        {...args}
        value={rangeValue}
        onChange={(e: any, value: number) => {
          // eslint-disable-next-line no-console
          console.log({ event: e.type, value });
          setRangeValue(value);
        }}
      />
    </>
  );
};
