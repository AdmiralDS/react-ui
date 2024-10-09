import * as React from 'react';

import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

export const SelectMultiTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 20 })
      .map((_, ind) => String(ind))
      .slice(0, 10),
  );

  const handleSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setSelectValue(value);
  };

  return (
    <>
      <Select
        {...props}
        // defaultValue={selectValue}
        multiple={true}
        onSelectedChange={handleSelectedChange}
        dimension="xl"
        displayClearIcon={true}
        placeholder="Placeholder"
      >
        <Option id={'big'} value="big">
          Здесь ооооочень большой текст, который может, так сказать, и не поместиться в одну строку
        </Option>
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option id={ind.toString()} key={ind} value={`${ind}0000`} disabled={[1, 3].includes(ind)}>
            {`${ind}0000`}
          </Option>
        ))}
      </Select>
    </>
  );
};
