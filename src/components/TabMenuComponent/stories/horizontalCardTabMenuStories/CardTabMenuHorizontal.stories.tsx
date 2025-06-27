import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { ALL_BORDER_RADIUS_VALUES, CardTabMenuHorizontal } from '@admiral-ds/react-ui';

import { CardTabMenuHorizontalTemplate } from '#src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontalTemplate';
import { CardTabMenuHorizontalWithAddButtonTemplate } from '#src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontalWithAddButtonTemplate';
import { CardTabMenuHorizontalLeadingGapTemplate } from '#src/components/TabMenuComponent/stories/horizontalCardTabMenuStories/CardTabMenuHorizontalLeadingGapTemplate';
import { CardTabMenuHorizontalWithoutBorderTemplate } from './CardTabMenuHorizontalWithoutBorderTemplate';
import { CardTabMenuHorizontalAdaptiveFillTemplate } from './CardTabMenuHorizontalAdaptiveFillTemplate';

// Imports of text sources
import HorizontalCardTabMenuRaw from './CardTabMenuHorizontalTemplate?raw';
import HorizontalCardTabMenuWithAddButtonRaw from './CardTabMenuHorizontalWithAddButtonTemplate?raw';
import HorizontalCardTabMenuLeadingGapRaw from './CardTabMenuHorizontalLeadingGapTemplate?raw';
import CardTabMenuHorizontalWithoutBorderRaw from './CardTabMenuHorizontalWithoutBorderTemplate?raw';
import CardTabMenuHorizontalAdaptiveFillRaw from './CardTabMenuHorizontalAdaptiveFillTemplate?raw';

export default {
  title: 'Admiral-2.1/Tabs/CardTabMenuHorizontal',
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
      control: false,
    },
    hideBorder: {
      control: false,
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
    adaptive: {
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

//<editor-fold desc="HorizontalCardTabMenuLeadingGap.">
const HorizontalCardTabMenuLeadingGapStory: StoryFn<typeof CardTabMenuHorizontal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <CardTabMenuHorizontalLeadingGapTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const HorizontalCardTabMenuLeadingGapExample = {
  render: HorizontalCardTabMenuLeadingGapStory,

  parameters: {
    docs: {
      source: {
        code: HorizontalCardTabMenuLeadingGapRaw,
      },
    },
  },

  name: 'CardTabMenu с отступами.',
};
//</editor-fold>

//<editor-fold desc="HorizontalCardTabMenuWithAddButton.">
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

//<editor-fold desc="HorizontalCardTabMenuWithoutBorder.">
const CardTabMenuHorizontalWithoutBorderStory: StoryFn<typeof CardTabMenuHorizontal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <CardTabMenuHorizontalWithoutBorderTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const CardTabMenuHorizontalWithoutBorderExample = {
  render: CardTabMenuHorizontalWithoutBorderStory,

  parameters: {
    docs: {
      source: {
        code: CardTabMenuHorizontalWithoutBorderRaw,
      },
    },
  },

  name: 'CardTabMenu без обводки',
};
//</editor-fold>

//<editor-fold desc="HorizontalCardTabMenuAdaptiveFill.">
const CardTabMenuHorizontalAdaptiveFillStory: StoryFn<typeof CardTabMenuHorizontal> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <CardTabMenuHorizontalAdaptiveFillTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const CardTabMenuHorizontalAdaptiveFillExample = {
  render: CardTabMenuHorizontalAdaptiveFillStory,

  parameters: {
    docs: {
      source: {
        code: CardTabMenuHorizontalAdaptiveFillRaw,
      },
    },
  },

  name: 'CardTabMenu adaptive fill',
};
//</editor-fold>
