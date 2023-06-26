import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Avatar } from '@admiral-ds/react-ui';

import { AvatarPlaygroundTemplate, SingleAvatarTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import SingleAvatarRaw from './Templates/SingleAvatar?raw';
import AvatarPlaygroundRaw from './Templates/AvatarPlayground?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

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
    componentSubtitle: (
      <Desc>Компонент используется для отображения фотографии пользователя, его инициалов или иконки.</Desc>
    ),
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
      options: ['light', 'white', 'grey', 'dark'],
      control: { type: 'radio' },
    },
    svgMaskId: {
      control: { type: 'text' },
    },
    showTooltip: {
      control: false,
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
} as Meta<typeof Avatar>;

//<editor-fold desc="Avatar Playground">
const AvatarPlaygroundStory: StoryFn<typeof Avatar> = ({ userName, ...props }) => (
  <AvatarPlaygroundTemplate userName={userName} {...cleanUpProps(props)} />
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

  name: 'Playground',
};

//</editor-fold>

//<editor-fold desc="Single Avatar">
const SingleAvatarStory: StoryFn<typeof Avatar> = () => <SingleAvatarTemplate />;

export const SingleAvatar = {
  render: SingleAvatarStory,

  parameters: {
    docs: {
      source: {
        code: SingleAvatarRaw,
      },
    },
  },

  name: 'Avatar',
};
