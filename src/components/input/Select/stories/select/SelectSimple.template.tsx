import * as React from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../../.storybook/createBorderRadiusSwapper';

export const SelectSimpleTemplate = ({
  placeholder = 'Select option',
  themeBorderKind,
  CSSCustomProps,
  ...props
}: SelectProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [selectValue, setSelectValue] = React.useState('');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value);

  const handleSelectedChange = (value: string | Array<string>) => {
    // eslint-disable-next-line no-console
    console.log(value);
  };

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <Select
        {...props}
        value={selectValue}
        onChange={onChange}
        onSelectedChange={handleSelectedChange}
        placeholder={placeholder}
        dropContainerClassName="dropContainerClass"
      >
        <Option value="Анигиляторная пушка">Анигиляторная пушка</Option>
        <Option value="Похо Торо Моронго">Похо Торо Моронго</Option>
        <Option value="Саша Даль">Саша Даль</Option>
      </Select>
    </ThemeProvider>
  );
};
