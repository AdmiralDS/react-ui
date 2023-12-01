import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { CheckboxComponent, ALL_BORDER_RADIUS_VALUES, ALL_DIMENSIONS_VALUES } from '@admiral-ds/react-ui';

import { CheckboxComponentDemoTemplate } from './CheckboxComponentDemo.template';
import { CheckboxComponentBaseTemplate } from './CheckboxComponentBase.template';

// Imports of text sources
import CheckboxComponentDemoRaw from './CheckboxComponentDemo.template?raw';
import CheckboxComponentBaseRaw from './CheckboxComponentBase.template?raw';

export default {
  title: 'Admiral-2.1/CheckboxComponent',
  decorators: undefined,
  component: CheckboxComponent,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A20804',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A21015',
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
      options: [false, true],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    hovered: {
      control: { type: 'boolean' },
    },
    error: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    theme: {
      control: false,
    },
    as: {
      control: false,
    },
    forwardedAs: {
      control: false,
    },
    ref: {
      control: false,
    },
  },
} as Meta<typeof CheckboxComponent>;

//<editor-fold desc="CheckboxComponent. Пример">
const CheckboxComponentDemoStory: StoryFn<typeof CheckboxComponent> = (props) => (
  <CheckboxComponentDemoTemplate {...props} />
);

export const CheckboxComponentDemo = {
  render: CheckboxComponentDemoStory,

  parameters: {
    docs: {
      source: {
        code: CheckboxComponentDemoRaw,
      },
    },
  },

  name: 'CheckboxComponent. Пример',
};

//</editor-fold>

//<editor-fold desc="CheckboxComponent. Пример">
const CheckboxComponentBaseStory: StoryFn<typeof CheckboxComponent> = (props) => (
  <CheckboxComponentBaseTemplate {...props} />
);

export const CheckboxComponentBase = {
  render: CheckboxComponentBaseStory,

  parameters: {
    docs: {
      source: {
        code: CheckboxComponentBaseRaw,
      },
    },
  },

  name: 'CheckboxComponent. Пример',
};

//</editor-fold>
