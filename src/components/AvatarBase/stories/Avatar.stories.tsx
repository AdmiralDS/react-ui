import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { AvatarBase } from '#src/components/AvatarBase';
import { AvatarActivityTemplate } from './AvatarActivity.template';

// Imports of text sources
import AvatarActivityRaw from './AvatarActivity.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

export default {
  title: 'Admiral-2.1/AvatarBase',
  decorators: undefined,
  component: AvatarBase,
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
      options: ['neutral1', 'neutral2', 'neutral3', 'neutral4'],
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
} as Meta<typeof AvatarBase>;

//<editor-fold desc="Avatar Base">
const AvatarActivityStory: StoryFn<typeof AvatarBase> = (props) => <AvatarActivityTemplate {...props} />;

export const AvatarActivity = {
  render: AvatarActivityStory,

  parameters: {
    docs: {
      source: {
        code: AvatarActivityRaw,
      },
    },
  },

  name: 'Activity',
};

//</editor-fold>
