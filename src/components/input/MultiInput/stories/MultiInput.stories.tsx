import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';

import { MultiInputPlaygroundTemplate } from './MultiInputPlayground.template';
import { MultiInputWithoutCloseChipTemplate } from './MultiInputWithoutCloseChip.template';

import { ALL_BORDER_RADIUS_VALUES, INPUT_STATUS_VALUES, MultiInput } from '@admiral-ds/react-ui';

// Imports of text sources
import MultiInputPlaygroundRaw from './MultiInputPlayground.template?raw';
import MultiInputWithoutCloseChipTemplateRaw from './MultiInputWithoutCloseChip.template?raw';

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

//<editor-fold desc="MultiInput с отключённым удалением чипсов по отдельности">
const MultiInputWithoutCloseChipStory: StoryFn<typeof MultiInput> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <MultiInputWithoutCloseChipTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const MultiInputWithoutCloseChip = {
  render: MultiInputWithoutCloseChipStory,

  parameters: {
    docs: {
      source: {
        code: MultiInputWithoutCloseChipTemplateRaw,
      },
    },
  },

  name: 'MultiInput с отключённым удалением чипсов по отдельности',
};

//</editor-fold>
