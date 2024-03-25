import * as React from 'react';
import { ThemeProvider } from 'styled-components';

import { CheckboxCompositeGroup, CheckboxField, CheckboxGroup } from '@admiral-ds/react-ui';
import type { CheckboxCompositeGroupProps, BorderRadiusType } from '@admiral-ds/react-ui';
import { createBorderRadiusSwapper } from '../../../../.storybook/createBorderRadiusSwapper';

interface ItemValue {
  label: string;
  id: string;
  checked: boolean;
}

const initialValue: Array<ItemValue> = [
  { label: 'Москва', id: '1', checked: false },
  { label: 'Воронеж', id: '2', checked: false },
  { label: 'Самара', id: '3', checked: false },
  { label: 'Омск', id: '4', checked: false },
];

export const CheckboxCompositeGroupExampleTemplate = ({
  themeBorderKind,
  CSSCustomProps,
  ...props
}: CheckboxCompositeGroupProps & { themeBorderKind?: BorderRadiusType; CSSCustomProps?: boolean }) => {
  const [list, setValue] = React.useState<Array<ItemValue>>(initialValue);

  const someItemChecked = () => list.some((item) => item.checked);

  const handleOnchangeAll = () => {
    setValue((prev) => prev.map((item) => ({ ...item, checked: !someItemChecked() })));
  };
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setValue((prev) => prev.map((item) => (name === item.label ? { ...item, checked: !item.checked } : { ...item })));
  };
  const getIndeterminateStatus = () => !list.every((item) => item.checked) && someItemChecked();

  return (
    <ThemeProvider theme={createBorderRadiusSwapper(themeBorderKind, CSSCustomProps)}>
      <CheckboxCompositeGroup {...props}>
        <CheckboxField
          indeterminate={getIndeterminateStatus()}
          checked={someItemChecked()}
          onChange={handleOnchangeAll}
        >
          Города :
        </CheckboxField>
        <CheckboxGroup>
          {list.map((item) => (
            <CheckboxField checked={item.checked} name={item.label} key={item.id} onChange={handleOnchange}>
              {item.label}
            </CheckboxField>
          ))}
        </CheckboxGroup>
      </CheckboxCompositeGroup>
    </ThemeProvider>
  );
};
