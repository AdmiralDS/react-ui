import * as React from 'react';
import type { ChangeEvent } from 'react';
import { css } from 'styled-components';

import { Option, SelectField } from '@admiral-ds/react-ui';
import type { SearchSelectFieldProps } from '@admiral-ds/react-ui';

const containerContrastBorder = css`
  border: dashed 2px var(--admiral-color-Neutral_Neutral90, ${(p) => p.theme.color['Neutral/Neutral 90']});
`;

export const SelectFieldExpandedHeightMultiSearchSelectTemplate = (props: SearchSelectFieldProps) => {
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
      <SelectField
        mode="searchSelect"
        label="label"
        value={selectValue}
        multiple={true}
        onChange={onChange}
        maxRowCount={3}
        dropContainerCssMixin={containerContrastBorder}
        dropContainerClassName="dropContainerClass"
      >
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={`${ind}0000`}>
            {`${ind}0000`}
          </Option>
        ))}
      </SelectField>
    </>
  );
};
