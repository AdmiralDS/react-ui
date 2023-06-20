import * as React from 'react';
import type { ChangeEvent } from 'react';

import { MenuActionsPanel, Option, Select, TextButton } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';

import { createOptions } from '#src/components/input/Select/Stories/utils';

export const MultipleWithAddOptionTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [options, setOptions] = React.useState(createOptions(20));

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const renderOptions = () => {
    return options.map((option, ind) => (
      <Option key={option.value} value={option.value} disabled={[2, 4].includes(ind)}>
        {option.text}
      </Option>
    ));
  };

  const handleAddButtonClick = () => {
    if (searchValue && !options.find((item) => item.text === searchValue)) {
      setOptions([...options, { text: searchValue, value: searchValue }]);
      setSelectValue([...selectValue, searchValue]);
      setSearchValue('');
    }
  };

  const addButtonProps = React.useMemo(() => {
    return {
      disabled: !!options.find((item) => item.text === searchValue) || !searchValue,
      text: searchValue ? `Добавить «${searchValue}»` : 'Добавить',
    };
  }, [searchValue, options]);

  const menuPanelContentDimension = props.dimension === undefined || props.dimension === 'xl' ? 'l' : props.dimension;

  return (
    <>
      <Select
        {...props}
        value={selectValue}
        inputValue={searchValue}
        multiple={true}
        onChange={onChange}
        dimension="xl"
        displayClearIcon={true}
        placeholder="Placeholder"
        mode="searchSelect"
        onInputChange={handleInputChange}
        renderDropDownBottomPanel={({ dimension = menuPanelContentDimension }) => {
          return (
            <MenuActionsPanel dimension={dimension}>
              <TextButton {...addButtonProps} iconStart={<PlusOutline />} onClick={handleAddButtonClick} />
            </MenuActionsPanel>
          );
        }}
      >
        {renderOptions()}
      </Select>
    </>
  );
};
