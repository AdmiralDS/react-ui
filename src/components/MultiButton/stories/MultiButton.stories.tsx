import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import { MultiButton, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { MultiButtonIconTemplate } from './MultiButtonIcon.template';
import { MultiButtonDisabledTemplate } from './MultiButtonDisabled.template';
import { MultiButtonAppearanceTemplate } from './MultiButtonAppearance.template';

// Imports of text sources
import MultiButtonIconRaw from './MultiButtonIcon.template?raw';
import MultiButtonDisabledRaw from './MultiButtonDisabled.template?raw';
import MultiButtonAppearanceRaw from './MultiButtonAppearance.template?raw';

export default {
  title: 'Admiral-2.1/MultiButton',
  decorators: undefined,
  component: MultiButton,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A17173',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19496',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19544',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19592',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19640',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19520',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19568',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19616',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19664',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A19900',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: ['xl', 'l', 'm', 's'],
      control: { type: 'radio' },
    },
    appearance: {
      options: ['primary', 'secondary', 'tertiary'],
      control: { type: 'radio' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    disabledMainButton: {
      control: { type: 'boolean' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
    alignSelf: {
      options: [undefined, 'auto', 'flex-start', 'flex-end', 'center', 'baseline', 'stretch'],
      control: { type: 'select' },
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
    options: {
      control: false,
    },
    items: {
      control: false,
    },
    selected: {
      control: { type: 'text' },
    },
    active: {
      control: { type: 'text' },
    },
    menuMaxHeight: {
      control: { type: 'text' },
    },
    isVisible: {
      control: { type: 'boolean' },
    },
    disableSelectedOptionHighlight: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof MultiButton>;

//<editor-fold desc="MultiButton. Внешний вид.">
const MultiButtonAppearanceStory: StoryFn<typeof MultiButton> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <MultiButtonAppearanceTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const MultiButtonAppearance = {
  render: MultiButtonAppearanceStory,

  parameters: {
    docs: {
      source: {
        code: MultiButtonAppearanceRaw,
      },
    },
  },

  name: 'MultiButton. Внешний вид.',
};

//</editor-fold>

//<editor-fold desc="MultiButton. Задизейбленность.">
const MultiButtonDisabledStory: StoryFn<typeof MultiButton> = (props) => <MultiButtonDisabledTemplate {...props} />;

export const MultiButtonDisabled = {
  render: MultiButtonDisabledStory,

  parameters: {
    docs: {
      source: {
        code: MultiButtonDisabledRaw,
      },
    },
  },

  name: 'MultiButton. Задизейбленность.',
};

//</editor-fold>

//<editor-fold desc="MultiButton с иконкой.">
const MultiButtonIconStory: StoryFn<typeof MultiButton> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <MultiButtonIconTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const MultiButtonIcon = {
  render: MultiButtonIconStory,

  parameters: {
    docs: {
      source: {
        code: MultiButtonIconRaw,
      },
    },
  },

  name: 'MultiButton с иконкой.',
};
