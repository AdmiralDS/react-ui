import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';

import { Chips } from '@admiral-ds/react-ui';

import { ChipsTagsTemplate } from './ChipsTags.template';
import { ChipsTagsCloseTemplate } from './ChipsTagsClose.template';
import { ChipsIconTemplate } from './ChipsIcon.template';
import { ChipsSelectTemplate } from './ChipsSelect.template';
import { ChipsMultiSelectTemplate } from './ChipsMultiSelect.template';
import { ChipsTooltipTemplate } from './ChipsTooltip.template';
import { ChipsBadgesTemplate } from './ChipsBadges.template';

// Imports of text sources
import ChipsTagsRaw from './ChipsTags.template?raw';
import ChipsTagsCloseRaw from './ChipsTagsClose.template?raw';
import ChipsIconRaw from './ChipsIcon.template?raw';
import ChipsSelectRaw from './ChipsSelect.template?raw';
import ChipsMultiSelectRaw from './ChipsMultiSelect.template?raw';
import ChipsTooltipRaw from './ChipsTooltip.template?raw';
import ChipsBadgesRaw from './ChipsBadges.template?raw';

const Desc = styled.div`
  font-family: 'VTB Group UI';
  font-size: 16px;
  line-height: 24px;
`;

const Description = () => (
  <Desc>
    Чипсы представляют собой перечень выбранных нами фильтров, опций или каких-либо элементов из списка. В библиотеке
    есть два типа чипсов — Filled и Outlined. В зависимости от ситуации используются большие — 28 px, либо маленькие —
    24 px чипсы. Примером может служить компонент Multi Select или выбор участников встречи, когда имена выбранных людей
    выводятся списком в виде чипсов.
  </Desc>
);

export default {
  title: 'Admiral-2.1/Chips',
  component: Chips,
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A17861',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18081',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=37%3A18222',
      },
    ],
    componentSubtitle: <Description />,
    layout: 'centered',
  },
  args: {
    dimension: 'm',
    appearance: 'outlined',
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['outlined', 'filled'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    selected: {
      control: { type: 'boolean' },
    },
    iconStart: {
      control: false,
    },
    iconEnd: {
      control: false,
    },
    iconBefore: {
      control: false,
    },
    iconAfter: {
      control: false,
    },
    badge: {
      control: { type: 'number' },
    },
  },
} as Meta<typeof Chips>;

//<editor-fold desc="Chips базовый пример">
const ChipsTagsStory: StoryFn<typeof Chips> = (props) => <ChipsTagsTemplate {...props} />;

export const ChipsTags = {
  render: ChipsTagsStory,

  parameters: {
    docs: {
      source: {
        code: ChipsTagsRaw,
      },
    },
  },

  name: 'Chips базовый пример',
};

//</editor-fold>

//<editor-fold desc="Chips с текстом и иконкой закрыть">
const ChipsTagsCloseStory: StoryFn<typeof Chips> = (props) => <ChipsTagsCloseTemplate {...props} />;

export const ChipsTagsClose = {
  render: ChipsTagsCloseStory,
  name: 'Chips с текстом и иконкой закрыть',

  parameters: {
    docs: {
      source: {
        code: ChipsTagsCloseRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Chips с иконкой">
const ChipsIconStory: StoryFn<typeof Chips> = (props) => <ChipsIconTemplate {...props} />;

export const ChipsIcon = {
  render: ChipsIconStory,
  name: 'Chips с иконкой',

  parameters: {
    docs: {
      source: {
        code: ChipsIconRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Chips с текстом и выбором">
const ChipsSelectStory: StoryFn<typeof Chips> = (props) => <ChipsSelectTemplate {...props} />;

export const ChipsSelect = {
  render: ChipsSelectStory,
  name: 'Chips с текстом и выбором',

  parameters: {
    docs: {
      source: {
        code: ChipsSelectRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Chips для множественного выбора">
const ChipsMultiSelectStory: StoryFn<typeof Chips> = (props) => <ChipsMultiSelectTemplate {...props} />;

export const ChipsMultiSelect = {
  render: ChipsMultiSelectStory,
  name: 'Chips для множественного выбора',

  parameters: {
    docs: {
      source: {
        code: ChipsMultiSelectRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Chips с Tooltip">
const ChipsTooltipStory: StoryFn<typeof Chips> = (props) => <ChipsTooltipTemplate {...props} />;

export const ChipsTooltip = {
  render: ChipsTooltipStory,
  name: 'Chips с Tooltip',

  parameters: {
    docs: {
      source: {
        code: ChipsTooltipRaw,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Chips с Badge">
const ChipsBadgesStory: StoryFn<typeof Chips> = (props) => <ChipsBadgesTemplate {...props} />;

export const ChipsBadges = {
  render: ChipsBadgesStory,
  name: 'Chips с Badge',

  parameters: {
    docs: {
      source: {
        code: ChipsBadgesRaw,
      },
    },
  },

  args: {
    badge: 5,
  },
};
