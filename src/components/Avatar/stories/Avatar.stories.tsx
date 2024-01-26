import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { Avatar } from '@admiral-ds/react-ui';

import { AvatarSingleTemplate } from './AvatarSingle.template';
import { AvatarPlaygroundTemplate } from './AvatarPlayground.template';

// Imports of text sources
import AvatarSingleRaw from './AvatarSingle.template?raw';
import AvatarPlaygroundRaw from './AvatarPlayground.template?raw';

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

  name: 'Playground',
};

//</editor-fold>

//<editor-fold desc="Single Avatar">
const SingleAvatarStory: StoryFn<typeof Avatar> = () => <AvatarSingleTemplate />;

export const SingleAvatar = {
  render: SingleAvatarStory,

  parameters: {
    docs: {
      source: {
        code: AvatarSingleRaw,
      },
      description: {
        story: `Компонент используется для отображения фотографии пользователя, его инициалов или иконки. Присутствует 
        пять размеров компонента.\n\nДопускается использование одной или двух букв для обозначения пользователя (в размере XS 
        только одна буква). Компоненту и символам в нем можно присваивать любые цвета из палитры.\n\nКомпонент может быть 
        кликабельным, например, вести в личный кабинет или показывать выпадающее меню с опциями пользователя. При ховере 
        над аватаром показывается Tooltip с именем пользователя (опционально можно отключить).\n\nМожет отображать статус 
        пользователя с помощью статусного Бейджа.`,
      },
    },
  },

  name: 'Avatar',
};
//</editor-fold>
