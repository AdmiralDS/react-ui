import * as React from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps, Theme, BorderRadiusType } from '@admiral-ds/react-ui';

export const SelectSimpleTemplate = ({
  placeholder = 'Select option',
  ...props
}: SelectProps & { themeBorderKind?: BorderRadiusType }) => {
  const [selectValue, setSelectValue] = React.useState('');

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => setSelectValue(e.target.value);

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = props.themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <Select
        {...props}
        value={selectValue}
        onChange={onChange}
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
