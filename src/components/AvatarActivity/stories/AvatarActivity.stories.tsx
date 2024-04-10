import type { Meta, StoryFn } from '@storybook/react';
import styled from 'styled-components';

import { AvatarActivity } from '@admiral-ds/react-ui';

import { AvatarActivitySingleTemplate } from './AvatarActivitySingle.template';
import { AvatarActivityPlaygroundTemplate } from './AvatarActivityPlayground.template';

// Imports of text sources
import AvatarActivitySingleRaw from './AvatarActivitySingle.template?raw';
import AvatarActivityPlaygroundRaw from './AvatarActivityPlayground.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

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
    componentSubtitle: (
      <Desc>
        Вариант аватара с Activity Ring. В этом случае появляется пустое пространство вокруг компонента под круг
        фокусировки, что бы он (круг) при включении входил в общий размер компонента и не обрезался во фреймах. Таким
        образом, в AvatarActivity добавляется по 4 px с каждой стороны компонента. Используйте только один тип Аватаров
        одновременно.
      </Desc>
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
      description: {
        story: `Вариант аватара с Activity Ring.  В этом случае появляется пустое пространство вокруг компонента 
        под круг фокусировки, что бы он (круг) при включении входил в общий размер компонента и не обрезался во 
        фреймах.\n\nТаким образом, в AvatarActivity добавляется по 4 px с каждой стороны компонента.\n\nИспользуйте 
        только один тип Аватаров одновременно.`,
      },
    },
  },

  name: 'Playground',
};
//</editor-fold>

//<editor-fold desc="Single AvatarActivity">
const AvatarActivitySingleStory: StoryFn<typeof AvatarActivity> = () => <AvatarActivitySingleTemplate />;

export const SingleAvatar = {
  render: AvatarActivitySingleStory,

  parameters: {
    docs: {
      source: {
        code: AvatarActivitySingleRaw,
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

  name: 'AvatarActivity',
};
//</editor-fold>
