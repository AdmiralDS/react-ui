import * as React from 'react';

import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

import { ExtraText, TextWrapper } from '#src/components/input/Select/stories/styled';

export const SearchSelectCustomOptionMultiTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 15 }).map((_, ind) => String(ind)),
  );

  const handleSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setSelectValue(value);
  };

  return (
    <>
      <Select
        {...props}
        value={selectValue}
        multiple={true}
        onSelectedChange={handleSelectedChange}
        mode="searchSelect"
      >
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={String(ind)} renderChip={() => String(ind)}>
            <TextWrapper>
              {`${ind}0000`}
              <ExtraText>{`Доп ${ind}`}</ExtraText>
            </TextWrapper>
          </Option>
        ))}
      </Select>
    </>
  );
};
