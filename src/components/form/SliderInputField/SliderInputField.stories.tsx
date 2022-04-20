import { SliderInputField } from '#src/components/form/SliderInputField';
import { INPUT_DIMENSIONS_VALUES } from '#src/components/input';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Admiral-2.1/Form Field/SliderInputField',
  component: SliderInputField,
  decorators: [withDesign],
  parameters: {
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61110',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61184',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61214',
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
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    icons: {
      control: false,
    },
    extraText: {
      control: { type: 'text' },
    },
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    prefix: {
      control: { type: 'text' },
    },
    suffix: {
      control: { type: 'text' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof SliderInputField>;

const Template: ComponentStory<typeof SliderInputField> = (props) => {
  return (
    <>
      <SliderInputField {...props} minValue={1000} maxValue={10000} />
    </>
  );
};

export const InputFieldInput = Template.bind({});

InputFieldInput.args = {
  defaultValue: '2000',
  label: 'Введите сумму',
};

InputFieldInput.storyName = 'SliderInputField example';
