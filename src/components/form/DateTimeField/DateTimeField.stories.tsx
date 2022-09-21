import { DateInput, INPUT_DIMENSIONS_VALUES, TimeInput } from '#src/components/input';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Field } from '#src/components/Field';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';
import { DataAttributesDescription } from '#src/components/form/common';

export default {
  title: 'Admiral-2.1/Form Field/DateTimeField',
  component: Field,
  decorators: [withDesign],
  parameters: {
    componentSubtitle: <DataAttributesDescription />,
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=112005%3A67969',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    maxLength: {
      type: { name: 'number', required: false },
    },
    extraText: {
      type: 'string',
    },
    prefixValue: {
      type: 'string',
    },
    suffixValue: {
      type: 'string',
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    icons: {
      control: false,
    },
    themeBorderKind: {
      control: {
        type: 'radio',
        options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof Field>;

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;
const Join = styled.div`
  display: flex;
`;
const Template: ComponentStory<typeof Field> = (props) => {
  return (
    <DisplayContainer>
      <Field label="Введите дату">
        <Join>
          <DateInput />
          <TimeInput />
        </Join>
      </Field>
    </DisplayContainer>
  );
};

export const DateTimeField = Template.bind({});

DateTimeField.storyName = 'DateTimeField example';
