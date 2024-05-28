import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { TabMenu, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { TabMenuComponentBaseTemplate } from './TabMenuComponentBase.template';

// Imports of text sources
import TabMenuComponentBaseRaw from './TabMenuComponentBase.template?raw';

export default {
  title: 'Admiral-2.1/TabMenuComponent',
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
const TabMenuComponentBaseStory: StoryFn<typeof TabMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TabMenuComponentBaseTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TabMenuComponentBaseExample = {
  render: TabMenuComponentBaseStory,

  parameters: {
    docs: {
      source: {
        code: TabMenuComponentBaseRaw,
      },
    },
  },

  name: 'TabMenuComponent.',
};

//</editor-fold>
