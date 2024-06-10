import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { TabMenu, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { IconTabMenuTemplate } from './IconTabMenuTemplate';
import { MobileHorizontalTabMenuTemplate } from './MobileHorizontalTabMenuTemplate';
import { VerticalTabMenuTemplate } from './VerticalTabMenuTemplate';
import { HorizontalTabMenuTemplate } from '#src/components/TabMenuComponent/stories/HorizontalTabMenuTemplate';

// Imports of text sources
import IconTabMenuRaw from './IconTabMenuTemplate?raw';
import MobileHorizontalTabMenuRaw from './MobileHorizontalTabMenuTemplate?raw';
import VerticalTabMenuRaw from './VerticalTabMenuTemplate?raw';
import HorizontalTabMenuRaw from './HorizontalTabMenuTemplate?raw';

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

//<editor-fold desc="IconTabMenu.">
const IconTabMenuStory: StoryFn<typeof TabMenu> = (props) => {
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
//</editor-fold>

//<editor-fold desc="MobileHorizontalTabMenu.">
const MobileHorizontalTabMenuStory: StoryFn<typeof TabMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <MobileHorizontalTabMenuTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const MobileHorizontalTabMenuExample = {
  render: MobileHorizontalTabMenuStory,

  parameters: {
    docs: {
      source: {
        code: MobileHorizontalTabMenuRaw,
      },
    },
  },

  name: 'MobileHorizontalTabMenu.',
};
//</editor-fold>

//<editor-fold desc="VerticalTabMenu.">
const VerticalTabMenuStory: StoryFn<typeof TabMenu> = (props) => {
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

  name: 'VerticalTabMenu.',
};
//</editor-fold>

//<editor-fold desc="HorizontalTabMenu.">
const HorizontalTabMenuStory: StoryFn<typeof TabMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <HorizontalTabMenuTemplate {...props} CSSCustomProps={CSSCustomProps} />;
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

  name: 'HorizontalTabMenu.',
};
//</editor-fold>
