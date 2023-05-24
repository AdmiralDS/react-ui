import type { ChangeEvent } from 'react';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import type { ComponentMeta, Story } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import type { CheckboxCompositeGroupProps, Theme } from '@admiral-ds/react-ui';
import { CheckboxCompositeGroup, CheckboxGroup, CheckboxField, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

export default {
  title: 'Admiral-2.1/CheckboxCompositeGroup',
  decorators: [withDesign],
  component: CheckboxCompositeGroup,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21015',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof CheckboxCompositeGroup>;

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

const CheckboxCompositeGroupDemo: Story = (args: CheckboxCompositeGroupProps) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (args as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  const [list, setValue] = useState<Array<ItemValue>>(initialValue);

  const someItemChecked = () => list.some((item) => item.checked);

  const handleOnchangeAll = () => {
    setValue((prev) => prev.map((item) => ({ ...item, checked: !someItemChecked() })));
  };
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setValue((prev) => prev.map((item) => (name === item.label ? { ...item, checked: !item.checked } : { ...item })));
  };
  const getIndeterminateStatus = () => !list.every((item) => item.checked) && someItemChecked();

  return (
    <ThemeProvider theme={swapBorder}>
      <CheckboxCompositeGroup {...args}>
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

export const CheckboxCompositeGroupExample = CheckboxCompositeGroupDemo.bind({});
