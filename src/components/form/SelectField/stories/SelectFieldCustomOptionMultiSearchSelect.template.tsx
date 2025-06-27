import * as React from 'react';
import type { ChangeEvent } from 'react';
import styled from 'styled-components';

import { Option, SelectField } from '@admiral-ds/react-ui';

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExtraText = styled.div`
  color: #626f84;
`;

export const SelectFieldCustomOptionMultiSearchSelectTemplate = () => {
  const [selectValue, setSelectValue] = React.useState<string[]>(
    Array.from({ length: 15 }).map((_, ind) => String(ind)),
  );

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(Array.from(e.target.selectedOptions).map((option) => option.value));
  };

  return (
    <>
      <SelectField
        mode="searchSelect"
        label="MultiSearchSelect с кастомными опциями"
        value={selectValue}
        multiple={true}
        onChange={onChange}
      >
        {Array.from({ length: 20 }).map((_option, ind) => (
          <Option key={ind} value={`${ind}0000`} renderChip={() => `${ind}0000`}>
            <TextWrapper>
              {`${ind}0000`}
              <ExtraText>{`Доп ${ind}`}</ExtraText>
            </TextWrapper>
          </Option>
        ))}
      </SelectField>
    </>
  );
};
