import * as React from 'react';
import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

export const SelectWithTitleTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : '');

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <>
      <Select
        {...props}
        title={selectValue}
        value={selectValue}
        onChange={onChange}
        placeholder="Select option"
        dropContainerClassName="dropContainerClass"
        forceHideOverflowTooltip
      >
        <Option value="Гигантский текст">
          Гигантский текст, который настолько большой, что, когда он проходил мимо телевизора, ты пропустил 2 серии
          любимого сериала
        </Option>
        <Option value="Анигиляторная пушка">Анигиляторная пушка</Option>
        <Option value="Похо Торо Моронго">Похо Торо Моронго</Option>
        <Option value="Саша Даль">Саша Даль</Option>
      </Select>
    </>
  );
};
