import * as React from 'react';
import type { ChangeEvent } from 'react';

import { MenuActionsPanel, Option, Select, TextButton } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import { ReactComponent as PlusOutline } from '@admiral-ds/icons/build/service/PlusOutline.svg';

import { OPTIONS_SIMPLE } from '#src/components/input/Select/stories/data';

export const SearchSelectWithAddButtonTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState('');
  const [searchValue, setSearchValue] = React.useState('');
  const [options, setOptions] = React.useState(OPTIONS_SIMPLE);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectValue(e.target.value);
    props.onChange?.(e);
  };

  const renderOptions = () => {
    return options.map((option, ind) => (
      <Option key={option} value={option} disabled={ind === 4}>
        {option}
      </Option>
    ));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleAddButtonClick = () => {
    if (searchValue && !options.includes(searchValue)) {
      setOptions([...options, searchValue]);
    }
  };

  const addButtonProps = React.useMemo(() => {
    return {
      disabled: options.includes(searchValue) || !searchValue,
      text: searchValue ? `Добавить «${searchValue}»` : 'Добавить',
    };
  }, [searchValue, options]);

  const menuPanelContentDimension = props.dimension === undefined || props.dimension === 'xl' ? 'l' : props.dimension;

  return (
    <>
      <Select
        {...props}
        onInputChange={handleInputChange}
        placeholder="Placeholder"
        mode="searchSelect"
        value={selectValue}
        onChange={onChange}
        data-menu-id="test-menu"
        renderBottomPanel={({ dimension = menuPanelContentDimension }) => {
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
