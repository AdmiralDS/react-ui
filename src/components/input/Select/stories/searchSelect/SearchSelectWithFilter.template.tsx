import * as React from 'react';

import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

import { OPTIONS_SIMPLE } from '#src/components/input/Select/stories/data';

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
      <Select {...props} placeholder={placeholder} mode="searchSelect" dropContainerClassName="dropContainerClass">
        {renderOptions()}
      </Select>
    </>
  );
};
