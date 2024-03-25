import * as React from 'react';
import styled from 'styled-components';

import { Option, Select } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import { ReactComponent as Cuba } from '@admiral-ds/icons/build/flags/Cuba.svg';
import { ReactComponent as Belarus } from '@admiral-ds/icons/build/flags/Belarus.svg';
import { ReactComponent as RussianFederation } from '@admiral-ds/icons/build/flags/RussianFederation.svg';

import { OPTIONS_NAMES } from '#src/components/input/Select/stories/data';

const RenderingValue = styled.div`
  color: var(--admiral-color-Teal_Teal80, ${(p) => p.theme.color['Teal/Teal 80']});
  display: flex;
  flex: 1 1 100%;
  column-gap: 8px;
  padding: 0 3px;
  border-width: 1px;
  border-style: dotted;
  border-radius: 4px;
  border-color: var(--admiral-color-Teal_Teal80, ${(p) => p.theme.color['Teal/Teal 80']});
  background-color: var(--admiral-color-Teal_Teal10, ${(p) => p.theme.color['Teal/Teal 10']});
  box-sizing: border-box;
`;

const getFlag = (value: string) => {
  return value === 'Фидель' ? Cuba : value === 'Константин Колешонок' ? Belarus : RussianFederation;
};

export const SearchSelectRenderValueTemplate = (props: SelectProps) => {
  const renderOptions = () => {
    return OPTIONS_NAMES.map((option) => (
      <Option key={option} value={option}>
        {option}
      </Option>
    ));
  };

  const renderValue = (value: string | string[] | undefined) => {
    if (typeof value === 'string' && !!value) {
      const Flag = getFlag(value);

      return (
        <RenderingValue>
          <Flag height={24} />
          {value}
        </RenderingValue>
      );
    }
  };

  return (
    <>
      <Select {...props} mode="searchSelect" multiple={false} placeholder="Placeholder" renderSelectValue={renderValue}>
        {renderOptions()}
      </Select>
    </>
  );
};
