import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { IconPlacement, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  IconPlacementAppearanceTemplate,
  IconPlacementPlaygroundTemplate,
  IconPlacementSizesTemplate,
  IconPlacementVariantsTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import IconPlacementPlaygroundRaw from '!!raw-loader!./Templates/IconPlacementPlayground';
import IconPlacementVariantsRaw from '!!raw-loader!./Templates/IconPlacementVariants';
import IconPlacementAppearanceRaw from '!!raw-loader!./Templates/IconPlacementAppearance';
import IconPlacementSizesRaw from '!!raw-loader!./Templates/IconPlacementSizes';

export default {
  title: 'Admiral-2.1/IconPlacement',
  decorators: [withDesign],
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
} as ComponentMeta<typeof IconPlacement>;

//<editor-fold desc="IconPlacement. Playground">
const IconPlacementPlaygroundStory: ComponentStory<typeof IconPlacement> = (props) => (
  <IconPlacementPlaygroundTemplate {...cleanUpProps(props)} />
);

export const IconPlacementPlayground = IconPlacementPlaygroundStory.bind({});
IconPlacementPlayground.parameters = {
  docs: {
    source: {
      code: IconPlacementPlaygroundRaw,
    },
  },
};
IconPlacementPlayground.storyName = 'IconPlacement. Playground';
//</editor-fold>

//<editor-fold desc="IconPlacement. Размеры">
const IconPlacementSizesStory: ComponentStory<typeof IconPlacement> = (props) => (
  <IconPlacementSizesTemplate {...cleanUpProps(props)} />
);

export const IconPlacementSizes = IconPlacementSizesStory.bind({});
IconPlacementSizes.parameters = {
  docs: {
    source: {
      code: IconPlacementSizesRaw,
    },
  },
};
IconPlacementSizes.storyName = 'IconPlacement. Размеры';
//</editor-fold>

//<editor-fold desc="IconPlacement. Appearance">
const IconPlacementAppearanceStory: ComponentStory<typeof IconPlacement> = (props) => (
  <IconPlacementAppearanceTemplate {...cleanUpProps(props)} />
);

export const IconPlacementAppearance = IconPlacementAppearanceStory.bind({});
IconPlacementAppearance.parameters = {
  docs: {
    source: {
      code: IconPlacementAppearanceRaw,
    },
  },
};
IconPlacementAppearance.storyName = 'IconPlacement. Appearance';
//</editor-fold>

//<editor-fold desc="IconPlacement. Варианты использования">
const IconPlacementVariantsStory: ComponentStory<typeof IconPlacement> = (props) => (
  <IconPlacementVariantsTemplate {...cleanUpProps(props)} />
);

export const IconPlacementVariants = IconPlacementVariantsStory.bind({});
IconPlacementVariants.parameters = {
  docs: {
    source: {
      code: IconPlacementVariantsRaw,
    },
  },
};
IconPlacementVariants.storyName = 'IconPlacement. Варианты использования';
//</editor-fold>
