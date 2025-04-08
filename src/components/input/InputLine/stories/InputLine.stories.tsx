import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { ALL_BORDER_RADIUS_VALUES, InputLine } from '@admiral-ds/react-ui';

import { InputLinePlaygroundTemplate } from './InputLinePlayground.template';
import { InputLineWithMaskTemplate } from './InputLineWithMask.template';
import { InputLineWithTmpValueTemplate } from './InputLineWithTmpValue.template';

// Imports of text sources
import InputLinePlaygroundRaw from './InputLinePlayground.template?raw';
import InputLineWithMaskRaw from './InputLineWithMask.template?raw';
import InputLineWithTmpValueRaw from './InputLineWithTmpValue.template?raw';

export default {
  title: 'Admiral-2.1/FocusBox/InputLine',
  component: InputLine,
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
    value: {
      control: { type: 'text' },
    },
    prefix: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof InputLine>;

//<editor-fold desc="InputLine">
const InputLinePlaygroundStory: StoryFn<typeof InputLine> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <InputLinePlaygroundTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const InputLinePlayground = {
  render: InputLinePlaygroundStory,

  parameters: {
    docs: {
      source: {
        code: InputLinePlaygroundRaw,
      },
    },
  },

  name: 'InputLine',
};

//</editor-fold>

// <editor-fold desc="InputLine с маской">
const InputLineWithMaskStory: StoryFn<typeof InputLine> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <InputLineWithMaskTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const InputLineWithMask = {
  render: InputLineWithMaskStory,

  parameters: {
    docs: {
      source: {
        code: InputLineWithMaskRaw,
      },
    },
  },

  name: 'InputLine с маской',
};

//</editor-fold>

// <editor-fold desc="InputLine с tmpValue">
const InputLineWithTmpValueStory: StoryFn<typeof InputLine> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <InputLineWithTmpValueTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const InputLineWithTmpValue = {
  render: InputLineWithTmpValueStory,

  parameters: {
    docs: {
      source: {
        code: InputLineWithTmpValueRaw,
      },
    },
  },

  name: 'InputLine с tmpValue',
};

//</editor-fold>
