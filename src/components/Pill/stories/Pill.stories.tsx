import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import { Pill, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { PillSimpleTemplate } from './PillSimple.template';
import { PillMenuTemplate } from './PillMenu.template';
import { PillNestedTemplate } from './PillNested.template';
import { PillWithTooltipTemplate } from './PillWithTooltip.template';

// Imports of text sources
import PillSimpleRaw from './PillSimple.template?raw';
import PillMenuRaw from './PillMenu.template?raw';
import PillNestedRaw from './PillNested.template?raw';
import PillWithTooltipRaw from './PillWithTooltip.template?raw';

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
const SimplePillsStory: StoryFn<typeof Pill> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <PillSimpleTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const SimplePills = {
  render: SimplePillsStory,

  parameters: {
    docs: {
      source: {
        code: PillSimpleRaw,
      },
    },
  },

  name: 'Pills. Базовый пример.',
};

//</editor-fold>

//<editor-fold desc="PillMenu. Pill с выпадающим списком.">
const PillMenuStory: StoryFn<typeof Pill> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <PillMenuTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const PillsMenu = {
  render: PillMenuStory,

  parameters: {
    docs: {
      source: {
        code: PillMenuRaw,
      },
    },
  },

  name: 'PillMenu. Pill с выпадающим списком.',
};

//</editor-fold>

//<editor-fold desc="NestedPills.">
const NestedPillsStory: StoryFn<typeof Pill> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <PillNestedTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const NestedPills = {
  render: NestedPillsStory,

  parameters: {
    docs: {
      source: {
        code: PillNestedRaw,
      },
    },
  },

  name: 'NestedPills.',
};

//</editor-fold>

//<editor-fold desc="Pill с Tooltip.">
const PillWithTooltipStory: StoryFn<typeof Pill> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <PillWithTooltipTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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
