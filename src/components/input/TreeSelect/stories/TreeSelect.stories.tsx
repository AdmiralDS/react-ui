import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import {
  TextInput,
  INPUT_DIMENSIONS_VALUES,
  INPUT_STATUS_VALUES,
  ALL_BORDER_RADIUS_VALUES,
  TreeSelect,
} from '@admiral-ds/react-ui';

import { PlaygroundTemplate } from './Playground.template';
// import { TextInputWithIconTemplate } from '#src/components/input/TextInput/stories/TextInputWithIcon.template';

// Imports of text sources
import PlaygroundRaw from './Playground.template?raw';
// import TextInputWithIconRaw from './TextInputWithIcon.template?raw';

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

//<editor-fold desc="Input компонент с иконками">
// const TextInputWithIconStory: StoryFn<typeof TextInput> = (props) => {
//   const [{ CSSCustomProps }] = useGlobals();
//   return <TextInputWithIconTemplate {...props} CSSCustomProps={CSSCustomProps} />;
// };

// export const TextInputWithIcon = {
//   render: TextInputWithIconStory,

//   parameters: {
//     docs: {
//       source: {
//         code: TextInputWithIconRaw,
//       },
//     },
//   },

//   name: 'Input компонент с иконками',
// };
//</editor-fold>
