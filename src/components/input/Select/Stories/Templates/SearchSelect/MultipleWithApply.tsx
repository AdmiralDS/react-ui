import * as React from 'react';
import type { ChangeEvent } from 'react';

import { Button, MenuActionsPanel, Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

import { createOptions } from '#src/components/input/Select/Stories/utils';

const MultipleWithApplyOptions = createOptions(10);

export const MultipleWithApplyTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(['big', '1', '3']);
  const [forcedOpen, setForcedOpen] = React.useState(false);

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newValues = Array.from(e.target.selectedOptions).map((option) => option.value);
    setSelectValue(newValues);
    props.onChange?.(e);
  };

  const renderOptions = () => {
    return MultipleWithApplyOptions.map((option, ind) => (
      <Option key={option.value} value={option.value} disabled={[0, 2, 4].includes(ind)}>
        {option.text}
      </Option>
    ));
  };

  const handleApplyButtonClick = () => {
    setForcedOpen(false);
    // eslint-disable-next-line no-console
    console.log('selected', selectValue.toString());
  };

  const menuPanelContentDimension = props.dimension === undefined || props.dimension === 'xl' ? 'l' : props.dimension;

  return (
    <>
      <Select
        {...props}
        forcedOpen={forcedOpen}
        value={selectValue}
        multiple={true}
        onChange={onChange}
        displayClearIcon={true}
        placeholder="Placeholder"
        mode="searchSelect"
        onChangeDropDownState={setForcedOpen}
        renderDropDownBottomPanel={({ dimension = menuPanelContentDimension }) => {
          return (
            <MenuActionsPanel dimension={dimension}>
              <Button dimension={'m'} disabled={selectValue.length === 0} onClick={handleApplyButtonClick}>
                Применить
              </Button>
            </MenuActionsPanel>
          );
        }}
      >
        {renderOptions()}
      </Select>
    </>
  );
};
