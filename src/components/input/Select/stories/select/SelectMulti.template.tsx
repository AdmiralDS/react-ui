import * as React from 'react';
import type { ChangeEvent } from 'react';

import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

export const SelectMultiTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 20 })
      .map((_, ind) => String(ind))
      .slice(0, 10),
  );

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  return (
    <>
      <Select
        {...props}
        value={selectValue}
        multiple={true}
        onChange={onChange}
        dimension="xl"
        displayClearIcon={true}
        placeholder="Placeholder"
      >
        <Option value="big">
          Здесь ооооочень большой текст, который может, так сказать, и не поместиться в одну строку
        </Option>
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={String(ind)} disabled={[1, 3].includes(ind)}>
            {`${ind}0000`}
          </Option>
        ))}
      </Select>
    </>
  );
};
