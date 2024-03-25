import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { TextArea, INPUT_DIMENSIONS_VALUES, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { TextAreaPlaygroundTemplate } from './TextAreaPlayground.template';
import { TextAreaAsyncTemplate } from './TextAreaAsync.template';

// Imports of text sources
import TextAreaPlaygroundRaw from './TextAreaPlayground.template?raw';
import TextAreaAsyncRaw from './TextAreaAsync.template?raw';

export default {
  title: 'Admiral-2.1/Input/TextArea',
  component: TextArea,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=39%3A61323',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=23873%3A69875',
      },
      {
        type: 'figma',
        url: 'https://www.figma.com/file/EGEGZsx8WhdxpmFKu8J41G/Admiral-2.1-UI-Kit?node-id=23873%3A70116',
      },
    ],
  },
  argTypes: {
    dimension: {
      options: INPUT_DIMENSIONS_VALUES,
      control: { type: 'radio' },
    },

    disabled: {
      control: { type: 'boolean' },
    },

    rows: {
      type: 'number',
    },

    maxRows: {
      type: 'number',
    },

    maxLength: {
      type: 'number',
    },

    readOnly: {
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
    handleInput: {
      control: false,
    },
    containerRef: {
      control: false,
    },
    autoHeight: {
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
} as Meta<typeof TextArea>;

const TextAreaPlaygroundStory: StoryFn<typeof TextArea> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <TextAreaPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TextAreaPlayground = {
  render: TextAreaPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: TextAreaPlaygroundRaw,
      },
    },
  },

  name: 'Базовый textarea компонент',
};

export const TextAreaAsync = {
  render: ((props) => <TextAreaAsyncTemplate {...props} />) as StoryFn<typeof TextArea>,

  parameters: {
    docs: {
      source: {
        code: TextAreaAsyncRaw,
      },
    },
  },

  name: 'Асинхронное изменение значения',
};
