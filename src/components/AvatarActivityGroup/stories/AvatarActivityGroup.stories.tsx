import type { Meta, StoryFn } from '@storybook/react';

import { AvatarActivityGroup } from '@admiral-ds/react-ui';
import type { AvatarActivityGroupProps } from '@admiral-ds/react-ui';

import { AvatarActivityGroupWidthTemplate } from './AvatarActivityGroupWidth.template';
import { AvatarActivityGroupPlaygroundTemplate } from './AvatarActivityGroupPlayground.template';

// Imports of text sources
import AvatarActivityGroupWidthRaw from './AvatarActivityGroupWidth.template?raw';
import AvatarActivityGroupPlaygroundRaw from './AvatarActivityGroupPlayground.template?raw';

export default {
  title: 'Admiral-2.1/AvatarActivityGroup',
  component: AvatarActivityGroup,
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
      options: ['xl', 'l', 'm', 's', 'xs'],
      control: { type: 'radio' },
    },
    items: {
      control: false,
    },
    appearance: {
      options: ['neutral1', 'neutral2', 'neutral3', 'neutral4'],
      control: { type: 'radio' },
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
    menuWidth: {
      control: false,
    },
    menuMaxHeight: {
      control: false,
    },
  },
} as Meta<typeof AvatarActivityGroup>;

//<editor-fold desc="Playground">
const AvatarActivityGroupPlaygroundStory: StoryFn<typeof AvatarActivityGroup> = (props: AvatarActivityGroupProps) => (
  <AvatarActivityGroupPlaygroundTemplate {...props} />
);

export const AvatarActivityGroupPlayground = {
  render: AvatarActivityGroupPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: AvatarActivityGroupPlaygroundRaw,
      },
    },
  },

  name: 'AvatarActivityGroup. Playground',
};
//</editor-fold>

//<editor-fold desc="Пример с ограниченной шириной">
const AvatarActivityGroupWidthStory: StoryFn<typeof AvatarActivityGroup> = (props: AvatarActivityGroupProps) => (
  <AvatarActivityGroupWidthTemplate {...props} />
);

export const AvatarActivityGroupWidth = {
  render: AvatarActivityGroupWidthStory,
  parameters: {
    docs: {
      source: {
        code: AvatarActivityGroupWidthRaw,
      },
    },
  },

  name: 'AvatarActivityGroup. Пример с ограниченной шириной',
};
//</editor-fold>
