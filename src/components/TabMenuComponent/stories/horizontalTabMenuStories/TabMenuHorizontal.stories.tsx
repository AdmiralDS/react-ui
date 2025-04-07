import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { ALL_BORDER_RADIUS_VALUES, TabMenuHorizontal } from '@admiral-ds/react-ui';

import { TabMenuHorizontalTemplate } from './TabMenuHorizontalTemplate';
import { TabMenuHorizontalWithAddButtonTemplate } from './TabMenuHorizontalWithAddButtonTemplate';
import { TabMenuHorizontalSecondaryTemplate } from './TabMenuHorizontalSecondaryTemplate';

// Imports of text sources
import HorizontalTabMenuRaw from './TabMenuHorizontalTemplate?raw';
import HorizontalTabMenuWithAddButtonRaw from './TabMenuHorizontalWithAddButtonTemplate?raw';
import TabMenuHorizontalSecondaryRaw from './TabMenuHorizontalSecondaryTemplate?raw';

export default {
  title: 'Admiral-2.1/Tabs/TabMenuHorizontal',
  decorators: undefined,
  component: TabMenuHorizontal,
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
    appearance: {
      options: ['primary', 'secondary'],
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
    renderDropMenuItem: {
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
    isVisible: {
      control: false,
    },
    active: {
      control: false,
    },
    disableSelectedOptionHighlight: {
      control: false,
    },
    menuWidth: {
      control: false,
    },
    menuMaxHeight: {
      control: false,
    },
    alignSelf: {
      control: false,
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
} as Meta<typeof TabMenuHorizontal>;

//<editor-fold desc="HorizontalTabMenu.">
const HorizontalTabMenuStory: StoryFn<typeof TabMenuHorizontal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TabMenuHorizontalTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const HorizontalTabMenuExample = {
  render: HorizontalTabMenuStory,

  parameters: {
    docs: {
      source: {
        code: HorizontalTabMenuRaw,
      },
    },
  },

  name: 'Горизонтальный вариант TabMenu.',
};
//</editor-fold>

//<editor-fold desc="HorizontalTabMenuWithAddButton.">
const HorizontalTabMenuWithAddButtonStory: StoryFn<typeof TabMenuHorizontal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TabMenuHorizontalWithAddButtonTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const HorizontalTabMenuWithAddButtonExample = {
  render: HorizontalTabMenuWithAddButtonStory,

  parameters: {
    docs: {
      source: {
        code: HorizontalTabMenuWithAddButtonRaw,
      },
    },
  },

  name: 'Горизонтальный вариант TabMenu с возможностью добавления вкладок.',
};

//</editor-fold>

//<editor-fold desc="HorizontalTabMenuSecondary.">
const TabMenuHorizontalSecondaryStory: StoryFn<typeof TabMenuHorizontal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TabMenuHorizontalSecondaryTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const HorizontalTabMenuSecondaryExample = {
  render: TabMenuHorizontalSecondaryStory,

  parameters: {
    docs: {
      source: {
        code: TabMenuHorizontalSecondaryRaw,
      },
    },
  },

  name: 'Горизонтальный вариант TabMenu со стилем secondary.',
};
//</editor-fold>
