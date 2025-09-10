import type { Meta, StoryFn } from '@storybook/react';

import type { AnchorProps } from '@admiral-ds/react-ui';
import { Anchor } from '@admiral-ds/react-ui';

import { AnchorPlaygroundTemplate } from './AnchorPlayground.template';
import { AnchorTreeTemplate } from './AnchorTree.template';
import { AnchorWithIndentTemplate } from './AnchorWithIndent.template';

// Imports of text sources
import AnchorPlaygroundRaw from './AnchorPlayground.template?raw';
import AnchorTreeRaw from './AnchorTree.template?raw';
import AnchorWithIndentRaw from './AnchorWithIndent.template?raw';

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
    items: {
      control: false,
    },
  },
} as Meta<typeof Anchor>;

//<editor-fold desc="Anchor Playground">
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

//<editor-fold desc="Anchor Tree">
const AnchorTreeStory: StoryFn<typeof Anchor> = (props: AnchorProps) => <AnchorTreeTemplate {...props} />;

export const AnchorTree = {
  render: AnchorTreeStory,

  parameters: {
    docs: {
      source: {
        code: AnchorTreeRaw,
      },
      viewMode: 'story',
    },
  },

  name: 'Anchor. Tree',
};
//</editor-fold>
//
//<editor-fold desc="Anchor With Indent">
const AnchorWithIndentgStory: StoryFn<typeof Anchor> = (props: AnchorProps) => <AnchorWithIndentTemplate {...props} />;

export const AnchorWithIndent = {
  render: AnchorWithIndentgStory,

  parameters: {
    docs: {
      source: {
        code: AnchorWithIndentRaw,
      },
      viewMode: 'story',
    },
  },

  name: 'Anchor. With indent',
};
//</editor-fold>
