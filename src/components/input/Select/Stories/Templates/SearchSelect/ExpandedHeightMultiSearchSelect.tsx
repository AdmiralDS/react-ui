import * as React from 'react';
import type { ChangeEvent } from 'react';

import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

export const ExpandedHeightMultiSearchSelectTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 20 }).map((_, ind) => String(ind)),
  );

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  return (
    <>
      <Select {...props} value={selectValue} mode="searchSelect" multiple={true} onChange={onChange} maxRowCount={3}>
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={String(ind)}>
            {`${ind}0000`}
          </Option>
        ))}
      </Select>
    </>
  );
};
