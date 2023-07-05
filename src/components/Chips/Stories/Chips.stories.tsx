import * as React from 'react';
import styled from 'styled-components';
import type { Meta, StoryFn } from '@storybook/react';

import { Chips } from '@admiral-ds/react-ui';

import {
  ChipsIconTemplate,
  ChipsTagsCloseTemplate,
  ChipsTagsTemplate,
  ChipsSelectTemplate,
  ChipsMultiSelectTemplate,
  ChipsTooltipTemplate,
  ChipsBadgesTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import ChipsTagsRaw from './Templates/ChipsTags?raw';
import ChipsTagsCloseRaw from './Templates/ChipsTagsClose?raw';
import ChipsIconRaw from './Templates/ChipsIcon?raw';
import ChipsSelectRaw from './Templates/ChipsSelect?raw';
import ChipsMultiSelectRaw from './Templates/ChipsMultiSelect?raw';
import ChipsTooltipRaw from './Templates/ChipsTooltip?raw';
import ChipsBadgesRaw from './Templates/ChipsBadges?raw';

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
const ChipsTagsStory: StoryFn<typeof Chips> = (props) => <ChipsTagsTemplate {...cleanUpProps(props)} />;

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
const ChipsTagsCloseStory: StoryFn<typeof Chips> = (props) => <ChipsTagsCloseTemplate {...cleanUpProps(props)} />;

export const ChipsTagsClose = {
  render: ChipsTagsCloseStory,
  name: 'Chips с текстом и иконкой закрыть',

  parameters: {
    docs: {
      source: {
        code: ChipsTagsCloseRaw,
      },
      description: {
        story: `Взаимодействовать можно только с чипсами имеющими иконку закрытия “Close”. При 
        нажатии на иконку закрытия элемент удаляется из списка выбранных.`,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Chips с иконкой">
const ChipsIconStory: StoryFn<typeof Chips> = (props) => <ChipsIconTemplate {...cleanUpProps(props)} />;

export const ChipsIcon = {
  render: ChipsIconStory,
  name: 'Chips с иконкой',

  parameters: {
    docs: {
      source: {
        code: ChipsIconRaw,
      },
      description: {
        story: `В компоненте можно включать иконки справа и/или слева от текста.`,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Chips с текстом и выбором">
const ChipsSelectStory: StoryFn<typeof Chips> = (props) => <ChipsSelectTemplate {...cleanUpProps(props)} />;

export const ChipsSelect = {
  render: ChipsSelectStory,
  name: 'Chips с текстом и выбором',

  parameters: {
    docs: {
      source: {
        code: ChipsSelectRaw,
      },
      description: {
        story: `Набор из двух и более чипсов, которые могут быть в активном (выбранном) состоянии 
        или пассивном (выключенном) состоянии. Chips в режиме радио кнопок, когда можно выбрать 
        только одно значение из списка. `,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Chips для множественного выбора">
const ChipsMultiSelectStory: StoryFn<typeof Chips> = (props) => <ChipsMultiSelectTemplate {...cleanUpProps(props)} />;

export const ChipsMultiSelect = {
  render: ChipsMultiSelectStory,
  name: 'Chips для множественного выбора',

  parameters: {
    docs: {
      source: {
        code: ChipsMultiSelectRaw,
      },
      description: {
        story: `Chips в режиме чекбоксов, когда можно выбрать любое количество значений`,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Chips с Tooltip">
const ChipsTooltipStory: StoryFn<typeof Chips> = (props) => <ChipsTooltipTemplate {...cleanUpProps(props)} />;

export const ChipsTooltip = {
  render: ChipsTooltipStory,
  name: 'Chips с Tooltip',

  parameters: {
    docs: {
      source: {
        code: ChipsTooltipRaw,
      },
      description: {
        story: `По дефолту в компоненте (в коде) задано граничение ширины в 190 px, после которой 
        происходит уход в троеточие. Но можно изменять этот параметр стилизуя компонент через styled 
        components. В случае сокращения, над компонентом при ховере появляется Тултип с расшифровкой.`,
      },
    },
  },
};

//</editor-fold>

//<editor-fold desc="Chips с Badge">
const ChipsBadgesStory: StoryFn<typeof Chips> = (props) => <ChipsBadgesTemplate {...cleanUpProps(props)} />;

export const ChipsBadges = {
  render: ChipsBadgesStory,
  name: 'Chips с Badge',

  parameters: {
    docs: {
      source: {
        code: ChipsBadgesRaw,
      },
      description: {
        story: `В компоненте можно включать бейджи.`,
      },
    },
  },

  args: {
    badge: 5,
  },
};
