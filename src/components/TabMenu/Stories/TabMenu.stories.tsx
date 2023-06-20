import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { TabMenu, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  TabMenuBaseTemplate,
  TabMenuUnderlineTemplate,
  TabMenuDisabledTemplate,
  TabMenuOverflowTemplate,
  TabMenuDynamicAddTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import BaseRaw from '!!raw-loader!./Templates/TabMenuBase';
import UnderlineRaw from '!!raw-loader!./Templates/TabMenuUnderline';
import DisabledRaw from '!!raw-loader!./Templates/TabMenuDisabled';
import OverflowRaw from '!!raw-loader!./Templates/TabMenuOverflow';
import DynamicAddRaw from '!!raw-loader!./Templates/TabMenuDynamicAdd';

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
const BaseStory: StoryFn<typeof TabMenu> = ({ tabs, activeTab, onChange, ...props }) => (
  <TabMenuBaseTemplate tabs={tabs} activeTab={activeTab} onChange={onChange} {...cleanUpProps(props)} />
);

export const BaseExample = {
  render: BaseStory,

  parameters: {
    docs: {
      source: {
        code: BaseRaw,
      },
    },
  },

  name: 'TabMenu. Базовый пример.',
};

//</editor-fold>

//<editor-fold desc="TabMenu. Пример с нижней серой полосой.">
const UnderlineStory: StoryFn<typeof TabMenu> = ({ tabs, activeTab, onChange, ...props }) => (
  <TabMenuUnderlineTemplate tabs={tabs} activeTab={activeTab} onChange={onChange} {...cleanUpProps(props)} />
);

export const UnderlineExample = {
  render: UnderlineStory,

  parameters: {
    docs: {
      source: {
        code: UnderlineRaw,
      },
    },
  },

  name: 'TabMenu. Пример с нижней серой полосой.',
};

//</editor-fold>

//<editor-fold desc="TabMenu. Пример с задизейбленными табами.">
const DisabledStory: StoryFn<typeof TabMenu> = ({ tabs, activeTab, onChange, ...props }) => (
  <TabMenuDisabledTemplate tabs={tabs} activeTab={activeTab} onChange={onChange} {...cleanUpProps(props)} />
);

export const DisabledExample = {
  render: DisabledStory,

  parameters: {
    docs: {
      source: {
        code: DisabledRaw,
      },
    },
  },

  name: 'TabMenu. Пример с задизейбленными табами.',
};

//</editor-fold>

//<editor-fold desc="TabMenu. Пример с OverflowMenu.">
const OverflowMenuStory: StoryFn<typeof TabMenu> = ({ tabs, activeTab, onChange, ...props }) => (
  <TabMenuOverflowTemplate tabs={tabs} activeTab={activeTab} onChange={onChange} {...cleanUpProps(props)} />
);

export const OverflowMenuExample = {
  render: OverflowMenuStory,

  parameters: {
    docs: {
      source: {
        code: OverflowRaw,
      },
    },
  },

  name: 'TabMenu. Пример с OverflowMenu.',
};

//</editor-fold>

//<editor-fold desc="TabMenu. Динамическое добавление вкладок.">
const DynamicAddStory: StoryFn<typeof TabMenu> = ({ tabs, activeTab, onChange, ...props }) => (
  <TabMenuDynamicAddTemplate tabs={tabs} activeTab={activeTab} onChange={onChange} {...cleanUpProps(props)} />
);

export const DynamicAddExample = {
  render: DynamicAddStory,

  parameters: {
    docs: {
      source: {
        code: DynamicAddRaw,
      },
    },
  },

  name: 'TabMenu. Динамическое добавление вкладок.',
};
