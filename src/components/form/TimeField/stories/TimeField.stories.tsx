import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import {
  TimeField,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';

import { TimeFieldInputTemplate } from './TimeFieldInput.template';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import TimeFieldInputRaw from './TimeFieldInput.template?raw';

export default {
  title: 'Admiral-2.1/Form Field/TimeField',
  component: TimeField,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60618',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60644',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60669',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
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
    isLoading: {
      control: { type: 'boolean' },
    },
    startTime: {
      control: { type: 'text' },
    },
    endTime: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    additionalLabel: {
      control: { type: 'text' },
    },
    disabledSlots: {
      control: false,
    },
    value: {
      control: { type: 'text' },
    },
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    dropContainerCssMixin: {
      control: false,
    },
    dropContainerClassName: {
      control: false,
    },
    dropContainerStyle: {
      control: false,
    },
    icon: {
      control: false,
    },
    icons: {
      control: false,
    },
    extraText: {
      control: { type: 'text' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof TimeField>;

//<editor-fold desc="TimeField example">
const TimeFieldInputStory: StoryFn<typeof TimeField> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TimeFieldInputTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TimeFieldInput = {
  render: TimeFieldInputStory,

  parameters: {
    docs: {
      source: {
        code: TimeFieldInputRaw,
      },
    },
  },

  name: 'TimeField example',
};
