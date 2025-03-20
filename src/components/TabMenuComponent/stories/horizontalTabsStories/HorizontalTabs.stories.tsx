import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import { ALL_BORDER_RADIUS_VALUES, HorizontalTabs } from '@admiral-ds/react-ui';

import { HorizontalTabsTemplate } from './HorizontalTabsTemplate';

// Imports of text sources
import HorizontalTabsRaw from './HorizontalTabsTemplate?raw';

export default {
  title: 'Admiral-2.1/Tabs/HorizontalTabs',
  decorators: undefined,
  component: HorizontalTabs,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {
    dimension: {
      options: ['l', 'm'],
      control: { type: 'radio' },
    },
    showUnderline: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    defaultSelectedTabId: {
      control: false,
    },
    renderTab: {
      control: false,
    },
    tabIsDisabled: {
      control: false,
    },
    tabsId: {
      control: false,
    },
    onSelectTab: {
      control: false,
    },
    selectedTabId: {
      control: false,
    },
  },
} as Meta<typeof HorizontalTabs>;

//<editor-fold desc="HorizontalTabs.">
const HorizontalTabsStory: StoryFn<typeof HorizontalTabs> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <HorizontalTabsTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const HorizontalTabsExample = {
  render: HorizontalTabsStory,

  parameters: {
    docs: {
      source: {
        code: HorizontalTabsRaw,
      },
    },
  },

  name: 'HorizontalTabs.',
};
//</editor-fold>
