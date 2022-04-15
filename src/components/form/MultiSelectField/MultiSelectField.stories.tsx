import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import { DropDownItem } from '#src/components/DropDownItem';
import styled from 'styled-components';
import { MultiSelectField } from './index';
import { CheckboxField } from '#src/components/form/CheckboxField';
import { INPUT_DIMENSIONS_VALUES } from '#src/components/input/types';

export default {
  title: 'Form Field Components/ MultiSelectField',
  component: MultiSelectField,
  decorators: [withDesign],
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A72815',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A72897',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A72973',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof MultiSelectField>;

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;
const Template: ComponentStory<typeof MultiSelectField> = (props) => {
  const items = [
    { id: 1, label: 'Option one', value: '1' },
    { id: 2, label: 'Option two', value: '2' },
    { id: 3, label: 'Option three', value: '3' },
    { id: 4, label: 'Option four', value: '4' },
    { id: 5, label: 'Option five', value: '5' },
    { id: 6, label: 'Option six', value: '6' },
    { id: 7, label: 'Option seven', value: '7' },
  ];
  const [selectMultiValue, setMultiValue] = useState<string[]>([]);

  return (
    <DisplayContainer>
      <MultiSelectField
        {...props}
        placeholder={'Multi select'}
        value={selectMultiValue}
        onChange={(value) => setMultiValue(value)}
      >
        {items.map((item) => {
          return (
            <DropDownItem role="option" value={item.label} key={item.id}>
              <CheckboxField checked={selectMultiValue.indexOf(item.label) > -1} readOnly>
                {item.label}
              </CheckboxField>
            </DropDownItem>
          );
        })}
      </MultiSelectField>
    </DisplayContainer>
  );
};

export const SelectFieldFieldInput = Template.bind({});

SelectFieldFieldInput.args = {
  label: 'Label',
};

SelectFieldFieldInput.storyName = 'MultiSelectField example';
