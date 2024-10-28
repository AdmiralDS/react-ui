import * as React from 'react';
import { Range } from '@admiral-ds/react-ui';
import type { RangeProps } from '@admiral-ds/react-ui';

export const RangePlaygroundTemplate = (args: RangeProps) => {
  const [rangeValue, setRangeValue] = React.useState<[number, number]>([4, 5]);

  return (
    <>
      <Range
        {...args}
        value={rangeValue}
        onChange={(e: any, value: [number, number]) => {
          // eslint-disable-next-line no-console
          console.log({ e, value });
          setRangeValue(value);
        }}
      />
    </>
  );
};
