import * as React from 'react';
import { withDesign } from 'storybook-addon-designs';
import type { ComponentMeta, ComponentStory } from '@storybook/react';

import { Pill, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { SimplePillsTemplate, PillsMenuTemplate, NestedPillsTemplate, PillWithTooltipTemplate } from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import SimplePillsRaw from '!!raw-loader!./Templates/SimplePills';
import PillsMenuRaw from '!!raw-loader!./Templates/PillsMenu';
import NestedPillsRaw from '!!raw-loader!./Templates/NestedPills';
import PillWithTooltipRaw from '!!raw-loader!./Templates/PillWithTooltip';

export default {
  title: 'Admiral-2.1/Pills',
  decorators: [withDesign],
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
} as ComponentMeta<typeof Pill>;

//<editor-fold desc="Pills. Базовый пример.">
const SimplePillsStory: ComponentStory<typeof Pill> = (props) => <SimplePillsTemplate {...cleanUpProps(props)} />;

export const SimplePills = SimplePillsStory.bind({});
SimplePills.parameters = {
  docs: {
    source: {
      code: SimplePillsRaw,
    },
  },
};
SimplePills.storyName = 'Pills. Базовый пример.';
//</editor-fold>

//<editor-fold desc="PillMenu. Pill с выпадающим списком.">
const PillMenuStory: ComponentStory<typeof Pill> = (props) => <PillsMenuTemplate {...cleanUpProps(props)} />;

export const PillsMenu = PillMenuStory.bind({});
PillsMenu.parameters = {
  docs: {
    source: {
      code: PillsMenuRaw,
    },
  },
};
PillsMenu.storyName = 'PillMenu. Pill с выпадающим списком.';
//</editor-fold>

//<editor-fold desc="NestedPills.">
const NestedPillsStory: ComponentStory<typeof Pill> = () => <NestedPillsTemplate />;

export const NestedPills = NestedPillsStory.bind({});
NestedPills.parameters = {
  docs: {
    source: {
      code: NestedPillsRaw,
    },
  },
};
NestedPills.storyName = 'NestedPills.';
//</editor-fold>

//<editor-fold desc="Pill с Tooltip.">
const PillWithTooltipStory: ComponentStory<typeof Pill> = () => <PillWithTooltipTemplate />;

export const PillWithTooltip = PillWithTooltipStory.bind({});
PillWithTooltip.parameters = {
  docs: {
    source: {
      code: PillWithTooltipRaw,
    },
  },
};
PillWithTooltip.storyName = 'Pill с Tooltip.';
//</editor-fold>
