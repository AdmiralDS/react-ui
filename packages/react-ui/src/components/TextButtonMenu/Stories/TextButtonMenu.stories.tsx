import * as React from 'react';
import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import { TextButtonMenu, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  TextButtonMenuPlaygroundTemplate,
  TextButtonMenuDimensionTemplate,
  TextButtonMenuWithIconTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import TextButtonMenuPlaygroundRaw from '!!raw-loader!./Templates/TextButtonMenuPlayground';
import TextButtonMenuDimensionRaw from '!!raw-loader!./Templates/TextButtonMenuDimension';
import TextButtonMenuWithIconRaw from '!!raw-loader!./Templates/TextButtonMenuWithIcon';

export default {
  title: 'Admiral-2.1/TextButtonMenu',
  decorators: [withDesign],
  component: TextButtonMenu,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17830',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18134',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18216',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18175',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18257',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['m', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    text: {
      type: 'string',
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
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
    iconStart: {
      control: false,
    },
    items: {
      control: false,
    },
    selected: {
      control: false,
    },
    menuMaxHeight: {
      control: { type: 'text' },
    },
    menuWidth: {
      control: { type: 'text' },
    },
    disableSelectedOptionHighlight: {
      control: { type: 'boolean' },
    },
    isVisible: {
      control: { type: 'boolean' },
    },
    active: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof TextButtonMenu>;

//<editor-fold desc="TextButtonMenu. Playground">
const TextButtonMenuPlaygroundStory: ComponentStory<typeof TextButtonMenu> = (props) => (
  <TextButtonMenuPlaygroundTemplate items={[]} {...cleanUpProps(props)} />
);

export const TextButtonMenuPlayground = TextButtonMenuPlaygroundStory.bind({});
TextButtonMenuPlayground.parameters = {
  docs: {
    source: {
      code: TextButtonMenuPlaygroundRaw,
    },
  },
};
TextButtonMenuPlayground.storyName = 'TextButtonMenu. Playground';
//</editor-fold>

//<editor-fold desc="TextButtonMenu. Размеры и стили.">
const TextButtonMenuDimensionStory: ComponentStory<typeof TextButtonMenu> = (props) => (
  <TextButtonMenuDimensionTemplate items={[]} {...cleanUpProps(props)} />
);

export const TextButtonMenuDimension = TextButtonMenuDimensionStory.bind({});
TextButtonMenuDimension.parameters = {
  docs: {
    source: {
      code: TextButtonMenuDimensionRaw,
    },
  },
};
TextButtonMenuDimension.storyName = 'TextButtonMenu. Размеры и стили.';
//</editor-fold>

//<editor-fold desc="TextButtonMenu. С иконкой.">
const TextButtonMenuWithIconStory: ComponentStory<typeof TextButtonMenu> = (props) => (
  <TextButtonMenuWithIconTemplate items={[]} {...cleanUpProps(props)} />
);

export const TextButtonMenuWithIcon = TextButtonMenuWithIconStory.bind({});
TextButtonMenuWithIcon.parameters = {
  docs: {
    source: {
      code: TextButtonMenuWithIconRaw,
    },
  },
};
TextButtonMenuWithIcon.storyName = 'TextButtonMenu. С иконкой.';
//</editor-fold>
