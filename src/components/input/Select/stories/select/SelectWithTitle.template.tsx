import * as React from 'react';
import { Option, Select, T } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

import { Separator } from '#src/components/input/Select/stories/styled';

export const SelectWithTitleTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState(props.value ? String(props.value) : '');

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Для того чтобы скрыть tooltip, отображаемый при переполнении, необходимо установить свойство{' '}
        <code>forceHideOverflowTooltip</code> в значение <code>true</code>.<Separator $height={8} />
        Title отображается стандартными средствами браузера, поэтому не кастомизируется.
      </T>
      <Separator />
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
