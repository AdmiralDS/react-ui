import * as React from 'react';
import { SliderRange } from '@admiral-ds/react-ui';

export const SliderRangeControlledTemplate = () => {
  const [value, setValue] = React.useState<[string, string]>(['2,0', '5,0']);
  return (
    <SliderRange
      value={value}
      onChange={(value: any) => {
        // eslint-disable-next-line no-console
        console.log(value);
        setValue([value[0].str, value[1].str]);
      }}
      prefix={['От', 'До']}
      suffix="₽"
      placeholder={['От 0,0 ₽', 'До 0,0 ₽']}
      precision={1}
    />
  );
};
