import * as React from 'react';
import { Option, Select } from '#src/components/input';
import { createClearOptions } from '#src/components/input/Select/Stories/utils';
import type { SelectProps } from '#src/components/input';

const OPTIONS = createClearOptions(20);
export const VirtualScrollTemplate = (props: SelectProps) => {
  const renderOptions = React.useMemo(() => {
    return OPTIONS.map((item, index) => (
      <Option value={item.value} key={`${index}`}>
        {item.text}
      </Option>
    ));
  }, []);

  return (
    <Select {...props} mode="searchSelect" virtualScroll={{ itemHeight: 'auto' }}>
      {renderOptions}
    </Select>
  );
};
