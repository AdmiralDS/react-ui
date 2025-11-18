import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { GapMixinTemplate } from './GapMixin.template';
import GapMixinRaw from './GapMixin.template?raw';

export default {
  title: 'Admiral-2.1/Mixins/gapMixin',
  component: GapMixinTemplate,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
} as Meta<typeof GapMixinTemplate>;

const GapMixinStory: StoryFn = () => <GapMixinTemplate />;

export const GapMixinPlayground = {
  render: GapMixinStory,
  parameters: {
    docs: {
      source: {
        code: GapMixinRaw,
      },
    },
  },
  name: 'Сравнение gap и gapMixin',
};
