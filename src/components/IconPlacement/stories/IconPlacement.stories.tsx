import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import { IconPlacement, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { IconPlacementPlaygroundTemplate } from './IconPlacementPlayground.template';
import { IconPlacementVariantsTemplate } from './IconPlacementVariants.template';
import { IconPlacementAppearanceTemplate } from './IconPlacementAppearance.template';
import { IconPlacementSizesTemplate } from './IconPlacementSizes.template';

// Imports of text sources
import IconPlacementPlaygroundRaw from './IconPlacementPlayground.template?raw';
import IconPlacementVariantsRaw from './IconPlacementVariants.template?raw';
import IconPlacementAppearanceRaw from './IconPlacementAppearance.template?raw';
import IconPlacementSizesRaw from './IconPlacementSizes.template?raw';

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
const IconPlacementPlaygroundStory: StoryFn<typeof IconPlacement> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <IconPlacementPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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
const IconPlacementSizesStory: StoryFn<typeof IconPlacement> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <IconPlacementSizesTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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
const IconPlacementAppearanceStory: StoryFn<typeof IconPlacement> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <IconPlacementAppearanceTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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
const IconPlacementVariantsStory: StoryFn<typeof IconPlacement> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <IconPlacementVariantsTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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
