import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { OverflowMenu, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  OverflowMenuBaseTemplate,
  OverflowMenuOptionsTemplate,
  OverflowMenuSizesOrientationTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import OverflowMenuBaseRaw from '!!raw-loader!./Templates/OverflowMenuBase';
import OverflowMenuOptionsRaw from '!!raw-loader!./Templates/OverflowMenuOptions';
import OverflowMenuSizesOrientationRaw from '!!raw-loader!./Templates/OverflowMenuSizesOrientation';

export default {
  title: 'Admiral-2.1/OverflowMenu',
  decorators: [withDesign],
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
    selected: {
      control: { type: 'text' },
    },
    active: {
      control: { type: 'text' },
    },
    menuWidth: {
      control: { type: 'text' },
    },
    isVisible: {
      control: { type: 'boolean' },
    },
    disableSelectedOptionHighlight: {
      control: { type: 'boolean' },
    },
  },
} as ComponentMeta<typeof OverflowMenu>;

//<editor-fold desc="OverflowMenu. Базовый пример.">
const OverflowMenuBaseStory: ComponentStory<typeof OverflowMenu> = (props) => (
  <OverflowMenuBaseTemplate items={[]} {...cleanUpProps(props)} />
);

export const OverflowMenuBase = OverflowMenuBaseStory.bind({});
OverflowMenuBase.parameters = {
  docs: {
    source: {
      code: OverflowMenuBaseRaw,
    },
  },
};
OverflowMenuBase.storyName = 'OverflowMenu. Базовый пример.';
//</editor-fold>

//<editor-fold desc="OverflowMenu. Задизейбленные и кастомизированные опции.">
const OverflowMenuOptionsStory: ComponentStory<typeof OverflowMenu> = (props) => (
  <OverflowMenuOptionsTemplate items={[]} {...cleanUpProps(props)} />
);

export const OverflowMenuOptions = OverflowMenuOptionsStory.bind({});
OverflowMenuOptions.parameters = {
  docs: {
    source: {
      code: OverflowMenuOptionsRaw,
    },
  },
};
OverflowMenuOptions.storyName = 'OverflowMenu. Задизейбленные и кастомизированные опции.';
//</editor-fold>

//<editor-fold desc="OverflowMenu. Размеры и ориентация.">
const OverflowMenuSizesOrientationStory: ComponentStory<typeof OverflowMenu> = (props) => (
  <OverflowMenuSizesOrientationTemplate items={[]} {...cleanUpProps(props)} />
);

export const OverflowMenuSizesOrientation = OverflowMenuSizesOrientationStory.bind({});
OverflowMenuSizesOrientation.parameters = {
  docs: {
    source: {
      code: OverflowMenuSizesOrientationRaw,
    },
  },
};
OverflowMenuSizesOrientation.storyName = 'OverflowMenu. Размеры и ориентация.';
//</editor-fold>
