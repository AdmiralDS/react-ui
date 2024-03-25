import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { FileInputField, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { DataAttributesDescription } from '#src/components/form/common';
import { FileInputFieldBaseTemplate } from './FileInputFieldBase.template';
import { FileInputFieldRequiredTemplate } from './FileInputFieldRequired.template';

// Imports of text sources
import FileInputFieldBaseRaw from './FileInputFieldBase.template?raw';
import FileInputFieldRequiredRaw from './FileInputFieldRequired.template?raw';

export default {
  title: 'Admiral-2.1/Form Field/FileInputField',
  component: FileInputField,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27281',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27389',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27519',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A27563',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'm'],
      control: { type: 'radio' },
    },
    extraText: {
      control: { type: 'text' },
    },
    title: {
      control: { type: 'text' },
    },
    description: {
      control: { type: 'text' },
    },
    label: {
      control: { type: 'text' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    width: {
      control: false,
    },
    files: {
      control: false,
    },
  },
} as Meta<typeof FileInputField>;

//<editor-fold desc="FileInputField. Example">
const FileInputFieldBaseStory: StoryFn<typeof FileInputField> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <FileInputFieldBaseTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const FileInputFieldBase = {
  render: FileInputFieldBaseStory,

  parameters: {
    docs: {
      source: {
        code: FileInputFieldBaseRaw,
      },
    },
  },

  name: 'FileInputField. Example',
};

//</editor-fold>

//<editor-fold desc="FileInputField. Required">
const FileInputFieldRequiredStory: StoryFn<typeof FileInputField> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <FileInputFieldRequiredTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const FileInputFieldRequired = {
  render: FileInputFieldRequiredStory,

  parameters: {
    docs: {
      source: {
        code: FileInputFieldRequiredRaw,
      },
    },
  },

  name: 'FileInputField. Required',
};
