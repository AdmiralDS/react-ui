import * as React from 'react';

import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

import { createClearOptions } from '#src/components/input/Select/Stories/utils';

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
