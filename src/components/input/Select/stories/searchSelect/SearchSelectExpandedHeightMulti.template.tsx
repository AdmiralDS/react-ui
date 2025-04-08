import * as React from 'react';

import { Option, Select, T } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

import { Separator } from '#src/components/input/Select/stories/styled';

export const SearchSelectExpandedHeightMultiTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 20 }).map((_, ind) => String(ind)),
  );

  const handleSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setSelectValue(value);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Для ограничения высоты Select в режиме multiple необходимо использовать свойства maxRowCount и minRowCount. В
        примере стоит ограничение maxRowCount=3 и minRowCount=3. Ограничение работает для Select как в состоянии
        focused, так и в состоянии, когда компонент не находится в фокусе
      </T>
      <Separator />
      <Select
        {...props}
        value={selectValue}
        mode="searchSelect"
        multiple={true}
        onSelectedChange={handleSelectedChange}
        maxRowCount={3}
        minRowCount={3}
      >
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={`${ind}0000`}>
            {`${ind}0000`}
          </Option>
        ))}
      </Select>
    </>
  );
};
