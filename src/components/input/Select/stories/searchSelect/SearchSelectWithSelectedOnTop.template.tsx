import * as React from 'react';

import { Option, Select, T, UnorderedList, ListItem } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

import { OPTIONS_SIMPLE } from '#src/components/input/Select/stories/data';
import { Separator } from '#src/components/input/Select/stories/styled';

export const SearchSelectWithSelectedOnTopTemplate = ({
  placeholder = 'Placeholder',
  moveSelectedOnTop = true,
  ...props
}: SelectProps) => {
  const renderOptions = () => {
    return OPTIONS_SIMPLE.map((option, ind) => (
      <Option key={option} value={option} disabled={ind === 4}>
        {option}
      </Option>
    ));
  };

  return (
    <>
      <T font="Body/Body 1 Long" as="div">
        Для вывода ранее выбранных пунктов сверху списка необходимо включить свойство <code>moveSelectedOnTop</code>
      </T>
      <Separator $height={8} />
      <UnorderedList>
        <ListItem>Непосредственно при выборе (или отмене выбора) перестроение не происходит</ListItem>
        <ListItem>Выбранные строки отображаются сверху списка при повторном открытии меню</ListItem>
        <ListItem>
          Выбранные строки сортируются в том же порядке, что и чипсы в поле ввода, то есть в порядке очередности выбора
        </ListItem>
      </UnorderedList>
      <Separator />
      <Select
        {...props}
        placeholder={placeholder}
        multiple
        moveSelectedOnTop={moveSelectedOnTop}
        mode="searchSelect"
        dropContainerClassName="dropContainerClass"
      >
        {renderOptions()}
      </Select>
    </>
  );
};
