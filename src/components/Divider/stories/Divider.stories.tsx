import type { Meta, StoryFn } from '@storybook/react';

import type { DividerProps } from '@admiral-ds/react-ui';
import { Divider } from '@admiral-ds/react-ui';

import { DividerPlaygroundTemplate } from './DividerPlayground.template';
import { DividerVariantsTemplate } from './DividerVariants.template';

// Imports of text sources
import DividerPlaygroundRaw from './DividerPlayground.template?raw';
import DividerVariantsRaw from './DividerVariants.template?raw';

export default {
  title: 'Admiral-2.1/Divider',
  decorators: undefined,
  component: Divider,
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
    length: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof Divider>;

//<editor-fold desc="Divider Playground">
const DividerPlaygroundStory: StoryFn<typeof Divider> = (props: DividerProps) => (
  <DividerPlaygroundTemplate {...props} />
);

export const DividerPlayground = {
  render: DividerPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: DividerPlaygroundRaw,
      },
      viewMode: 'story',
    },
  },

  name: 'Divider. Playground',
};
//</editor-fold>

//<editor-fold desc="Divider Variants">
const DividerVariantsStory: StoryFn<typeof Divider> = (props: DividerProps) => <DividerVariantsTemplate {...props} />;

export const DividerVariants = {
  render: DividerVariantsStory,

  parameters: {
    docs: {
      source: {
        code: DividerVariantsRaw,
      },
      viewMode: 'story',
    },
  },

  name: 'Divider. Variants',
};
//</editor-fold>
