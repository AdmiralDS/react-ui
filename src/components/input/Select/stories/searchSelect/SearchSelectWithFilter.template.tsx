import * as React from 'react';

import { Option, Select, T } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

import { OPTIONS_SIMPLE } from '#src/components/input/Select/stories/data';
import { Separator } from '#src/components/input/Select/stories/styled';

export const SearchSelectWithFilterTemplate = ({ placeholder = 'Placeholder', ...props }: SelectProps) => {
  const renderOptions = () => {
    return OPTIONS_SIMPLE.map((option, ind) => (
      <Option key={option} value={option} disabled={ind === 4}>
        {option}
      </Option>
    ));
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Фильтрация списка опций осуществляется вызывающим кодом.
        <Separator $height={8} />В данном примере показан один из возможных способов
      </T>
      <Separator />
      <Select {...props} placeholder={placeholder} mode="searchSelect" dropContainerClassName="dropContainerClass">
        {renderOptions()}
      </Select>
    </>
  );
};
