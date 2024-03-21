import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { CheckboxField, ALL_DIMENSIONS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { CheckboxFieldBaseTemplate } from './CheckboxFieldBase.template';

// Imports of text sources
import CheckboxFieldBaseRaw from './CheckboxFieldBase.template?raw';

export default {
  title: 'Admiral-2.1/Form Field/CheckboxField',
  decorators: undefined,
  component: CheckboxField,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21015',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21143',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ALL_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    indeterminate: {
      control: { type: 'boolean' },
    },
    checked: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    hovered: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: { type: 'text' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    children: {
      control: false,
    },
  },
} as Meta<typeof CheckboxField>;

//<editor-fold desc="CheckboxField example">
const CheckboxFieldBaseStory: StoryFn<typeof CheckboxField> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <CheckboxFieldBaseTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const CheckboxFieldBase = {
  render: CheckboxFieldBaseStory,

  parameters: {
    docs: {
      source: {
        code: CheckboxFieldBaseRaw,
      },
    },
  },

  name: 'CheckboxField example',
};
