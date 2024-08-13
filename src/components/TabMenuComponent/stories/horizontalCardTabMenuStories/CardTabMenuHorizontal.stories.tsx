import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { ALL_BORDER_RADIUS_VALUES, CardTabMenuHorizontal } from '@admiral-ds/react-ui';

import { CardTabMenuHorizontalTemplate } from '#src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontalTemplate';
import { CardTabMenuHorizontalWithAddButtonTemplate } from '#src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontalWithAddButtonTemplate';

// Imports of text sources
import HorizontalCardTabMenuRaw from './CardTabMenuHorizontalTemplate?raw';
import HorizontalCardTabMenuWithAddButtonRaw from './CardTabMenuHorizontalWithAddButtonTemplate?raw';

export default {
  title: 'Admiral-2.1/TabMenuComponent/CardTabMenuHorizontal',
  decorators: undefined,
  component: CardTabMenuHorizontal,
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
  },
} as Meta<typeof CardTabMenuHorizontal>;

//<editor-fold desc="HorizontalCardTabMenu.">
const HorizontalCardTabMenuStory: StoryFn<typeof CardTabMenuHorizontal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <CardTabMenuHorizontalTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const HorizontalCardTabMenuExample = {
  render: HorizontalCardTabMenuStory,

  parameters: {
    docs: {
      source: {
        code: HorizontalCardTabMenuRaw,
      },
    },
  },

  name: 'CardTabMenu.',
};
//</editor-fold>

//<editor-fold desc="HorizontalCardTabMenuWithAddButtonWithAddButton.">
const HorizontalCardTabMenuWithAddButtonStory: StoryFn<typeof CardTabMenuHorizontal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <CardTabMenuHorizontalWithAddButtonTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const HorizontalCardTabMenuWithAddButtonExample = {
  render: HorizontalCardTabMenuWithAddButtonStory,

  parameters: {
    docs: {
      source: {
        code: HorizontalCardTabMenuWithAddButtonRaw,
      },
    },
  },

  name: 'CardTabMenu с возможностью добавления вкладок.',
};
//</editor-fold>
