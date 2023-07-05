import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { Tag, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  TagPlaygroundTemplate,
  TagStatusTemplate,
  TagStatusBackgroundTemplate,
  TagCustomColorsTemplate,
  TagStateTemplate,
  TagTooltipTemplate,
  TagIconTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import PlaygroundRaw from './Templates/TagPlayground?raw';
import StatusRaw from './Templates/TagStatus?raw';
import StatusBackgroundRaw from './Templates/TagStatusBackground?raw';
import CustomColorsRaw from './Templates/TagCustomColors?raw';
import StateRaw from './Templates/TagState?raw';
import TooltipRaw from './Templates/TagTooltip?raw';
import IconRaw from './Templates/TagIcon?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Тег — это метка, размечающая и каталогизирующая информацию для облегчения процесса поиска. При нажатии на тэг
    загружаются все элементы имеющие эту метку.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Tag',
  decorators: undefined,
  component: Tag,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    componentSubtitle: <Description />,
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18375',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18530',
      },
    ],
  },
  argTypes: {
    kind: {
      options: ['neutral', 'primary', 'success', 'danger', 'warning'],
      control: { type: 'radio' },
    },
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    width: {
      control: { type: 'text' },
    },
    statusViaBackground: {
      control: { type: 'boolean' },
    },
    statusIcon: {
      control: false,
    },
    icon: {
      control: false,
    },
    as: {
      options: ['div', 'span', 'button'],
      control: { type: 'radio' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Tag>;

//<editor-fold desc="Playground">
const PlaygroundStory: StoryFn<typeof Tag> = (props) => <TagPlaygroundTemplate {...cleanUpProps(props)} />;

export const Playground = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: PlaygroundRaw,
      },
    },
  },

  name: 'Tag. Playground.',
};

//</editor-fold>

//<editor-fold desc="Tag. Статус через цветную статусную метку.">
const StatusStory: StoryFn<typeof Tag> = () => <TagStatusTemplate />;

export const StatusExample = {
  render: StatusStory,

  parameters: {
    docs: {
      source: {
        code: StatusRaw,
      },
      description: {
        story: `Тэг может иметь цветную статусную метку.`,
      },
    },
  },

  name: 'Tag. Статус через цветную статусную метку.',
};

//</editor-fold>

//<editor-fold desc="Tag. Статус через цвет обводки и фона.">
const StatusBackgroundStory: StoryFn<typeof Tag> = () => <TagStatusBackgroundTemplate />;

export const StatusBackgroundExample = {
  render: StatusBackgroundStory,

  parameters: {
    docs: {
      source: {
        code: StatusBackgroundRaw,
      },
      description: {
        story: `Тэг может отображать статус через цвет обводки и фона, когда нужен выраженный цветовой акцент (опция).
        В этом случае цвет статусов берется из палитры Special, допускается окрашивание тэга в любой парный цвет
        (фон, обводка) из этой палитры. \n\nЧтобы отобразить статус через цвет обводки и фона необходимо передать
        в компонент параметр statusViaBackground, установленный в true.`,
      },
    },
  },

  name: 'Tag. Статус через цвет обводки и фона.',
};

//</editor-fold>

//<editor-fold desc="Tag. Кастомные цвета.">
const CustomColorsStory: StoryFn<typeof Tag> = () => <TagCustomColorsTemplate />;

export const CustomColorsExample = {
  render: CustomColorsStory,

  parameters: {
    docs: {
      source: {
        code: CustomColorsRaw,
      },
      description: {
        story: `Тэг может иметь цветную статусную метку. Помимо предложенных вариантов, метка может быть
        окрашена в любой цвет на усмотрение пользователя с помощью свойства background. \n\n Либо тэг может отображать
        статус через цвет обводки и фона, когда нужен выраженный цветовой акцент (опция).
        В этом случае, помимо предложенных вариантов, цвет фона и обводки можно задать через свойства background и border.
        Следует учесть, что цвета надо брать из палитры Special, допускается окрашивание тэга в любой парный цвет (фон, обводка) из этой палитры.`,
      },
    },
  },

  name: 'Tag. Кастомные цвета.',
};

//</editor-fold>

//<editor-fold desc="Tag. Активный и пассивный.">
const StateStory: StoryFn<typeof Tag> = () => <TagStateTemplate />;

export const StateExample = {
  render: StateStory,

  parameters: {
    docs: {
      source: {
        code: StateRaw,
      },
      description: {
        story: `Тэги могут быть как активными и служить, например, каталагизаторами, так и пассивными, просто отображая
              принадлежность элемента к некоторой группе элементов имеющих общий признак.`,
      },
    },
  },

  name: 'Tag. Активный и пассивный.',
};

//</editor-fold>

//<editor-fold desc="Tag. Тултип.">
const TooltipStory: StoryFn<typeof Tag> = () => <TagTooltipTemplate />;

export const TooltipExample = {
  render: TooltipStory,

  parameters: {
    docs: {
      source: {
        code: TooltipRaw,
      },
      description: {
        story: `В случае ограниченного пространства используется тултип.`,
      },
    },
  },

  name: 'Tag. Тултип.',
};

//</editor-fold>

//<editor-fold desc="Tag. С иконкой.">
const IconStory: StoryFn<typeof Tag> = () => <TagIconTemplate />;

export const IconExample = {
  render: IconStory,

  parameters: {
    docs: {
      source: {
        code: IconRaw,
      },
      description: {
        story: `Тэги могут быть с иконками, но только в том случае, если статус отображается
        через цвет обводки и фона (параметр statusViaBackground установлен в true)`,
      },
    },
  },

  name: 'Tag. С иконкой.',
};
