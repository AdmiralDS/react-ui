import * as React from 'react';
import styled, { css } from 'styled-components';
import { Option, Select, SelectValueWrapper, T } from '@admiral-ds/react-ui';
import type { SelectProps } from '@admiral-ds/react-ui';
import { ReactComponent as Cuba } from '@admiral-ds/icons/build/flags/Cuba.svg';
import { ReactComponent as Belarus } from '@admiral-ds/icons/build/flags/Belarus.svg';
import { ReactComponent as RussianFederation } from '@admiral-ds/icons/build/flags/RussianFederation.svg';

import { Separator } from '#src/components/input/Select/stories/styled';

const MultipleMixin = css`
  & ${SelectValueWrapper} {
    padding-left: 0;
    column-gap: 16px;
    max-height: none;
  }
`;

const getFlag = (value: string) => {
  return value === 'Фидель' ? Cuba : value === 'Константин Колешонок' ? Belarus : RussianFederation;
};

const RenderingValue = styled.div`
  color: var(--admiral-color-Teal_Teal80, ${(p) => p.theme.color['Teal/Teal 80']});
  display: flex;
  column-gap: 8px;
  padding: 0 3px;
  border-width: 1px;
  border-style: dotted;
  border-radius: 4px;
  border-color: var(--admiral-color-Teal_Teal80, ${(p) => p.theme.color['Teal/Teal 80']});
  background-color: var(--admiral-color-Teal_Teal10, ${(p) => p.theme.color['Teal/Teal 10']});
`;

const CustomSelect = styled(Select)<{ multiple?: boolean }>`
  ${(p) => p.multiple && MultipleMixin}
`;
export const SelectCustomRenderValueTemplate = (props: SelectProps) => {
  const renderValue = (value: string | string[] | undefined) => {
    if (typeof value === 'string') {
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
      <T font="Body/Body 1 Long" as="div">
        Для кастомного отображения выбранного значения необходимо использовать свойство <code>renderSelectValue</code>.
        Туда передается функция, получающая выбранные значения, и, возвращающая отображаемый ReactNode.
      </T>
      <Separator />
      <CustomSelect {...props} multiple={false} placeholder="Placeholder" renderSelectValue={renderValue}>
        <Option value="Саша Даль">Саша Даль</Option>
        <Option value="Алексей Елесин">Алексей Елесин</Option>
        <Option value="Константин Ионочкин">Константин Ионочкин</Option>
        <Option value="Анна Корженко">Анна Корженко</Option>
        <Option value="Фидель">Фидель</Option>
        <Option value="Константин Колешонок">Константин Колешонок</Option>
        <Option value="Алексей Орлов">Алексей Орлов</Option>
      </CustomSelect>
    </>
  );
};
