import * as React from 'react';
import { SliderRange } from '@admiral-ds/react-ui';

export const SliderRangeControlledTemplate = () => {
  const [value, setValue] = React.useState<[string, string]>(['2.0', '5.0']);
  return (
    <SliderRange
      value={value}
      onChange={(value: any) => {
        console.log(value);
        // setValue([value[0].str, value[1].str]);
      }}
      prefix={['From', 'To']}
      suffix="$"
      precision={1}
    />
  );
};
