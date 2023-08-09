import * as React from 'react';
import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

const OPTIONS = [
  {
    value: 'val1',
    text: 'Текст 1',
    extraText: 'Доооп Текст 1',
  },
  {
    value: 'val2',
    text: 'Текст 2',
    extraText: 'Доп Теttкст 2',
  },
  {
    value: 'val3',
    text: 'Текст 3',
    disabled: true,
    extraText: 'дддопТекст 3',
  },
  {
    value: 'val4',
    text: 'Текст 444',
    extraText: 'Доооп Тексттт 41232',
  },
] as Array<{ value: string; text: string; disabled?: boolean; extraText?: string }>;

export const ExternalFilterTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(`Change event ${e.target.id}`);
    setSelectValue(e.target.value);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const renderOptions = () => {
    const toSearch = searchValue.trim().toLowerCase();

    return OPTIONS.filter((option) => option.text.toLowerCase().includes(toSearch)).map((option) => (
      <Option key={`${toSearch}/${option.value}`} value={option.text} disabled={option.disabled}>
        {option.text}
      </Option>
    ));
  };

  return (
    <Select
      {...props}
      mode="searchSelect"
      value={selectValue}
      onChange={handleChange}
      inputValue={searchValue}
      onInputChange={handleInputChange}
      placeholder="пока ни чего не выбрано"
      onFilterItem={() => true}
    >
      {renderOptions()}
    </Select>
  );
};
