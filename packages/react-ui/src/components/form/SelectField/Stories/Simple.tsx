import * as React from 'react';
import { Option } from '#src/components/input';
import type { SearchSelectFieldProps } from '#src/components/form';
import type { ChangeEvent } from 'react';
import type { Theme } from '#src/components/themes';
import { ThemeProvider } from 'styled-components';
import { SelectField } from '#src/components/form';

const OPTIONS = [
  'teeext 1',
  'text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text text 2 text ',
  'text 3',
  'text 4',
  'text 5',
  'texttt 6',
  'text 7',
  'Ответ на «Главный вопрос жизни, вселенной и всего такого»',
  'text 69',
];
export const SimpleTemplate = (props: SearchSelectFieldProps) => {
  const [selectValue, setSelectValue] = React.useState('');

  const renderOptions = () => {
    return OPTIONS.map((option, ind) => (
      <Option key={option} value={option} disabled={ind === 4}>
        {option}
      </Option>
    ));
  };

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <SelectField
        data-container-id="selectFieldIdOne"
        {...props}
        mode="searchSelect"
        label="Label"
        className="Search"
        value={selectValue}
        onChange={onChange}
        placeholder="Placeholder"
      >
        {renderOptions()}
      </SelectField>
    </ThemeProvider>
  );
};
