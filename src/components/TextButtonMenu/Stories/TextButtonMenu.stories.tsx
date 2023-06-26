import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { TextButtonMenu, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import {
  TextButtonMenuPlaygroundTemplate,
  TextButtonMenuDimensionTemplate,
  TextButtonMenuWithIconTemplate,
} from './Templates';
import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';

// Imports of text sources
import TextButtonMenuPlaygroundRaw from './Templates/TextButtonMenuPlayground?raw';
import TextButtonMenuDimensionRaw from './Templates/TextButtonMenuDimension?raw';
import TextButtonMenuWithIconRaw from './Templates/TextButtonMenuWithIcon?raw';

export default {
  title: 'Admiral-2.1/TextButtonMenu',
  decorators: undefined,
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
      control: { type: 'text' },
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
} as Meta<typeof TextButtonMenu>;

//<editor-fold desc="TextButtonMenu. Playground">
const TextButtonMenuPlaygroundStory: StoryFn<typeof TextButtonMenu> = (props) => (
  <TextButtonMenuPlaygroundTemplate items={[]} {...cleanUpProps(props)} />
);

export const TextButtonMenuPlayground = {
  render: TextButtonMenuPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: TextButtonMenuPlaygroundRaw,
      },
    },
  },

  name: 'TextButtonMenu. Playground',
};

//</editor-fold>

//<editor-fold desc="TextButtonMenu. Размеры и стили.">
const TextButtonMenuDimensionStory: StoryFn<typeof TextButtonMenu> = (props) => (
  <TextButtonMenuDimensionTemplate items={[]} {...cleanUpProps(props)} />
);

export const TextButtonMenuDimension = {
  render: TextButtonMenuDimensionStory,

  parameters: {
    docs: {
      source: {
        code: TextButtonMenuDimensionRaw,
      },
    },
  },

  name: 'TextButtonMenu. Размеры и стили.',
};

//</editor-fold>

//<editor-fold desc="TextButtonMenu. С иконкой.">
const TextButtonMenuWithIconStory: StoryFn<typeof TextButtonMenu> = (props) => (
  <TextButtonMenuWithIconTemplate items={[]} {...cleanUpProps(props)} />
);

export const TextButtonMenuWithIcon = {
  render: TextButtonMenuWithIconStory,

  parameters: {
    docs: {
      source: {
        code: TextButtonMenuWithIconRaw,
      },
    },
  },

  name: 'TextButtonMenu. С иконкой.',
};
