import type { Meta, StoryFn } from '@storybook/react';

import { ActionBarTemplate } from './ActionBar.template';

// Imports of text sources
import ActionBarTemplateRaw from './ActionBar.template?raw';
import { ActionBar, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

export default {
  title: 'Admiral-2.1/ActionBar',
  decorators: undefined,
  component: ActionBar,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof ActionBar>;

//<editor-fold desc="ActionBar Playground">
const ActionBarStory: StoryFn<typeof ActionBar> = (props) => <ActionBarTemplate {...props} />;

export const ActionBarPlayground = {
  render: ActionBarStory,

  parameters: {
    docs: {
      source: {
        code: ActionBarTemplateRaw,
      },
    },
  },

  name: 'ActionBar Playground',
};

//</editor-fold>
