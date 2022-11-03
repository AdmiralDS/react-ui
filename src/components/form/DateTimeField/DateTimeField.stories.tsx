import { DateTimeDateInput, DateTimeTimeInput, INPUT_DIMENSIONS_VALUES } from '#src/components/input';
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
    docs: {
      source: {
        code: null,
      },
    },
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
      options: ['Border radius 0', 'Border radius 2', 'Border radius 4', 'Border radius 8'],
      control: { type: 'radio' },
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

const FlexDiv = styled.div`
  display: flex;
  min-width: 288px;
`;

const Template1: ComponentStory<typeof Field> = (props) => {
  return (
    <DisplayContainer>
      <Field label="Введите дату">
        <FlexDiv>
          <DateTimeDateInput />
          <DateTimeTimeInput />
        </FlexDiv>
      </Field>
    </DisplayContainer>
  );
};

const Template2: ComponentStory<typeof Field> = (props) => {
  return (
    <DisplayContainer>
      <Field label="Disabled control" disabled>
        <FlexDiv>
          <DateTimeDateInput disabled />
          <DateTimeTimeInput disabled />
        </FlexDiv>
      </Field>
    </DisplayContainer>
  );
};

const Template3: ComponentStory<typeof Field> = (props) => {
  return (
    <DisplayContainer>
      <Field label="read only control" readOnly>
        <FlexDiv>
          <DateTimeDateInput defaultValue="12.10.2022" readOnly />
          <DateTimeTimeInput defaultValue="12:10" readOnly />
        </FlexDiv>
      </Field>
    </DisplayContainer>
  );
};

export const DateTimeField1 = Template1.bind({});

DateTimeField1.storyName = 'DateTimeField example';

export const DateTimeField2 = Template2.bind({});

DateTimeField2.storyName = 'DateTimeField disabled example';

export const DateTimeField3 = Template3.bind({});

DateTimeField3.storyName = 'DateTimeField read only example';
