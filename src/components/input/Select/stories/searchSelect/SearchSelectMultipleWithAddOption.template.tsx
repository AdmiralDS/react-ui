import * as React from 'react';

import { MenuActionsPanel, Option, Select, TextButton } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';

import { createOptions } from '#src/components/input/Select/stories/utils';

export const SearchSelectMultipleWithAddOptionTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [options, setOptions] = React.useState(createOptions(20));

  const handleSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setSelectValue(value);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const renderedOptions = React.useMemo(() => {
    return options.map((option, ind) => (
      <Option key={option.value} value={option.value} disabled={[2, 4].includes(ind)}>
        {option.text}
      </Option>
    ));
  }, [options]);

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
        onSelectedChange={handleSelectedChange}
        dimension="xl"
        displayClearIcon={true}
        placeholder="Placeholder"
        mode="searchSelect"
        onInputChange={handleInputChange}
        renderBottomPanel={({ dimension = menuPanelContentDimension }) => {
          return (
            <MenuActionsPanel dimension={dimension}>
              <TextButton {...addButtonProps} iconStart={<PlusOutline />} onClick={handleAddButtonClick} />
            </MenuActionsPanel>
          );
        }}
      >
        {renderedOptions}
      </Select>
    </>
  );
};
