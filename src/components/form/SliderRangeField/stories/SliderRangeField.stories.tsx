import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { SliderRangeField, INPUT_DIMENSIONS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { SliderRangeFieldPlaygroundTemplate } from './SliderRangeFieldPlayground.template';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import SliderRangeFieldPlaygroundRaw from './SliderRangeFieldPlayground.template?raw';

export default {
  title: 'Admiral-2.1/Form Field/SliderRangeField',
  component: SliderRangeField,
  decorators: undefined,
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
    label: {
      control: { type: 'text' },
    },
    additionalLabel: {
      control: { type: 'text' },
    },
    thousand: {
      control: { type: 'text' },
    },
    decimal: {
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
} as Meta<typeof SliderRangeField>;

//<editor-fold desc="SliderRangeField example">
const SliderRangeFieldPlaygroundStory: StoryFn<typeof SliderRangeField> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SliderRangeFieldPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SliderRangeFieldPlayground = {
  render: SliderRangeFieldPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: SliderRangeFieldPlaygroundRaw,
      },
    },
  },

  name: 'SliderRangeField example',
};
