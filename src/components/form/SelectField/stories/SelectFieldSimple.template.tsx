import * as React from 'react';
import type { ChangeEvent } from 'react';
import styled, { ThemeProvider } from 'styled-components';

import { SelectField, Option, T } from '@admiral-ds/react-ui';
import type { SearchSelectFieldProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../../.storybook/createBorderRadiusSwapper';

const Separator = styled.div<{ $height?: number }>`
  height: ${(p) => p.$height || 8}px;
`;

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
  CSSCustomProps,
  ...props
}: SearchSelectFieldProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
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
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <T font="Body/Body 1 Long" as="div">
        Селект с возможностью контекстного поиска среди вариантов.
        <Separator />
        Используется при большом количестве элементов в списке.
        <Separator $height={16} /> При клике на любом месте поля (кроме иконки крестика) открывается меню выбора и
        активируется поле ввода текста. Меню закрывается при повторном клике в поле, либо при клике вне компонента, либо
        при выборе опции в меню.
      </T>
      <Separator $height={24} />
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
