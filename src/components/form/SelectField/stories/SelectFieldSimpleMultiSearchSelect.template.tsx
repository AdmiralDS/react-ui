import * as React from 'react';
import type { ChangeEvent } from 'react';
import styled from 'styled-components';

import { Option, SelectField, T } from '@admiral-ds/react-ui';
import type { SearchSelectFieldProps } from '@admiral-ds/react-ui';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 24}px;
`;

type SearchFormat = 'word' | 'wholly';

const createOptions = (length: number) => Array.from({ length }).map((_, index) => String(index));

const shouldRender = (text = '', searchValue = '', searchFormat: SearchFormat = 'wholly') => {
  const strings = searchFormat === 'word' ? searchValue.split(' ') : [searchValue];
  const chunks = strings.filter(Boolean).map((chunk) => chunk.toLowerCase());

  const specialCharacters = ['[', ']', '\\', '^', '$', '.', '|', '?', '*', '+', '(', ')'];

  const pattern = chunks
    .map((chunk) => {
      const chunkForRegExp = chunk
        .split('')
        .map((letter) => (specialCharacters.includes(letter) ? `\\${letter}` : letter))
        .join('');
      return `(${chunkForRegExp})?`;
    })
    .join('');

  const parts = text.split(new RegExp(pattern, 'gi')).filter(Boolean);

  return !searchValue ? true : parts.some((part) => chunks.includes(part.toLowerCase()));
};

export const SelectFieldSimpleMultiSearchSelectTemplate = (props: SearchSelectFieldProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(createOptions(4));
  const [searchValue, setSearchValue] = React.useState('');
  const [options] = React.useState(createOptions(20));

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const renderOptions = () => {
    return options
      .map(
        (option) =>
          (selectValue.includes(option) || shouldRender(option, searchValue)) && (
            <Option key={option} value={`${option}0000`}>
              {`${option}0000`}
            </Option>
          ),
      )
      .filter((item) => !!item);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Фильтрация элементов списка осуществляется вызывающим кодом.
        <Separator $height={8} />В данном примере показан один из возможных способов.
      </T>
      <Separator />
      <SelectField
        mode="searchSelect"
        label="label"
        value={selectValue}
        multiple={true}
        onChange={onChange}
        dimension="xl"
        displayClearIcon={true}
        onInputChange={handleInputChange}
      >
        {renderOptions()}
      </SelectField>
    </>
  );
};
