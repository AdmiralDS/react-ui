import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { IconPlacement, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  IconPlacementAppearanceTemplate,
  IconPlacementPlaygroundTemplate,
  IconPlacementSizesTemplate,
  IconPlacementVariantsTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import IconPlacementPlaygroundRaw from './Templates/IconPlacementPlayground?raw';
import IconPlacementVariantsRaw from './Templates/IconPlacementVariants?raw';
import IconPlacementAppearanceRaw from './Templates/IconPlacementAppearance?raw';
import IconPlacementSizesRaw from './Templates/IconPlacementSizes?raw';

export default {
  title: 'Admiral-2.1/IconPlacement',
  decorators: undefined,
  component: IconPlacement,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=133774%3A104360',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=133774%3A104658',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=133799%3A104398',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=133799%3A104512',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['lBig', 'lSmall', 'mBig', 'mSmall', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    highlightFocus: {
      control: { type: 'boolean' },
    },
    appearance: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof IconPlacement>;

//<editor-fold desc="IconPlacement. Playground">
const IconPlacementPlaygroundStory: StoryFn<typeof IconPlacement> = (props) => (
  <IconPlacementPlaygroundTemplate {...cleanUpProps(props)} />
);

export const IconPlacementPlayground = {
  render: IconPlacementPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: IconPlacementPlaygroundRaw,
      },
    },
  },

  name: 'IconPlacement. Playground',
};

//</editor-fold>

//<editor-fold desc="IconPlacement. Размеры">
const IconPlacementSizesStory: StoryFn<typeof IconPlacement> = (props) => (
  <IconPlacementSizesTemplate {...cleanUpProps(props)} />
);

export const IconPlacementSizes = {
  render: IconPlacementSizesStory,

  parameters: {
    docs: {
      source: {
        code: IconPlacementSizesRaw,
      },
    },
  },

  name: 'IconPlacement. Размеры',
};

//</editor-fold>

//<editor-fold desc="IconPlacement. Appearance">
const IconPlacementAppearanceStory: StoryFn<typeof IconPlacement> = (props) => (
  <IconPlacementAppearanceTemplate {...cleanUpProps(props)} />
);

export const IconPlacementAppearance = {
  render: IconPlacementAppearanceStory,

  parameters: {
    docs: {
      source: {
        code: IconPlacementAppearanceRaw,
      },
    },
  },

  name: 'IconPlacement. Appearance',
};

//</editor-fold>

//<editor-fold desc="IconPlacement. Варианты использования">
const IconPlacementVariantsStory: StoryFn<typeof IconPlacement> = (props) => (
  <IconPlacementVariantsTemplate {...cleanUpProps(props)} />
);

export const IconPlacementVariants = {
  render: IconPlacementVariantsStory,

  parameters: {
    docs: {
      source: {
        code: IconPlacementVariantsRaw,
      },
    },
  },

  name: 'IconPlacement. Варианты использования',
};
