import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { IconButtonGroup, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { IconButtonGroupPlaygroundTemplate } from './IconButtonGroupPlayground.template';
import { IconButtonGroupTooltipTemplate } from './IconButtonGroupTooltip.template';

// Imports of text sources
import IconButtonGroupPlaygroundRaw from './IconButtonGroupPlayground.template?raw';
import IconButtonGroupTooltipRaw from './IconButtonGroupTooltip.template?raw';

export default {
  title: 'Admiral-2.1/IconButtonGroup',
  decorators: undefined,
  component: IconButtonGroup,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17787',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
  },
} as Meta<typeof IconButtonGroup>;

// check css custom props and radius change
const IconButtonGroupPlaygroundStory: StoryFn<typeof IconButtonGroup> = (props) => {
  return <IconButtonGroupPlaygroundTemplate {...props} />;
};

export const IconButtonGroupPlayground = {
  render: IconButtonGroupPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: IconButtonGroupPlaygroundRaw,
      },
    },
  },

  name: 'IconButtonGroup. Playground',
};

//</editor-fold>

// check css custom props and radius change
const IconButtonGroupTooltipStory: StoryFn<typeof IconButtonGroup> = (props) => {
  return <IconButtonGroupTooltipTemplate {...props} />;
};

export const IconButtonGroupTooltip = {
  render: IconButtonGroupTooltipStory,

  parameters: {
    docs: {
      source: {
        code: IconButtonGroupTooltipRaw,
      },
    },
  },

  name: 'IconButtonGroup. Tooltip',
};

//</editor-fold>
