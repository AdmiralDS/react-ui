import * as React from 'react';

import { Button, MenuActionsPanel, Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';

import { createOptions } from '#src/components/input/Select/stories/utils';

const MultipleWithApplyOptions = createOptions(10);

export const SearchSelectMultipleWithApplyTemplate = (props: SelectProps) => {
  const [selectValue, setSelectValue] = React.useState<string[]>(['big', '1', '3']);
  const [forcedOpen, setForcedOpen] = React.useState(false);

  const handleSelectedChange = (value: string | Array<string>) => {
    if (Array.isArray(value)) setSelectValue(value);
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
        onSelectedChange={handleSelectedChange}
        displayClearIcon={true}
        placeholder="Placeholder"
        mode="searchSelect"
        onChangeDropDownState={setForcedOpen}
        renderBottomPanel={({ dimension = menuPanelContentDimension }) => {
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
