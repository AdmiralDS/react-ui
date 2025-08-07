import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { ALL_BORDER_RADIUS_VALUES, TabMenuIcon } from '@admiral-ds/react-ui';

import { IconTabMenuTemplate } from './IconTabMenuTemplate';

// Imports of text sources
import IconTabMenuRaw from './IconTabMenuTemplate?raw';

export default {
  title: 'Admiral-2.1/Tabs/TabMenuIcon',
  decorators: undefined,
  component: TabMenuIcon,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {
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
} as Meta<typeof TabMenuIcon>;

//#region "IconTabMenu."
const IconTabMenuStory: StoryFn<typeof TabMenuIcon> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <IconTabMenuTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const IconTabMenuExample = {
  render: IconTabMenuStory,

  parameters: {
    docs: {
      source: {
        code: IconTabMenuRaw,
      },
    },
  },

  name: 'IconTabMenu.',
};
//#endregion
