import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { TabMenu, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { TabMenuBaseTemplate } from './TabMenuBase.template';
import { TabMenuUnderlineTemplate } from './TabMenuUnderline.template';
import { TabMenuDisabledTemplate } from './TabMenuDisabled.template';
import { TabMenuOverflowTemplate } from './TabMenuOverflow.template';
import { TabMenuDynamicAddTemplate } from './TabMenuDynamicAdd.template';

// Imports of text sources
import TabMenuBaseRaw from './TabMenuBase.template?raw';
import TabMenuUnderlineRaw from './TabMenuUnderline.template?raw';
import TabMenuDisabledRaw from './TabMenuDisabled.template?raw';
import TabMenuOverflowRaw from './TabMenuOverflow.template?raw';
import TabMenuDynamicAddRaw from './TabMenuDynamicAdd.template?raw';

export default {
  title: 'Admiral-2.1/TabMenu',
  decorators: undefined,
  component: TabMenu,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A31118',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A31257',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['l', 'm'],
      control: { type: 'radio' },
    },
    underline: {
      control: { type: 'boolean' },
    },
    mobile: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    dropContainerCssMixin: {
      control: false,
    },
    dropContainerClassName: {
      control: false,
    },
    dropContainerStyle: {
      control: false,
    },
    tabs: {
      control: false,
    },
  },
} as Meta<typeof TabMenu>;

//<editor-fold desc="TabMenu. Базовый пример.">
const BaseStory: StoryFn<typeof TabMenu> = (props) => <TabMenuBaseTemplate {...props} />;

export const BaseExample = {
  render: BaseStory,

  parameters: {
    docs: {
      source: {
        code: TabMenuBaseRaw,
      },
    },
  },

  name: 'TabMenu. Базовый пример.',
};

//</editor-fold>

//<editor-fold desc="TabMenu. Пример с нижней серой полосой.">
const UnderlineStory: StoryFn<typeof TabMenu> = (props) => <TabMenuUnderlineTemplate {...props} />;

export const UnderlineExample = {
  render: UnderlineStory,

  parameters: {
    docs: {
      source: {
        code: TabMenuUnderlineRaw,
      },
    },
  },

  name: 'TabMenu. Пример с нижней серой полосой.',
};

//</editor-fold>

//<editor-fold desc="TabMenu. Пример с задизейбленными табами.">
const DisabledStory: StoryFn<typeof TabMenu> = (props) => <TabMenuDisabledTemplate {...props} />;

export const DisabledExample = {
  render: DisabledStory,

  parameters: {
    docs: {
      source: {
        code: TabMenuDisabledRaw,
      },
    },
  },

  name: 'TabMenu. Пример с задизейбленными табами.',
};

//</editor-fold>

//<editor-fold desc="TabMenu. Пример с OverflowMenu.">
const OverflowMenuStory: StoryFn<typeof TabMenu> = (props) => <TabMenuOverflowTemplate {...props} />;

export const OverflowMenuExample = {
  render: OverflowMenuStory,

  parameters: {
    docs: {
      source: {
        code: TabMenuOverflowRaw,
      },
    },
  },

  name: 'TabMenu. Пример с OverflowMenu.',
};

//</editor-fold>

//<editor-fold desc="TabMenu. Динамическое добавление вкладок.">
const DynamicAddStory: StoryFn<typeof TabMenu> = (props) => <TabMenuDynamicAddTemplate {...props} />;

export const DynamicAddExample = {
  render: DynamicAddStory,

  parameters: {
    docs: {
      source: {
        code: TabMenuDynamicAddRaw,
      },
    },
  },

  name: 'TabMenu. Динамическое добавление вкладок.',
};
