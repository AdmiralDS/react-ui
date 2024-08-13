import type { Meta, StoryFn } from '@storybook/react';

import { AvatarGroup } from '@admiral-ds/react-ui';
import type { AvatarGroupProps } from '@admiral-ds/react-ui';

import { AvatarGroupWidthTemplate } from './AvatarGroupWidth.template';
import { AvatarGroupPlaygroundTemplate } from './AvatarGroupPlayground.template';

// Imports of text sources
import AvatarGroupWidthRaw from './AvatarGroupWidth.template?raw';
import AvatarGroupPlaygroundRaw from './AvatarGroupPlayground.template?raw';

export default {
  title: 'Admiral-2.1/AvatarGroup',
  component: AvatarGroup,
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
} as Meta<typeof AvatarGroup>;

//<editor-fold desc="Playground">
const AvatarGroupPlaygroundStory: StoryFn<typeof AvatarGroup> = (props: AvatarGroupProps) => (
  <AvatarGroupPlaygroundTemplate {...props} />
);

export const AvatarGroupPlayground = {
  render: AvatarGroupPlaygroundStory,
  parameters: {
    docs: {
      source: {
        code: AvatarGroupPlaygroundRaw,
      },
    },
  },

  name: 'AvatarGroup. Playground',
};
//</editor-fold>

//<editor-fold desc="Пример с ограниченной шириной">
const AvatarGroupWidthStory: StoryFn<typeof AvatarGroup> = (props) => <AvatarGroupWidthTemplate {...props} />;

export const AvatarGroupWidth = {
  render: AvatarGroupWidthStory,
  parameters: {
    docs: {
      source: {
        code: AvatarGroupWidthRaw,
      },
    },
  },

  name: 'AvatarGroup. Пример с ограниченной шириной',
};
//</editor-fold>
