import * as React from 'react';
import { Option, Select, T } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import styled from 'styled-components';

import { Separator } from '#src/components/input/Select/stories/styled';

const OPTIONS = [
  {
    value: 'val1',
    text: 'Текст 1',
    extraText: 'Доооп Текст 1',
  },
  {
    value: 'val12',
    text: 'Текст 12',
    extraText: 'Доооп Текст 12',
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

const Container = styled.div`
  width: 100%;
  row-gap: 32px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 32px;

  & > * {
    flex: 1 0 50%;
  }
`;

export const SearchSelectExternalFilterTemplate = (props: SelectProps) => {
  const [singleSelectValue, setSingleSelectValue] = React.useState<string>('');
  const [singleSearchValue, setSingleSearchValue] = React.useState('');
  const [multipleSelectValue, setMultipleSelectValue] = React.useState<Array<string>>([]);
  const [multipleSearchValue, setMultipleSearchValue] = React.useState('');

  const handleSingleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSingleSearchValue(event.target.value);
  };

  const handleSingleSelectedChange = (value: string | Array<string>) => {
    if (typeof value === 'string') setSingleSelectValue(value);
  };

  const handleMultipleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMultipleSearchValue(event.target.value);
  };

  const handleMultipleSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setMultipleSelectValue(value);
  };

  const renderSingleOptions = (value: string) => {
    const toSearch = value.trim().toLowerCase();

    const filteredOptions = OPTIONS.filter((option) => option.text.toLowerCase().includes(toSearch));

    return filteredOptions.map((option) => (
      <Option key={`${toSearch}/${option.value}`} value={option.text} disabled={option.disabled}>
        {option.text}
      </Option>
    ));
  };

  const renderMultipleOptions = (value: string) => {
    const toSearch = value.trim().toLowerCase();

    // Всегда показываем выбранные значения
    const filteredOptions = OPTIONS.filter(
      (option) => option.text.toLowerCase().includes(toSearch) || multipleSelectValue.includes(option.text),
    );

    return filteredOptions.map((option) => (
      <Option key={option.value} value={option.text} disabled={option.disabled}>
        {option.text}
      </Option>
    ));
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Так как компонент построен на нативном select, в выбранных значениях могут отображаться только те элементы,
        которые переданы в качестве списка option
      </T>
      <Separator />
      <T font="Body/Body 2 Long" as="div">
        Внешняя фильтрация элементов по значению
      </T>
      <Container>
        <div>
          <T font="Body/Body 2 Long" as="div">
            Пример с одиночным выбором
          </T>
          <Select
            {...props}
            mode="searchSelect"
            value={singleSelectValue}
            onSelectedChange={handleSingleSelectedChange}
            inputValue={singleSearchValue}
            onInputChange={handleSingleInputChange}
            placeholder="пока ни чего не выбрано"
            onFilterItem={() => true}
          >
            {renderSingleOptions(singleSearchValue)}
          </Select>
        </div>
        <div>
          <T font="Body/Body 2 Long" as="div">
            Пример с множественным выбором
          </T>
          <Select
            {...props}
            mode="searchSelect"
            multiple
            value={multipleSelectValue}
            onSelectedChange={handleMultipleSelectedChange}
            inputValue={multipleSearchValue}
            onInputChange={handleMultipleInputChange}
            placeholder="пока ни чего не выбрано"
            onFilterItem={() => true}
          >
            {renderMultipleOptions(multipleSearchValue)}
          </Select>
        </div>
      </Container>
    </>
  );
};
