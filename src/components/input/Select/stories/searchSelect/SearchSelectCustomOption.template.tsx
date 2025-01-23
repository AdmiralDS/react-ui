import * as React from 'react';
import type { ChangeEvent } from 'react';

import { defaultFilterItem, Option, Select, T } from '@admiral-ds/react-ui';
import type { SearchFormat, SelectProps } from '@admiral-ds/react-ui';

import { OPTIONS } from '#src/components/input/Select/stories/data';
import { ExtraText, Icon, Separator, TextWrapper } from '#src/components/input/Select/stories/styled';

export const SearchSelectCustomOptionTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : OPTIONS[2].value);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  const handleFilterItem = (value: string, searchValue: string, searchFormat: SearchFormat) => {
    const option = OPTIONS.find((item) => item.value === value);
    return (
      !!option &&
      (defaultFilterItem(value, searchValue, searchFormat) ||
        defaultFilterItem(option.text, searchValue, searchFormat) ||
        defaultFilterItem(option.extraText, searchValue, searchFormat))
    );
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Фильтрация элементов по значению, тексту и дополнительному тексту
      </T>
      <Separator />
      <Select {...props} value={selectValue} mode="searchSelect" onFilterItem={handleFilterItem} onChange={onChange}>
        {OPTIONS.map((option) => (
          <Option key={option.value} value={option.value}>
            <Icon />
            <TextWrapper>
              {option.text}
              <ExtraText>{option.extraText}</ExtraText>
            </TextWrapper>
          </Option>
        ))}
      </Select>
    </>
  );
};
