import { SliderRangeField } from '#src/components/form/SliderRangeField';
import { INPUT_DIMENSIONS_VALUES } from '#src/components/input';
import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
import type { Theme } from '#src/components/themes';
import { ThemeProvider } from 'styled-components';
import { DataAttributesDescription } from '#src/components/form/common';
import { ALL_BORDER_RADIUS_VALUES } from '#src/components/themes/borderRadius';

export default {
  title: 'Admiral-2.1/Form Field/SliderRangeField',
  component: SliderRangeField,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61377',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61446',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61513',
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
    readOnly: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: { type: 'text' },
    },
    thousand: {
      control: { type: 'text' },
    },
    suffix: {
      control: { type: 'text' },
    },
    maxLength: {
      control: { type: 'number' },
    },
    minValue: {
      control: { type: 'number' },
    },
    maxValue: {
      control: { type: 'number' },
    },
    step: {
      control: { type: 'number' },
    },
    precision: {
      control: { type: 'number' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    name: {
      control: { type: 'text' },
    },
    input1: {
      control: false,
    },
    input2: {
      control: false,
    },
    defaultValue: {
      control: false,
    },
    value: {
      control: false,
    },
    prefix: {
      control: false,
    },
    placeholder: {
      control: false,
    },
  },
} as ComponentMeta<typeof SliderRangeField>;

const Template: ComponentStory<typeof SliderRangeField> = (props) => {
  function swapBorder(theme: Theme): Theme {
    theme.shape.borderRadiusKind = (props as any).themeBorderKind || theme.shape.borderRadiusKind;
    return theme;
  }

  return (
    <ThemeProvider theme={swapBorder}>
      <SliderRangeField data-container-id="sliderRangeFieldIdOne" {...props} />
    </ThemeProvider>
  );
};

export const InputFieldInput = Template.bind({});

InputFieldInput.args = {
  label: 'Введите диапазон',
};

InputFieldInput.storyName = 'SliderRangeField example';
