import * as React from 'react';
import { useQuery } from '@tanstack/react-query';

import { Option, Select, useDebounce, T } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

import { Separator } from '#src/components/input/Select/stories/styled';

async function searchCountryByName(name: string) {
  const url = name.trim()
    ? `https://restcountries.com/v3.1/name/${name}`
    : `https://restcountries.com/v3.1/all?fields=name,capital,cca3`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export const AsyncDataLoadingTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : '');
  const [selectedOption, setSelectOption] = React.useState<{ value: string; text: string }>();
  const [options, setOptions] = React.useState<Array<{ value: string; text: string }>>([]);

  const [filter, setFilter] = React.useState('');

  const debouncedFilter = useDebounce(filter, 500);

  const { data, isLoading } = useQuery({
    queryKey: ['countries', debouncedFilter],
    queryFn: () => searchCountryByName(debouncedFilter),
  });

  React.useEffect(() => {
    if (data) {
      const names = [...(data as Array<{ name: { common: string }; cca3: string }>)].slice(0, 20);
      const options = names.map(({ name, cca3 }) => ({ value: cca3, text: name.common }));

      if (selectedOption) {
        const index = options.findIndex((item) => item.value === selectedOption.value);
        if (index === -1) {
          options.unshift(selectedOption);
        }
      }
      setOptions(options);
    }
  }, [data, selectedOption]);

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    const option = options.find((item) => item.value === e.target.value);
    if (option) {
      setSelectOption({ ...option });
    }

    props.onChange?.(e);
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.target.value);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Пример демонстрирует подгрузку данных для селекта с фильтром по имени страны, используя API серивса
        restcountries.
      </T>
      <Separator />
      <T font="Body/Body 1 Long" as="div">
        Фильтрация происходит на стороне сервера, поэтому внутреннюю фильтрацию в компоненте надо отключить{' '}
        <strong>{'onFilterItem={() => true}'}</strong>, и кроме того, необходимо запоминать выбранную опции и после
        ответа сервера добавлять ее в список опций select, так как нативный select может отображать только те опции,
        которые есть у него в списке.
      </T>
      <Separator />
      <Select
        {...props}
        value={selectValue}
        isLoading={isLoading}
        onChange={onChange}
        onInputChange={onInputChange}
        mode="searchSelect"
        onFilterItem={() => true}
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
