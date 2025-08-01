import { useState } from 'react';
import type { ChangeEvent } from 'react';
import styled from 'styled-components';

import { Option, SelectField, T } from '@admiral-ds/react-ui';
import type { SearchSelectFieldProps } from '@admiral-ds/react-ui';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 24}px;
`;

const createOptions = (length: number) => Array.from({ length }).map((_, index) => String(index));

const maxOptionsNumber = 5;

export const SelectFieldMultiSearchSelectWithCounterTemplate = (props: SearchSelectFieldProps) => {
  const [selectValue, setSelectValue] = useState<string[]>([]);
  const [options] = useState(createOptions(20));
  const [optionsCounter, setOptionsCounter] = useState(0);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    if (newValues.length > maxOptionsNumber) return;
    setSelectValue(newValues);
    setOptionsCounter(newValues.length);
    props.onChange?.(e);
  };

  const renderOptions = () => {
    return options.map((option) => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ));
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        В компонент Multiselect можно добавить опцию лимитированного выбора, чтобы задавать максимальное количество
        выбираемых опций.
        <Separator $height={8} />В данном примере показан способ реализации через проп additionalLabel.
      </T>
      <Separator />
      <SelectField
        label="label"
        additionalLabel={`${optionsCounter}/${maxOptionsNumber}`}
        value={selectValue}
        multiple={true}
        onChange={onChange}
        dimension="xl"
      >
        {renderOptions()}
      </SelectField>
    </>
  );
};
