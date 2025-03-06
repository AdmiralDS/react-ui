import * as React from 'react';
import type { ChangeEvent } from 'react';

import { Option, OptionGroup, SelectField } from '@admiral-ds/react-ui';

export const SelectFieldOptionGroupSearchSelectTemplate = () => {
  const [selectValue, setSelectValue] = React.useState('Похо Торо Моронго');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value);

  return (
    <>
      <SelectField
        mode="searchSelect"
        label="SearchSelect с группами"
        value={selectValue}
        onChange={onChange}
        dimension="xl"
      >
        <OptionGroup label="Сегодня выступают">
          <Option value="Анигиляторная пушка">Анигиляторная пушка</Option>
          <Option value="Похо Торо Моронго">Похо Торо Моронго</Option>
        </OptionGroup>
        <OptionGroup label="Группа фрукты" disabled>
          <Option value="Саша Даль">Саша Даль</Option>
          <Option value="Алексей Елесин">Алексей Елесин</Option>
          <Option value="Константин Ионочкин">Константин Ионочкин</Option>
          <Option value="Анна Корженко">Анна Корженко</Option>
          <Option value="Фидель">Фидель</Option>
          <Option value="Константин Колешонок">Константин Колешонок</Option>
          <Option value="Алексей Орлов">Алексей Орлов</Option>
        </OptionGroup>
      </SelectField>
    </>
  );
};
