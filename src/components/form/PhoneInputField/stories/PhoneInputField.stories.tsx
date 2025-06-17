import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { PhoneInputField, INPUT_DIMENSIONS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { PhoneInputFieldExampleTemplate } from './PhoneInputFieldExample.template';
import { DataAttributesDescription } from '#src/components/form/common';

// Imports of text sources
import PhoneInputFieldExampleRaw from './PhoneInputFieldExample.template?raw';

export default {
  title: 'Admiral-2.1/Form Field/PhoneInputField',
  component: PhoneInputField,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61244',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61271',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61297',
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
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
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
    extraText: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof PhoneInputField>;

//<editor-fold desc="PhoneInputField example">
const PhoneInputFieldExampleStory: StoryFn<typeof PhoneInputField> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <PhoneInputFieldExampleTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const PhoneInputFieldExample = {
  render: PhoneInputFieldExampleStory,

  parameters: {
    docs: {
      source: {
        code: PhoneInputFieldExampleRaw,
      },
    },
  },

  name: 'PhoneInputField example',
};
