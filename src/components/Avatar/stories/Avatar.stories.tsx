import type { Meta, StoryFn } from '@storybook/react';

import type { AvatarProps } from '@admiral-ds/react-ui';
import { Avatar } from '@admiral-ds/react-ui';

import { AvatarPlaygroundTemplate } from './AvatarPlayground.template';
import { AvatarSingleTemplate } from './AvatarSingle.template';
import { AvatarXXSTemplate } from './AvatarXXS.template';

// Imports of text sources
import AvatarPlaygroundRaw from './AvatarPlayground.template?raw';
import AvatarSingleRaw from './AvatarSingle.template?raw';
import AvatarXXSRaw from './AvatarXXS.template?raw';

export default {
  title: 'Admiral-2.1/Avatar',
  decorators: undefined,
  component: Avatar,
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
  },
} as Meta<typeof Avatar>;

//<editor-fold desc="Avatar Playground">
const AvatarPlaygroundStory: StoryFn<typeof Avatar> = ({ userName, ...props }) => (
  <AvatarPlaygroundTemplate userName={userName} {...props} />
);

export const AvatarPlayground = {
  render: AvatarPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: AvatarPlaygroundRaw,
      },
    },
  },

  name: 'Avatar. Playground',
};

//</editor-fold>

//<editor-fold desc="Single Avatar">
const SingleAvatarStory: StoryFn<typeof Avatar> = ({ showTooltip, userName }: AvatarProps) => (
  <AvatarSingleTemplate userName={userName} showTooltip={showTooltip} />
);

export const SingleAvatar = {
  render: SingleAvatarStory,

  parameters: {
    docs: {
      source: {
        code: AvatarSingleRaw,
      },
    },
  },
  argTypes: {
    href: {
      control: false,
    },
    appearance: {
      control: false,
    },
    svgMaskId: {
      control: false,
    },
    userInitials: {
      control: false,
    },
    userName: {
      control: false,
    },
    dimension: {
      control: false,
    },
    status: {
      control: false,
    },
  },

  name: 'Avatar. Типы и размеры',
};
//</editor-fold>

//<editor-fold desc="Avatar XXS">
const AvatarXXSStory: StoryFn<typeof Avatar> = ({ userName, ...props }) => (
  <AvatarXXSTemplate userName={userName} {...props} />
);

export const AvatarXXS = {
  render: AvatarXXSStory,

  parameters: {
    docs: {
      source: {
        code: AvatarXXSRaw,
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
  },

  name: 'Avatar XXS',
};
//</editor-fold>
