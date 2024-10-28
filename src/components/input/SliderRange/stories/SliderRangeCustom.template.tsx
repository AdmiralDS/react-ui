import * as React from 'react';
import { SliderRange } from '@admiral-ds/react-ui';

export const SliderRangeCustomTemplate = () => {
  return (
    <SliderRange
      // eslint-disable-next-line no-console, @typescript-eslint/no-explicit-any
      onChange={(value: any) => console.log(value)}
      minValue={10}
      maxValue={100}
      prefix={['From', 'To']}
      suffix="$"
      placeholder={['From 0 $', 'To 0 $']}
    />
  );
};
