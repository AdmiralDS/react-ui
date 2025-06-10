import { useMemo } from 'react';

import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

const options = Array.from({ length: 20 }).map((_item, index) => ({ value: `${index}0000`, text: `${index}0000` }));
options.unshift({
  value: 'big',
  text: 'Здесь ооооочень большой текст, который может, так сказать, и не поместиться в одну строку',
});

export const SelectMultiTemplate = (props: SelectProps) => {
  const memoizedOptions = useMemo(() => {
    return options.map(({ value, text }) => (
      <Option key={value} renderChip={() => text} value={value}>
        {text}
      </Option>
    ));
  }, []);

  return (
    <>
      <Select {...props} multiple={true} dimension="xl" displayClearIcon={true} placeholder="Placeholder">
        {memoizedOptions}
      </Select>
    </>
  );
};
