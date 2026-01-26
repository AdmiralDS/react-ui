import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { SliderInputField, INPUT_DIMENSIONS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { SliderInputFieldPlaygroundTemplate } from './SliderInputFieldPlayground.template';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import SliderInputFieldPlaygroundRaw from './SliderInputFieldPlayground.template?raw';

export default {
  title: 'Admiral-2.1/Form Field/SliderInputField',
  component: SliderInputField,
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
    showTooltip: {
      control: { type: 'boolean' },
    },
    icons: {
      control: false,
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
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    tickMarks: {
      control: false,
    },
    wrapperProps: {
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
    thousand: {
      control: { type: 'text' },
    },
    decimal: {
      control: { type: 'text' },
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
  },
} as Meta<typeof SliderInputField>;

//<editor-fold desc="SliderInputField example">
const SliderInputFieldPlaygroundStory: StoryFn<typeof SliderInputField> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <SliderInputFieldPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SliderInputFieldPlayground = {
  render: SliderInputFieldPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: SliderInputFieldPlaygroundRaw,
      },
    },
  },

  name: 'SliderInputField example',
};
