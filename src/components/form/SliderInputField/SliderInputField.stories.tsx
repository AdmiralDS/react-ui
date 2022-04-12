import { SliderInputField } from '#/components/form/SliderInputField';
import { INPUT_DIMENSIONS_VALUES } from '#/components/input';
import * as React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

export default {
  title: 'Form Field Components/SliderInputField',
  component: SliderInputField,
  decorators: [withDesign],
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/HCiO63zg2hPSXTHuEdpRtG/Admiral-2.0-UI-Kit?node-id=39%3A61110',
    },
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
      control: false,
    },
  },
} as ComponentMeta<typeof SliderInputField>;

const Template: ComponentStory<typeof SliderInputField> = (props) => {
  return <SliderInputField {...props} minValue={1000} maxValue={10000} />;
};

export const InputFieldInput = Template.bind({});

InputFieldInput.args = {
  defaultValue: '2000',
  label: 'Введите сумму',
};

InputFieldInput.storyName = 'SliderInputField example';
