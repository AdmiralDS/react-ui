import React, { ChangeEvent, useState } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { CheckboxCompositeGroup, CheckboxCompositeGroupProps } from './index';
import { CheckboxGroup } from '../CheckboxGroup';
import { withDesign } from 'storybook-addon-designs';
import { CheckboxField } from '#src/components/form';
import { ThemeProvider } from 'styled-components';
import { Theme } from '#src/components/themes';

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
      control: {
        type: 'radio',
        options: ['m', 's'],
      },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
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

export const Example = CheckboxCompositeGroupDemo.bind({});
