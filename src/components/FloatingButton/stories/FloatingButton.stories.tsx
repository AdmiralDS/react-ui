import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { FloatingButton, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { FloatingButtonPlaygroundTemplate } from './FloatingButtonPlayground.template';

// Imports of text sources
import FloatingButtonPlaygroundRaw from './FloatingButtonPlayground.template?raw';

export default {
  title: 'Admiral-2.1/FloatingButton',
  decorators: undefined,
  component: FloatingButton,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=190878-139566&mode=dev',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?type=design&node-id=191233-164632&mode=dev',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
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
} as Meta<typeof FloatingButton>;

//<editor-fold desc="Playground">
const FloatingButtonPlaygroundStory: StoryFn<typeof FloatingButton> = (props) => (
  <FloatingButtonPlaygroundTemplate {...props} />
);

export const FloatingButtonPlaygroundExample = {
  render: FloatingButtonPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: FloatingButtonPlaygroundRaw,
      },
      description: {
        story: ``,
      },
    },
  },

  name: 'Playground',
};

//</editor-fold>
