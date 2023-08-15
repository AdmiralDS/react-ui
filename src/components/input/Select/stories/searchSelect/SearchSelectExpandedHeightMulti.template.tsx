import * as React from 'react';

import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

export const SearchSelectExpandedHeightMultiTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 20 }).map((_, ind) => String(ind)),
  );

  const handleChangeSelected = (value: string | Array<string>) => {
    if (Array.isArray(value)) setSelectValue(value);
  };

  return (
    <>
      <Select
        {...props}
        value={selectValue}
        mode="searchSelect"
        multiple={true}
        onChangeSelected={handleChangeSelected}
        maxRowCount={3}
      >
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={String(ind)}>
            {`${ind}0000`}
          </Option>
        ))}
      </Select>
    </>
  );
};
