import type { Meta, StoryFn } from '@storybook/react';

import type { AvatarActivityProps } from '@admiral-ds/react-ui';
import { AvatarActivity } from '@admiral-ds/react-ui';

import { AvatarActivitySingleTemplate } from './AvatarActivitySingle.template';
import { AvatarActivityPlaygroundTemplate } from './AvatarActivityPlayground.template';

// Imports of text sources
import AvatarActivitySingleRaw from './AvatarActivitySingle.template?raw';
import AvatarActivityPlaygroundRaw from './AvatarActivityPlayground.template?raw';

export default {
  title: 'Admiral-2.1/AvatarActivity',
  decorators: undefined,
  component: AvatarActivity,
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
    group: {
      control: false,
    },
    icon: {
      control: false,
    },
    userInitials: {
      control: { type: 'text' },
    },
    href: {
      control: { type: 'text' },
    },
    status: {
      options: ['success', 'danger', 'warn', 'inactive'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['neutral1', 'neutral2', 'neutral3', 'neutral4'],
      control: { type: 'radio' },
    },
    svgMaskId: {
      control: { type: 'text' },
    },
    showTooltip: {
      control: { type: 'boolean' },
    },
    isMenuAvatar: {
      control: false,
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
  },
} as Meta<typeof AvatarActivity>;

//<editor-fold desc="AvatarActivity Playground">
const AvatarActivityPlaygroundStory: StoryFn<typeof AvatarActivity> = (props) => (
  <AvatarActivityPlaygroundTemplate {...props} />
);

export const AvatarPlayground = {
  render: AvatarActivityPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: AvatarActivityPlaygroundRaw,
      },
    },
  },

  name: 'AvatarActivity. Playground',
};
//</editor-fold>

//<editor-fold desc="Single AvatarActivity">
const AvatarActivitySingleStory: StoryFn<typeof AvatarActivity> = ({
  userName,
  appearance,
  showTooltip,
  showActivityRing,
}: AvatarActivityProps) => (
  <AvatarActivitySingleTemplate
    userName={userName}
    appearance={appearance}
    showTooltip={showTooltip}
    showActivityRing={showActivityRing}
  />
);

export const SingleAvatar = {
  render: AvatarActivitySingleStory,

  parameters: {
    docs: {
      source: {
        code: AvatarActivitySingleRaw,
      },
    },
  },
  argTypes: {
    dimension: {
      control: false,
    },
    status: {
      control: false,
    },
    href: {
      control: false,
    },
    userInitials: {
      control: false,
    },
    userName: {
      control: false,
    },
    svgMaskId: {
      control: false,
    },
  },

  name: 'AvatarActivity. Типы и размеры',
};
//</editor-fold>
