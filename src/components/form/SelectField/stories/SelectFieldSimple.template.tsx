import * as React from 'react';
import type { ChangeEvent } from 'react';
import { ThemeProvider } from 'styled-components';

import { SelectField, Option } from '@admiral-ds/react-ui';
import type { SearchSelectFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

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
export const SelectFieldSimpleTemplate = ({
  placeholder = 'Placeholder',
  themeBorderKind,
  ...props
}: SearchSelectFieldProps & { themeBorderKind?: BorderRadiusType }) => {
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

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind)}>
      <SelectField
        data-container-id="selectFieldIdOne"
        {...props}
        mode="searchSelect"
        label="Label"
        className="Search"
        value={selectValue}
        onChange={onChange}
        placeholder={placeholder}
      >
        {renderOptions()}
      </SelectField>
    </ThemeProvider>
  );
};
