import * as React from 'react';
import type { Meta, StoryFn } from '@storybook/react';
import { useGlobals } from '@storybook/preview-api';
import { Field, ALL_BORDER_RADIUS_VALUES } from '@admiral-ds/react-ui';

import { FieldWithTextInputTemplate } from './FieldWithTextInput.template';

// Imports of text sources
import FieldWithTextInputRaw from './FieldWithTextInput.template?raw';

export default {
  title: 'Admiral-2.1/Atoms/Field',
  component: Field,
  parameters: {
    docs: {
      source: {
        code: null,
      },
    },
  },
  decorators: undefined,
  argTypes: {
    required: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    displayInline: {
      control: { type: 'boolean' },
    },
    displayCharacterCounter: {
      control: { type: 'boolean' },
    },
    extraText: {
      control: { type: 'text' },
    },
    themeBorderKind: {
      options: ALL_BORDER_RADIUS_VALUES,
      control: { type: 'radio' },
    },
    theme: {
      control: false,
    },
    ref: {
      control: false,
    },
    skeleton: {
      control: { type: 'boolean' },
    },
  },
} as Meta<typeof Field>;

//<editor-fold desc="Пример обертывания компонента TextInput">
const FieldWithTextInputStory: StoryFn<typeof Field> = (props) => {
  const [{ CSSCustomProps }] = useGlobals();
  return <FieldWithTextInputTemplate {...props} CSSCustomProps={CSSCustomProps} />;
};

export const FieldWithTextInput = {
  render: FieldWithTextInputStory,

  parameters: {
    docs: {
      source: {
        code: FieldWithTextInputRaw,
      },
    },
  },

  name: 'Пример обертывания компонента TextInput',
};
