import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { INPUT_DIMENSIONS_VALUES, INPUT_STATUS_VALUES, ALL_BORDER_RADIUS_VALUES, InputBox } from '@admiral-ds/react-ui';

import { InputBoxSimpleTemplate } from './InputBoxSimple.template';
import { InputBoxSkeletonTemplate } from './InputBoxSkeleton.template';
import { InputBoxDisabledTemplate } from './InputBoxDisabled.template';
import { InputBoxReadOnlyTemplate } from './InputBoxReadOnly.template';
import { InputBoxStatusTemplate } from './InputBoxStatus.template';
import { InputBoxWithMaskTemplate } from './InputBoxWithMask.template';
import { InputBoxWithTmpValueTemplate } from './InputBoxWithTmpValue.template';

// Imports of text sources
import InputBoxSimpleRaw from './InputBoxSimple.template?raw';
import InputBoxSkeletonRaw from './InputBoxSkeleton.template?raw';
import InputBoxDisabledRaw from './InputBoxDisabled.template?raw';
import InputBoxReadOnlyRaw from './InputBoxReadOnly.template?raw';
import InputBoxStatusRaw from './InputBoxStatus.template?raw';
import InputBoxWithMaskRaw from './InputBoxWithMask.template?raw';
import InputBoxWithTmpValueRaw from './InputBoxWithTmpValue.template?raw';

export default {
  title: 'Admiral-2.1/FocusBox/InputBox',
  component: InputBox,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
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
} as Meta<typeof InputBox>;

//<editor-fold desc="InputBox">
const InputBoxSimpleStory: StoryFn<typeof InputBox> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <InputBoxSimpleTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const InputBoxSimple = {
  render: InputBoxSimpleStory,

  parameters: {
    docs: {
      source: {
        code: InputBoxSimpleRaw,
      },
    },
  },

  name: 'InputBox',
};

//</editor-fold>

//<editor-fold desc="InputBox скелетон">

const InputBoxSkeletonStory: StoryFn<typeof InputBox> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <InputBoxSkeletonTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const InputBoxSkeleton = {
  render: InputBoxSkeletonStory,

  parameters: {
    docs: {
      source: {
        code: InputBoxSkeletonRaw,
      },
    },
  },

  name: 'InputBox скелетон',
};

//</editor-fold>

//<editor-fold desc="InputBox disabled">
const InputBoxDisabledStory: StoryFn<typeof InputBox> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <InputBoxDisabledTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const InputBoxDisabled = {
  render: InputBoxDisabledStory,

  parameters: {
    docs: {
      source: {
        code: InputBoxDisabledRaw,
      },
    },
  },

  name: 'InputBox disabled',
};

//</editor-fold>

//<editor-fold desc="InputBox readOnly">
const InputBoxReadOnlyStory: StoryFn<typeof InputBox> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <InputBoxReadOnlyTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const InputBoxReadOnly = {
  render: InputBoxReadOnlyStory,

  parameters: {
    docs: {
      source: {
        code: InputBoxReadOnlyRaw,
      },
    },
  },

  name: 'InputBox readOnly',
};

//</editor-fold>

//<editor-fold desc="InputBox status">
const InputBoxStatusStory: StoryFn<typeof InputBox> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <InputBoxStatusTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const InputBoxStatus = {
  render: InputBoxStatusStory,

  parameters: {
    docs: {
      source: {
        code: InputBoxStatusRaw,
      },
    },
  },

  name: 'InputBox status',
};

//</editor-fold>

// <editor-fold desc="InputBox с маской">
const InputBoxWithMaskStory: StoryFn<typeof InputBox> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <InputBoxWithMaskTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const InputBoxWithMask = {
  render: InputBoxWithMaskStory,

  parameters: {
    docs: {
      source: {
        code: InputBoxWithMaskRaw,
      },
    },
  },

  name: 'InputBox с маской',
};

//</editor-fold>

// <editor-fold desc="InputBox с tmpValue">
const InputBoxWithTmpValueStory: StoryFn<typeof InputBox> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <InputBoxWithTmpValueTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const InputBoxWithTmpValue = {
  render: InputBoxWithTmpValueStory,

  parameters: {
    docs: {
      source: {
        code: InputBoxWithTmpValueRaw,
      },
    },
  },

  name: 'InputBox с tmpValue',
};

//</editor-fold>
