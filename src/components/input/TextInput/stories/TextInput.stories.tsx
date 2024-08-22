import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import {
  TextInput,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';

import { TextInputPlaygroundTemplate } from './TextInputPlayground.template';
import { TextInputWithIconTemplate } from '#src/components/input/TextInput/stories/TextInputWithIcon.template';

// Imports of text sources
import TextInputPlaygroundRaw from './TextInputPlayground.template?raw';
import TextInputWithIconRaw from './TextInputWithIcon.template?raw';

export default {
  title: 'Admiral-2.1/Input/TextInput',
  component: TextInput,
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60376',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A60982',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61046',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },
    status: {
      control: { type: 'radio' },
      options: INPUT_STATUS_VALUES,
    },
    disabled: {
      control: { type: 'boolean' },
    },
    readOnly: {
      control: { type: 'boolean' },
    },
    isLoading: {
      control: { type: 'boolean' },
    },
    disableCopying: {
      control: { type: 'boolean' },
    },
    displayClearIcon: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
    onChange: {
      action: 'onChange',
    },
    icons: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    handleInput: {
      control: false,
    },
    theme: {
      control: false,
    },
    ref: {
      control: false,
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof TextInput>;

//<editor-fold desc="Базовый input компонент">
const TextInputPlaygroundStory: StoryFn<typeof TextInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TextInputPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TextInputPlayground = {
  render: TextInputPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: TextInputPlaygroundRaw,
      },
    },
  },

  name: 'Базовый input компонент',
};
//</editor-fold>

//<editor-fold desc="Input компонент с иконками">
const TextInputWithIconStory: StoryFn<typeof TextInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TextInputWithIconTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TextInputWithIcon = {
  render: TextInputWithIconStory,

  parameters: {
    docs: {
      source: {
        code: TextInputWithIconRaw,
      },
    },
  },

  name: 'Input компонент с иконками',
};
//</editor-fold>
