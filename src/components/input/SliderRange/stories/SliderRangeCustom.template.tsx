import * as React from 'react';
import { SliderRange } from '@admiral-ds/react-ui';

export const SliderRangeCustomTemplate = () => {
  return (
    <SliderRange
      // eslint-disable-next-line no-console
      onChange={(
        value: [{ str: string; num: number }, { str: string; num: number }],
        event: React.ChangeEvent<HTMLInputElement>,
      ) => console.log(value, event)}
      minValue={10}
      maxValue={100}
      prefix={['From', 'To']}
      suffix="$"
      placeholder={['From 0 $', 'To 0 $']}
    />
  );
};
