import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { ALL_BORDER_RADIUS_VALUES, INPUT_STATUS_VALUES, MultiInput } from '@admiral-ds/react-ui';

import { MultiInputPlaygroundTemplate } from './MultiInputPlayground.template';
import { MultiInputInitChipsDisabledTemplate } from './MultiInputInitChipsDisabled.template';
import { MultiInputWithIconsTemplate } from './MultiInputWithIcons.template';

// Imports of text sources
import MultiInputPlaygroundRaw from './MultiInputPlayground.template?raw';
import MultiInputInitChipsDisabledTemplateRaw from './MultiInputInitChipsDisabled.template?raw';
import MultiInputWithIconsTemplateRaw from './MultiInputWithIcons.template?raw';

export default {
  title: 'Admiral-2.1/Input/MultiInput',
  component: MultiInput,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  argTypes: {
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
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
  },
} as Meta<typeof MultiInput>;

//<editor-fold desc="MultiInput">
const MultiInputPlaygroundStory: StoryFn<typeof MultiInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <MultiInputPlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const MultiInputPlayground = {
  render: MultiInputPlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: MultiInputPlaygroundRaw,
      },
    },
  },

  name: 'MultiInput',
};

//</editor-fold>

//<editor-fold desc="MultiInput с начальными опциями">
const MultiInputInitChipsDisabledStory: StoryFn<typeof MultiInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <MultiInputInitChipsDisabledTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const MultiInputInitChipsDisabled = {
  render: MultiInputInitChipsDisabledStory,

  parameters: {
    docs: {
      source: {
        code: MultiInputInitChipsDisabledTemplateRaw,
      },
    },
  },

  name: 'MultiInput с начальными опциями',
};
//</editor-fold>

//<editor-fold desc="MultiInput с дополнительными иконками">
const MultiInputWithIconsStory: StoryFn<typeof MultiInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <MultiInputWithIconsTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const MultiInputWithIcons = {
  render: MultiInputWithIconsStory,

  parameters: {
    docs: {
      source: {
        code: MultiInputWithIconsTemplateRaw,
      },
    },
  },

  name: 'MultiInput с дополнительными иконками',
};
//</editor-fold>
