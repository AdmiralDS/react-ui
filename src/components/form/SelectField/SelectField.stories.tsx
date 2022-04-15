import { INPUT_DIMENSIONS_VALUES } from '#src/components/input';
import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { SelectField } from './';
import { withDesign } from 'storybook-addon-designs';
import { DropDownItem } from '#src/components/DropDownItem';
import styled, { css } from 'styled-components';
import { T } from '#src/components/T';

export default {
  title: 'Form Field Components/ SelectField',
  component: SelectField,
  decorators: [withDesign],
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A72270',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/CC0WL5u9TPtZpyLbbAGFGt/Admiral-2.0-UI-Kit?node-id=39%3A72636',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    alignDropdown: {
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    displayStatusIcon: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    required: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    icons: {
      control: false,
    },
  },
} as ComponentMeta<typeof SelectField>;

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;
const Red = styled.span`
  color: red;
`;

const secondItemTertiaryColor = css`
  & > :nth-child(2) * {
    color: ${(p) => p.theme.color.text.tertiary};
  }
`;

const options = [
  {
    label: 'Option one very long very long very long very long very long very long very long very long',
    value: '1',
  },
  {
    label: (
      <T as="span" font="Caption/Caption 1">
        <Red>*</Red> опция другим шрифтом
      </T>
    ),
    value: '2',
  },
  { label: 'Option three', value: '3' },
  { label: 'Option four', value: '4' },
  { label: 'Option five', value: '5' },
  { label: 'Option six', value: '6' },
  { label: 'Option seven', value: '7' },
];

const valueToModelMap = options.reduce((acc, model) => {
  acc[model.value] = model;
  return acc;
}, {} as Record<string, any>);

const simpleRender = (value: number | string | null) => (value ? valueToModelMap[value].label : value);

const Template: ComponentStory<typeof SelectField> = (props) => {
  const [selectValue, setValue] = React.useState<number | string | null>('');

  return (
    <DisplayContainer>
      <SelectField
        {...props}
        label="Опции"
        value={selectValue}
        renderInputValue={simpleRender}
        onChange={setValue}
        required
        dropContainerCssMixin={secondItemTertiaryColor}
      >
        {options.map((item, index) => (
          <DropDownItem role="option" value={item.value} key={index}>
            {item.label}
          </DropDownItem>
        ))}
      </SelectField>
    </DisplayContainer>
  );
};

export const SelectFieldFieldInput = Template.bind({});

SelectFieldFieldInput.args = {
  value: 'Привет',
  label: 'Label',
  extraText: 'Дополнительный текст',
};
