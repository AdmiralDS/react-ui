import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import {
  InputField,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';

import { InputFieldInputTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import InputFieldInputRaw from '!!raw-loader!./Templates/InputFieldInput';

export default {
  title: 'Admiral-2.1/Form Field/InputField',
  component: InputField,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60376',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60982',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61046',
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
    maxLength: {
      type: { name: 'number', required: false },
    },
    extraText: {
      type: 'string',
    },
    label: {
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
    showTooltip: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    icons: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof InputField>;

//<editor-fold desc="Input field example">
const InputFieldInputStory: ComponentStory<typeof InputField> = (props) => (
  <InputFieldInputTemplate {...cleanUpProps(props)} />
);

export const InputFieldInput = InputFieldInputStory.bind({});
InputFieldInput.parameters = {
  docs: {
    source: {
      code: InputFieldInputRaw,
    },
  },
};
InputFieldInput.storyName = 'Input field example';
//</editor-fold>
