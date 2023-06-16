import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { FileInputField, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { DataAttributesDescription } from '#src/components/form/common';
import { FileInputFieldBaseTemplate, FileInputFieldRequiredTemplate } from './Templates/';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import FileInputFieldBaseRaw from '!!raw-loader!./Templates/FileInputFieldBase';
import FileInputFieldRequiredRaw from '!!raw-loader!./Templates/FileInputFieldRequired';

export default {
  title: 'Admiral-2.1/Form Field/FileInputField',
  component: FileInputField,
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
      type: 'string',
    },
    title: {
      type: 'string',
    },
    description: {
      type: 'string',
    },
    label: {
      type: 'string',
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
} as ComponentMeta<typeof FileInputField>;

//<editor-fold desc="FileInputField. Example">
const FileInputFieldBaseStory: ComponentStory<typeof FileInputField> = (props) => (
  <FileInputFieldBaseTemplate dimension={'xl'} {...cleanUpProps(props)} />
);

export const FileInputFieldBase = FileInputFieldBaseStory.bind({});
FileInputFieldBase.parameters = {
  docs: {
    source: {
      code: FileInputFieldBaseRaw,
    },
  },
};
FileInputFieldBase.storyName = 'FileInputField. Example';
//</editor-fold>

//<editor-fold desc="FileInputField. Required">
const FileInputFieldRequiredStory: ComponentStory<typeof FileInputField> = (props) => (
  <FileInputFieldRequiredTemplate dimension={'xl'} {...cleanUpProps(props)} />
);

export const FileInputFieldRequired = FileInputFieldRequiredStory.bind({});
FileInputFieldRequired.parameters = {
  docs: {
    source: {
      code: FileInputFieldRequiredRaw,
    },
  },
};
FileInputFieldRequired.storyName = 'FileInputField. Required';
//</editor-fold>
