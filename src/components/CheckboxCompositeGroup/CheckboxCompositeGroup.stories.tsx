import React, { ChangeEvent, useState } from 'react';
import { ComponentMeta, Story } from '@storybook/react';
import { CheckboxCompositeGroup, CheckboxCompositeGroupProps } from './index';
import { Checkbox } from '../Checkbox';
import { CheckboxGroup } from '../CheckboxGroup';
import styled from 'styled-components';
import { withDesign } from 'storybook-addon-designs';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  & > span {
    padding-left: 20px;
  }
`;

export default {
  title: 'Example/CheckboxCompositeGroup',
  decorators: [withDesign],
  component: CheckboxCompositeGroup,
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=37%3A21015',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=37%3A21143',
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
  },
} as ComponentMeta<typeof CheckboxCompositeGroup>;

interface initialValue {
  label: string;
  id: string;
  checked: boolean;
}

const initialValue = [
  { label: 'Москва', id: '1', checked: false },
  { label: 'Воронеж', id: '2', checked: false },
  { label: 'Самара', id: '3', checked: false },
  { label: 'Омск', id: '4', checked: false },
];

const CheckboxCompositeGroupDemo: Story = (args: CheckboxCompositeGroupProps) => {
  const [list, setValue] = useState(initialValue);

  const checkedStatus = () => list.some((item) => item.checked);

  const handleOnchangeAll = () => {
    setValue((prev) => prev.map((item) => ({ ...item, checked: checkedStatus() ? false : true })));
  };
  const handleOnchange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setValue((prev) => prev.map((item) => (name === item.label ? { ...item, checked: !item.checked } : { ...item })));
  };
  const getIndeterminateStatus = () => !list.every((item) => item.checked) && checkedStatus();

  return (
    <CheckboxCompositeGroup {...args}>
      <Wrapper>
        <Checkbox indeterminate={getIndeterminateStatus()} checked={checkedStatus()} onChange={handleOnchangeAll} />
        <span>Города : </span>
      </Wrapper>
      <CheckboxGroup>
        {list.map((item) => {
          return (
            <Wrapper>
              <Checkbox checked={item.checked} name={item.label} key={item.id} onChange={handleOnchange} />
              <span>{item.label}</span>
            </Wrapper>
          );
        })}
      </CheckboxGroup>
    </CheckboxCompositeGroup>
  );
};

export const Example = CheckboxCompositeGroupDemo.bind({});
