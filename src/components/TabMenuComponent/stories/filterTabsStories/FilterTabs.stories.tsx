import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';
import { FilterTabs } from '../../tabMenus/FilterTabs';

import { FilterTabsTemplate } from './FilterTabsTemplate';
import { FilterTabsMobileTemplate } from './FilterTabsMobileTemplate';

// Imports of text sources
import FilterTabsTemplateRaw from './FilterTabsTemplate?raw';
import FilterTabsMobileTemplateRaw from './FilterTabsMobileTemplate?raw';

export default {
  title: 'Admiral-2.1/Tabs/FilterTabs',
  decorators: undefined,
  component: FilterTabs,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {
    dimension: {
      options: ['s', 'm'],
      control: { type: 'radio' },
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
} as Meta<typeof FilterTabs>;

//<editor-fold desc="FilterTabs.">
const FilterTabsStory: StoryFn<typeof FilterTabs> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <FilterTabsTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const FilterTabsTemplateExample = {
  render: FilterTabsStory,

  parameters: {
    docs: {
      source: {
        code: FilterTabsTemplateRaw,
      },
    },
  },

  name: 'FilterTabs.',
};
//</editor-fold>

//<editor-fold desc="FilterTabs. Мобильная версия">
const FilterTabsMobileStory: StoryFn<typeof FilterTabs> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <FilterTabsMobileTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const FilterTabsMobileTemplateExample = {
  render: FilterTabsMobileStory,

  parameters: {
    docs: {
      source: {
        code: FilterTabsMobileTemplateRaw,
      },
    },
  },

  name: 'FilterTabs. Мобильная версия',
};
//</editor-fold>
