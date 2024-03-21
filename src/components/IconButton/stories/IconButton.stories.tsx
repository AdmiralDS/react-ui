import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { IconButton, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { IconButtonDimensionTemplate } from './IconButtonDimension.template';
import { IconButtonStateTemplate } from './IconButtonState.template';
import { IconButtonAppearanceTemplate } from './IconButtonAppearance.template';

// Imports of text sources
import IconButtonDimensionRaw from './IconButtonDimension.template?raw';
import IconButtonStateRaw from './IconButtonState.template?raw';
import IconButtonAppearanceRaw from './IconButtonAppearance.template?raw';

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

const IconButtonDimensionStory: StoryFn<typeof IconButton> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <IconButtonDimensionTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

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
const IconButtonStateStory: StoryFn<typeof IconButton> = (props) => <IconButtonStateTemplate {...props} />;

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
const IconButtonAppearanceStory: StoryFn<typeof IconButton> = (props) => <IconButtonAppearanceTemplate {...props} />;

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
