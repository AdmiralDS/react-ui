import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import {
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
  MultiInputField,
} from '@admiral-ds/react-ui';

import { MultiInputFieldPlaygroundTemplate } from './MultiInputFieldPlayground.template';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import MultiInputFieldPlaygroundTemplateRaw from './MultiInputFieldPlayground.template?raw';

export default {
  title: 'Admiral-2.1/Form Field/MultiInputField',
  component: MultiInputField,
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <DataAttributesDescription />,
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
    extraText: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    additionalLabel: {
      control: { type: 'text' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof MultiInputField>;

//<editor-fold desc="MultiInputField">
const MultoOnputFieldInputStory: StoryFn<typeof MultiInputField> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <MultiInputFieldPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const MultiInputFieldPlayground = {
  render: MultoOnputFieldInputStory,

  parameters: {
    docs: {
      source: {
        code: MultiInputFieldPlaygroundTemplateRaw,
      },
    },
  },

  name: 'MultiInputField',
};
