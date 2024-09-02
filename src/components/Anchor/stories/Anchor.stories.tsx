import type { Meta, StoryFn } from '@storybook/react';

import type { AnchorProps } from '@admiral-ds/react-ui';
import { Anchor } from '@admiral-ds/react-ui';

import { AnchorPlaygroundTemplate } from './AnchorPlayground.template';

// Imports of text sources
import AnchorPlaygroundRaw from './AnchorPlayground.template?raw';

export default {
  title: 'Admiral-2.1/Anchor',
  decorators: undefined,
  component: Anchor,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A32367',
    },
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      defaultValue: 'm',
      control: { type: 'radio' },
    },
    theme: {
      control: false,
    },
  },
} as Meta<typeof Anchor>;

//<editor-fold desc="Avatar Playground">
const AnchorPlaygroundStory: StoryFn<typeof Anchor> = (props: AnchorProps) => <AnchorPlaygroundTemplate {...props} />;

export const AnchorPlayground = {
  render: AnchorPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: AnchorPlaygroundRaw,
      },
      viewMode: 'story',
    },
  },

  name: 'Anchor. Playground',
};
//</editor-fold>
