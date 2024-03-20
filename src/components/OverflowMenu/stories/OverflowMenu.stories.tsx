import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { OverflowMenu, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { OverflowMenuBaseTemplate } from './OverflowMenuBase.template';
import { OverflowMenuOptionsTemplate } from './OverflowMenuOptions.template';
import { OverflowMenuSizesOrientationTemplate } from './OverflowMenuSizesOrientation.template';

// Imports of text sources
import OverflowMenuBaseRaw from './OverflowMenuBase.template?raw';
import OverflowMenuOptionsRaw from './OverflowMenuOptions.template?raw';
import OverflowMenuSizesOrientationRaw from './OverflowMenuSizesOrientation.template?raw';

export default {
  title: 'Admiral-2.1/OverflowMenu',
  decorators: undefined,
  component: OverflowMenu,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A25623',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A25674',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['l', 'm', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    isVertical: {
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
    items: {
      control: false,
    },
    selected: {
      control: { type: 'text' },
    },
    active: {
      control: { type: 'text' },
    },
    menuWidth: {
      control: { type: 'text' },
    },
    menuMaxHeight: {
      control: { type: 'text' },
    },
    isVisible: {
      control: { type: 'boolean' },
    },
    disableSelectedOptionHighlight: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof OverflowMenu>;

//<editor-fold desc="OverflowMenu. Базовый пример.">
const OverflowMenuBaseStory: StoryFn<typeof OverflowMenu> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <OverflowMenuBaseTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const OverflowMenuBase = {
  render: OverflowMenuBaseStory,

  parameters: {
    docs: {
      source: {
        code: OverflowMenuBaseRaw,
      },
    },
  },

  name: 'OverflowMenu. Базовый пример.',
};

//</editor-fold>

//<editor-fold desc="OverflowMenu. Задизейбленные и кастомизированные опции.">
const OverflowMenuOptionsStory: StoryFn<typeof OverflowMenu> = (props) => <OverflowMenuOptionsTemplate {...props} />;

export const OverflowMenuOptions = {
  render: OverflowMenuOptionsStory,

  parameters: {
    docs: {
      source: {
        code: OverflowMenuOptionsRaw,
      },
    },
  },

  name: 'OverflowMenu. Задизейбленные и кастомизированные опции.',
};

//</editor-fold>

//<editor-fold desc="OverflowMenu. Размеры и ориентация.">
const OverflowMenuSizesOrientationStory: StoryFn<typeof OverflowMenu> = (props) => (
  <OverflowMenuSizesOrientationTemplate {...props} />
);

export const OverflowMenuSizesOrientation = {
  render: OverflowMenuSizesOrientationStory,

  parameters: {
    docs: {
      source: {
        code: OverflowMenuSizesOrientationRaw,
      },
    },
  },

  name: 'OverflowMenu. Размеры и ориентация.',
};
