import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import type { TreeSelect } from '@admiral-ds/react-ui';
import {
  TextInput,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
} from '@admiral-ds/react-ui';

import { PlaygroundTemplate } from './Playground.template';
import { PanesRenderTemplate } from './PanesRender.template';

// Imports of text sources
import PlaygroundRaw from './Playground.template?raw';
import PanesRenderRaw from './PanesRender.template?raw';

export default {
  title: 'Admiral-2.1/Input/TreeSelect',
  component: TextInput,
  decorators: undefined,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
    design: [],
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
} as Meta<typeof TreeSelect>;

//<editor-fold desc="Базовый пример компонента TreeSelect">
const PlaygroundStory: StoryFn<typeof TreeSelect> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <PlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TextInputPlayground = {
  render: PlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: PlaygroundRaw,
      },
    },
  },

  name: 'Базовый пример компонент',
};
//</editor-fold>

//<editor-fold desc="Пример с рендером панелей">
const PanesRenderStory: StoryFn<typeof TreeSelect> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <PanesRenderTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const TextInputWithIcon = {
  render: PanesRenderStory,

  parameters: {
    docs: {
      source: {
        code: PanesRenderRaw,
      },
    },
  },

  name: 'Кастомные панели в списке',
};
//</editor-fold>
