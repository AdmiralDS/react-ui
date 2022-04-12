import { DateField } from '#/components/form/DateField';
import { INPUT_DIMENSIONS_VALUES } from '#/components/input/types';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

export default {
  title: 'Form Field Components/DateField',
  component: DateField,
  decorators: [withDesign],
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A53678',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A53728',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A53758',
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
    displayStatusIcon: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    range: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    defaultIsCalendarOpen: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: false,
    },
    handleInput: {
      control: false,
    },
  },
} as ComponentMeta<typeof DateField>;

const DisplayContainer = styled.div`
  > * {
    margin-bottom: 24px;
  }
`;
const Template: ComponentStory<typeof DateField> = (props) => {
  const [localValue, setValue] = React.useState<string>(String(props.value) ?? '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    setValue(inputValue);
    props.onChange?.(e);
  };

  return (
    <DisplayContainer>
      <DateField {...props} value={localValue} onChange={handleChange} />
      <DateField required label="uncontrolled input" />
      <DateField type="date-range" label="uncontrolled date range" />
    </DisplayContainer>
  );
};

export const InputFieldInput = Template.bind({});

InputFieldInput.args = {
  value: 'Привет',
  label: 'Label',
};

InputFieldInput.storyName = 'DateField example';
