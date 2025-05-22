import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { Tag, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { TagPlaygroundTemplate } from './TagPlayground.template';
import { TagStatusTemplate } from './TagStatus.template';
import { TagStatusBackgroundTemplate } from './TagStatusBackground.template';
import { TagCustomColorsTemplate } from './TagCustomColors.template';
import { TagStateTemplate } from './TagState.template';
import { TagTooltipTemplate } from './TagTooltip.template';
import { TagIconTemplate } from './TagIcon.template';

// Imports of text sources
import TagPlaygroundRaw from './TagPlayground.template?raw';
import TagStatusRaw from './TagStatus.template?raw';
import TagStatusBackgroundRaw from './TagStatusBackground.template?raw';
import TagCustomColorsRaw from './TagCustomColors.template?raw';
import TagStateRaw from './TagState.template?raw';
import TagTooltipRaw from './TagTooltip.template?raw';
import TagIconRaw from './TagIcon.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Тег — это метка, размечающая и каталогизирующая информацию для облегчения процесса поиска. При нажатии на тэг
    загружаются все элементы имеющие эту метку (опционально).
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
    isBorderHidden: {
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
const PlaygroundStory: StoryFn<typeof Tag> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TagPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const Playground = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: TagPlaygroundRaw,
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
        code: TagStatusRaw,
      },
    },
  },

  name: 'Tag. Статус через цветную статусную метку.',
};

//</editor-fold>

//<editor-fold desc="Tag. Статус через цвет обводки и фона.">
const StatusBackgroundStory: StoryFn<typeof Tag> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TagStatusBackgroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const StatusBackgroundExample = {
  render: StatusBackgroundStory,

  parameters: {
    docs: {
      source: {
        code: TagStatusBackgroundRaw,
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
        code: TagCustomColorsRaw,
      },
    },
  },

  name: 'Tag. Кастомные цвета.',
};

//</editor-fold>

//<editor-fold desc="Tag. Активный и пассивный.">
const StateStory: StoryFn<typeof Tag> = () => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TagStateTemplate CSSCustomProps={CSSCustomProps} />;
};

export const StateExample = {
  render: StateStory,

  parameters: {
    docs: {
      source: {
        code: TagStateRaw,
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
        code: TagTooltipRaw,
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
        code: TagIconRaw,
      },
    },
  },

  name: 'Tag. С иконкой.',
};
