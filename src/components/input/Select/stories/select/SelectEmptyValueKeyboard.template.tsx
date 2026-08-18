import type { ChangeEvent } from 'react';
import { useState } from 'react';

import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

export const SelectEmptyValueKeyboardTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = useState('');

  const onChange = (event: ChangeEvent<HTMLSelectElement>) => setSelectValue(event.target.value);

  return (
    <div>
      <Select {...props} value={selectValue} onChange={onChange} placeholder="Выберите значение">
        <Option value="">Не задано</Option>
        <Option value="one">one</Option>
        <Option value="two">two</Option>
      </Select>
      <p>
        Текущее значение: <code>{JSON.stringify(selectValue)}</code>
      </p>
      <ol>
        <li>Откройте Select с клавиатуры и нажмите ArrowDown: активность должна перейти с «Не задано» на «one».</li>
        <li>Выберите «one», откройте Select снова, нажмите ArrowUp и Enter: значение должно стать пустой строкой.</li>
      </ol>
    </div>
  );
};
