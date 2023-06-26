import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { IconButton, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { cleanUpProps } from '#src/components/common/utils/cleanUpStoriesProps';
import { IconButtonAppearanceTemplate, IconButtonDimensionTemplate, IconButtonStateTemplate } from './Templates';

// Imports of text sources
import IconButtonDimensionRaw from './Templates/IconButtonDimension?raw';
import IconButtonStateRaw from './Templates/IconButtonState?raw';
import IconButtonAppearanceRaw from './Templates/IconButtonAppearance?raw';

export default {
  title: 'Admiral-2.1/IconButton',
  decorators: undefined,
  component: IconButton,
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
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17787',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18110',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18298',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18322',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A18345',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    loading: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof IconButton>;

const IconButtonDimensionStory: StoryFn<typeof IconButton> = (props) => (
  <IconButtonDimensionTemplate {...cleanUpProps(props)} />
);

export const IconButtonDimension = {
  render: IconButtonDimensionStory,

  parameters: {
    docs: {
      source: {
        code: IconButtonDimensionRaw,
      },
    },
  },

  name: 'IconButton. Размеры',
};

//</editor-fold>

//<editor-fold desc="IconButton. Состояния">
const IconButtonStateStory: StoryFn<typeof IconButton> = (props) => (
  <IconButtonStateTemplate {...cleanUpProps(props)} />
);

export const IconButtonState = {
  render: IconButtonStateStory,

  parameters: {
    docs: {
      source: {
        code: IconButtonStateRaw,
      },
    },
  },

  name: 'IconButton. Состояния',
};

//</editor-fold>

//<editor-fold desc="IconButton. Appearance">
const IconButtonAppearanceStory: StoryFn<typeof IconButton> = (props) => (
  <IconButtonAppearanceTemplate {...cleanUpProps(props)} />
);

export const IconButtonAppearance = {
  render: IconButtonAppearanceStory,

  parameters: {
    docs: {
      source: {
        code: IconButtonAppearanceRaw,
      },
    },
  },

  name: 'IconButton. Appearance',
};
