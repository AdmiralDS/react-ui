import * as React from 'react';
import { useQuery } from '@tanstack/react-query';

import { Option, Select, useDebounce, T } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

import { Separator } from '#src/components/input/Select/stories/styled';

async function searchPeopleByName(name: string) {
  const response = await fetch(
    'https://swapi.dev/api/people/?' +
      new URLSearchParams({
        search: name,
      }),
  );
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export const SearchSelectWithAsyncLoadingTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : '');
  const [options, setOptions] = React.useState<Array<{ value: string; text: string }>>([]);

  const [filter, setFilter] = React.useState('');

  const debouncedFilter = useDebounce(filter, 500);

  const { data, isLoading } = useQuery({
    queryKey: ['products', debouncedFilter],
    queryFn: () => searchPeopleByName(debouncedFilter),
  });

  React.useEffect(() => {
    if (data) {
      const names = data['results'] as Array<{ name: string }>;
      const options = names.map(({ name }) => ({ value: name, text: name }));
      setOptions(options);
    }
  }, [data]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Пример демонстрирует подгрузку данных для селекта с фильтром по имени
      </T>
      <Separator />
      <Select
        {...props}
        value={selectValue}
        isLoading={isLoading}
        onChange={onChange}
        onInputChange={onInputChange}
        mode="searchSelect"
      >
        {options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.text}
          </Option>
        ))}
      </Select>
    </>
  );
};
