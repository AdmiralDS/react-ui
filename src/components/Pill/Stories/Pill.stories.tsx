import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';

import { Pill, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { SimplePillsTemplate, PillsMenuTemplate, NestedPillsTemplate, PillWithTooltipTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import SimplePillsRaw from './Templates/SimplePills?raw';
import PillsMenuRaw from './Templates/PillsMenu?raw';
import NestedPillsRaw from './Templates/NestedPills?raw';
import PillWithTooltipRaw from './Templates/PillWithTooltip?raw';

export default {
  title: 'Admiral-2.1/Pills',
  decorators: undefined,
  component: Pill,
  parameters: {
    layout: 'centered',
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=109822%3A65203',
      },
    ],
  },
  argTypes: {
    theme: {
      control: false,
    },
    as: {
      control: false,
    },
    forwardedAs: {
      control: false,
    },
    ref: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
  },
} as Meta<typeof Pill>;

//<editor-fold desc="Pills. Базовый пример.">
const SimplePillsStory: StoryFn<typeof Pill> = (props) => <SimplePillsTemplate {...cleanUpProps(props)} />;

export const SimplePills = {
  render: SimplePillsStory,

  parameters: {
    docs: {
      source: {
        code: SimplePillsRaw,
      },
    },
  },

  name: 'Pills. Базовый пример.',
};

//</editor-fold>

//<editor-fold desc="PillMenu. Pill с выпадающим списком.">
const PillMenuStory: StoryFn<typeof Pill> = (props) => <PillsMenuTemplate {...cleanUpProps(props)} />;

export const PillsMenu = {
  render: PillMenuStory,

  parameters: {
    docs: {
      source: {
        code: PillsMenuRaw,
      },
    },
  },

  name: 'PillMenu. Pill с выпадающим списком.',
};

//</editor-fold>

//<editor-fold desc="NestedPills.">
const NestedPillsStory: StoryFn<typeof Pill> = () => <NestedPillsTemplate />;

export const NestedPills = {
  render: NestedPillsStory,

  parameters: {
    docs: {
      source: {
        code: NestedPillsRaw,
      },
    },
  },

  name: 'NestedPills.',
};

//</editor-fold>

//<editor-fold desc="Pill с Tooltip.">
const PillWithTooltipStory: StoryFn<typeof Pill> = () => <PillWithTooltipTemplate />;

export const PillWithTooltip = {
  render: PillWithTooltipStory,

  parameters: {
    docs: {
      source: {
        code: PillWithTooltipRaw,
      },
    },
  },

  name: 'Pill с Tooltip.',
};
