import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { ALL_BORDER_RADIUS_VALUES, TabMenuVertical } from '@admiral-ds/react-ui';

import { VerticalTabMenuTemplate } from './VerticalTabMenuTemplate';
import { VerticalTabMenuWithAddButtonTemplate } from '#src/components/TabMenuComponent/stories/verticalTabMenuStories/VerticalTabMenuWithAddButtonTemplate';

// Imports of text sources
import VerticalTabMenuRaw from './VerticalTabMenuTemplate?raw';
import VerticalTabMenuWithAddButtonRaw from './VerticalTabMenuWithAddButtonTemplate?raw';

export default {
  title: 'Admiral-2.1/TabMenuComponent/TabMenuVertical',
  decorators: undefined,
  component: TabMenuVertical,
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
    underlinePosition: {
      options: ['left', 'right'],
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
} as Meta<typeof TabMenuVertical>;

//<editor-fold desc="VerticalTabMenu.">
const VerticalTabMenuStory: StoryFn<typeof TabMenuVertical> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <VerticalTabMenuTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const VerticalTabMenuExample = {
  render: VerticalTabMenuStory,

  parameters: {
    docs: {
      source: {
        code: VerticalTabMenuRaw,
      },
    },
  },

  name: 'Вертикальный вариант TabMenu.',
};
//</editor-fold>

//<editor-fold desc="VerticalTabWithAddButtonMenu.">
const VerticalTabMenuWithAddButtonStory: StoryFn<typeof TabMenuVertical> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <VerticalTabMenuWithAddButtonTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const VerticalTabMenuWithAddButtonExample = {
  render: VerticalTabMenuWithAddButtonStory,

  parameters: {
    docs: {
      source: {
        code: VerticalTabMenuWithAddButtonRaw,
      },
    },
  },

  name: 'Вертикальный вариант TabMenu с возможностью добавления вкладок..',
};
//</editor-fold>
