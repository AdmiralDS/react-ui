import { DateField } from '#src/components/form/DateField';
import { INPUT_DIMENSIONS_VALUES } from '#src/components/input/types';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import styled from 'styled-components';

export default {
  title: 'Admiral-2.1/Form Field/DateField',
  component: DateField,
  decorators: [withDesign],
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53407',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53678',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A53659',
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
      control: { type: 'text' },
    },
    handleInput: {
      control: false,
    },
    placeholder: {
      control: { type: 'text' },
    },
    minDate: {
      control: false,
    },
    maxDate: {
      control: false,
    },
  },
} as ComponentMeta<typeof DateField>;

const FormContainer = styled.form`
  > * {
    margin-bottom: 24px;
  }
`;

const Template: ComponentStory<typeof DateField> = (props) => {
  const [localValue, setValue] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.currentTarget.value;
    console.log(`handleChange ${inputValue}`);
    setValue(inputValue);
  };

  const handleFormBlur = (e: React.FocusEvent<HTMLFormElement>) => {
    console.log(`form blur:
    current target: ${e.currentTarget.id}
    target: ${e.target.id}
    related target: ${e.relatedTarget?.id}
    `);
  };

  const handleFormFocus = (e: React.FocusEvent<HTMLFormElement>) => {
    console.log(`form focus:
    current target: ${e.currentTarget.id}
    target: ${e.target.id}
    related target: ${e.relatedTarget?.id}
    `);
  };

  return (
    <>
      <FormContainer id="form 1" onBlur={handleFormBlur} onFocus={handleFormFocus}>
        <DateField {...props} value={localValue} onChange={handleChange} id={'date 1'} placeholder="Это placeholder" />
        <DateField required label="uncontrolled input" id={'date 2'} />
        <DateField
          type="date-range"
          id="date range 1"
          label="uncontrolled date range"
          placeholder={'Введите отрезок времени'}
        />
      </FormContainer>
    </>
  );
};

export const InputFieldInput = Template.bind({});

InputFieldInput.args = {
  label: 'Label',
};

InputFieldInput.storyName = 'DateField example';
