import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';
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
  decorators: [withDesign],
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
  },
} as ComponentMeta<typeof TabMenu>;

//<editor-fold desc="TabMenu. Базовый пример.">
const BaseStory: ComponentStory<typeof TabMenu> = ({ tabs, activeTab, onChange, ...props }) => (
  <TabMenuBaseTemplate tabs={tabs} activeTab={activeTab} onChange={onChange} {...cleanUpProps(props)} />
);
export const BaseExample = BaseStory.bind({});
BaseExample.parameters = {
  docs: {
    source: {
      code: BaseRaw,
    },
  },
};
BaseExample.storyName = 'TabMenu. Базовый пример.';
//</editor-fold>

//<editor-fold desc="TabMenu. Пример с нижней серой полосой.">
const UnderlineStory: ComponentStory<typeof TabMenu> = ({ tabs, activeTab, onChange, ...props }) => (
  <TabMenuUnderlineTemplate tabs={tabs} activeTab={activeTab} onChange={onChange} {...cleanUpProps(props)} />
);
export const UnderlineExample = UnderlineStory.bind({});
UnderlineExample.parameters = {
  docs: {
    source: {
      code: UnderlineRaw,
    },
  },
};
UnderlineExample.storyName = 'TabMenu. Пример с нижней серой полосой.';
//</editor-fold>

//<editor-fold desc="TabMenu. Пример с задизейбленными табами.">
const DisabledStory: ComponentStory<typeof TabMenu> = ({ tabs, activeTab, onChange, ...props }) => (
  <TabMenuDisabledTemplate tabs={tabs} activeTab={activeTab} onChange={onChange} {...cleanUpProps(props)} />
);
export const DisabledExample = DisabledStory.bind({});
DisabledExample.parameters = {
  docs: {
    source: {
      code: DisabledRaw,
    },
  },
};
DisabledExample.storyName = 'TabMenu. Пример с задизейбленными табами.';
//</editor-fold>

//<editor-fold desc="TabMenu. Пример с OverflowMenu.">
const OverflowMenuStory: ComponentStory<typeof TabMenu> = ({ tabs, activeTab, onChange, ...props }) => (
  <TabMenuOverflowTemplate tabs={tabs} activeTab={activeTab} onChange={onChange} {...cleanUpProps(props)} />
);
export const OverflowMenuExample = OverflowMenuStory.bind({});
OverflowMenuExample.parameters = {
  docs: {
    source: {
      code: OverflowRaw,
    },
  },
};
OverflowMenuExample.storyName = 'TabMenu. Пример с OverflowMenu.';
//</editor-fold>

//<editor-fold desc="TabMenu. Динамическое добавление вкладок.">
const DynamicAddStory: ComponentStory<typeof TabMenu> = ({ tabs, activeTab, onChange, ...props }) => (
  <TabMenuDynamicAddTemplate tabs={tabs} activeTab={activeTab} onChange={onChange} {...cleanUpProps(props)} />
);
export const DynamicAddExample = DynamicAddStory.bind({});
DynamicAddExample.parameters = {
  docs: {
    source: {
      code: DynamicAddRaw,
    },
  },
};
DynamicAddExample.storyName = 'TabMenu. Динамическое добавление вкладок.';
//</editor-fold>
